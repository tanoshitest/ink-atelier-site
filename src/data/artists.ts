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
    photo: "/media/16.webp",
    specialty: "Fine Line & Blackwork",
    experience: "8 years",
    location: "Paris, FR",
    bio: "Esther draws from the organic geometry of nature — her fine-line florals and micro-realistic botanicals have earned a devoted following across Europe. Every piece is a meditation on impermanence.",
    portfolio: [
      "/media/IMG_1501.webp",
      "/media/IMG_1633.webp",
      "/media/esther/3.webp",
      "/media/esther/4.webp",
      "/media/esther/5.webp",
      "/media/esther/6.webp",
      "/media/esther/7.webp",
      "/media/esther/8.webp",
    ],
  },
  {
    slug: "douces",
    name: "Douces",
    photo: "/media/Douces1.webp",
    specialty: "Fine Line & Blackwork",
    experience: "12 years",
    location: "Tokyo → Paris",
    bio: "Douces focuses on minimalist tattooing and blackwork, translating bold ideas into refined, small-scale designs. His work emphasizes clean composition, strong contrast, and lasting visual impact—where simplicity meets precision.",
    portfolio: [
      "/media/IMG_1638.webp",
      "/media/IMG_1745.webp",
      "/media/douces/IMG_0777.webp",
      "/media/douces/IMG_1203.webp",
      "/media/douces/IMG_1501.webp",
      "/media/douces/IMG_1639.webp",
      "/media/douces/IMG_1642.webp",
      "/media/douces/IMG_1986.webp",
      "/media/douces/f9548928.webp",
    ],
  },
];
