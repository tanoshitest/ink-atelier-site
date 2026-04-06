import { motion, AnimatePresence } from "framer-motion";
import studioBg from "@/assets/studio.png";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import {
  AnimatedPage, Eyebrow, Reveal, ClipReveal, WordReveal, CharReveal,
  StaggerChildren, fadeUpVariant, RevealText,
} from "@/components/AnimationUtils";
import { artists } from "@/data/artists";
import { portfolioItems } from "@/data/portfolio";
import { useRef, useState, useCallback } from "react";

const ease = [0.16, 1, 0.3, 1];
const clipDirs = ["cl", "cu", "cr"] as const;

const collectionItems = [
  {
    src: "https://images.unsplash.com/photo-1509281373149-e957c6296406?w=800&q=80",
    title: "Serpent Garden",
    description: "Những đường nét mảnh mai uốn lượn tạo nên khu vườn bí ẩn trên da. Một tác phẩm tinh tế, vừa mạnh mẽ vừa đầy chất thơ.",
  },
  {
    src: "https://images.unsplash.com/photo-1562962230-16e4623d36e6?w=800&q=80",
    title: "Geometric Bloom",
    description: "Sự kết hợp giữa hình học và thiên nhiên, nơi những cánh hoa nở rộ trong khuôn khổ hoàn hảo của đường thẳng và góc cạnh.",
  },
  {
    src: "https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=800&q=80",
    title: "Koi Ascent",
    description: "Cá koi vượt dòng — biểu tượng của sự kiên cường và vươn lên. Phong cách Nhật Bản truyền thống với nét bút hiện đại.",
  },
  {
    src: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=800&q=80",
    title: "Botanical Sleeve",
    description: "Một bộ sưu tập thực vật được khắc hoạ tinh xảo, phủ kín cánh tay như một khu vườn sống động.",
  },
  {
    src: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=800&q=80",
    title: "Guardian Muse",
    description: "Đôi cánh và ánh nhìn huyền bí giữa lưng như biểu tượng của trực giác và sự bảo hộ. Một tác phẩm nghệ thuật đầy chiều sâu.",
  },
];

export default function HomePage() {
  const artistsRef = useRef<HTMLDivElement>(null);

  return (
    <AnimatedPage>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={studioBg}
            alt="DOUCES Studio"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 to-background/40" />
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease }}
          >
            <CharReveal text="TATTOO ATELIER" className="eyebrow mb-6 block" stagger={0.04} />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
            className="font-display text-7xl md:text-[96px] font-normal tracking-[0.08em] text-foreground leading-none"
          >
            <CharReveal text="DOUCES" delay={0.3} stagger={0.06} />
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease }}
            className="font-body text-base italic text-muted-foreground mt-6"
          >
            L'art sur la peau
          </motion.p>
        </div>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="w-5 h-5 text-muted-foreground" />
        </motion.div>
      </section>

      {/* Fine Line Collection */}
      <section className="section-spacing">
        <div className="content-max">
          <Eyebrow>FINE LINE COLLECTION</Eyebrow>
          <RevealText className="mt-4 mb-16">
            <h2 className="font-display text-4xl md:text-[60px] font-normal text-foreground leading-tight tracking-[-0.03em]">
              <WordReveal text="Selected pieces" />
            </h2>
          </RevealText>

          <FineLineCarousel />

          <div className="mt-12 text-right">
            <Reveal direction="right">
              <Link to="/portfolio" className="text-link">
                View all work →
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Artists */}
      <section className="section-spacing">
        <div className="content-max">
          <Eyebrow>THE ARTISTS</Eyebrow>
          <RevealText className="mt-4 mb-16">
            <h2 className="font-display text-4xl md:text-[60px] font-normal text-foreground leading-tight tracking-[-0.03em]">
              <WordReveal text="Masters of ink" />
            </h2>
          </RevealText>
        </div>
        <div
          ref={artistsRef}
          className="hide-scrollbar overflow-x-auto snap-x snap-mandatory flex gap-6 px-6 lg:px-12 pb-4 md:gap-6"
        >
          {artists.map((artist, i) => (
            <motion.div
              key={artist.slug}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.08, ease }}
              className="snap-center flex-shrink-0 w-[85vw] md:w-[300px]"
            >
              <Link to={`/artists/${artist.slug}`} className="group block">
                <div className="overflow-hidden">
                  <img
                    src={artist.photo}
                    alt={artist.name}
                    loading="lazy"
                    className="w-full aspect-[3/4] object-cover transition-all duration-[600ms] group-hover:brightness-110"
                    style={{ transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)" }}
                  />
                </div>
                <h3 className="font-display text-2xl text-foreground mt-4 transition-colors duration-300 group-hover:text-accent">
                  {artist.name}
                </h3>
                <p className="font-body text-[13px] text-muted-foreground mt-1">
                  {artist.specialty}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section className="min-h-screen flex items-center justify-center section-spacing relative">
        <div className="absolute inset-0 opacity-[0.08]">
          <img
            src="https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=1920&q=80"
            alt=""
            className="w-full h-full object-cover blur-sm"
          />
        </div>
        <div className="relative z-10 text-center max-w-[800px] mx-auto px-6">
          <Reveal direction="scale">
            <span className="font-display text-[120px] leading-none text-border block">"</span>
          </Reveal>
          <RevealText delay={0.1}>
            <blockquote className="font-display text-2xl md:text-4xl italic text-foreground leading-snug -mt-16">
              <WordReveal text="Chaque trait d'encre raconte une histoire éternelle" stagger={0.05} />
            </blockquote>
          </RevealText>
          <Reveal direction="up" delay={0.3}>
            <p className="font-body text-sm text-muted-foreground mt-6">
              Every ink stroke tells an eternal story
            </p>
          </Reveal>
          <Reveal direction="scale" delay={0.4}>
            <div className="w-16 h-px bg-border mx-auto mt-8" />
          </Reveal>
          <Reveal direction="right" delay={0.5}>
            <Link to="/process" className="text-link mt-8 inline-block">
              Discover our process →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center px-6 lg:px-16 py-24 lg:py-0">
          <Eyebrow>BEGIN YOUR JOURNEY</Eyebrow>
          <RevealText className="mt-4">
            <h2 className="font-display text-4xl md:text-5xl font-normal text-foreground leading-tight tracking-[-0.03em]">
              <WordReveal text="Book a consultation" />
            </h2>
          </RevealText>
          <Reveal direction="up" delay={0.15}>
            <p className="font-body text-base text-secondary-foreground/80 mt-6 max-w-[400px] leading-relaxed">
              Every tattoo begins with a conversation. Tell us your story, and we'll help bring your vision to life.
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.25} className="mt-10 flex flex-col sm:flex-row items-start gap-4">
            <Link to="/booking" className="btn-primary">
              Book an appointment
            </Link>
            <Reveal direction="right" delay={0.35}>
              <a href="mailto:hello@douces.ink" className="text-link">
                Or contact us directly →
              </a>
            </Reveal>
          </Reveal>
        </div>
        <ClipReveal direction="cr" className="relative min-h-[50vh] lg:min-h-full">
          <img
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1000&q=80"
            alt="Tattoo studio interior"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </ClipReveal>
      </section>
    </AnimatedPage>
  );
}
