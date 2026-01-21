export interface Course {
  id: string;
  title: string;
  description: string;
  rating: number;
  thumbnailUrl: string;
  videoUrl: string;
  category: string;
}

export type MenuItem = 'home' | 'customer' | 'knowledge';
