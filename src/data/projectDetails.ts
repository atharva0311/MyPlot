import { ProjectData } from '@/types/plot';
import { MASTERPLAN_CENTER } from './nakshatraPlots';

export const PROJECT_DATA: ProjectData = {
  id: 'IoKlH',
  name: 'Nakshatra Luxury Enclave',
  tagline: 'Next-Gen Plotted Development in a Peaceful Setting',
  location: 'Kalamba Outskirts, Kolhapur, Maharashtra (Gargoti Road Corridor)',
  coordinates: MASTERPLAN_CENTER,
  developer: 'Nakshatra Urban Developers & SPACER Tech',
  totalPlots: 109,
  totalAcres: 24.5,
  reraId: 'P53000034120',
  possessionDate: 'December 2026',
  amenities: [
    {
      id: 'clubhouse',
      title: '15,000 sq.ft Grand Clubhouse',
      description: 'State-of-the-art multi-tier clubhouse with swimming pool, gym, banquet hall & indoor sports courts.',
      category: 'Recreation',
      icon: 'Building2',
    },
    {
      id: 'roads',
      title: '7.50M Wide Asphalt Avenue Roads',
      description: 'Wide avenue roads with concrete kerbs, LED streetlighting & pedestrian footpaths.',
      category: 'Infrastructure',
      icon: 'Route',
    },
    {
      id: 'security',
      title: '24/7 Gated Security & Entry Boulevard',
      description: 'Multi-layer security network with RFID boom barriers, CCTV surveillance & app-based visitor management.',
      category: 'Security',
      icon: 'ShieldCheck',
    },
    {
      id: 'cabling',
      title: 'Underground Power & Fiber Cabling',
      description: 'Zero overhead wires with dedicated transformer yards & high-speed FTTH internet ready.',
      category: 'Infrastructure',
      icon: 'Zap',
    },
    {
      id: 'water',
      title: 'Overhead Tank & Water Harvesting',
      description: 'Centralized water supply network with rainwater harvesting pits in every plot block.',
      category: 'Eco-Friendly',
      icon: 'Droplets',
    },
    {
      id: 'parks',
      title: 'Oxygen Park, Party Plot & Box Cricket Turf',
      description: 'Curated green landscapes, tree-lined oxygen boulevard, turf cricket court & children play zones.',
      category: 'Recreation',
      icon: 'Trees',
    },
  ],
  gallery: [
    {
      id: 'g1',
      title: 'Aerial View of Masterplan',
      type: 'image',
      url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=400&auto=format&fit=crop',
    },
    {
      id: 'g2',
      title: 'Grand Entrance Plaza Gate',
      type: 'image',
      url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=400&auto=format&fit=crop',
    },
    {
      id: 'g3',
      title: 'Luxury Clubhouse Architecture',
      type: 'image',
      url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=400&auto=format&fit=crop',
    },
    {
      id: 'g4',
      title: 'Landscaped Botanical Park',
      type: 'image',
      url: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=1200&auto=format&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=400&auto=format&fit=crop',
    },
  ],
  locationHighlights: [
    {
      title: 'Kalamba Lake & Migratory Bird Sanctuary',
      distance: '480 m',
      travelTime: '5 mins walk',
      category: 'Natural Landmark',
    },
    {
      title: 'Kolhapur-Gargoti State Highway (SH19)',
      distance: '120 m',
      travelTime: '1 min walk',
      category: 'Transport',
    },
    {
      title: 'Sai Synergy Resort & Celebration Lawns',
      distance: '750 m',
      travelTime: '2 mins drive',
      category: 'Hospitality',
    },
    {
      title: 'Chhatrapati Shahu Botanical Park',
      distance: '520 m',
      travelTime: '2 mins drive',
      category: 'Recreation',
    },
    {
      title: 'D.Y. Patil Medical College & Tertiary Hospital',
      distance: '1.9 km',
      travelTime: '5 mins drive',
      category: 'Healthcare',
    },
    {
      title: 'Mahalaxmi (Ambabai) Temple & Karveer City Center',
      distance: '3.6 km',
      travelTime: '8 mins drive',
      category: 'Cultural Landmark',
    },
  ],
};

