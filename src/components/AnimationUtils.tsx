import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef, useMemo } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

/* ─── Page wrapper ─── */
export function AnimatedPage({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Directional reveal (data-a equivalent) ─── */
type Direction = "left" | "right" | "up" | "down" | "scale";

const directionMap: Record<Direction, { x?: number; y?: number; scale?: number }> = {
  left:  { x: -60, y: 0 },
  right: { x: 60, y: 0 },
  up:    { x: 0, y: 40 },
  down:  { x: 0, y: -40 },
  scale: { scale: 0.85 },
};

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
  duration = 0.7,
}: {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
  duration?: number;
}) {
  const from = directionMap[direction];
  return (
    <motion.div
      initial={{ opacity: 0, ...from }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Clip-path reveal (cu/cd/cl/cr) ─── */
type ClipDir = "cu" | "cd" | "cl" | "cr";

const clipMap: Record<ClipDir, string> = {
  cu: "inset(100% 0 0 0)",   // reveal upward
  cd: "inset(0 0 100% 0)",   // reveal downward
  cl: "inset(0 100% 0 0)",   // reveal from left
  cr: "inset(0 0 0 100%)",   // reveal from right
};

export function ClipReveal({
  children,
  direction = "cu",
  delay = 0,
  className = "",
  duration = 0.9,
}: {
  children: ReactNode;
  direction?: ClipDir;
  delay?: number;
  className?: string;
  duration?: number;
}) {
  return (
    <motion.div
      initial={{ clipPath: clipMap[direction] }}
      whileInView={{ clipPath: "inset(0 0 0 0)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Word-by-word reveal (.wr) ─── */
export function WordReveal({
  text,
  className = "",
  delay = 0,
  stagger = 0.04,
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  const words = text.split(" ");
  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
      className={className}
      style={{ display: "inline-flex", flexWrap: "wrap", gap: "0.3em" }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 20, rotate: 2 },
            visible: { opacity: 1, y: 0, rotate: 0, transition: { duration: 0.5, ease } },
          }}
          style={{ display: "inline-block" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}

/* ─── Character-by-character reveal (.cr) ─── */
export function CharReveal({
  text,
  className = "",
  delay = 0,
  stagger = 0.03,
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  const chars = text.split("");
  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={{
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
      className={className}
      style={{ display: "inline-block" }}
    >
      {chars.map((char, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 15 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease } },
          }}
          style={{ display: "inline-block", whiteSpace: char === " " ? "pre" : undefined }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
}

/* ─── Parallax image wrapper ─── */
export function ParallaxImage({
  src,
  alt,
  className = "",
  speed = 0.15,
  imgClassName = "",
}: {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
  imgClassName?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [`-${speed * 100}%`, `${speed * 100}%`]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        style={{ y }}
        className={`w-full h-[120%] object-cover ${imgClassName}`}
      />
    </div>
  );
}

/* ─── Legacy components (kept for backward compat) ─── */
export function RevealText({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <Reveal direction="up" delay={delay} className={className}>
      {children}
    </Reveal>
  );
}

export function RevealImage({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <ClipReveal direction="cu" delay={delay} className={className}>
      {children}
    </ClipReveal>
  );
}

export function Eyebrow({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <Reveal direction="left" delay={delay}>
      <p className="eyebrow">{children}</p>
    </Reveal>
  );
}

export function StaggerChildren({
  children,
  className = "",
  stagger = 0.08,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        visible: { transition: { staggerChildren: stagger } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease },
  },
};
