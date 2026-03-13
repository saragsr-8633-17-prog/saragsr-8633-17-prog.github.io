import { useState } from "react";
import { StarburstIcon } from "./StarburstIcon";

const APPWRITE_CONTACT_URL = (import.meta as any).env?.VITE_APPWRITE_CONTACT_URL as string | undefined;

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setErrorMessage(null);

    try {
      if (!APPWRITE_CONTACT_URL) {
        throw new Error("Missing VITE_APPWRITE_CONTACT_URL");
      }

      const res = await fetch(APPWRITE_CONTACT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        let msg = "Failed to submit message";
        try {
          const data = await res.json();
          if (typeof data?.message === "string") msg = data.message;
        } catch {
          // ignore non-json response
        }
        throw new Error(msg);
      }

      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error(error);
      setErrorMessage(
        error instanceof Error
          ? `Could not send your message: ${error.message}`
          : "Could not send your message. Please try again."
      );
    } finally {
      setSending(false);
    }
  };

  const socials = [
    {
      name: "INSTAGRAM",
      url: "https://www.instagram.com/_itzubby",
      handle: "@_itzubby",
    },
    {
      name: "LINKEDIN",
      url: "https://www.linkedin.com/in/obaid-doman-a4254332b",
      handle: "Obaid Doman",
    },
    {
      name: "GITHUB",
      url: "https://github.com/itzubby",
      handle: "itzubby",
    },
    {
      name: "TELEGRAM",
      url: "https://t.me/itzubby",
      handle: "@itzubby",
    },
  ];

  const inputStyle: React.CSSProperties = {
    fontSize: "13px",
    fontWeight: 500,
    lineHeight: 1.65,
    fontFamily: "'Montserrat', sans-serif",
  };

  const labelStyle: React.CSSProperties = {
    fontSize: "11px",
    fontWeight: 700,
    letterSpacing: "0.12em",
    textTransform: "uppercase" as const,
  };

  return (
    <div className="flex-1 flex flex-col bg-[#FFFFFF] font-['Montserrat',sans-serif]">
      {/* Title Section */}
      <div className="px-5 md:px-16 lg:px-12 mb-10 md:mb-16">
        <div className="flex items-center gap-3 mb-3">
          <StarburstIcon color="black" size={18} />
          <span
            className="text-[#a3a3a3] uppercase"
            style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em" }}
          >
            Get in touch
          </span>
        </div>
        <h1
          className="text-[#1a1a1a] uppercase"
          style={{
            fontSize: "clamp(36px, 6vw, 72px)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            lineHeight: 0.95,
          }}
        >
          CONTACT
        </h1>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-5 md:px-16 lg:px-12">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24">
          {/* Left - Form */}
          <div>
            <h3
              className="text-[#a3a3a3] uppercase tracking-widest mb-8"
              style={{ fontSize: "16px", fontWeight: 700, letterSpacing: "0.1em" }}
            >
              SEND A MESSAGE
            </h3>

            {submitted ? (
              <div className="border border-[#1a1a1a] p-8 flex flex-col items-center justify-center gap-4">
                <StarburstIcon color="black" size={32} rotate />
                <p
                  className="text-[#1a1a1a] text-center"
                  style={{ fontSize: "14px", fontWeight: 600 }}
                >
                  Message received. I'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-[#a3a3a3] mb-2" style={labelStyle}>
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-[#1a1a1a] pb-2 text-[#1a1a1a] outline-none focus:border-[#000] transition-colors duration-300 placeholder:text-[#c0c0c0]"
                    style={inputStyle}
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-[#a3a3a3] mb-2" style={labelStyle}>
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-[#1a1a1a] pb-2 text-[#1a1a1a] outline-none focus:border-[#000] transition-colors duration-300 placeholder:text-[#c0c0c0]"
                    style={inputStyle}
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-[#a3a3a3] mb-2" style={labelStyle}>
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-[#1a1a1a] pb-2 text-[#1a1a1a] outline-none focus:border-[#000] transition-colors duration-300 placeholder:text-[#c0c0c0]"
                    style={inputStyle}
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label className="block text-[#a3a3a3] mb-2" style={labelStyle}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-transparent border-b border-[#1a1a1a] pb-2 text-[#1a1a1a] outline-none focus:border-[#000] transition-colors duration-300 resize-none placeholder:text-[#c0c0c0]"
                    style={inputStyle}
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="group cursor-pointer border border-[#1a1a1a] bg-transparent hover:bg-[#1a1a1a] px-8 py-3 transition-all duration-300 flex items-center gap-3"
                >
                  <span
                    className="text-[#1a1a1a] group-hover:text-[#ffffff] uppercase transition-colors duration-300"
                    style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em" }}
                  >
                    {sending ? "Sending..." : "Send Message"}
                  </span>
                  <svg
                    className="text-[#1a1a1a] group-hover:text-[#ffffff] transition-colors duration-300"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </button>

                {errorMessage && (
                  <p
                    className="text-[#b91c1c]"
                    style={{ fontSize: "12px", fontWeight: 600 }}
                  >
                    {errorMessage}
                  </p>
                )}
              </form>
            )}
          </div>

          {/* Right - Info & Socials */}
          <div>
            <h3
              className="text-[#a3a3a3] uppercase tracking-widest mb-8"
              style={{ fontSize: "16px", fontWeight: 700, letterSpacing: "0.1em" }}
            >
              CONNECT
            </h3>

            <div className="space-y-6 mb-12">
              <p
                className="text-[#1a1a1a]"
                style={{ fontSize: "13px", fontWeight: 500, lineHeight: 1.65 }}
              >
                Looking for full-time opportunities in UI/UX design and motion. Open to
                freelance projects, collaborations, and interesting conversations.
              </p>
              <div>
                <span
                  className="text-[#a3a3a3] block mb-1"
                  style={labelStyle}
                >
                  Email
                </span>
                <a
                  href="mailto:obaiddoman@icloud.com"
                  className="text-[#1a1a1a] underline hover:text-[#000] transition-colors duration-300"
                  style={{ fontSize: "13px", fontWeight: 500 }}
                >
                  obaiddoman@icloud.com
                </a>
              </div>
              <div>
                <span
                  className="text-[#a3a3a3] block mb-1"
                  style={labelStyle}
                >
                  Location
                </span>
                <p
                  className="text-[#1a1a1a]"
                  style={{ fontSize: "13px", fontWeight: 500 }}
                >
                  Addis Ababa, Ethiopia
                </p>
              </div>
            </div>

            {/* Social Links */}
            <h3
              className="text-[#a3a3a3] uppercase tracking-widest mb-6"
              style={{ fontSize: "16px", fontWeight: 700, letterSpacing: "0.1em" }}
            >
              SOCIALS
            </h3>
            <div className="space-y-0 border-t border-[#e5e5e5]">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between py-4 border-b border-[#e5e5e5] transition-all duration-300 group"
                  style={{
                    backgroundColor:
                      hoveredSocial === social.name ? "#1a1a1a" : "transparent",
                    paddingLeft: hoveredSocial === social.name ? "12px" : "0px",
                    paddingRight: hoveredSocial === social.name ? "12px" : "0px",
                  }}
                  onMouseEnter={() => setHoveredSocial(social.name)}
                  onMouseLeave={() => setHoveredSocial(null)}
                >
                  <span
                    className="uppercase transition-colors duration-300"
                    style={{
                      fontSize: "12px",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      color:
                        hoveredSocial === social.name ? "#ffffff" : "#1a1a1a",
                    }}
                  >
                    {social.name}
                  </span>
                  <span
                    className="transition-colors duration-300"
                    style={{
                      fontSize: "12px",
                      fontWeight: 500,
                      color:
                        hoveredSocial === social.name ? "#a3a3a3" : "#a3a3a3",
                    }}
                  >
                    {social.handle}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16 mb-8 px-5 md:px-16 lg:px-12 flex items-center justify-between">
        <span
          className="text-[#a3a3a3]"
          style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.05em" }}
        >
          OBAID SALEM &copy; 2026
        </span>
        <div className="flex items-center gap-1">
          <StarburstIcon color="black" size={14} />
        </div>
      </div>
    </div>
  );
}
