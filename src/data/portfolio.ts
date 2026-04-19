export interface PortfolioItem {
  id: number;
  src: string;
  title: string;
  artist: string;
  style: string;
  aspect: string;
}

export const portfolioItems: PortfolioItem[] = [
  // FEATURED IN "ALL" (Top 6 explicitly ordered)
  { id: 47, src: "/media/bo-anh-20/2.png", title: "Realism #2", artist: "DOUCES Studio", style: "Realism", aspect: "3/4" },
  { id: 2, src: "/media/bo-anh-18/2.png", title: "Sexy Placement #2", artist: "DOUCES Studio", style: "Sexy Placement", aspect: "3/4" },
  { id: 51, src: "/media/bo-anh-20/6.png", title: "Realism #6", artist: "DOUCES Studio", style: "Realism", aspect: "3/4" },
  { id: 97, src: "/media/bo-anh-23/2.png", title: "Vietnamese Inspired #2", artist: "DOUCES Studio", style: "Vietnamese Inspired", aspect: "3/4" },
  { id: 96, src: "/media/bo-anh-23/1.png", title: "Vietnamese Inspired #1", artist: "DOUCES Studio", style: "Vietnamese Inspired", aspect: "3/4" },
  { id: 57, src: "/media/bo-anh-21/2.png", title: "Lettering #2", artist: "DOUCES Studio", style: "Lettering", aspect: "3/4" },

  // bo-anh-18 → Sexy Placement (26 ảnh)
  { id: 1, src: "/media/bo-anh-18/1.png", title: "Sexy Placement #1", artist: "DOUCES Studio", style: "Sexy Placement", aspect: "3/4" },
  { id: 3, src: "/media/bo-anh-18/3.png", title: "Sexy Placement #3", artist: "DOUCES Studio", style: "Sexy Placement", aspect: "3/4" },
  { id: 4, src: "/media/bo-anh-18/4.png", title: "Sexy Placement #4", artist: "DOUCES Studio", style: "Sexy Placement", aspect: "3/4" },
  { id: 5, src: "/media/bo-anh-18/5.png", title: "Sexy Placement #5", artist: "DOUCES Studio", style: "Sexy Placement", aspect: "3/4" },
  { id: 6, src: "/media/bo-anh-18/6.png", title: "Sexy Placement #6", artist: "DOUCES Studio", style: "Sexy Placement", aspect: "3/4" },
  { id: 7, src: "/media/bo-anh-18/7.png", title: "Sexy Placement #7", artist: "DOUCES Studio", style: "Sexy Placement", aspect: "3/4" },
  { id: 8, src: "/media/bo-anh-18/8.png", title: "Sexy Placement #8", artist: "DOUCES Studio", style: "Sexy Placement", aspect: "3/4" },
  { id: 9, src: "/media/bo-anh-18/9.png", title: "Sexy Placement #9", artist: "DOUCES Studio", style: "Sexy Placement", aspect: "3/4" },
  { id: 10, src: "/media/bo-anh-18/10.png", title: "Sexy Placement #10", artist: "DOUCES Studio", style: "Sexy Placement", aspect: "3/4" },
  { id: 11, src: "/media/bo-anh-18/11.png", title: "Sexy Placement #11", artist: "DOUCES Studio", style: "Sexy Placement", aspect: "3/4" },
  { id: 12, src: "/media/bo-anh-18/12.png", title: "Sexy Placement #12", artist: "DOUCES Studio", style: "Sexy Placement", aspect: "3/4" },
  { id: 13, src: "/media/bo-anh-18/13.png", title: "Sexy Placement #13", artist: "DOUCES Studio", style: "Sexy Placement", aspect: "3/4" },
  { id: 14, src: "/media/bo-anh-18/14.png", title: "Sexy Placement #14", artist: "DOUCES Studio", style: "Sexy Placement", aspect: "3/4" },
  { id: 15, src: "/media/bo-anh-18/15.png", title: "Sexy Placement #15", artist: "DOUCES Studio", style: "Sexy Placement", aspect: "3/4" },
  { id: 16, src: "/media/bo-anh-18/16.png", title: "Sexy Placement #16", artist: "DOUCES Studio", style: "Sexy Placement", aspect: "3/4" },
  { id: 17, src: "/media/bo-anh-18/17.png", title: "Sexy Placement #17", artist: "DOUCES Studio", style: "Sexy Placement", aspect: "3/4" },
  { id: 18, src: "/media/bo-anh-18/18.png", title: "Sexy Placement #18", artist: "DOUCES Studio", style: "Sexy Placement", aspect: "3/4" },
  { id: 19, src: "/media/bo-anh-18/19.png", title: "Sexy Placement #19", artist: "DOUCES Studio", style: "Sexy Placement", aspect: "3/4" },
  { id: 20, src: "/media/bo-anh-18/20.png", title: "Sexy Placement #20", artist: "DOUCES Studio", style: "Sexy Placement", aspect: "3/4" },
  { id: 21, src: "/media/bo-anh-18/21.png", title: "Sexy Placement #21", artist: "DOUCES Studio", style: "Sexy Placement", aspect: "3/4" },
  { id: 22, src: "/media/bo-anh-18/22.png", title: "Sexy Placement #22", artist: "DOUCES Studio", style: "Sexy Placement", aspect: "3/4" },
  { id: 23, src: "/media/bo-anh-18/23.png", title: "Sexy Placement #23", artist: "DOUCES Studio", style: "Sexy Placement", aspect: "3/4" },
  { id: 24, src: "/media/bo-anh-18/24.png", title: "Sexy Placement #24", artist: "DOUCES Studio", style: "Sexy Placement", aspect: "3/4" },
  { id: 25, src: "/media/bo-anh-18/25.png", title: "Sexy Placement #25", artist: "DOUCES Studio", style: "Sexy Placement", aspect: "3/4" },
  { id: 26, src: "/media/bo-anh-18/26.png", title: "Sexy Placement #26", artist: "DOUCES Studio", style: "Sexy Placement", aspect: "3/4" },

  // bo-anh-19 → Blackwork & Fine Line (19 ảnh)
  { id: 101, src: "/media/bird_arrow.webp", title: "Blackwork & Fine Line #20", artist: "DOUCES Studio", style: "Blackwork & Fine Line", aspect: "3/4" },
  { id: 27, src: "/media/bo-anh-19/1.png", title: "Blackwork & Fine Line #1", artist: "DOUCES Studio", style: "Blackwork & Fine Line", aspect: "3/4" },
  { id: 28, src: "/media/bo-anh-19/2.png", title: "Blackwork & Fine Line #2", artist: "DOUCES Studio", style: "Blackwork & Fine Line", aspect: "3/4" },
  { id: 29, src: "/media/bo-anh-19/3.png", title: "Blackwork & Fine Line #3", artist: "DOUCES Studio", style: "Blackwork & Fine Line", aspect: "3/4" },
  { id: 30, src: "/media/bo-anh-19/4.png", title: "Blackwork & Fine Line #4", artist: "DOUCES Studio", style: "Blackwork & Fine Line", aspect: "3/4" },
  { id: 31, src: "/media/bo-anh-19/5.png", title: "Blackwork & Fine Line #5", artist: "DOUCES Studio", style: "Blackwork & Fine Line", aspect: "3/4" },
  { id: 32, src: "/media/bo-anh-19/6.png", title: "Blackwork & Fine Line #6", artist: "DOUCES Studio", style: "Blackwork & Fine Line", aspect: "3/4" },
  { id: 33, src: "/media/bo-anh-19/7.png", title: "Blackwork & Fine Line #7", artist: "DOUCES Studio", style: "Blackwork & Fine Line", aspect: "3/4" },
  { id: 34, src: "/media/bo-anh-19/8.png", title: "Blackwork & Fine Line #8", artist: "DOUCES Studio", style: "Blackwork & Fine Line", aspect: "3/4" },
  { id: 35, src: "/media/bo-anh-19/9.png", title: "Blackwork & Fine Line #9", artist: "DOUCES Studio", style: "Blackwork & Fine Line", aspect: "3/4" },
  { id: 36, src: "/media/bo-anh-19/10.png", title: "Blackwork & Fine Line #10", artist: "DOUCES Studio", style: "Blackwork & Fine Line", aspect: "3/4" },
  { id: 37, src: "/media/bo-anh-19/11.png", title: "Blackwork & Fine Line #11", artist: "DOUCES Studio", style: "Blackwork & Fine Line", aspect: "3/4" },
  { id: 38, src: "/media/bo-anh-19/12.png", title: "Blackwork & Fine Line #12", artist: "DOUCES Studio", style: "Blackwork & Fine Line", aspect: "3/4" },
  { id: 39, src: "/media/bo-anh-19/13.png", title: "Blackwork & Fine Line #13", artist: "DOUCES Studio", style: "Blackwork & Fine Line", aspect: "3/4" },
  { id: 40, src: "/media/bo-anh-19/14.png", title: "Blackwork & Fine Line #14", artist: "DOUCES Studio", style: "Blackwork & Fine Line", aspect: "3/4" },
  { id: 41, src: "/media/bo-anh-19/15.png", title: "Blackwork & Fine Line #15", artist: "DOUCES Studio", style: "Blackwork & Fine Line", aspect: "3/4" },
  { id: 42, src: "/media/bo-anh-19/16.png", title: "Blackwork & Fine Line #16", artist: "DOUCES Studio", style: "Blackwork & Fine Line", aspect: "3/4" },
  { id: 43, src: "/media/bo-anh-19/17.png", title: "Blackwork & Fine Line #17", artist: "DOUCES Studio", style: "Blackwork & Fine Line", aspect: "3/4" },
  { id: 44, src: "/media/bo-anh-19/18.png", title: "Blackwork & Fine Line #18", artist: "DOUCES Studio", style: "Blackwork & Fine Line", aspect: "3/4" },
  { id: 45, src: "/media/bo-anh-19/19.png", title: "Blackwork & Fine Line #19", artist: "DOUCES Studio", style: "Blackwork & Fine Line", aspect: "3/4" },

  // bo-anh-20 → Realism (10 ảnh)
  { id: 46, src: "/media/bo-anh-20/1.png", title: "Realism #1", artist: "DOUCES Studio", style: "Realism", aspect: "3/4" },
  { id: 48, src: "/media/bo-anh-20/3.png", title: "Realism #3", artist: "DOUCES Studio", style: "Realism", aspect: "3/4" },
  { id: 49, src: "/media/bo-anh-20/4.png", title: "Realism #4", artist: "DOUCES Studio", style: "Realism", aspect: "3/4" },
  { id: 50, src: "/media/bo-anh-20/5.png", title: "Realism #5", artist: "DOUCES Studio", style: "Realism", aspect: "3/4" },
  { id: 52, src: "/media/bo-anh-20/7.png", title: "Realism #7", artist: "DOUCES Studio", style: "Realism", aspect: "3/4" },
  { id: 53, src: "/media/bo-anh-20/8.png", title: "Realism #8", artist: "DOUCES Studio", style: "Realism", aspect: "3/4" },
  { id: 54, src: "/media/bo-anh-20/9.png", title: "Realism #9", artist: "DOUCES Studio", style: "Realism", aspect: "3/4" },
  { id: 55, src: "/media/bo-anh-20/10.png", title: "Realism #10", artist: "DOUCES Studio", style: "Realism", aspect: "3/4" },

  // bo-anh-21 → Lettering (22 ảnh)
  { id: 56, src: "/media/bo-anh-21/1.png", title: "Lettering #1", artist: "DOUCES Studio", style: "Lettering", aspect: "3/4" },
  { id: 58, src: "/media/bo-anh-21/3.png", title: "Lettering #3", artist: "DOUCES Studio", style: "Lettering", aspect: "3/4" },
  { id: 59, src: "/media/bo-anh-21/4.png", title: "Lettering #4", artist: "DOUCES Studio", style: "Lettering", aspect: "3/4" },
  { id: 60, src: "/media/bo-anh-21/5.png", title: "Lettering #5", artist: "DOUCES Studio", style: "Lettering", aspect: "3/4" },
  { id: 61, src: "/media/bo-anh-21/6.png", title: "Lettering #6", artist: "DOUCES Studio", style: "Lettering", aspect: "3/4" },
  { id: 62, src: "/media/bo-anh-21/7.png", title: "Lettering #7", artist: "DOUCES Studio", style: "Lettering", aspect: "3/4" },
  { id: 63, src: "/media/bo-anh-21/8.png", title: "Lettering #8", artist: "DOUCES Studio", style: "Lettering", aspect: "3/4" },
  { id: 64, src: "/media/bo-anh-21/9.png", title: "Lettering #9", artist: "DOUCES Studio", style: "Lettering", aspect: "3/4" },
  { id: 65, src: "/media/bo-anh-21/10.png", title: "Lettering #10", artist: "DOUCES Studio", style: "Lettering", aspect: "3/4" },
  { id: 66, src: "/media/bo-anh-21/11.png", title: "Lettering #11", artist: "DOUCES Studio", style: "Lettering", aspect: "3/4" },
  { id: 67, src: "/media/bo-anh-21/12.png", title: "Lettering #12", artist: "DOUCES Studio", style: "Lettering", aspect: "3/4" },
  { id: 68, src: "/media/bo-anh-21/13.png", title: "Lettering #13", artist: "DOUCES Studio", style: "Lettering", aspect: "3/4" },
  { id: 69, src: "/media/bo-anh-21/14.png", title: "Lettering #14", artist: "DOUCES Studio", style: "Lettering", aspect: "3/4" },
  { id: 70, src: "/media/bo-anh-21/15.png", title: "Lettering #15", artist: "DOUCES Studio", style: "Lettering", aspect: "3/4" },
  { id: 71, src: "/media/bo-anh-21/16.png", title: "Lettering #16", artist: "DOUCES Studio", style: "Lettering", aspect: "3/4" },
  { id: 72, src: "/media/bo-anh-21/17.png", title: "Lettering #17", artist: "DOUCES Studio", style: "Lettering", aspect: "3/4" },
  { id: 73, src: "/media/bo-anh-21/18.png", title: "Lettering #18", artist: "DOUCES Studio", style: "Lettering", aspect: "3/4" },
  { id: 74, src: "/media/bo-anh-21/19.png", title: "Lettering #19", artist: "DOUCES Studio", style: "Lettering", aspect: "3/4" },
  { id: 75, src: "/media/bo-anh-21/20.png", title: "Lettering #20", artist: "DOUCES Studio", style: "Lettering", aspect: "3/4" },
  { id: 76, src: "/media/bo-anh-21/21.png", title: "Lettering #21", artist: "DOUCES Studio", style: "Lettering", aspect: "3/4" },
  { id: 77, src: "/media/bo-anh-21/22.png", title: "Lettering #22", artist: "DOUCES Studio", style: "Lettering", aspect: "3/4" },

  // bo-anh-22 → Cute & Color (18 ảnh)
  { id: 78, src: "/media/bo-anh-22/1.png", title: "Cute & Color #1", artist: "DOUCES Studio", style: "Cute & Color", aspect: "3/4" },
  { id: 79, src: "/media/bo-anh-22/2.png", title: "Cute & Color #2", artist: "DOUCES Studio", style: "Cute & Color", aspect: "3/4" },
  { id: 80, src: "/media/bo-anh-22/3.png", title: "Cute & Color #3", artist: "DOUCES Studio", style: "Cute & Color", aspect: "3/4" },
  { id: 81, src: "/media/bo-anh-22/4.png", title: "Cute & Color #4", artist: "DOUCES Studio", style: "Cute & Color", aspect: "3/4" },
  { id: 82, src: "/media/bo-anh-22/5.png", title: "Cute & Color #5", artist: "DOUCES Studio", style: "Cute & Color", aspect: "3/4" },
  { id: 83, src: "/media/bo-anh-22/6.png", title: "Cute & Color #6", artist: "DOUCES Studio", style: "Cute & Color", aspect: "3/4" },
  { id: 84, src: "/media/bo-anh-22/7.png", title: "Cute & Color #7", artist: "DOUCES Studio", style: "Cute & Color", aspect: "3/4" },
  { id: 85, src: "/media/bo-anh-22/8.png", title: "Cute & Color #8", artist: "DOUCES Studio", style: "Cute & Color", aspect: "3/4" },
  { id: 86, src: "/media/bo-anh-22/9.png", title: "Cute & Color #9", artist: "DOUCES Studio", style: "Cute & Color", aspect: "3/4" },
  { id: 87, src: "/media/bo-anh-22/10.png", title: "Cute & Color #10", artist: "DOUCES Studio", style: "Cute & Color", aspect: "3/4" },
  { id: 88, src: "/media/bo-anh-22/11.png", title: "Cute & Color #11", artist: "DOUCES Studio", style: "Cute & Color", aspect: "3/4" },
  { id: 89, src: "/media/bo-anh-22/12.png", title: "Cute & Color #12", artist: "DOUCES Studio", style: "Cute & Color", aspect: "3/4" },
  { id: 90, src: "/media/bo-anh-22/13.png", title: "Cute & Color #13", artist: "DOUCES Studio", style: "Cute & Color", aspect: "3/4" },
  { id: 91, src: "/media/bo-anh-22/14.png", title: "Cute & Color #14", artist: "DOUCES Studio", style: "Cute & Color", aspect: "3/4" },
  { id: 92, src: "/media/bo-anh-22/15.png", title: "Cute & Color #15", artist: "DOUCES Studio", style: "Cute & Color", aspect: "3/4" },
  { id: 93, src: "/media/bo-anh-22/16.png", title: "Cute & Color #16", artist: "DOUCES Studio", style: "Cute & Color", aspect: "3/4" },
  { id: 94, src: "/media/bo-anh-22/17.png", title: "Cute & Color #17", artist: "DOUCES Studio", style: "Cute & Color", aspect: "3/4" },
  { id: 95, src: "/media/bo-anh-22/18.png", title: "Cute & Color #18", artist: "DOUCES Studio", style: "Cute & Color", aspect: "3/4" },

  // bo-anh-23 → Vietnamese Inspired (5 ảnh)
  { id: 98, src: "/media/bo-anh-23/3.png", title: "Vietnamese Inspired #3", artist: "DOUCES Studio", style: "Vietnamese Inspired", aspect: "3/4" },
  { id: 99, src: "/media/bo-anh-23/4.png", title: "Vietnamese Inspired #4", artist: "DOUCES Studio", style: "Vietnamese Inspired", aspect: "3/4" },
  { id: 100, src: "/media/bo-anh-23/5.png", title: "Vietnamese Inspired #5", artist: "DOUCES Studio", style: "Vietnamese Inspired", aspect: "3/4" },
];

export const styles = ["All", "Sexy Placement", "Blackwork & Fine Line", "Realism", "Lettering", "Cute & Color", "Vietnamese Inspired"];
