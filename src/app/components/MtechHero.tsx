import { DynamicImage } from "./DynamicImage";

const heroImage = "/images/isiipe-home.png";

export function MtechHero() {
  return (
    <div className="w-[95%] mx-auto max-w-[1400px] aspect-video md:aspect-[21/9] relative overflow-hidden border-2 border-[#D9D9D9]">
      {/* Hero Image */}
      <DynamicImage
        slotId="mtech-hero"
        fallbackSrc={heroImage}
        alt="Selam Tesfaye portfolio hero"
        className="w-full h-full object-contain m-[0px] rounded-[0px]"
      />
    </div>
  );
}
