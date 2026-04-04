import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { AnimatedPage, Reveal, WordReveal } from "@/components/AnimationUtils";
import { artists } from "@/data/artists";

const ease = [0.32, 0.72, 0, 1];
const steps = ["Artist", "Tattoo", "Date", "Details"];

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
};

const styleOptions = ["Fine Line", "Blackwork", "Japanese", "Watercolor", "Geometric", "Traditional"];
const placementOptions = ["Arm", "Back", "Chest", "Leg", "Ribs", "Neck", "Hand", "Finger", "Other"];
const sizeOptions = ["Small (< 5cm)", "Medium (5-15cm)", "Large (15-30cm)", "Extra Large (30cm+)"];
const timeSlots = ["10:00", "11:30", "14:00", "15:30", "17:00"];

const formRowDir = ["up", "left", "right"] as const;

export default function BookingPage() {
  const [step, setStep] = useState(0);
  const [dir, setDir] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [selectedArtist, setSelectedArtist] = useState("");
  const [style, setStyle] = useState("");
  const [placement, setPlacement] = useState("");
  const [size, setSize] = useState("");
  const [description, setDescription] = useState("");
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [medical, setMedical] = useState("");
  const [depositAgreed, setDepositAgreed] = useState(false);

  const next = () => { setDir(1); setStep((s) => Math.min(s + 1, 3)); };
  const prev = () => { setDir(-1); setStep((s) => Math.max(s - 1, 0)); };

  const today = new Date();
  const days = Array.from({ length: 30 }, (_, i) => {
    const d = new Date(today);
    d.setDate(d.getDate() + i + 1);
    return d;
  });
  const isAvailable = (d: Date) => d.getDay() !== 0 && d.getDay() !== 1;

  if (submitted) {
    return (
      <AnimatedPage>
        <div className="min-h-screen flex items-center justify-center px-6">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease }}
            className="text-center max-w-md"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5, ease }}
              className="w-16 h-16 border border-foreground/50 flex items-center justify-center mx-auto mb-8"
            >
              <Check className="w-8 h-8 text-foreground" />
            </motion.div>
            <h1 className="font-display text-3xl text-foreground">Your consultation is booked</h1>
            <p className="font-body text-sm text-muted-foreground mt-4 leading-relaxed">
              We'll be in touch within 24 hours to confirm your appointment details.
            </p>
          </motion.div>
        </div>
      </AnimatedPage>
    );
  }

  return (
    <AnimatedPage>
      <div className="min-h-screen pt-28 pb-24 px-6">
        <div className="max-w-2xl mx-auto">
          {/* Progress bar */}
          <div className="flex items-center gap-0 mb-16">
            {steps.map((s, i) => (
              <div key={s} className="flex items-center flex-1">
                <div className="flex flex-col items-center">
                  <div className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${i <= step ? "bg-foreground" : "bg-border"}`} />
                  <span className={`font-body text-[10px] uppercase tracking-[0.1em] mt-2 transition-colors duration-300 ${i <= step ? "text-foreground" : "text-muted-foreground"}`}>
                    {s}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div className={`flex-1 h-px mx-2 transition-colors duration-300 ${i < step ? "bg-foreground" : "bg-border"}`} />
                )}
              </div>
            ))}
          </div>

          {/* Step content */}
          <div className="relative overflow-hidden min-h-[500px]">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={step}
                custom={dir}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease }}
              >
                {step === 0 && (
                  <div>
                    <h2 className="font-display text-3xl text-foreground mb-2">
                      <WordReveal text="Choose your artist" />
                    </h2>
                    <p className="font-body text-sm text-muted-foreground mb-10">Select the artist you'd like to work with.</p>
                    <div className="grid grid-cols-2 gap-4">
                      {artists.map((artist) => (
                        <button
                          key={artist.slug}
                          onClick={() => setSelectedArtist(artist.slug)}
                          className={`text-left group transition-all duration-300 border ${
                            selectedArtist === artist.slug ? "border-foreground" : "border-border hover:border-foreground/30"
                          }`}
                          style={{ borderRadius: 0 }}
                        >
                          <img src={artist.photo} alt={artist.name} className="w-full aspect-[3/4] object-cover" />
                          <div className="p-4">
                            <p className="font-display text-lg text-foreground">{artist.name}</p>
                            <p className="font-body text-xs text-muted-foreground mt-1">{artist.specialty}</p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {step === 1 && (
                  <div>
                    <h2 className="font-display text-3xl text-foreground mb-2">
                      <WordReveal text="Tell us about your tattoo" />
                    </h2>
                    <p className="font-body text-sm text-muted-foreground mb-10">Share your vision with us.</p>
                    <div className="space-y-8">
                      <Reveal direction="up" delay={0}>
                        <div>
                          <label className="eyebrow block mb-3">Style</label>
                          <div className="flex flex-wrap gap-2">
                            {styleOptions.map((s) => (
                              <button key={s} onClick={() => setStyle(s)} className={`font-body text-xs px-5 py-2 border transition-all duration-300 ${style === s ? "bg-foreground text-background border-foreground" : "bg-transparent text-muted-foreground border-border"}`} style={{ borderRadius: 0 }}>{s}</button>
                            ))}
                          </div>
                        </div>
                      </Reveal>
                      <Reveal direction="left" delay={0.1}>
                        <div>
                          <label className="eyebrow block mb-3">Placement</label>
                          <div className="flex flex-wrap gap-2">
                            {placementOptions.map((p) => (
                              <button key={p} onClick={() => setPlacement(p)} className={`font-body text-xs px-5 py-2 border transition-all duration-300 ${placement === p ? "bg-foreground text-background border-foreground" : "bg-transparent text-muted-foreground border-border"}`} style={{ borderRadius: 0 }}>{p}</button>
                            ))}
                          </div>
                        </div>
                      </Reveal>
                      <Reveal direction="right" delay={0.15}>
                        <div>
                          <label className="eyebrow block mb-3">Size</label>
                          <div className="flex flex-wrap gap-2">
                            {sizeOptions.map((s) => (
                              <button key={s} onClick={() => setSize(s)} className={`font-body text-xs px-5 py-2 border transition-all duration-300 ${size === s ? "bg-foreground text-background border-foreground" : "bg-transparent text-muted-foreground border-border"}`} style={{ borderRadius: 0 }}>{s}</button>
                            ))}
                          </div>
                        </div>
                      </Reveal>
                      <Reveal direction="up" delay={0.2}>
                        <div>
                          <label className="eyebrow block mb-3">Reference images</label>
                          <div className="border border-dashed border-border p-8 text-center">
                            <p className="font-body text-sm text-muted-foreground">Upload reference images</p>
                            <p className="font-body text-xs text-muted-foreground/60 mt-1">Drag & drop or click to browse</p>
                          </div>
                        </div>
                      </Reveal>
                      <Reveal direction="left" delay={0.25}>
                        <div>
                          <label className="eyebrow block mb-3">Description</label>
                          <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Describe your vision..." rows={4} className="input-dark border border-border w-full p-4 resize-none" />
                        </div>
                      </Reveal>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div>
                    <h2 className="font-display text-3xl text-foreground mb-2">
                      <WordReveal text="Pick a date" />
                    </h2>
                    <p className="font-body text-sm text-muted-foreground mb-10">Choose your preferred consultation date and time.</p>
                    <div className="grid grid-cols-7 gap-2 mb-12">
                      {days.map((d, i) => {
                        const avail = isAvailable(d);
                        const selected = selectedDate === i;
                        return (
                          <button key={i} disabled={!avail} onClick={() => setSelectedDate(i)} className={`font-body text-xs py-3 border transition-all duration-300 ${selected ? "bg-foreground text-background border-foreground" : avail ? "text-foreground border-border hover:border-foreground/50" : "text-border border-border cursor-not-allowed"}`} style={{ borderRadius: 0 }}>
                            <div className="text-[10px] text-inherit opacity-60">{d.toLocaleDateString("en", { weekday: "short" })}</div>
                            {d.getDate()}
                          </button>
                        );
                      })}
                    </div>
                    {selectedDate !== null && (
                      <Reveal direction="up">
                        <div>
                          <label className="eyebrow block mb-4">Time</label>
                          <div className="flex flex-wrap gap-3">
                            {timeSlots.map((t) => (
                              <button key={t} onClick={() => setSelectedTime(t)} className={`font-body text-sm px-6 py-3 border transition-all duration-300 ${selectedTime === t ? "bg-foreground text-background border-foreground" : "text-foreground border-border hover:border-foreground/50"}`} style={{ borderRadius: 0 }}>{t}</button>
                            ))}
                          </div>
                        </div>
                      </Reveal>
                    )}
                  </div>
                )}

                {step === 3 && (
                  <div>
                    <h2 className="font-display text-3xl text-foreground mb-2">
                      <WordReveal text="Your details" />
                    </h2>
                    <p className="font-body text-sm text-muted-foreground mb-10">Almost there — tell us how to reach you.</p>
                    <div className="space-y-8">
                      {[
                        { label: "Name", type: "text", value: name, set: setName, ph: "Your full name" },
                        { label: "Email", type: "email", value: email, set: setEmail, ph: "your@email.com" },
                        { label: "Phone", type: "tel", value: phone, set: setPhone, ph: "+33 ..." },
                      ].map((field, i) => (
                        <Reveal key={field.label} direction={formRowDir[i % 3]} delay={i * 0.08}>
                          <div>
                            <label className="eyebrow block mb-3">{field.label}</label>
                            <input type={field.type} value={field.value} onChange={(e) => field.set(e.target.value)} className="input-dark" placeholder={field.ph} />
                          </div>
                        </Reveal>
                      ))}
                      <Reveal direction="up" delay={0.25}>
                        <div>
                          <label className="eyebrow block mb-3">Medical notes</label>
                          <textarea value={medical} onChange={(e) => setMedical(e.target.value)} placeholder="Any medical conditions or allergies we should know about?" rows={3} className="input-dark border border-border w-full p-4 resize-none" />
                        </div>
                      </Reveal>
                      <Reveal direction="left" delay={0.3}>
                        <label className="flex items-start gap-3 cursor-pointer">
                          <input type="checkbox" checked={depositAgreed} onChange={(e) => setDepositAgreed(e.target.checked)} className="mt-1 accent-foreground" />
                          <span className="font-body text-sm text-muted-foreground">
                            I understand that a 50€ deposit is required to confirm my booking
                          </span>
                        </label>
                      </Reveal>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-between mt-12">
            {step > 0 ? (
              <button onClick={prev} className="text-link">← Back</button>
            ) : <div />}
            {step < 3 ? (
              <button onClick={next} className="btn-primary">Continue →</button>
            ) : (
              <button onClick={() => setSubmitted(true)} className="btn-inverted">Confirm booking</button>
            )}
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}
