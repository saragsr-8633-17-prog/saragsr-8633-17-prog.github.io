import { useParams, Link } from "react-router";
import { DynamicImage } from "./DynamicImage";
import { MtechHero } from "./MtechHero";

const image_d8324035aea49e978f32e461ee7c6147c00a22a1 = "https://images.unsplash.com/photo-1740721455292-e5cd29544381?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwZGFyayUyMFVJJTIwZGVzaWduJTIwbW9ja3VwJTIwbGFwdG9wJTIwc2NyZWVufGVufDF8fHx8MTc3MzI3MDc5NXww&ixlib=rb-4.1.0&q=80&w=1080";

// ---------- project data ----------

interface ProjectData {
  title: string;
  subtitle: string;
  category: string[];
  year: string;
  type: string;
  description: string;
  heroComponent?: React.ReactNode;
  heroImage?: string;
  galleryImages: string[];
  nextProject: { title: string; slug: string } | null;
}

const PROJECTS: Record<string, ProjectData> = {
  "psi-lab": {
    title: "PSI-LAB",
    subtitle: "Public Sector Innovation Lab",
    category: ["BRANDING", "PRINT"],
    year: "2026",
    type: "BRANDING",
    description: "Brand identity and informational brochures for the Public Sector Innovation Lab (PSI-Lab), exploring system thinking and new collaborative paradigms.",
    heroImage: "/images/psi-lab-cover.png",
    galleryImages: [
      "/images/psi-lab-1.png",
      "/images/psi-lab-2.png",
      "/images/psi-lab-3.png",
      "/images/psi-lab-4.png",
      "/images/psi-lab-5.png"
    ],
    nextProject: { title: "ISIIPE", slug: "isiipe" },
  },
  mtech: {
    title: "ISIIPE",
    subtitle: "Digital Presence for Community",
    category: ["WEB DEVELOPMENT", "VOLUNTEER"],
    year: "2025",
    type: "VOLUNTEER WORK",
    description:
      "MTECH required a comprehensive digital overhaul to better serve their community. The UI/UX approach centered on building an elegant, highly accessible platform that prioritizes clear navigation and seamless user engagement. The result is a modern digital presence that lets the community and its mission take center stage.",
    heroComponent: undefined, // uses MtechHero
    galleryImages: ["/images/isiipe-home.png", "/images/isiipe-biography.png", "/images/isiipe-gallery.png", "/images/isiipe-contact.png"],
    nextProject: { title: "ISIIPE", slug: "isiipe" },
  },
  isiipe: {
    title: "ISIIPE",
    subtitle: "A Refined Digital Identity",
    category: ["UI/UX DESIGN", "CLIENT WORK"],
    year: "2025",
    type: "CLIENT WORK",
    description:
      "isiipe required a tailored personal website design for Selam Tesfaye to elevate her digital footprint. The UI/UX approach centered on building an elegant, highly accessible platform that prioritizes clear navigation and seamless user engagement. The result is a timeless digital presence that lets her work and personality take center stage.",
    heroImage: undefined,
    galleryImages: ["/images/isiipe-home.png", "/images/isiipe-biography.png", "/images/isiipe-gallery.png", "/images/isiipe-contact.png"],
    nextProject: { title: "AETHER UI", slug: "aether-ui" },
  },
  "aether-ui": {
    title: "AETHER UI",
    subtitle: "Wellness Through Design",
    category: ["UI/UX DESIGN", "MOBILE"],
    year: "2026",
    type: "CONCEPT",
    description:
      "A comprehensive design system and mobile application for a wellness platform. Focused on minimal interaction patterns and fluid motion design, the project explores how digital tools can promote calm and intentional living.",
    heroImage: "https://images.unsplash.com/photo-1704018731115-cdec06f3f067?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwbWluaW1hbCUyMFVJJTIwZGVzaWduJTIwbW9ja3VwfGVufDF8fHx8MTc3MzE0ODQ3MHww&ixlib=rb-4.1.0&q=80&w=1080",
    galleryImages: [],
    nextProject: { title: "PULSE", slug: "pulse" },
  },
  pulse: {
    title: "PULSE",
    subtitle: "Realtime Creative Dashboards",
    category: ["WEB DEVELOPMENT", "ANIMATION"],
    year: "2025",
    type: "CLIENT WORK",
    description:
      "A real-time dashboard interface for monitoring creative workflows. Built with React and animated with custom motion sequences, Pulse turns data into a visual narrative that keeps teams aligned.",
    heroImage: "https://images.unsplash.com/photo-1713857297379-6fc26e70f581?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMHdoaXRlJTIwbW9iaWxlJTIwYXBwJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3MzE0ODQ3MXww&ixlib=rb-4.1.0&q=80&w=1080",
    galleryImages: [],
    nextProject: { title: "FORMA IDENTITY", slug: "forma-identity" },
  },
  "forma-identity": {
    title: "FORMA IDENTITY",
    subtitle: "Architecture Meets Typography",
    category: ["BRANDING", "IDENTITY"],
    year: "2025",
    type: "CLIENT WORK",
    description:
      "Brand identity system for a contemporary architecture studio. Typographic exploration meets spatial design principles, resulting in a visual language that bridges the physical and digital.",
    heroImage: "https://images.unsplash.com/photo-1727755868081-c25d2b427ce3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwYnJhbmRpbmclMjBpZGVudGl0eSUyMGRlc2lnbnxlbnwxfHx8fDE3NzMwNjg5NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    galleryImages: [],
    nextProject: { title: "DRIFT", slug: "drift" },
  },
  drift: {
    title: "DRIFT",
    subtitle: "Displacement and Belonging",
    category: ["2D ANIMATION", "STORYTELLING"],
    year: "2025",
    type: "PERSONAL",
    description:
      "A short animated film exploring themes of displacement and belonging. Hand-drawn frames composited with digital environments create a dreamlike meditation on what it means to find home.",
    heroImage: "https://images.unsplash.com/photo-1649000808933-1f4aac7cad9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwd2Vic2l0ZSUyMGRlc2lnbiUyMHR5cG9ncmFwaHl8ZW58MXx8fHwxNzczMTQ4NDcyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    galleryImages: [],
    nextProject: { title: "VOID", slug: "void" },
  },
  void: {
    title: "VOID",
    subtitle: "Negative Space as Narrative",
    category: ["UI/UX DESIGN", "DARK MODE"],
    year: "2024",
    type: "CONCEPT",
    description:
      "Dark-themed portfolio template designed for photographers and visual artists. Emphasis on negative space and content hierarchy creates an immersive viewing experience that foregrounds the work itself.",
    heroImage: "https://images.unsplash.com/photo-1688141585146-1fb4a1358c87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdlb21ldHJpYyUyMGRhcmslMjBhcnR3b3JrfGVufDF8fHx8MTc3MzE0ODQ3NXww&ixlib=rb-4.1.0&q=80&w=1080",
    galleryImages: [],
    nextProject: { title: "PSI-LAB", slug: "psi-lab" },
  },
};

