import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="content-max section-spacing">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="font-display text-2xl tracking-[0.08em] text-foreground">
              DOUCES
            </Link>
            <p className="font-body text-sm italic text-muted-foreground mt-3">
              L'art sur la peau
            </p>
            <p className="font-body text-xs text-muted-foreground mt-6">
              &copy; 2026 Douces. All rights reserved.
            </p>
          </div>

          {/* Studio */}
          <div>
            <h4 className="eyebrow mb-6">Studio</h4>
            <div className="space-y-3 font-body text-[13px] text-muted-foreground">
              <p>THANH KHE, DA NANG</p>
              <p className="mt-4">+84 0362 755 400</p>
              <p>douces.ink0831@gmail.com</p>
            </div>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="eyebrow mb-6">Navigate</h4>
            <div className="space-y-3">
              {["Portfolio", "Booking"].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className="block font-body text-[13px] text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Follow */}
          <div>
            <h4 className="eyebrow mb-6">Follow</h4>
            <div className="space-y-3">
              {[
                { name: "Instagram", url: "https://www.instagram.com/douces.ink/" },
                { name: "TikTok", url: "https://www.tiktok.com/@doucesink.danang" },
                { name: "Facebook", url: "https://www.facebook.com/340012192536846" },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block font-body text-[13px] text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  {item.name}
                </a>
              ))}
              <p className="font-body text-[13px] text-muted-foreground mt-6">
                Open daily: 8 am – 12 pm
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
