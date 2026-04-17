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
import { useRef, useState, useCallback, useEffect } from "react";

const ease = [0.16, 1, 0.3, 1];
const clipDirs = ["cl", "cu", "cr"] as const;

const collectionItems = [
  {
    src: "/media/1.png",
    title: "Fine Line | Floral Tribe",
    description: "A delicate floral line gracefully flowing along the waist, enhancing natural curves with softness and elegance.\n\nKhóm hoa mảnh mai uốn lượn eo, tôn lên đường cong tự nhiên với vẻ mềm mại và tinh tế.",
  },
  {
    src: "/media/2.png",
    title: "Blackwork | Shadow Panther",
    description: "A bold black panther, captured in profile with intricate shadows and stark contrast, embodying raw power and silent dominance.\n\nMột chú báo đen ở góc nhìn nghiêng với sắc độ bóng đậm, tương phản sắc nét, toát lên sức mạnh nguyên thủy và uy lực.",
  },
  {
    src: "/media/3.png",
    title: "Vietnamese Unalome Design | Elegant Lotus",
    description: "The lotus, a timeless symbol of Vietnam, represents purity, resilience and gracefulness rising above all.\n\nHoa sen - biểu tượng của Việt Nam, đại diện cho sự thanh khiết, kiên cường và vẻ đẹp thanh cao.",
  },
  {
    src: "/media/4.png",
    title: "Realism | Cupid's Whisper",
    description: "A soft, tender cherub drawing its bow, symbolizing love, innocence and the quiet power of a promise.\n\nThiên thần nhỏ giương cung, biểu tượng của tình yêu, sự thuần khiết và sức mạnh thầm lặng của lời hứa.",
  },
  {
    src: "/media/5.png",
    title: "Fine Line | Sparkle & Motif",
    description: "A subtle shining star adorning the body, shimmering with warmth, confidence and the power of owning your own story.\n\nNgôi sao tinh tế tỏa sáng trên cơ thể, mang lại cảm giác ấm áp, tự tin và sức mạnh của việc làm chủ câu chuyện của chính mình.",
  },
  {
    src: "/media/6.png",
    title: "Blackwork | Third Eye of Light",
    description: "The Eye of Horus, detailed with luminous accents, symbolizing protection, clarity and spiritual strength.\n\nMắt Horus với chi tiết điểm nhấn ánh sáng, biểu tượng cho sự bảo vệ, trí tuệ và sức mạnh tâm linh.",
  },
  {
    src: "/media/7.png",
    title: "Lettering | Love Confession",
    description: '"Love you to the moon" — a timeless phrase capturing endless love and deep emotional connection.\n\n"Love you to the moon" - Lời tỏ tình vượt thời gian, thể hiện tình yêu vô tận và sự gắn kết sâu sắc.',
  },
  {
    src: "/media/8.png",
    title: "Fine Line | Scarlet Butterflies",
    description: "Two crimson butterflies drifting gently, symbolizing transformation, freedom and the beauty of becoming.\n\nHai chú bướm đỏ bay nhẹ, tượng trưng cho sự lột xác, tự do và vẻ đẹp của sự trưởng thành.",
  },
  {
    src: "/media/9.png",
    title: "Lettering | Creative Vibe",
    description: '"Express yourself" styled in fun fluid typography, reflecting individuality, creativity and personal evolution.\n\n"Express yourself" với kiểu chữ lượn sóng vui nhộn, thể hiện cá tính, sự sáng tạo và hành trình phát triển bản thân.',
  },
  {
    src: "/media/10.png",
    title: "Fine Line | Free Spirit Wings",
    description: "A fusion of a tiny butterfly and lettering, symbolizing independence, self-ownership and freedom of identity.\n\nSự kết hợp giữa bướm nhỏ và dòng chữ, tượng trưng cho sự độc lập, tự chủ và quyền tự do thể hiện bản thân.",
  },
  {
    src: "/media/11.png",
    title: "Fine Line | Tiny Tulip",
    description: "A minimalist tulip design representing gentle love, elegance and quiet beauty in its simplest form.\n\nHoa tulip nhỏ xinh xắn, tượng trưng cho tình yêu nhẹ nhàng, sự tinh tế và vẻ đẹp giản dị.",
  },
  {
    src: "/media/12.png",
    title: "Fine Line | Vintage Lily",
    description: "A flowing lily wrapping the body, balancing softness and strength through elegant yet defined lines.\n\nHoa ly ôm theo cơ thể, cân bằng giữa sự mềm mại và sức mạnh thông qua những đường nét thanh tao.",
  },
  {
    src: "/media/14.png",
    title: "Lettering | Live Spirit",
    description: '"Right now" expressed as a statement of freedom, individuality and living in the moment.\n\n"Right now" thể hiện một tuyên ngôn về sự tự do, cá tính và sống hết mình cho hiện tại.',
  },
  {
    src: "/media/15.png",
    title: "Fine Line | Family Ribbon",
    description: "A delicate ribbon carrying meaning beyond years, symbolizing love, connections and memories that last forever.\n\nDải ruy băng mang ý nghĩa vượt thời gian, tượng trưng cho tình yêu, sự gắn kết và những kỷ niệm mãi mãi.",
  },
  {
    src: "/media/15.png",
    title: "Blackwork | Tribal Heart Crown",
    description: "A bold tribal heart crowned with sharp spikes, expressing passion, protection and fierce individuality.\n\nTrái tim bộ lạc đội vương miện gai góc, thể hiện sự đam mê, bảo vệ và cá tính mạnh mẽ.",
  },
];



function FineLineCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const go = useCallback((dir: number) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + collectionItems.length) % collectionItems.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % collectionItems.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const item = collectionItems[current];

  const slideVariants = {
    enter: (d: number) => ({ x: d > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -300 : 300, opacity: 0 }),
  };

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
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
            src="/media/IMG_1019 (1).PNG"
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
            <p className="font-body text-sm text-muted-foreground mt-6 uppercase tracking-wider">
              Hân hạnh được để trên bạn 1 kỉ niệm
            </p>
          </Reveal>
          <Reveal direction="scale" delay={0.4}>
            <div className="w-16 h-px bg-border mx-auto mt-8" />
          </Reveal>
          <Reveal direction="right" delay={0.5}>
            <a href="https://www.instagram.com/douces.ink/" target="_blank" rel="noopener noreferrer" className="text-link mt-8 inline-block">
              Discover our works →
            </a>
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
            <a href="https://www.instagram.com/douces.ink/" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Book an appointment
            </a>
            <Reveal direction="right" delay={0.35}>
              <a href="https://www.facebook.com/340012192536846" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Contact via Facebook
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
      {/* Map Section */}
      <section className="relative w-full h-[420px] md:h-[500px] overflow-hidden">
        {/* Google Maps Embed */}
        <iframe
          title="Douces Ink Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30671.815726867168!2d108.1892146!3d16.06668505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219eee4d5294f%3A0xe15bb31335f23f1e!2sdouces.ink!5e0!3m2!1svi!2svn!4v1776250739196!5m2!1svi!2svn"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "grayscale(20%) contrast(1.05)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 w-full h-full"
        />

        {/* Info Card */}
        <div className="absolute top-6 left-6 z-10 bg-background/95 backdrop-blur-md rounded-xl shadow-2xl p-5 max-w-[260px] border border-border">
          <div className="flex items-start justify-between gap-2 mb-1">
            <h3 className="font-display text-lg font-semibold text-foreground leading-tight">douces.ink</h3>
            <a
              href="https://maps.app.goo.gl/2QN6sZ3mMM2n1DPLA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors mt-0.5"
              aria-label="Open in Google Maps"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1.5 mb-3">
            <span className="text-sm font-medium text-foreground">5.0</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              ))}
            </div>
            <span className="text-xs text-muted-foreground">(120)</span>
          </div>

          <div className="space-y-2 text-sm">
            {/* Address */}
            <div className="flex items-start gap-2 text-muted-foreground">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-red-500"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>Douces Ink, Thanh Khê, Đà Nẵng</span>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-2 text-muted-foreground">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-red-500"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.56 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <a href="tel:0362755400" className="hover:text-foreground transition-colors">0362755400</a>
            </div>

            {/* Hours */}
            <div className="flex items-center gap-2 text-muted-foreground">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <span>T2–CN: 14:00 – 02:00</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-2 mt-4">
            <a
              href="https://maps.app.goo.gl/2QN6sZ3mMM2n1DPLA"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center text-xs font-medium bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors px-3 py-2 rounded-lg"
            >
              Chỉ đường
            </a>
            <a
              href="https://maps.app.goo.gl/2QN6sZ3mMM2n1DPLA"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center text-xs font-medium bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors px-3 py-2 rounded-lg"
            >
              Xem Google Maps
            </a>
          </div>
        </div>
      </section>
    </AnimatedPage>

  );
}
