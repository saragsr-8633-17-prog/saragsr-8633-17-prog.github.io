import { DynamicImage } from "./DynamicImage";
import { useState } from "react";
import { Link } from "react-router";

const PROJECTS = [
  {
    id: "01",
    title: "Selam Tesfaye – Personal Brand Website",
    slug: "selam-tesfaye-personal-brand-website",
    category: "UI/UX DESIGN",
    year: "2025",
    description:
      "A personal brand website for Selam Tesfaye, designed and developed for ISIIPE with a focus on accessibility, clear navigation, and a refined digital presence.",
    tags: ["PERSONAL BRAND", "WEB DESIGN", "CLIENT"],
    image: "/images/selam1/Home.jpg",
  },
  {
    id: "02",
    title: "PSI-LAB",
    slug: "psi-lab",
    category: "BRANDING",
    year: "2025",
    description:
      "A modern graphic design and branding project for PSI-LAB. Focused on clean layouts, intuitive reading paths, and a polished client-facing visual experience.",
    tags: ["BRANDING", "IDENTITY", "CLIENT"],
    image: "/images/psi-lab-cover.jpeg",
  },
  {
    id: "03",
    title: "VSTU",
    slug: "vstu",
    category: "UI/UX DESIGN",
    year: "2024",
    description:
      "UI/UX design for the VSTU educational mobile app, developed under Weyra Tech in partnership with Ethio-Telecom. The focus was on creating a clean, intuitive interface to improve information flow and student access across the platform.",
    tags: ["MOBILE APP", "UI/UX", "EDTECH"],
    image: "/images/vstu/vstu-cover.png",
  },
  {
    id: "04",
    title: "Prestige Addis V1",
    slug: "prestige-addis-v1",
    category: "UI/UX DESIGN",
    year: "2024",
    description:
      "UI/UX exploration for Prestige Addis V1 focused on a modern interface system, stronger visual hierarchy, and clear interaction flow.",
    tags: ["UI/UX", "WEB DESIGN", "CONCEPT"],
    image: "/images/prestige%20v1/prestige-cover.png",
  },
  {
    id: "05",
    title: "Dawit Tsige – Personal Brand Website",
    slug: "dawit-tsige-personal-brand-website",
    category: "UI/UX DESIGN",
    year: "2025",
    description:
      "A personal brand website designed and developed for Dawit Tsige, focused on strong storytelling, a clear content hierarchy, and a polished digital identity.",
    tags: ["PERSONAL BRAND", "WEB DESIGN", "CLIENT"],
    image: "/images/DAWIT/DAWIT-COVER.png",
  },
  {
    id: "06",
    title: "Prestige Addis Editorial",
    slug: "prestige-addis-editorial",
    category: "BRANDING",
    year: "2024",
    description:
      "An editorial design project for Prestige Addis focused on bold typographic rhythm, clean grid systems, and image-led storytelling.",
    tags: ["EDITORIAL", "BRANDING", "CLIENT"],
    image: "/images/MAGAZINE/magazine-cover.jpg",
  },
];

export function Work() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<string>("ALL");

  const filters = ["ALL", "UI/UX DESIGN", "WEB DEVELOPMENT", "BRANDING", "2D ANIMATION"];

  const filteredProjects =
    selectedFilter === "ALL"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedFilter);

  return (
    <div className="flex-1 flex flex-col bg-[#FFFFFF] font-['Montserrat',sans-serif] px-5 md:px-16 lg:px-12 pb-20">
      {/* Header Section */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-0 mb-16">
        {/* Left: Title */}
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
              Work
            </h1>
            <span
              className="text-[#1a1a1a] mt-1"
              style={{ fontSize: "13px", fontWeight: 500 }}
            >
              ({filteredProjects.length})
            </span>
          </div>
        </div>

        {/* Right: Filters + Description */}
        <div className="md:col-span-9 mt-8 md:mt-2">
          <p
            className="text-[#1a1a1a] mb-8 max-w-[500px]"
            style={{ fontSize: "13px", fontWeight: 500, lineHeight: 1.65 }}
          >
            Selected projects spanning UI/UX design, web development, branding,
            and 2D animation. Each project represents a commitment to craft,
            clarity, and creative problem-solving.
          </p>

          {/* Filter pills */}
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className="cursor-pointer transition-all duration-300"
                style={{
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  padding: "6px 14px",
                  border:
                    selectedFilter === filter
                      ? "1.5px solid #1a1a1a"
                      : "1.5px solid #d4d4d4",
                  backgroundColor:
                    selectedFilter === filter ? "#1a1a1a" : "transparent",
                  color: selectedFilter === filter ? "#ffffff" : "#1a1a1a",
                }}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
        {filteredProjects.map((project) => (
          <Link
            key={project.id}
            to={`/work/${project.slug}`}
            className="group block no-underline"
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Image */}
            <div className="relative overflow-hidden mb-5 aspect-[4/3] bg-[#f0f0f0]">
              <DynamicImage
                slotId={`work-${project.slug}-cover`}
                fallbackSrc={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500"
              />
            </div>

            {/* Info */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-baseline gap-3">
                <span
                  className="text-[#b0b0b0]"
                  style={{ fontSize: "11px", fontWeight: 600 }}
                >
                  {project.id}
                </span>
                <h3
                  className="text-[#1a1a1a]"
                  style={{
                    fontSize: "18px",
                    fontWeight: 700,
                    letterSpacing: "-0.5px",
                  }}
                >
                  {project.title}
                </h3>
              </div>
              <span
                className="text-[#999]"
                style={{ fontSize: "11px", fontWeight: 600 }}
              >
                {project.year}
              </span>
            </div>

            <p
              className="text-[#666] mb-4 max-w-[420px]"
              style={{ fontSize: "12px", fontWeight: 500, lineHeight: 1.6 }}
            >
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[#1a1a1a] border border-[#e0e0e0]"
                  style={{
                    fontSize: "9px",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    padding: "4px 10px",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}