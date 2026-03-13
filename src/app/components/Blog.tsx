import { useState } from "react";
import { Link } from "react-router";
import { DynamicImage } from "./DynamicImage";
const BLOG_POSTS = [
  {
    slug: "unseen-currents-how-media-and-ai-shape-us-before-we-notice",
    date: "2026.1.4",
    title: "Unseen Currents: How Media and AI Shape Us Before We Notice",
    number: "01",
    image: "https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2glMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc3MzIxMjAyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    slug: "between-nothing-and-forever",
    date: "2026.1.16",
    title: "Between Nothing and Forever",
    number: "02",
    image: "https://images.unsplash.com/photo-1602128110234-2d11c0aaadfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3MzE0MjM4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export { BLOG_POSTS };

export function Blog() {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);
  const hoveredPost = BLOG_POSTS.find((p) => p.slug === hoveredSlug);

  return (
    <div className="flex-1 flex flex-col bg-[#FFFFFF] px-5 md:px-16 lg:px-12 pb-20 m-[0px]">
      {/* Top area: Title + Table */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
        {/* Left: Blog title */}
        <div className="md:col-span-3">
          <div className="flex items-start gap-1">
            <h1
              className="text-[#1a1a1a]"
              style={{
                fontSize: "clamp(40px, 6vw, 80px)",
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-2px",
              }}
            >
              Blog
            </h1>
            <span
              className="text-[#1a1a1a] mt-1"
              style={{ fontSize: "13px", fontWeight: 500 }}
            >
              ({BLOG_POSTS.length})
            </span>
          </div>
        </div>

        {/* Right: Table */}
        <div className="md:col-span-9 mt-8 md:mt-2">
          {/* Table header */}
          <div
            className="grid grid-cols-12 border-b border-[#e5e5e5] pb-2"
            style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.05em" }}
          >
            <div className="col-span-3 uppercase text-[#000000] text-[14px]">DATE</div>
            <div className="col-span-9 uppercase text-[#000000] text-[14px]">NAME</div>
          </div>

          {/* Table rows */}
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="grid grid-cols-12 border-b border-[#e5e5e5] py-4 md:py-6 group transition-all duration-300"
              style={{
                backgroundColor:
                  hoveredSlug === post.slug ? "#1a1a1a" : "transparent",
                paddingLeft: hoveredSlug === post.slug ? "16px" : "0px",
                paddingRight: hoveredSlug === post.slug ? "16px" : "0px",
                marginLeft: hoveredSlug === post.slug ? "-16px" : "0px",
                marginRight: hoveredSlug === post.slug ? "-16px" : "0px",
              }}
              onMouseEnter={() => setHoveredSlug(post.slug)}
              onMouseLeave={() => setHoveredSlug(null)}
            >
              <div
                className="col-span-4 md:col-span-3 flex items-center transition-colors duration-300"
                style={{
                  fontSize: "13px",
                  fontWeight: 500,
                  color:
                    hoveredSlug === post.slug ? "#ffffff" : "#a3a3a3",
                }}
              >
                {post.date}
              </div>
              <div
                className="col-span-8 md:col-span-9 flex items-center transition-colors duration-300"
                style={{
                  fontSize: "clamp(14px, 2vw, 24px)",
                  fontWeight: 500,
                  lineHeight: 1.3,
                  color:
                    hoveredSlug === post.slug ? "#ffffff" : "#1a1a1a",
                }}
              >
                {post.title}
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom area: About + Preview card */}
      <div className="mt-10 md:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* About section */}
        <div className="max-w-[520px] lg:col-span-4">
          <p
            className="uppercase tracking-widest mb-4 text-[#000000]"
            style={{ fontSize: "16px", fontWeight: 700, letterSpacing: "0.1em" }}
          >
            ABOUT
          </p>
          <p
            className="text-[#1a1a1a]"
            style={{ fontSize: "13px", fontWeight: 500, lineHeight: 1.65 }}
          >
            Here's where I share my thoughts, insights, and growth. New blog
            article monthly, released towards the end of every month.
          </p>

          {/* Preview card */}
          <div
            className="mt-8 bg-[#1a1a1a] overflow-hidden transition-opacity duration-300 hidden md:block w-full max-w-[260px] aspect-square"
            style={{
              opacity: hoveredPost ? 1 : 0,
            }}
          >
            {hoveredPost && (
              <div className="relative w-full h-full">
                <p
                  className="absolute top-3 left-3 text-[#ffffff] z-10"
                  style={{ fontSize: "22px", fontWeight: 700, lineHeight: 1.1 }}
                >
                  N&deg; {hoveredPost.number}
                </p>
                {hoveredPost.image && (
                  <DynamicImage
                    slotId={`blog-cover-${hoveredPost.id || hoveredPost.slug}`}
                    fallbackSrc={hoveredPost.image}
                    alt={hoveredPost.title}
                    className="w-full h-full object-cover opacity-70"
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}