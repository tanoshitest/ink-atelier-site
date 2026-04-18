import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AnimatedPage, RevealText, RevealImage } from "@/components/AnimationUtils";
import { artists } from "@/data/artists";

const ease = [0.16, 1, 0.3, 1];

export default function ArtistProfile() {
  const { slug } = useParams();
  const artist = artists.find((a) => a.slug === slug);

  if (!artist) {
    return (
      <AnimatedPage>
        <div className="min-h-screen flex items-center justify-center">
          <p className="font-body text-muted-foreground">Artist not found.</p>
        </div>
      </AnimatedPage>
    );
  }

  return (
    <AnimatedPage>
      {/* Mobile layout */}
      <div className="lg:hidden">
        <div className="relative h-[50vh]">
          <img src={artist.photo} alt={artist.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        </div>
        <div className="content-max py-12">
          <h1 className="font-display text-4xl text-foreground">{artist.name}</h1>
          <p className="font-body text-sm text-muted-foreground mt-2">{artist.specialty}</p>
          <p className="font-body text-xs text-muted-foreground mt-1">{artist.experience} — {artist.location}</p>
          <p className="font-body text-[15px] text-secondary-foreground/80 mt-6 leading-relaxed max-w-[400px]">
            {artist.bio}
          </p>
          <div className="flex gap-4 mt-6 font-body text-[13px] text-muted-foreground">
            <a href="#" className="text-link">Instagram</a>
            <a href="#" className="text-link">Portfolio</a>
          </div>
          <Link to="/booking" className="btn-primary mt-8 inline-block">
            Book with {artist.name.split(" ")[0]}
          </Link>

          <div className="mt-12" />
          <div className="grid grid-cols-2 gap-2">
            {artist.portfolio.map((img, i) => (
              <img key={i} src={img} alt="" loading="lazy" className="w-full aspect-square object-cover" />
            ))}
          </div>
        </div>
      </div>

      {/* Desktop layout: 1/3 sticky + 2/3 grid layout */}
      <div className="hidden lg:grid grid-cols-[33.33%_minmax(0,1fr)] gap-8 px-12 py-12 items-start max-w-[1400px] mx-auto min-h-screen">
        {/* Left — sticky */}
        <div className="sticky top-12 h-[calc(100vh-6rem)] relative rounded-lg overflow-hidden">
          <img src={artist.photo.replace("w=600", "w=800")} alt={artist.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8">
            <h1 className="font-display text-4xl text-foreground">{artist.name}</h1>
            <p className="font-body text-sm text-foreground/90 mt-2">{artist.specialty}</p>
            <p className="font-body text-xs text-foreground/80 mt-1">{artist.experience} — {artist.location}</p>
            <p className="font-body text-[14.5px] text-foreground/70 mt-4 leading-relaxed lg:max-w-none xl:max-w-[360px]">
              {artist.bio}
            </p>
            <div className="flex gap-4 mt-6 font-body text-[13px]">
              <a href="#" className="text-link">Instagram</a>
              <a href="#" className="text-link">Portfolio</a>
            </div>
            <Link to="/booking" className="btn-primary mt-8 inline-block shadow-lg">
              Book with {artist.name.split(" ")[0]}
            </Link>
          </div>
        </div>

        {/* Right — gallery grid */}
        <div className="grid grid-cols-2 gap-8">
          {artist.portfolio.map((img, i) => (
            <RevealImage key={i} delay={i * 0.05}>
              <div className="overflow-hidden rounded-lg aspect-[3/4]">
                <img
                  src={img}
                  alt=""
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-[600ms]"
                  style={{ transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)" }}
                />
              </div>
            </RevealImage>
          ))}
        </div>
      </div>
    </AnimatedPage>
  );
}
