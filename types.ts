import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ProjectItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
}

export interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatarUrl: string;
}

export interface StatItem {
  id: number;
  label: string;
  value: number;
  suffix: string;
}