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

          <h2 className="font-display text-2xl text-foreground mt-16 mb-8">Selected work</h2>
          <div className="grid grid-cols-2 gap-2">
            {artist.portfolio.map((img, i) => (
              <img key={i} src={img} alt="" loading="lazy" className="w-full aspect-square object-cover" />
            ))}
          </div>
        </div>
      </div>

      {/* Desktop split layout */}
      <div className="hidden lg:grid grid-cols-[40%_60%] min-h-screen">
        {/* Left — sticky */}
        <div className="sticky top-0 h-screen relative">
          <img src={artist.photo.replace("w=600", "w=800")} alt={artist.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 p-10">
            <h1 className="font-display text-4xl text-foreground">{artist.name}</h1>
            <p className="font-body text-sm text-muted-foreground mt-2">{artist.specialty}</p>
            <p className="font-body text-xs text-muted-foreground mt-1">{artist.experience} — {artist.location}</p>
            <p className="font-body text-[15px] text-secondary-foreground/80 mt-4 leading-relaxed max-w-[360px]">
              {artist.bio}
            </p>
            <div className="flex gap-4 mt-4 font-body text-[13px]">
              <a href="#" className="text-link">Instagram</a>
              <a href="#" className="text-link">Portfolio</a>
            </div>
            <Link to="/booking" className="btn-primary mt-8 inline-block">
              Book with {artist.name.split(" ")[0]}
            </Link>
          </div>
        </div>

        {/* Right — scrollable */}
        <div className="pt-32 px-8">
          <RevealText>
            <h2 className="font-display text-2xl text-foreground mb-8">Selected work</h2>
          </RevealText>
          <div className="space-y-2">
            {artist.portfolio.map((img, i) => (
              <RevealImage key={i} delay={i * 0.05}>
                <img
                  src={img}
                  alt=""
                  loading="lazy"
                  className="w-full object-cover hover:brightness-110 transition-all duration-500"
                />
              </RevealImage>
            ))}
          </div>
          <div className="h-24" />
        </div>
      </div>
    </AnimatedPage>
  );
}
