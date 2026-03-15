import { useParams, Link } from "react-router";
import { DynamicImage } from "./DynamicImage";
import { PsiLabHero } from "./PsiLabHero";

const image_d8324035aea49e978f32e461ee7c6147c00a22a1 = "https://images.unsplash.com/photo-1740721455292-e5cd29544381?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwZGFyayUyMFVJJTIwZGVzaWduJTIwbW9ja3VwJTIwbGFwdG9wJTIwc2NyZWVufGVufDF8fHx8MTc3MzI3MDc5NXww&ixlib=rb-4.1.0&q=80&w=1080";
const psiLabCoverImage = "/images/psi-lab-cover.jpeg";
const psiLabImage1 = "/images/psi-lab-1.jpeg";
const psiLabImage2 = "/images/psi-lab-2.jpeg";
const psiLabImage3 = "/images/psi-lab-3.jpeg";

const isiipeCoverImage = "/images/selam1/Home.jpg";
const isiipeImage1 = "/images/selam1/Bio.jpg";
const isiipeImage2 = "/images/selam1/Gallery.jpg";
const isiipeImage3 = "/images/selam1/Contact.jpg";

const vstuCoverImage = "/images/vstu/vstu-cover.png";
const vstuImage1 = "/images/vstu/vstu-1.png";
const vstuImage2 = "/images/vstu/1.png";
const vstuImage3 = "/images/vstu/2.png";
const vstuImage4 = "/images/vstu/3.png";
const vstuImage5 = "/images/vstu/4.png";

const prestigeCoverImage = "/images/prestige%20v1/prestige-cover.png";
const prestigeImage1 = "/images/prestige%20v1/1.png";
const prestigeImage2 = "/images/prestige%20v1/2.png";
const prestigeImage3 = "/images/prestige%20v1/3.png";
const prestigeImage4 = "/images/prestige%20v1/4.png";
const prestigeImage5 = "/images/prestige%20v1/5.png";
const prestigeImage6 = "/images/prestige%20v1/6.png";

// ---------- project data ----------

interface ProjectData {
  title: string;
  subtitle: string;
  category: string[];
  year: string;
  type: string;
  description: string;
  websiteUrl?: string;
  heroComponent?: React.ReactNode;
  heroImage?: string;
  galleryImages: string[];
  nextProject: { title: string; slug: string } | null;
}

