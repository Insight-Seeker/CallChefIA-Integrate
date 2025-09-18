import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Interface pour le contenu de la page d'accueil
export interface HomeContent {
  hero_title: string;
  hero_subtitle: string;
  hero_cta: string;
  hero_cta_secondary: string;
  stats: Array<{
    value: string;
    description: string;
  }>;
  voice_assistants: {
    title: string;
    description: string;
  };
  lost_revenue: {
    title: string;
    description: string;
    cta: string;
  };
}

// Interface pour les plans tarifaires
export interface PricingContent {
  section_title: string;
  section_subtitle: string;
  plans: Array<{
    name: string;
    description: string;
    price: string;
    period: string;
    sub_price: string;
    features: string[];
    button_text: string;
    badge?: string;
    highlighted: boolean;
  }>;
}

// Interface pour les témoignages
export interface TestimonialsContent {
  testimonials: Array<{
    restaurant_name: string;
    location: string;
    type: string;
    avatar: string;
    owner: string;
    title: string;
    quote: string;
    stats: {
      revenue_increase: string;
      missed_calls_reduction: string;
      customer_satisfaction: string;
      time_saved: string;
    };
  }>;
}

// Interface pour le contact
export interface ContactContent {
  email: string;
  phone: string;
  address_line1: string;
  address_line2: string;
  hours: Array<{
    day: string;
    hours: string;
  }>;
  faq: Array<{
    question: string;
    answer: string;
  }>;
}

// Interface pour les paramètres
export interface SettingsContent {
  site_name: string;
  site_description: string;
  site_url: string;
  contact_email: string;
  social: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
  };
}

// Fonction générique pour lire le contenu
function getContent<T>(filename: string): T {
  try {
    const contentPath = path.join(process.cwd(), 'content', filename);
    const fileContents = fs.readFileSync(contentPath, 'utf8');
    const { data } = matter(fileContents);
    return data as T;
  } catch (error) {
    console.warn(`Could not read content file: ${filename}`, error);
    // Retourner un contenu par défaut vide
    return {} as T;
  }
}

// Fonctions spécifiques pour chaque type de contenu
export const getHomeContent = (): HomeContent => getContent<HomeContent>('home.md');
export const getPricingContent = (): PricingContent => getContent<PricingContent>('pricing.md');
export const getTestimonialsContent = (): TestimonialsContent => getContent<TestimonialsContent>('testimonials.md');
export const getContactContent = (): ContactContent => getContent<ContactContent>('contact.md');
export const getSettingsContent = (): SettingsContent => getContent<SettingsContent>('settings.md');
