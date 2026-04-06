import { motion, useScroll, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import {
  AnimatedPage, Eyebrow, Reveal, ClipReveal, WordReveal,
  ParallaxImage, RevealText,
} from "@/components/AnimationUtils";

const ease = [0.16, 1, 0.3, 1];
const clipDirs = ["cl", "cr"] as const;

const chapters = [
  {
    num: "01",
    eyebrow: "CHAPTER 01",
    heading: "The conversation",
    body: "Every journey begins with listening. During your consultation, we explore your vision — the meaning behind the mark, the placement on your body, and the style that speaks to your story. This conversation is sacred. We never rush it.",
    images: [
      "https://images.unsplash.com/photo-1509281373149-e957c6296406?w=600&q=80",
      "https://images.unsplash.com/photo-1562962230-16e4623d36e6?w=600&q=80",
      "https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=600&q=80",
    ],
  },
  {
    num: "02",
    eyebrow: "CHAPTER 02",
    heading: "The blueprint",
    body: "Your artist translates the conversation into graphite and ink. Multiple sketches, digital refinements, and placement studies on your specific anatomy. We iterate until the design feels inevitable — as though it always belonged there.",
    images: [
      "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=600&q=80",
      "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=600&q=80",
      "https://images.unsplash.com/photo-1475180098004-ca77a66827be?w=600&q=80",
    ],
  },
  {
    num: "03",
    eyebrow: "CHAPTER 03",
    heading: "Ink meets skin",
    body: "The studio transforms. Music is curated to your taste. Your artist prepares their station with medical-grade sterilization — every needle is single-use, every surface is clinical. Then the work begins.",
    images: [
      "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=600&q=80",
      "https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?w=600&q=80",
      "https://images.unsplash.com/photo-1542856391-010fb87dcfed?w=600&q=80",
    ],
  },
  {
    num: "04",
    eyebrow: "CHAPTER 04",
    heading: "The healing",
    body: "A tattoo is a wound that becomes art. Proper aftercare is the final act of creation. We provide detailed healing instructions tailored to your skin type and tattoo location. Touch-ups within the first year are always complimentary.",
    images: [
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&q=80",
      "https://images.unsplash.com/photo-1561883088-039e53143d73?w=600&q=80",
      "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=600&q=80",
    ],
  },
  {
    num: "05",
    eyebrow: "CHAPTER 05",
    heading: "Fine line mastery",
    body: "Mỗi đường nét mảnh như sợi tóc đều đòi hỏi sự chính xác tuyệt đối. Nghệ sĩ của chúng tôi dành hàng nghìn giờ luyện tập để đạt được sự tinh tế trong từng chi tiết nhỏ nhất — nơi nghệ thuật gặp gỡ sự kiên nhẫn.",
    images: [
      "https://images.unsplash.com/photo-1590246814883-57c511e76e64?w=600&q=80",
      "https://images.unsplash.com/photo-1509281373149-e957c6296406?w=600&q=80",
      "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=600&q=80",
    ],
  },
  {
    num: "06",
    eyebrow: "CHAPTER 06",
    heading: "The studio ritual",
    body: "Không gian sáng tạo là nền tảng cho mọi tác phẩm. Ánh sáng được điều chỉnh, hương thơm được lựa chọn, và mọi thứ được chuẩn bị để bạn cảm thấy thoải mái nhất. Đây không chỉ là nơi xăm — đây là trải nghiệm.",
    images: [
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80",
      "https://images.unsplash.com/photo-1562962230-16e4623d36e6?w=600&q=80",
      "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=600&q=80",
    ],
  },
  {
    num: "07",
    eyebrow: "CHAPTER 07",
    heading: "Beyond the ink",
    body: "Mối quan hệ giữa nghệ sĩ và khách hàng không kết thúc khi kim ngừng chạm da. Chúng tôi đồng hành cùng bạn trong suốt hành trình — từ ý tưởng ban đầu đến khi hình xăm trở thành một phần của câu chuyện cuộc đời bạn.",
    images: [
      "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=600&q=80",
      "https://images.unsplash.com/photo-1475180098004-ca77a66827be?w=600&q=80",
      "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=600&q=80",
    ],
  },
];
export default function CollectionPage() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <AnimatedPage>
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease }}
            className="font-display text-5xl md:text-7xl font-normal text-foreground tracking-[-0.03em]"
          >
            <WordReveal text="Collection" stagger={0.06} />
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease }}
            className="font-body text-base text-muted-foreground mt-4"
          >
            From vision to permanence
          </motion.p>
        </div>
      </section>

      {/* Sticky sidebar + chapters */}
      <div className="relative">
        <div className="hidden lg:block fixed left-12 top-1/2 -translate-y-1/2 z-30 space-y-6">
          {chapters.map((ch, i) => (
            <Reveal key={ch.num} direction={i % 2 === 0 ? "left" : "right"} delay={i * 0.1}>
              <a
                href={`#chapter-${ch.num}`}
                className="block font-body text-[11px] uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {ch.num}
              </a>
            </Reveal>
          ))}
        </div>

        {/* Chapters */}
        {chapters.map((ch, i) => (
          <section
            key={ch.num}
            id={`chapter-${ch.num}`}
            className="section-spacing"
          >
            <div className="content-max max-w-[1000px]">
              <Eyebrow>{ch.eyebrow}</Eyebrow>
              <RevealText className="mt-4">
                <h2 className="font-display text-3xl md:text-5xl font-normal text-foreground leading-tight tracking-[-0.03em]">
                  <WordReveal text={ch.heading} />
                </h2>
              </RevealText>
              <Reveal direction="up" delay={0.15}>
                <p className="font-body text-[15px] text-secondary-foreground/80 mt-8 leading-relaxed max-w-[640px]">
                  {ch.body}
                </p>
              </Reveal>
              <div className="grid grid-cols-3 gap-3 mt-12">
                {ch.images.map((img, j) => (
                  <ClipReveal key={j} direction={["cl", "cu", "cr"][j % 3] as "cl" | "cu" | "cr"} delay={0.2 + j * 0.1}>
                    <img
                      src={img}
                      alt={`${ch.heading} ${j + 1}`}
                      loading="lazy"
                      className="w-full aspect-[3/4] object-cover rounded-sm"
                    />
                  </ClipReveal>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="section-spacing">
          <div className="content-max text-center">
            <RevealText>
              <h2 className="font-display text-3xl md:text-5xl text-foreground tracking-[-0.03em]">
                <WordReveal text="Ready to begin?" />
              </h2>
            </RevealText>
            <Reveal direction="up" delay={0.1} className="mt-8">
              <Link to="/booking" className="btn-primary">
                Book an appointment
              </Link>
            </Reveal>
          </div>
        </section>
      </div>
    </AnimatedPage>
  );
}