const PROJECTS: Record<string, ProjectData> = {
  "psi-lab-showcase": {
    title: "PSI-LAB",
    subtitle: "Structuring Public Information",
    category: ["BRANDING / IDENTITY", "GRAPHIC DESIGN", "CLIENT WORK"],
    year: "2025",
    type: "CLIENT WORK",
    description:
      ", working under the Ministry of Labor and Skills, needed a straightforward way to share their information. I created this tri-fold brochure to help them do exactly that. Instead of overwhelming the reader with text, I focused on a structured, visually appealing layout that makes the content easy to scan and understand.",
    heroComponent: undefined, // uses PsiLabHero
    galleryImages: [
      psiLabCoverImage,
      psiLabImage1,
      psiLabImage2,
      psiLabImage3,
    ],
    nextProject: { title: "PSI-LAB", slug: "psi-lab" },
  },
  "psi-lab": {
    title: "PSI-LAB",
    subtitle: "Structuring Public Information",
    category: ["BRANDING / IDENTITY", "GRAPHIC DESIGN", "CLIENT WORK"],
    year: "2025",
    type: "CLIENT WORK",
    description:
      ", working under the Ministry of Labor and Skills, needed a straightforward way to share their information. I created this tri-fold brochure to help them do exactly that. Instead of overwhelming the reader with text, I focused on a structured, visually appealing layout that makes the content easy to scan and understand.",
    heroImage: undefined,
    galleryImages: [
      psiLabCoverImage,
      psiLabImage1,
      psiLabImage2,
      psiLabImage3,
    ],
    nextProject: { title: "VSTU", slug: "vstu" },
  },
  isiipe: {
    title: "ISIIPE",
    subtitle: "A Refined Digital Identity",
    category: ["UI/UX DESIGN", "CLIENT WORK"],
    year: "2025",
    type: "CLIENT WORK",
    description:
      "required a tailored personal website design for Selam Tesfaye to elevate her digital footprint. The UI/UX approach centered on building an elegant, highly accessible platform that prioritizes clear navigation and seamless user engagement. The result is a timeless digital presence that lets her work and personality take center stage.",
    heroImage: isiipeCoverImage,
    galleryImages: [
      isiipeCoverImage,
      isiipeImage1,
      isiipeImage2,
      isiipeImage3,
    ],
    nextProject: { title: "PSI-LAB", slug: "psi-lab" },
  },
  vstu: {
    title: "VSTU",
    subtitle: "A Modern EdTech Interface",
    category: ["MOBILE APP", "UI/UX DESIGN"],
    year: "2024",
    type: "CLIENT WORK",
    description:
      "UI/UX design for a modern university mobile app developed under Weyra Tech in partnership with Ethio-Telecom. The interface focuses on clearer navigation, better content hierarchy, and faster access to student-facing resources.",
      websiteUrl: "https://vstu.et/",
      heroImage: vstuCoverImage,
      galleryImages: [
        vstuCoverImage,
        vstuImage1,
        vstuImage2,
        vstuImage3,
        vstuImage4,
        vstuImage5,
      ],
    nextProject: { title: "Prestige addis V1", slug: "prestige-addis-v1" },
  },
  "prestige-addis-v1": {
    title: "Prestige addis V1",
    subtitle: "A polished mobile-first interface",
    category: ["UI/UX DESIGN", "MOBILE APP", "CLIENT WORK"],
    year: "2026",
    type: "CLIENT WORK",
    description:
      "is a UI/UX concept focused on cleaner onboarding, stronger content hierarchy, and a premium visual language across core mobile screens.",
    heroImage: prestigeCoverImage,
    galleryImages: [
      prestigeCoverImage,
      prestigeImage1,
      prestigeImage2,
      prestigeImage3,
      prestigeImage4,
      prestigeImage5,
      prestigeImage6,
    ],
    nextProject: { title: "ISIIPE", slug: "isiipe" },
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

  const isBrandHeroProject = slug === "psi-lab";
  const hasGallery = project.galleryImages.length > 0;

  return (
    <div className="w-full bg-[#ffffff] min-h-screen font-['Montserrat',sans-serif]">
      {/* 1. The Sticky Hero Title (Background) */}
      <div className="sticky top-20 md:top-24 z-0 w-full flex justify-center pb-16 md:pb-32 px-4">
        <h1 className="text-center leading-none tracking-tighter font-black text-[#1A1A1A] text-[clamp(48px,12vw,200px)] break-words">
          {project.title}
        </h1>
      </div>

      {/* 2. The Main Content Wrapper (Foreground Curtain) */}
      <div className="relative z-10 bg-white w-full min-h-screen pt-6 md:pt-8 pb-20 md:pb-32 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">

        {/* 3. Hero Image Block */}
        <div className="w-full flex justify-center bg-[#d9d9d9] px-3 md:px-0 py-4 md:py-8">
          {isBrandHeroProject ? (
            <PsiLabHero />
          ) : project.heroImage ? (
            <div className="w-[95%] mx-auto max-w-[1400px] aspect-video md:aspect-[21/9] relative overflow-hidden border-2 border-[#D9D9D9]">
              <DynamicImage
                slotId={`project-${slug}-hero`}
                fallbackSrc={project.heroImage}
                alt={`${project.title} hero`}
                className={`w-full h-full ${(slug === "isiipe" || slug === "vstu" || slug === "prestige-addis-v1") ? "object-contain" : "object-cover"}`}
              />
            </div>
          ) : (
            <div className="relative overflow-hidden">
              <img
                src={image_d8324035aea49e978f32e461ee7c6147c00a22a1}
                alt="Hero image"
                className="block mx-auto max-w-full h-auto"
              />
            </div>
          )}
        </div>

        {/* 4. Project Info Grid (Bordered) */}
        <div className="border-t border-gray-200 mt-10 md:mt-12 pt-10 md:pt-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 px-5 md:px-16">

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
              {project.websiteUrl && (
                <div className="mb-10">
                  <div className="text-[10px] md:text-xs text-gray-500 font-bold uppercase tracking-widest mb-2">
                    Link
                  </div>
                  <a
                    href={project.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl md:text-3xl font-black text-[#1A1A1A] tracking-tighter cursor-pointer hover:opacity-70 transition-opacity w-fit"
                  >
                    Visit Website
                  </a>
                </div>
              )}
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
          <div className="relative w-full flex justify-between px-4 md:px-16 mt-16 md:mt-32">

            {/* Left Side (Sticky Number) */}
            <div className="hidden sm:block w-16 md:w-32 relative">
            </div>

            {/* Center Stack (Images) */}
            <div className="flex flex-col gap-16 w-full max-w-4xl mx-auto z-10">
              {project.galleryImages.map((imgSrc, index) => (
                <div
                  key={index}
                  className={`${slug === "vstu" || slug === "prestige-addis-v1" ? "" : "aspect-[16/10]"} bg-gray-200 w-full overflow-hidden`}
                >
                  <DynamicImage
                    slotId={`project-${slug}-gallery-${index + 1}`}
                    fallbackSrc={imgSrc}
                    alt={`${project.title} detail ${index + 1}`}
                    className={`${slug === "vstu" || slug === "prestige-addis-v1" ? "w-full h-auto object-contain" : "w-full h-full object-cover"} opacity-90 hover:opacity-100 transition-all duration-700`}
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
          <div className="w-full mt-20 md:mt-32 pt-12 md:pt-16 flex flex-col items-center justify-center border-t border-gray-100 px-4">
            <div className="text-[10px] md:text-xs text-gray-500 font-bold uppercase tracking-widest mb-4">
              (More Projects)
            </div>
            <Link to={`/work/${project.nextProject.slug}`} className="group">
              <h2 className="text-center leading-none tracking-tighter font-black text-[#1A1A1A] text-[clamp(42px,15vw,180px)] group-hover:text-gray-300 transition-colors duration-500 cursor-pointer break-words">
                {project.nextProject.title}
              </h2>
            </Link>
          </div>
        )}

      </div>
    </div>
  );
}