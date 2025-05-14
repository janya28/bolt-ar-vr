export type ExperienceCategory = 'AR' | 'VR' | 'MR';

export interface Experience {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  category: ExperienceCategory;
  categoryName: string;
  userCount: number;
}