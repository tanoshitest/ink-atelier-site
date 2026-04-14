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
    title: "Fine Line | Floral Tribe",
    description: "A delicate floral line gracefully flowing along the waist, enhancing natural curves with softness and elegance.\n\nKhóm hoa mảnh mai uốn lượn eo, tôn lên đường cong tự nhiên với vẻ mềm mại và tinh tế.",
  },
  {
    src: "https://images.unsplash.com/photo-1562962230-16e4623d36e6?w=800&q=80",
    title: "Blackwork | Shadow Panther",
    description: "A bold black panther, captured in profile with intricate shadows and stark contrast, embodying raw power and silent dominance.\n\nMột chú báo đen ở góc nhìn nghiêng với sắc độ bóng đậm, tương phản sắc nét, toát lên sức mạnh nguyên thủy và uy lực.",
  },
  {
    src: "https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=800&q=80",
    title: "Vietnamese Unalome Design | Elegant Lotus",
    description: "The lotus, a timeless symbol of Vietnam, represents purity, resilience and gracefulness rising above all.\n\nHoa sen - biểu tượng của Việt Nam, đại diện cho sự thanh khiết, kiên cường và vẻ đẹp thanh cao.",
  },
  {
    src: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=800&q=80",
    title: "Realism | Cupid's Whisper",
    description: "A soft, tender cherub drawing its bow, symbolizing love, innocence and the quiet power of a promise.\n\nThiên thần nhỏ giương cung, biểu tượng của tình yêu, sự thuần khiết và sức mạnh thầm lặng của lời hứa.",
  },
  {
    src: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=800&q=80",
    title: "Fine Line | Sparkle & Motif",
    description: "A subtle shining star adorning the body, shimmering with warmth, confidence and the power of owning your own story.\n\nNgôi sao tinh tế tỏa sáng trên cơ thể, mang lại cảm giác ấm áp, tự tin và sức mạnh của việc làm chủ câu chuyện của chính mình.",
  },
  {
    src: "https://images.unsplash.com/photo-1590246814883-57c511e76523?w=800&q=80",
    title: "Blackwork | Third Eye of Light",
    description: "The Eye of Horus, detailed with luminous accents, symbolizing protection, clarity and spiritual strength.\n\nMắt Horus với chi tiết điểm nhấn ánh sáng, biểu tượng cho sự bảo vệ, trí tuệ và sức mạnh tâm linh.",
  },
  {
    src: "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=800&q=80",
    title: "Lettering | Love Confession",
    description: '"Love you to the moon" — a timeless phrase capturing endless love and deep emotional connection.\n\n"Love you to the moon" - Lời tỏ tình vượt thời gian, thể hiện tình yêu vô tận và sự gắn kết sâu sắc.',
  },
  {
    src: "https://images.unsplash.com/photo-1554774853-719586f82d77?w=800&q=80",
    title: "Fine Line | Scarlet Butterflies",
    description: "Two crimson butterflies drifting gently, symbolizing transformation, freedom and the beauty of becoming.\n\nHai chú bướm đỏ bay nhẹ, tượng trưng cho sự lột xác, tự do và vẻ đẹp của sự trưởng thành.",
  },
  {
    src: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=800&q=80",
    title: "Lettering | Creative Vibe",
    description: '"Express yourself" styled in fun fluid typography, reflecting individuality, creativity and personal evolution.\n\n"Express yourself" với kiểu chữ lượn sóng vui nhộn, thể hiện cá tính, sự sáng tạo và hành trình phát triển bản thân.',
  },
  {
    src: "https://images.unsplash.com/photo-1527576539890-dfa815648363?w=800&q=80",
    title: "Fine Line | Free Spirit Wings",
    description: "A fusion of a tiny butterfly and lettering, symbolizing independence, self-ownership and freedom of identity.\n\nSự kết hợp giữa bướm nhỏ và dòng chữ, tượng trưng cho sự độc lập, tự chủ và quyền tự do thể hiện bản thân.",
  },
  {
    src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800&q=80",
    title: "Fine Line | Tiny Tulip",
    description: "A minimalist tulip design representing gentle love, elegance and quiet beauty in its simplest form.\n\nHoa tulip nhỏ xinh xắn, tượng trưng cho tình yêu nhẹ nhàng, sự tinh tế và vẻ đẹp giản dị.",
  },
  {
    src: "https://images.unsplash.com/photo-1533158388-350df81fface?w=800&q=80",
    title: "Fine Line | Vintage Lily",
    description: "A flowing lily wrapping the body, balancing softness and strength through elegant yet defined lines.\n\nHoa ly ôm theo cơ thể, cân bằng giữa sự mềm mại và sức mạnh thông qua những đường nét thanh tao.",
  },
  {
    src: "https://images.unsplash.com/photo-1544966503-4d07e3eba5f7?w=800&q=80",
    title: "Lettering | Live Spirit",
    description: '"Right now" expressed as a statement of freedom, individuality and living in the moment.\n\n"Right now" thể hiện một tuyên ngôn về sự tự do, cá tính và sống hết mình cho hiện tại.',
  },
  {
    src: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80",
    title: "Fine Line | Family Ribbon",
    description: "A delicate ribbon carrying meaning beyond years, symbolizing love, connections and memories that last forever.\n\nDải ruy băng mang ý nghĩa vượt thời gian, tượng trưng cho tình yêu, sự gắn kết và những kỷ niệm mãi mãi.",
  },
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    title: "Blackwork | Tribal Heart Crown",
    description: "A bold tribal heart crowned with sharp spikes, expressing passion, protection and fierce individuality.\n\nTrái tim bộ lạc đội vương miện gai góc, thể hiện sự đam mê, bảo vệ và cá tính mạnh mẽ.",
  },
];



function FineLineCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const go = useCallback((dir: number) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + collectionItems.length) % collectionItems.length);
  }, []);

  const item = collectionItems[current];

  const slideVariants = {
    enter: (d: number) => ({ x: d > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -300 : 300, opacity: 0 }),
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-muted">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.img
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
            src={item.src}
            alt={item.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Arrows on image */}
        <button
          onClick={() => go(-1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/50 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background/70 transition-colors"
          aria-label="Previous"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => go(1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/50 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background/70 transition-colors"
          aria-label="Next"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Text */}
      <div className="flex flex-col justify-center">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
          >
            <h3 className="font-display text-3xl md:text-4xl text-foreground font-normal">
              {item.title}
            </h3>
            <p className="font-body text-base text-muted-foreground mt-4 leading-relaxed max-w-[400px]">
              {item.description}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="flex items-center gap-2 mt-8">
          {collectionItems.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
              className={`transition-all duration-300 rounded-full ${
                i === current
                  ? "w-8 h-2 bg-foreground"
                  : "w-2 h-2 bg-muted-foreground/40 hover:bg-muted-foreground/60"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

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
            <CharReveal text="DA NANG TATTOO ATELIER" className="eyebrow mb-6 block" stagger={0.04} />
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
            Ink the memory | Lưu giữ kỷ niệm đẹp trên làn da
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
          <Eyebrow>TÁC PHẨM THỰC HIỆN</Eyebrow>
          <RevealText className="mt-4 mb-16">
            <h2 className="font-display text-4xl md:text-[60px] font-normal text-foreground leading-tight tracking-[-0.03em]">
              <WordReveal text="OUR WORKS" />
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
        <div className="content-max text-center">
          <Eyebrow>THỢ XĂM CỦA TIỆM</Eyebrow>
          <RevealText className="mt-4 mb-16">
            <h2 className="font-display text-4xl md:text-[60px] font-normal text-foreground leading-tight tracking-[-0.03em]">
              <WordReveal text="TATTOO ARTIST" />
            </h2>
          </RevealText>
        </div>
        <div
          ref={artistsRef}
          className="hide-scrollbar overflow-x-auto snap-x snap-mandatory flex justify-center gap-6 px-6 lg:px-12 pb-4 md:gap-6"
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
              <WordReveal text="Every ink stroke tells an eternal story" stagger={0.05} />
            </blockquote>
          </RevealText>
          <Reveal direction="up" delay={0.3}>
            <p className="font-body text-sm text-muted-foreground mt-6">
              HÃY KHÁM PHÁ THÊM QUY TRÌNH THỰC HIỆN MỖI HÌNH XĂM TẠI ĐÂY
            </p>
          </Reveal>
          <Reveal direction="scale" delay={0.4}>
            <div className="w-16 h-px bg-border mx-auto mt-8" />
          </Reveal>
          <Reveal direction="right" delay={0.5}>
            <Link to="/process" className="text-link mt-8 inline-block">
              Discover our portfolio →
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
