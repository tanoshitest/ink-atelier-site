import { motion, useScroll, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import { AnimatedPage, Eyebrow, RevealText, RevealImage } from "@/components/AnimationUtils";

const ease = [0.16, 1, 0.3, 1];

const chapters = [
  {
    num: "01",
    eyebrow: "CHAPTER 01",
    heading: "The conversation",
    body: "Every journey begins with listening. During your consultation, we explore your vision — the meaning behind the mark, the placement on your body, and the style that speaks to your story. This conversation is sacred. We never rush it. Whether in person at our Paris atelier or via video call, we dedicate a full hour to understanding exactly what this tattoo means to you.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&q=80",
    caption: "Every piece begins here — a conversation, not a transaction.",
  },
  {
    num: "02",
    eyebrow: "CHAPTER 02",
    heading: "The blueprint",
    body: "Your artist translates the conversation into graphite and ink. Multiple sketches, digital refinements, and placement studies on your specific anatomy. We iterate until the design feels inevitable — as though it always belonged there. Custom stencils are prepared with surgical precision. Nothing is generic, nothing is pulled from a flash sheet. Every line exists for a reason.",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1200&q=80",
  },
  {
    num: "03",
    eyebrow: "CHAPTER 03",
    heading: "Ink meets skin",
    body: "The studio transforms. Music is curated to your taste. Temperature is set. Your artist prepares their station with medical-grade sterilization — every needle is single-use, every surface is clinical. Then the work begins. Fine-line pieces may take two hours. Full sleeves span multiple sessions across months. We work at the pace your body needs. Breaks are built in. Comfort is non-negotiable.",
    image: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=1200&q=80",
  },
  {
    num: "04",
    eyebrow: "CHAPTER 04",
    heading: "The healing",
    body: "A tattoo is a wound that becomes art. Proper aftercare is the final act of creation. We provide detailed healing instructions tailored to your skin type and tattoo location. Follow-up consultations are included — we check in at 2 weeks and again at 6 weeks. Touch-ups within the first year are always complimentary. Your tattoo deserves the same care we put into creating it.",
    image: "https://images.unsplash.com/photo-1542856391-010fb87dcfed?w=1200&q=80",
  },
];

export default function ProcessPage() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <AnimatedPage>
      {/* Scroll progress indicator */}
      <motion.div
        style={{ scaleY, transformOrigin: "top" }}
        className="fixed left-0 top-0 w-0.5 h-full bg-foreground z-40"
      />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1920&q=80"
            alt="Studio"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 to-background/50" />
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="font-display text-5xl md:text-7xl font-normal text-foreground tracking-[-0.03em]"
          >
            The process
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="font-body text-base text-muted-foreground mt-4"
          >
            From vision to permanence
          </motion.p>
        </div>
      </section>

      {/* Sticky sidebar + chapters */}
      <div className="relative">
        {/* Sidebar nav — desktop */}
        <div className="hidden lg:block fixed left-12 top-1/2 -translate-y-1/2 z-30 space-y-6">
          {chapters.map((ch) => (
            <a
              key={ch.num}
              href={`#chapter-${ch.num}`}
              className="block font-body text-[11px] uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {ch.num}
            </a>
          ))}
        </div>

        {/* Chapters */}
        {chapters.map((ch) => (
          <section
            key={ch.num}
            id={`chapter-${ch.num}`}
            className="section-spacing"
          >
            <div className="content-max max-w-[1000px]">
              <Eyebrow>{ch.eyebrow}</Eyebrow>
              <RevealText className="mt-4">
                <h2 className="font-display text-3xl md:text-5xl font-normal text-foreground leading-tight tracking-[-0.03em]">
                  {ch.heading}
                </h2>
              </RevealText>
              <RevealText delay={0.15}>
                <p className="font-body text-[15px] text-secondary-foreground/80 mt-8 leading-relaxed max-w-[640px]">
                  {ch.body}
                </p>
              </RevealText>
              <RevealImage delay={0.2} className="mt-12">
                <img src={ch.image} alt={ch.heading} loading="lazy" className="w-full object-cover" />
                {ch.caption && (
                  <p className="font-body text-xs text-muted-foreground mt-4 italic">{ch.caption}</p>
                )}
              </RevealImage>
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="section-spacing">
          <div className="content-max text-center">
            <RevealText>
              <h2 className="font-display text-3xl md:text-5xl text-foreground tracking-[-0.03em]">
                Ready to begin?
              </h2>
            </RevealText>
            <RevealText delay={0.1} className="mt-8">
              <Link to="/booking" className="btn-primary">
                Book an appointment
              </Link>
            </RevealText>
          </div>
        </section>
      </div>
    </AnimatedPage>
  );
}
