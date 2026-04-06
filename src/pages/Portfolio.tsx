import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import {
  AnimatedPage, Eyebrow, ClipReveal, WordReveal, Reveal, RevealText,
  StaggerChildren, fadeUpVariant,
} from "@/components/AnimationUtils";
import { portfolioItems, styles } from "@/data/portfolio";

const ease = [0.16, 1, 0.3, 1];
const clipCycle = ["cu", "cl", "cr", "cd"] as const;

export default function PortfolioPage() {
  const [activeStyle, setActiveStyle] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = activeStyle === "All"
    ? portfolioItems
    : portfolioItems.filter((item) => item.style === activeStyle);

  const openLightbox = (id: number) => setLightbox(id);
  const closeLightbox = () => setLightbox(null);

  const currentIndex = lightbox !== null ? filtered.findIndex((i) => i.id === lightbox) : -1;
  const currentItem = currentIndex >= 0 ? filtered[currentIndex] : null;

  const navigate = (dir: number) => {
    if (currentIndex < 0) return;
    const next = (currentIndex + dir + filtered.length) % filtered.length;
    setLightbox(filtered[next].id);
  };

  return (
    <AnimatedPage>
      <div className="pt-32 pb-24">
        <div className="content-max">
          <Eyebrow>PORTFOLIO</Eyebrow>
          <RevealText className="mt-4">
            <h1 className="font-display text-4xl md:text-[60px] font-normal text-foreground leading-tight tracking-[-0.03em]">
              <WordReveal text="Our work" />
            </h1>
          </RevealText>
          <Reveal direction="up" delay={0.1}>
            <p className="font-body text-base text-muted-foreground mt-4 max-w-[640px]">
              Each piece is a collaboration between artist and canvas.
            </p>
          </Reveal>

          {/* Filter bar */}
          <Reveal direction="left" delay={0.15}>
            <div className="flex flex-wrap gap-2 mt-12 mb-16">
              {styles.map((style) => (
                <button
                  key={style}
                  onClick={() => setActiveStyle(style)}
                  className={`font-body text-xs uppercase tracking-wider px-5 py-2 border transition-all duration-300 ${
                    activeStyle === style
                      ? "bg-foreground text-background border-foreground"
                      : "bg-transparent text-muted-foreground border-border hover:border-foreground/50"
                  }`}
                  style={{ borderRadius: 0 }}
                >
                  {style}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Masonry grid */}
          <LayoutGroup>
            <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-1.5">
              <AnimatePresence mode="popLayout">
                {filtered.map((item, i) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, ease }}
                    className="mb-1.5 break-inside-avoid"
                  >
                    <Reveal direction="up" delay={(i % 6) * 0.06}>
                      <button
                        onClick={() => openLightbox(item.id)}
                        className="group relative block w-full overflow-hidden"
                      >
                        <img
                          src={item.src}
                          alt={item.title}
                          loading="lazy"
                          className="w-full object-cover transition-transform duration-[600ms]"
                          style={{
                            aspectRatio: item.aspect,
                            transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)",
                          }}
                        />
                        <div className="absolute inset-0 bg-background/70 opacity-0 group-hover:opacity-100 transition-opacity duration-[400ms] flex flex-col justify-end p-6">
                          <p className="font-display text-lg text-foreground">{item.title}</p>
                          <p className="font-body text-xs text-muted-foreground mt-1">
                            {item.artist} — {item.style}
                          </p>
                        </div>
                      </button>
                    </Reveal>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </LayoutGroup>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {currentItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-background/90 backdrop-blur-lg flex items-center justify-center"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, ease }}
              className="relative max-w-[90vw] max-h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={currentItem.src.replace("w=600", "w=1200")}
                alt={currentItem.title}
                className="max-h-[75vh] object-contain"
              />
              <div className="mt-6 text-center">
                <p className="font-display text-xl text-foreground">{currentItem.title}</p>
                <p className="font-body text-sm text-muted-foreground mt-1">
                  {currentItem.artist} — {currentItem.style}
                </p>
              </div>
            </motion.div>

            <button onClick={closeLightbox} className="absolute top-8 right-8 text-foreground hover:text-muted-foreground transition-colors">
              <X className="w-6 h-6" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); navigate(-1); }} className="absolute left-8 top-1/2 -translate-y-1/2 text-foreground hover:text-muted-foreground transition-colors">
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); navigate(1); }} className="absolute right-8 top-1/2 -translate-y-1/2 text-foreground hover:text-muted-foreground transition-colors">
              <ChevronRight className="w-8 h-8" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatedPage>
  );
}
