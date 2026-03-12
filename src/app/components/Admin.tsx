import React, { useState, useEffect } from "react";
import { projectId, publicAnonKey } from "../../../utils/supabase/info";
import { useDynamicImage } from "./ImageManager";

interface ImageFile {
  fileName: string;
  url: string;
  created_at: string;
}

export function Admin() {
  const [images, setImages] = useState<ImageFile[]>([]);
  const [assignments, setAssignments] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const { refresh } = useDynamicImage();

  const [newSlotKey, setNewSlotKey] = useState("");
  const [selectedImage, setSelectedImage] = useState("");

  const fetchState = async () => {
    try {
      const [imgRes, assignRes] = await Promise.all([
        fetch(`https://${projectId}.supabase.co/functions/v1/make-server-d0dae629/images`, {
          headers: { 'Authorization': `Bearer ${publicAnonKey}` }
        }),
        fetch(`https://${projectId}.supabase.co/functions/v1/make-server-d0dae629/settings/images`, {
          headers: { 'Authorization': `Bearer ${publicAnonKey}` }
        })
      ]);
      
      if (imgRes.ok) {
        const imgData = await imgRes.json();
        setImages(imgData.images || []);
      }
      
      if (assignRes.ok) {
        const assignData = await assignRes.json();
        setAssignments(assignData.assignments || {});
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchState();
  }, []);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-d0dae629/upload`, {
        method: "POST",
        headers: { 'Authorization': `Bearer ${publicAnonKey}` },
        body: formData,
      });
      if (res.ok) {
        await fetchState();
      }
    } catch (err) {
      console.error("Upload failed", err);
    } finally {
      setUploading(false);
    }
  };

  const handleAssign = async (slot: string, fileName: string) => {
    try {
      const res = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-d0dae629/settings/images`, {
        method: "POST",
        headers: { 
          'Authorization': `Bearer ${publicAnonKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ slot, fileName }),
      });
      if (res.ok) {
        await fetchState();
        refresh(); // update global context
      }
    } catch (err) {
      console.error("Assign failed", err);
    }
  };

  const handleDelete = async (fileName: string) => {
    if (!window.confirm("Are you sure?")) return;
    try {
      const res = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-d0dae629/images/${fileName}`, {
        method: "DELETE",
        headers: { 'Authorization': `Bearer ${publicAnonKey}` },
      });
      if (res.ok) {
        await fetchState();
        refresh();
      }
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  if (loading) return <div className="min-h-screen bg-black text-white p-8">Loading...</div>;

  return (
    <div className="min-h-screen bg-black text-white p-8 md:p-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 uppercase">
          Image <span className="text-gray-500">Dashboard</span>
        </h1>
        
        <p className="text-gray-400 mb-8 max-w-2xl">
          Upload images from your PC, then assign them to specific sections of your website (e.g. "mtech-hero", "work-aether-cover"). The changes will reflect immediately.
        </p>

        {/* Upload Section */}
        <div className="border border-white/20 p-8 flex flex-col items-center justify-center mb-12 bg-white/5">
          <input
            type="file"
            id="file-upload"
            accept="image/*"
            className="hidden"
            onChange={handleFileUpload}
            disabled={uploading}
          />
          <label
            htmlFor="file-upload"
            className={`cursor-pointer bg-white text-black px-8 py-4 font-bold tracking-widest uppercase text-sm ${uploading ? 'opacity-50' : 'hover:bg-gray-200 transition-colors'}`}
          >
            {uploading ? "Uploading..." : "Upload New Image"}
          </label>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Media Library */}
          <div>
            <h2 className="text-2xl font-bold mb-6 uppercase tracking-wider">Media <span className="text-gray-500">Library</span></h2>
            {images.length === 0 ? (
              <p className="text-gray-500">No images uploaded yet.</p>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {images.map((img) => (
                  <div key={img.fileName} className="relative group overflow-hidden bg-zinc-900 aspect-square">
                    <img src={img.url} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4">
                      <p className="text-xs text-center break-all mb-2">{img.fileName}</p>
                      <button 
                        onClick={() => handleDelete(img.fileName)}
                        className="text-xs text-red-500 border border-red-500 px-3 py-1 hover:bg-red-500 hover:text-white"
                      >
                        DELETE
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Assignments */}
          <div>
            <h2 className="text-2xl font-bold mb-6 uppercase tracking-wider">Site <span className="text-gray-500">Assignments</span></h2>
            
            <div className="bg-zinc-900 border border-white/10 p-6 mb-6">
              <h3 className="text-sm font-bold mb-4 tracking-widest text-gray-400">ASSIGN IMAGE TO SLOT</h3>
              <div className="flex flex-col gap-4">
                <input 
                  type="text" 
                  placeholder="e.g. mtech-hero, work-pulse-cover" 
                  value={newSlotKey}
                  onChange={e => setNewSlotKey(e.target.value)}
                  className="bg-black border border-white/20 px-4 py-2 text-white"
                />
                <select 
                  value={selectedImage}
                  onChange={e => setSelectedImage(e.target.value)}
                  className="bg-black border border-white/20 px-4 py-2 text-white"
                >
                  <option value="">-- Select an Image --</option>
                  {images.map(img => (
                    <option key={img.fileName} value={img.fileName}>{img.fileName}</option>
                  ))}
                </select>
                <button 
                  onClick={() => handleAssign(newSlotKey, selectedImage)}
                  disabled={!newSlotKey || !selectedImage}
                  className="bg-white text-black font-bold py-2 disabled:opacity-50"
                >
                  ASSIGN
                </button>
              </div>
            </div>

            <div className="space-y-2">
              {Object.entries(assignments).map(([slot, fileName]) => {
                const img = images.find(i => i.fileName === fileName);
                return (
                  <div key={slot} className="flex items-center justify-between border border-white/10 p-4 bg-zinc-900/50">
                    <div className="flex items-center gap-4">
                      {img ? (
                        <img src={img.url} className="w-12 h-12 object-cover" />
                      ) : (
                        <div className="w-12 h-12 bg-zinc-800" />
                      )}
                      <div>
                        <p className="font-bold tracking-wider text-sm">{slot}</p>
                        <p className="text-xs text-gray-500">{fileName}</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => handleAssign(slot, "")}
                      className="text-xs text-gray-500 hover:text-white"
                    >
                      UNASSIGN
                    </button>
                  </div>
                );
              })}
              {Object.keys(assignments).length === 0 && (
                <p className="text-gray-500 text-sm">No assignments yet.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
