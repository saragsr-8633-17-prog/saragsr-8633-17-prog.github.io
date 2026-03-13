import { useParams, Link } from "react-router";
import { BLOG_POSTS } from "./Blog";
import { DynamicImage } from "./DynamicImage";

const readMoreImage1 =
  "https://images.unsplash.com/photo-1485025798926-cde0f0d24cca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwbWluaW1hbCUyMGFic3RyYWN0JTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3Mjk5MDUxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const readMoreImage2 =
  "https://images.unsplash.com/photo-1739477274981-d464f0b85cfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb25vY2hyb21lJTIwZ2VvbWV0cmljJTIwZGVzaWduJTIwdGV4dHVyZXxlbnwxfHx8fDE3NzI5OTA1MTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const ARTICLES: Record<
  string,
  {
    title: string;
    date: string;
    authors: string;
    readingTime: string;
    categories: string[];
    summary: string;
    content: React.ReactNode;
  }
> = {
  "unseen-currents-how-media-and-ai-shape-us-before-we-notice": {
    title: "Unseen Currents: How Media and AI Shape Us Before We Notice",
    date: "January 04, 2026",
    authors: "OBAID",
    readingTime: "3 min",
    categories: ["ESSAY", "AI", "MEDIA", "TECHNOLOGY"],
    summary:
      "A reflection on how technology operates silently in the background, reshaping our habits, creativity, and values before we even realize it.",
    content: (
      <>
        {/* Intro Section */}
        <div className="mb-12">
          <p
            className="text-[#222] mb-6"
            style={{ fontSize: "clamp(18px, 2vw, 20px)", fontWeight: 500, lineHeight: 1.6 }}
          >
            Most of us assume technology changes the world only after we learn how to use it, but often the change happens before we even notice.
          </p>
          <p
            className="text-[#444] mb-6"
            style={{ fontSize: "15px", fontWeight: 400, lineHeight: 1.75 }}
          >
            Once a technology becomes part of everyday life, it fades into the background. Like air or electricity, it works silently. We only notice it when something goes wrong, during a power outage, a system failure, or a moment of sensory overload. By then, the shift has already occurred.
          </p>
          <blockquote className="border-l-4 border-[#1a1a1a] pl-6 my-8 py-2">
            <p
              className="text-[#1a1a1a]"
              style={{ fontSize: "clamp(18px, 2vw, 22px)", fontWeight: 700, fontStyle: "italic", lineHeight: 1.4 }}
            >
              This is what Marshall McLuhan meant when he said, &ldquo;the medium is the message.&rdquo;
            </p>
          </blockquote>
          <p
            className="text-[#444] mb-6"
            style={{ fontSize: "15px", fontWeight: 400, lineHeight: 1.75 }}
          >
            Technologies do more than carry content, they reshape how we think, feel, and behave. Electric light, for example, didn&apos;t change what we saw, but when and how long we stayed awake. Night disappeared without anyone voting for it, and society reorganized around that change long before most people reflected on it.
          </p>
        </div>

        {/* Section 1: Social Media */}
        <div className="mb-16">
          <h2
            className="text-[#1a1a1a] mb-8"
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-1px",
            }}
          >
            Social Media
          </h2>
          <p
            className="text-[#444] mb-6"
            style={{ fontSize: "15px", fontWeight: 400, lineHeight: 1.75 }}
          >
            Social media seems like a tool for connection. It lets us share images, videos, music, and messages instantly with people all over the globe. In McLuhan&apos;s terms, it collapses distance and sequence, making the world feel smaller and faster.
          </p>
          <p
            className="text-[#444] mb-6"
            style={{ fontSize: "15px", fontWeight: 400, lineHeight: 1.75 }}
          >
            But social media is more than a messenger. It immerses us, emotionally and rhythmically, rather than allowing detached observation. Algorithms push content that we like, gradually shaping attention, taste, and even habits. The medium influences behavior more than the content itself.
          </p>
          <p
            className="text-[#444] mb-6"
            style={{ fontSize: "15px", fontWeight: 400, lineHeight: 1.75 }}
          >
            Many of us notice this in small ways. Some people, myself included, struggle to eat or relax without watching something, often meaningless content, just to feed the brain&apos;s craving for stimulation. Features like Spotify Wrapped take this further, turning private listening habits into public performance. Sharing them becomes a way to prove presence, to signal, to participate.
          </p>
          <blockquote className="border-l-4 border-[#1a1a1a] pl-6 my-8 py-2">
            <p
              className="text-[#1a1a1a] mb-2"
              style={{ fontSize: "clamp(16px, 1.5vw, 20px)", fontWeight: 700, fontStyle: "italic", lineHeight: 1.4 }}
            >
              &ldquo;That which withers in the age of mechanical reproduction is the aura of the work of art.&rdquo;
            </p>
            <span
              className="text-[#1a1a1a] uppercase tracking-widest"
              style={{ fontSize: "11px", fontWeight: 600 }}
            >
              — Walter Benjamin
            </span>
          </blockquote>
          <p
            className="text-[#444] mb-6"
            style={{ fontSize: "15px", fontWeight: 400, lineHeight: 1.75 }}
          >
            Our experiences, once unique and intimate, now become repeatable, shareable, and curated for visibility.
          </p>
        </div>

        {/* Section 2: AI */}
        <div className="mb-16">
          <h2
            className="text-[#1a1a1a] mb-8"
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-1px",
            }}
          >
            Artificial Intelligence and Creative Work
          </h2>

          {/* AI Image */}
          <div className="w-full mb-10 overflow-hidden">
            <DynamicImage
              slotId="blog-ai-image-1"
              fallbackSrc="/images/blog/unseen1.jpg"
              alt="AI and creative work"
              className="w-full h-auto object-cover"
            />
          </div>

          <p
            className="text-[#444] mb-6"
            style={{ fontSize: "15px", fontWeight: 400, lineHeight: 1.75 }}
          >
            AI represents a whole new level of technological influence. It doesn&apos;t just deliver content, it produces it. With a single prompt, you can generate text, images, animation, or even voices in seconds.
          </p>
          <p
            className="text-[#444] mb-6"
            style={{ fontSize: "15px", fontWeight: 400, lineHeight: 1.75 }}
          >
            In animation, AI automates tasks like rotoscoping, rigging, in-betweening, and backgrounds. I&apos;ve used these tools under tight deadlines with peers, generating entire three-minute sequences quickly. They increase efficiency, reduce costs, and allow exploration of new styles, but they also subtly reshape values. In UI/UX design, AI can auto-generate color systems, typography, and design components. I found myself skipping foundational practices because the tools made them seem unnecessary. The medium begins to shape what I consider important or even worth doing.
          </p>

          <div className="bg-[#f5f5f5] p-8 my-8">
            <p
              className="text-[#1a1a1a]"
              style={{ fontSize: "15px", fontWeight: 500, fontStyle: "italic", lineHeight: 1.75 }}
            >
              I once asked my animation instructor what his concerns were about AI taking over animation, and he said it would never happen. I insisted, asking, &ldquo;What if it did?&rdquo; He looked at me and said, &ldquo;Why is that your concern?&rdquo; I explained, &ldquo;If it happened, why would I even learn animation?&rdquo;
              <br /><br />
              He smiled and said, &ldquo;We as humans are creative, we have abstract thought and nuanced storytelling. AI can do better in computational power and data processing, but it can&apos;t replace that. Be proud that you are creative, because humans created AI, and we can make something more creative than that.&rdquo;
            </p>
          </div>

          <p
            className="text-[#444] mb-6"
            style={{ fontSize: "15px", fontWeight: 400, lineHeight: 1.75 }}
          >
            Even as I nodded, I thought to myself, AI is improving every day, and it&apos;s already changing how we work, think, and create. It also blurs truth and fiction. In an information-saturated world, this puts accuracy and fabrication on equal footing, making critical engagement more necessary than ever.
          </p>
        </div>

        {/* Section 3: Conclusion */}
        <div className="mb-16">
          <h2
            className="text-[#1a1a1a] mb-8"
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-1px",
            }}
          >
            Riding the Invisible Tide
          </h2>
          <p
            className="text-[#444] mb-6"
            style={{ fontSize: "15px", fontWeight: 400, lineHeight: 1.75 }}
          >
            There&apos;s no simple fix, but simply noticing how technology shapes us is already a step toward understanding. We may not be able to step outside these environments entirely, but we can learn to see them, reflect, and engage deliberately.
          </p>
          <p
            className="text-[#444] mb-6"
            style={{ fontSize: "15px", fontWeight: 400, lineHeight: 1.75 }}
          >
            Technology has always influenced us before we were aware, and it will continue to do so. The question is not whether it shapes us, but how we respond, adapt, and remain creatively human in the process.
          </p>
        </div>
      </>
    ),
  },
  "between-nothing-and-forever": {
    title: "Between Nothing and Forever",
    date: "January 16, 2026",
    authors: "OBAID",
    readingTime: "2 min",
    categories: ["ESSAY", "EXISTENTIAL INQUIRY", "SPIRITUAL/RELIGIOUS REFLECTION"],
    summary:
      "A contemplation on the afterlife, exploring the tension between eternal existence and nothingness through the lens of different religious and philosophical traditions.",
    content: (
      <>
        {/* Opening Section */}
        <div className="mb-16">
          <p
            className="text-[#222] mb-6"
            style={{ fontSize: "clamp(18px, 2vw, 20px)", fontWeight: 500, lineHeight: 1.6 }}
          >
            What happens after we die? Is it blackness, like before I was born, or some form of eternal existence?
          </p>
          <p
            className="text-[#444] mb-6"
            style={{ fontSize: "15px", fontWeight: 400, lineHeight: 1.75 }}
          >
            The idea of nothingness terrifies me — or the same nothing I experienced before I existed. This question has haunted humanity across cultures and centuries, and yet no answer feels complete.
          </p>
        </div>

        {/* Happiness and Eternity */}
        <div className="mb-16">
          <h2
            className="text-[#1a1a1a] mb-8"
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-1px",
            }}
          >
            Happiness and Eternity
          </h2>
          <p
            className="text-[#444] mb-6"
            style={{ fontSize: "15px", fontWeight: 400, lineHeight: 1.75 }}
          >
            Can happiness really be eternal? I don&apos;t think so, because happiness, like all emotions, depends on change. It is fleeting by nature and only meaningful when it arises alongside struggle, loss, or discomfort.
          </p>
          <p
            className="text-[#444] mb-6"
            style={{ fontSize: "15px", fontWeight: 400, lineHeight: 1.75 }}
          >
            Without contrast, would eternal happiness even feel like happiness, or would it simply become a blank, unnoticeable state? If an afterlife promises eternal happiness, I wonder whether it&apos;s truly happiness at all, or just a constant, neutral state — a world without peaks or valleys, where the very feeling of joy has no depth because suffering no longer exists to give it meaning.
          </p>
        </div>

        {/* Abrahamic Religions */}
        <div className="mb-16">
          <h2
            className="text-[#1a1a1a] mb-8"
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-1px",
            }}
          >
            Abrahamic Religions
          </h2>
          <p
            className="text-[#444] mb-6"
            style={{ fontSize: "15px", fontWeight: 400, lineHeight: 1.75 }}
          >
            Many religions, like Christianity, Islam, and Judaism, describe the afterlife as a place of eternal reward or punishment. Heaven offers everlasting joy, while hell promises unending suffering. These ideas suggest a kind of cosmic justice: the virtuous are rewarded, the wrongdoers punished.
          </p>
          <p
            className="text-[#444] mb-6"
            style={{ fontSize: "15px", fontWeight: 400, lineHeight: 1.75 }}
          >
            But if happiness and suffering are inherently relational and dynamic, can a never-ending heaven truly feel like happiness? And if suffering is erased, does pleasure retain its meaning?
          </p>
          <p
            className="text-[#444] mb-6"
            style={{ fontSize: "15px", fontWeight: 400, lineHeight: 1.75 }}
          >
            I find myself grappling with this tension — the promise of eternal states feels, in some ways, both comforting and abstract, like a concept I can understand yet cannot fully inhabit. It makes the question of what comes after death even sharper: will I be nothing, as I was before I was born, or trapped in a timeless, unchanging existence that my emotions cannot recognize?
          </p>
        </div>

        {/* Buddhism and Impermanence */}
        <div className="mb-16">
          <h2
            className="text-[#1a1a1a] mb-8"
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-1px",
            }}
          >
            Buddhism and Impermanence
          </h2>
          <p
            className="text-[#444] mb-6"
            style={{ fontSize: "15px", fontWeight: 400, lineHeight: 1.75 }}
          >
            Buddhism offers a different approach. It frames life and death not in terms of eternal reward or punishment, but as a cycle of impermanence, transformation, and ethical living.
          </p>
          <p
            className="text-[#444] mb-6"
            style={{ fontSize: "15px", fontWeight: 400, lineHeight: 1.75 }}
          >
            Happiness, in Buddhist thought, is not a static destination but a practice: mindfulness, compassion, and awareness cultivate inner peace. There is no eternal bliss in the way Western religions promise it, but perhaps that is what makes it more relatable — joy arises in moments, and its depth is shaped by struggle, effort, and understanding.
          </p>
          <p
            className="text-[#444] mb-6"
            style={{ fontSize: "15px", fontWeight: 400, lineHeight: 1.75 }}
          >
            Here, death is not a final judgment, but another phase in a continuous path toward wisdom and release from suffering.
          </p>
        </div>

        {/* Comparative Reflection */}
        <div className="mb-16">
          <h2
            className="text-[#1a1a1a] mb-8"
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-1px",
            }}
          >
            Comparative Reflection
          </h2>
          <p
            className="text-[#444] mb-6"
            style={{ fontSize: "15px", fontWeight: 400, lineHeight: 1.75 }}
          >
            Looking at these perspectives together, the contrast is striking. Abrahamic religions present eternal states — comforting yet abstract — while Buddhism embraces change and impermanence, offering practical ways to live with meaning now.
          </p>
          <p
            className="text-[#444] mb-6"
            style={{ fontSize: "15px", fontWeight: 400, lineHeight: 1.75 }}
          >
            Both frameworks shape how we experience life, death, and emotion, yet neither provides a final answer to the haunting question: will I return to nothingness, or continue in a form I cannot imagine?
          </p>
        </div>

        {/* Conclusion */}
        <div className="mb-16">
          <h2
            className="text-[#1a1a1a] mb-8"
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-1px",
            }}
          >
            Conclusion
          </h2>
          <p
            className="text-[#444] mb-6"
            style={{ fontSize: "15px", fontWeight: 400, lineHeight: 1.75 }}
          >
            While the afterlife remains a mystery, reflecting on these perspectives allows me to live more consciously, to embrace each fleeting moment of happiness, and to face the unknown with curiosity and awareness.
          </p>
          <p
            className="text-[#444] mb-6"
            style={{ fontSize: "15px", fontWeight: 400, lineHeight: 1.75 }}
          >
            Perhaps understanding impermanence — and our own limited time — is the closest we get to reconciling with what comes after.
          </p>
          <blockquote className="border-l-4 border-[#1a1a1a] pl-6 my-8 py-2">
            <p
              className="text-[#1a1a1a]"
              style={{ fontSize: "clamp(18px, 2vw, 22px)", fontWeight: 700, fontStyle: "italic", lineHeight: 1.4 }}
            >
              When I look up, I see no heaven. When I look down, I see no Hell. I feel free.
            </p>
          </blockquote>
        </div>
      </>
    ),
  },
};