// Get all project slugs for cycling
const PROJECT_SLUGS = Object.keys(PROJECTS);

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? PROJECTS[slug] : undefined;

  if (!project) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center bg-[#ffffff] font-['Montserrat',sans-serif]">
        <div className="text-center">
          <h1 className="text-[8vw] font-black text-[#1A1A1A] tracking-tighter leading-none mb-6">
            404
          </h1>
          <p className="text-[#666] text-sm font-semibold uppercase tracking-widest mb-8">
            Project not found
          </p>
          <Link
            to="/work"
            className="text-[#1A1A1A] text-xs font-bold uppercase tracking-widest border-b-2 border-[#1A1A1A] pb-1 hover:opacity-70 transition-opacity"
          >
            Back to Work
          </Link>
        </div>
      </div>
    );
  }

  const isIsiipe = slug === "isiipe";
  const hasGallery = project.galleryImages.length > 0;

  return (
    <div className="w-full bg-[#ffffff] min-h-screen font-['Montserrat',sans-serif]">
      {/* 1. The Sticky Hero Title (Background) */}
      <div className="sticky top-32 z-0 w-full flex justify-center pb-32">
        <h1 className="text-[12vw] leading-none tracking-tighter font-black text-[#1A1A1A] text-[200px]">
          {project.title}
        </h1>
      </div>

      {/* 2. The Main Content Wrapper (Foreground Curtain) */}
      <div className="relative z-10 bg-white w-full min-h-screen pt-8 pb-32 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">

        {/* 3. Hero Image Block */}
        <div className="w-full flex justify-center bg-[#d9d9d9] px-[0px] py-[30px]">
          {isIsiipe ? (
            <MtechHero />
          ) : project.heroImage ? (
            <div className="w-[95%] mx-auto max-w-[1400px] aspect-video md:aspect-[21/9] relative overflow-hidden border-2 border-[#D9D9D9]">
              <DynamicImage
                slotId={`project-${slug}-hero`}
                fallbackSrc={project.heroImage}
                alt={`${project.title} hero`}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="relative overflow-hidden">
              <img
                src={image_d8324035aea49e978f32e461ee7c6147c00a22a1}
                alt="Hero image"
                className="block mx-[80px] my-[0px]"
              />
            </div>
          )}
        </div>

        {/* 4. Project Info Grid (Bordered) */}
        <div className="border-t border-gray-200 mt-12 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 px-8 md:px-16">

            {/* Left Column */}
            <div className="col-span-1 md:col-span-4 flex flex-col justify-between min-h-[250px] md:min-h-[300px]">
              <div className="flex flex-col gap-1 text-[10px] md:text-xs text-gray-500 font-bold uppercase tracking-widest">
                {project.category.map((cat) => (
                  <span key={cat}>{cat}</span>
                ))}
              </div>
              <div className="mt-12 md:mt-auto text-3xl md:text-4xl lg:text-5xl font-black text-[#1A1A1A] leading-[1.1] tracking-tighter">
                {project.subtitle}
              </div>
            </div>

            {/* Middle Column */}
            <div className="col-span-1 md:col-span-4">
              <div className="text-[10px] md:text-xs text-gray-500 font-bold uppercase tracking-widest">
                {project.year}
              </div>
            </div>

            {/* Right Column */}
            <div className="col-span-1 md:col-span-4 flex flex-col">
              <div className="text-[10px] md:text-xs text-gray-500 font-bold uppercase tracking-widest mb-6">
                {project.type}
              </div>
              <p className="text-base md:text-lg text-[#1A1A1A] font-medium leading-relaxed mb-16 max-w-md">
                <span className="font-bold">{project.title.toLowerCase()}</span>{" "}
                {project.description}
              </p>
              <div>
                <div className="text-[10px] md:text-xs text-gray-500 font-bold uppercase tracking-widest mb-2">
                  Contact
                </div>
                <Link to="/contact">
                  <div className="text-2xl md:text-3xl font-black text-[#1A1A1A] tracking-tighter cursor-pointer hover:opacity-70 transition-opacity w-fit">
                    Let's Collaborate
                  </div>
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* 5. Vertical Image Gallery with Sticky Numbers */}
        {hasGallery && (
          <div className="relative w-full flex justify-between px-4 md:px-16 mt-32">

            {/* Left Side (Sticky Number) */}
            <div className="hidden sm:block w-16 md:w-32 relative">
            </div>

            {/* Center Stack (Images) */}
            <div className="flex flex-col gap-16 w-full max-w-4xl mx-auto z-10">
              {project.galleryImages.map((imgSrc, index) => (
                <div key={index} className="aspect-[16/10] bg-gray-200 w-full overflow-hidden">
                  <DynamicImage
                    slotId={`project-${slug}-gallery-${index + 1}`}
                    fallbackSrc={imgSrc}
                    alt={`${project.title} detail ${index + 1}`}
                    className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-all duration-700"
                  />
                </div>
              ))}
            </div>

            {/* Right Side (Sticky Total) */}
            <div className="hidden sm:block w-16 md:w-32 relative text-right">
            </div>

          </div>
        )}

        {/* 6. Next Project Footer */}
        {project.nextProject && (
          <div className="w-full mt-32 pt-16 flex flex-col items-center justify-center border-t border-gray-100">
            <div className="text-[10px] md:text-xs text-gray-500 font-bold uppercase tracking-widest mb-4">
              (More Projects)
            </div>
            <Link to={`/work/${project.nextProject.slug}`} className="group">
              <h2 className="text-[15vw] leading-none tracking-tighter font-black text-[#1A1A1A] group-hover:text-gray-300 transition-colors duration-500 cursor-pointer">
                {project.nextProject.title}
              </h2>
            </Link>
          </div>
        )}

      </div>
    </div>
  );
}