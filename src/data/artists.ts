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
    slug: "maelle-durand",
    name: "Maëlle Durand",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80",
    specialty: "Fine Line & Botanical",
    experience: "8 years",
    location: "Paris, FR",
    bio: "Maëlle draws from the organic geometry of nature — her fine-line florals and micro-realistic botanicals have earned a devoted following across Europe. Every piece is a meditation on impermanence.",
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
    slug: "ryo-takahashi",
    name: "Ryo Takahashi",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    specialty: "Japanese Traditional",
    experience: "12 years",
    location: "Tokyo → Paris",
    bio: "Ryo brings the discipline of traditional Japanese tattooing to contemporary skin. His bold compositions honor centuries of irezumi while pushing into modern territory.",
    portfolio: [
      "https://images.unsplash.com/photo-1562962230-16e4623d36e6?w=1000&q=80",
      "https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=1000&q=80",
      "https://images.unsplash.com/photo-1561883088-039e53143d73?w=1000&q=80",
      "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=1000&q=80",
      "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=1000&q=80",
      "https://images.unsplash.com/photo-1475180098004-ca77a66827be?w=1000&q=80",
    ],
  },
  {
    slug: "sofia-reyes",
    name: "Sofia Reyes",
    photo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=600&q=80",
    specialty: "Blackwork & Geometric",
    experience: "6 years",
    location: "Barcelona → Paris",
    bio: "Sofia's work lives at the intersection of sacred geometry and modern minimalism. Her blackwork pieces are architectural — precise, bold, and utterly striking.",
    portfolio: [
      "https://images.unsplash.com/photo-1475180098004-ca77a66827be?w=1000&q=80",
      "https://images.unsplash.com/photo-1542856391-010fb87dcfed?w=1000&q=80",
      "https://images.unsplash.com/photo-1562962230-16e4623d36e6?w=1000&q=80",
      "https://images.unsplash.com/photo-1509281373149-e957c6296406?w=1000&q=80",
      "https://images.unsplash.com/photo-1561883088-039e53143d73?w=1000&q=80",
      "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=1000&q=80",
    ],
  },
  {
    slug: "leo-marchand",
    name: "Léo Marchand",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80",
    specialty: "Watercolor & Abstract",
    experience: "10 years",
    location: "Lyon → Paris",
    bio: "Léo paints with needles. His watercolor technique defies convention — soft washes of color that seem to bleed beyond the skin's surface. Each piece is a one-of-a-kind painting.",
    portfolio: [
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1000&q=80",
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=1000&q=80",
      "https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?w=1000&q=80",
      "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=1000&q=80",
      "https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=1000&q=80",
      "https://images.unsplash.com/photo-1542856391-010fb87dcfed?w=1000&q=80",
    ],
  },
];