export function BlogArticle() {
  const { slug } = useParams();
  const article = slug ? ARTICLES[slug] : null;
  const postMeta = BLOG_POSTS.find((p) => p.slug === slug);

  // Get other posts for "Read More" section
  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 2);
  const readMoreImages = [readMoreImage1, readMoreImage2];

  if (!article || !postMeta) {
    return (
      <div className="flex-1 flex items-center justify-center bg-[#FFFFFF]">
        <div className="text-center">
          <p
            className="text-[#1a1a1a] mb-4"
            style={{ fontSize: "24px", fontWeight: 700 }}
          >
            Article not found
          </p>
          <Link
            to="/blog"
            className="text-[#a3a3a3] underline hover:text-[#1a1a1a]"
            style={{ fontSize: "14px", fontWeight: 500, transition: "color 0.3s ease" }}
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Article Title */}
      <div className="w-full px-5 md:px-16 lg:px-24 pb-8 md:pb-16">
        <h1
          className="text-[#1a1a1a] tracking-tighter"
          style={{ fontSize: "clamp(32px, 8vw, 100px)", fontWeight: 700, lineHeight: 0.9 }}
        >
          {article.title}
        </h1>
      </div>

      {/* Article Content */}
      <div className="w-full pt-8 md:pt-16 pb-32">
        {/* 2-column layout */}
        <div className="w-full max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-24 px-5 md:px-16 lg:px-24">
          {/* Left Sidebar */}
          <div className="md:col-span-4">
            <div className="md:sticky md:top-12 h-fit">
              {/* About label */}
              <p
                className="text-[#a3a3a3] uppercase tracking-widest mb-4"
                style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em" }}
              >
                ABOUT
              </p>
              <p
                className="text-[#1a1a1a] mb-8"
                style={{ fontSize: "13px", fontWeight: 400, lineHeight: 1.65 }}
              >
                {article.summary}
              </p>

              {/* Metadata */}
              <div className="border-t border-[#1a1a1a]">
                {/* Publish Date */}
                <div className="grid grid-cols-2 py-3 border-b border-[#e5e5e5]">
                  <span
                    className="text-[#a3a3a3] uppercase"
                    style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.05em" }}
                  >
                    PUBLISH DATE
                  </span>
                  <span
                    className="text-[#1a1a1a] text-right"
                    style={{ fontSize: "12px", fontWeight: 500 }}
                  >
                    {article.date}
                  </span>
                </div>

                {/* Authors */}
                <div className="grid grid-cols-2 py-3 border-b border-[#e5e5e5]">
                  <span
                    className="text-[#a3a3a3] uppercase"
                    style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.05em" }}
                  >
                    AUTHORS
                  </span>
                  <span
                    className="text-[#1a1a1a] text-right"
                    style={{ fontSize: "12px", fontWeight: 500 }}
                  >
                    {article.authors}
                  </span>
                </div>

                {/* Reading Time */}
                <div className="grid grid-cols-2 py-3 border-b border-[#e5e5e5]">
                  <span
                    className="text-[#a3a3a3] uppercase"
                    style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.05em" }}
                  >
                    READING TIME
                  </span>
                  <span
                    className="text-[#1a1a1a] text-right"
                    style={{ fontSize: "12px", fontWeight: 500 }}
                  >
                    {article.readingTime}
                  </span>
                </div>

                {/* Categories */}
                <div className="grid grid-cols-2 py-3 border-b border-[#e5e5e5]">
                  <span
                    className="text-[#a3a3a3] uppercase"
                    style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.05em" }}
                  >
                    CATEGORIES
                  </span>
                  <div className="flex gap-2 justify-end flex-wrap">
                    {article.categories.map((cat) => (
                      <span
                        key={cat}
                        className="border border-[#1a1a1a] text-[#1a1a1a] px-2 py-0.5"
                        style={{
                          fontSize: "10px",
                          fontWeight: 600,
                          letterSpacing: "0.05em",
                        }}
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Share */}
                <div className="grid grid-cols-2 py-3 border-b border-[#1a1a1a]">
                  <span
                    className="text-[#a3a3a3] uppercase"
                    style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.05em" }}
                  >
                    SHARE
                  </span>
                  <div className="flex gap-3 justify-end">
                    <button
                      className="text-[#a3a3a3] hover:text-[#1a1a1a] cursor-pointer"
                      style={{ transition: "color 0.3s ease" }}
                      onClick={() => navigator.clipboard.writeText(window.location.href)}
                      title="Copy link"
                    >
                      <svg
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
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                      </svg>
                    </button>
                    <a
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}&text=${encodeURIComponent(article.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#a3a3a3] hover:text-[#1a1a1a]"
                      style={{ transition: "color 0.3s ease" }}
                      title="Share on X"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Back to blog */}
              <Link
                to="/blog"
                className="inline-block mt-8 text-[#a3a3a3] hover:text-[#1a1a1a] uppercase"
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  transition: "color 0.3s ease",
                }}
              >
                &larr; Back to Blog
              </Link>
            </div>
          </div>

          {/* Right Content Area */}
          <div className="md:col-span-8">
            {/* Article label */}
            <p
              className="text-[#a3a3a3] uppercase tracking-widest mb-10"
              style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em" }}
            >
              ARTICLE
            </p>

            {/* Article content */}
            {article.content}
          </div>
        </div>

        {/* Bottom Footer - READ MORE BLOGS */}
        <div className="mt-24 px-8 md:px-16 lg:px-24 pb-20">
          <div className="border-t border-[#1a1a1a] pt-10">
            <p
              className="text-[#1a1a1a] uppercase tracking-widest mb-10"
              style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.15em" }}
            >
              READ MORE BLOGS
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16">
              {otherPosts.map((post, idx) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="flex flex-col sm:flex-row gap-6 group cursor-pointer"
                >
                  {/* Left Side: Image + Number Box */}
                  <div className="relative w-full sm:w-[240px] shrink-0 bg-[#000000] aspect-[4/3] overflow-hidden flex items-center justify-center">
                    <DynamicImage
                      slotId={`blog-readmore-${post.slug}`}
                      fallbackSrc={post.image || readMoreImages[idx]}
                      alt={post.title}
                      className="w-[80%] h-[80%] object-cover mix-blend-luminosity opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <span
                      className="absolute bottom-1 left-4 text-[#ffffff]"
                      style={{
                        fontSize: "clamp(36px, 4vw, 56px)",
                        fontWeight: 700,
                        lineHeight: 1,
                        letterSpacing: "-1px",
                      }}
                    >
                      N&deg; {post.number}
                    </span>
                  </div>

                  {/* Right Side: Text Box */}
                  <div className="flex flex-col justify-start pt-2">
                    <h4 className="text-xl font-bold text-[#1a1a1a] leading-tight group-hover:underline decoration-2 underline-offset-4 mt-[0px] mb-[12px]">
                      {post.title}
                    </h4>
                    <p className="text-[14px] text-[#444] leading-relaxed font-medium">
                      {post.excerpt || "Click to read this article and discover more insights on design, development, and the creative process."}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}