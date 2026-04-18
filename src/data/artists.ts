export interface Artist {
  slug: string;
  name: string;
  photo: string;
  specialty: string;
  experience: string;
  location: string;
  bio: string;
  portfolio: string[];
}

export const artists: Artist[] = [
  {
    slug: "esther",
    name: "Esther",
    photo: "/media/16.png",
    specialty: "Fine Line & Blackwork",
    experience: "8 years",
    location: "Paris, FR",
    bio: "Esther draws from the organic geometry of nature — her fine-line florals and micro-realistic botanicals have earned a devoted following across Europe. Every piece is a meditation on impermanence.",
    portfolio: [
      "https://images.unsplash.com/photo-1509281373149-e957c6296406?w=1000&q=80",
      "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=1000&q=80",
      "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=1000&q=80",
      "https://images.unsplash.com/photo-1475180098004-ca77a66827be?w=1000&q=80",
      "https://images.unsplash.com/photo-1561883088-039e53143d73?w=1000&q=80",
      "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=1000&q=80",
    ],
  },
  {
    slug: "douces",
    name: "Douces",
    photo: "/media/Douces1.png",
    specialty: "Fine Line & Blackwork",
    experience: "12 years",
    location: "Tokyo → Paris",
    bio: "Douces focuses on minimalist tattooing and blackwork, translating bold ideas into refined, small-scale designs. His work emphasizes clean composition, strong contrast, and lasting visual impact—where simplicity meets precision.",
    portfolio: [
      "https://images.unsplash.com/photo-1562962230-16e4623d36e6?w=1000&q=80",
      "https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=1000&q=80",
      "https://images.unsplash.com/photo-1561883088-039e53143d73?w=1000&q=80",
      "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=1000&q=80",
      "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=1000&q=80",
      "https://images.unsplash.com/photo-1475180098004-ca77a66827be?w=1000&q=80",
    ],
  },
];
