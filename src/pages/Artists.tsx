import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AnimatedPage, Eyebrow, RevealText, StaggerChildren, fadeUpVariant } from "@/components/AnimationUtils";
import { artists } from "@/data/artists";

export default function ArtistsPage() {
  return (
    <AnimatedPage>
      <div className="pt-32 pb-24">
        <div className="content-max">
          <Eyebrow>OUR TEAM</Eyebrow>
          <RevealText className="mt-4 mb-16">
            <h1 className="font-display text-4xl md:text-[60px] font-normal text-foreground leading-tight tracking-[-0.03em]">
              The artists
            </h1>
          </RevealText>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {artists.map((artist) => (
              <motion.div key={artist.slug} variants={fadeUpVariant}>
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
                  <h2 className="font-display text-2xl text-foreground mt-4 transition-colors duration-300 group-hover:text-accent">
                    {artist.name}
                  </h2>
                  <p className="font-body text-[13px] text-muted-foreground mt-1">{artist.specialty}</p>
                </Link>
              </motion.div>
            ))}
          </StaggerChildren>
        </div>
      </div>
    </AnimatedPage>
  );
}
