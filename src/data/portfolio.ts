export interface PortfolioItem {
  id: number;
  src: string;
  title: string;
  artist: string;
  style: string;
  aspect: string;
}

export const portfolioItems: PortfolioItem[] = [
  { id: 1, src: "https://images.unsplash.com/photo-1509281373149-e957c6296406?w=600&q=80", title: "Serpent Garden", artist: "Maëlle Durand", style: "Fine Line", aspect: "3/4" },
  { id: 2, src: "https://images.unsplash.com/photo-1562962230-16e4623d36e6?w=600&q=80", title: "Geometric Bloom", artist: "Ryo Takahashi", style: "Blackwork", aspect: "4/5" },
  { id: 3, src: "https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=600&q=80", title: "Koi Ascent", artist: "Sofia Reyes", style: "Japanese", aspect: "3/4" },
  { id: 4, src: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=600&q=80", title: "Micro Cosmos", artist: "Maëlle Durand", style: "Fine Line", aspect: "1/1" },
  { id: 5, src: "https://images.unsplash.com/photo-1475180098004-ca77a66827be?w=600&q=80", title: "Shadow Mandala", artist: "Sofia Reyes", style: "Geometric", aspect: "4/5" },
  { id: 6, src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80", title: "Wave Form", artist: "Léo Marchand", style: "Watercolor", aspect: "3/4" },
  { id: 7, src: "https://images.unsplash.com/photo-1561883088-039e53143d73?w=600&q=80", title: "Dot Matrix", artist: "Ryo Takahashi", style: "Blackwork", aspect: "1/1" },
  { id: 8, src: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=600&q=80", title: "Botanical Sleeve", artist: "Maëlle Durand", style: "Fine Line", aspect: "4/5" },
  { id: 9, src: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=600&q=80", title: "Dragon Pearl", artist: "Ryo Takahashi", style: "Japanese", aspect: "3/4" },
  { id: 10, src: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&q=80", title: "Abstract Flow", artist: "Léo Marchand", style: "Watercolor", aspect: "4/5" },
  { id: 11, src: "https://images.unsplash.com/photo-1542856391-010fb87dcfed?w=600&q=80", title: "Sacred Geometry", artist: "Sofia Reyes", style: "Geometric", aspect: "1/1" },
  { id: 12, src: "https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?w=600&q=80", title: "Old School Rose", artist: "Léo Marchand", style: "Traditional", aspect: "3/4" },
];

export const styles = ["All", "Fine Line", "Blackwork", "Japanese", "Watercolor", "Geometric", "Traditional"];
