export type PlotStatus = 'available' | 'booked' | 'sold';

export type FacingDirection = 
  | 'East' 
  | 'West' 
  | 'North' 
  | 'South' 
  | 'North-East' 
  | 'North-West' 
  | 'South-East' 
  | 'South-West';

export type PlotCategory = 'Standard Residential' | 'Villa Plot' | 'Commercial Corner' | 'Park Facing';

export interface PlotDimensions {
  north: number; // in feet
  south: number; // in feet
  east: number;  // in feet
  west: number;  // in feet
}

export interface Plot {
  id: string;
  plotNumber: string;
  zone: 'Block A' | 'Block B' | 'Block C' | 'Premium Enclave';
  category: PlotCategory;
  facing: FacingDirection;
  status: PlotStatus;
  areaSqFt: number;
  areaSqYds: number;
  areaSqMeters: number;
  guntas: number;
  pricePerSqFt: number;
  totalPrice: number;
  dimensions: PlotDimensions;
  polygon: [number, number][]; // [lat, lng] array forming polygon
  isCornerPlot: boolean;
  vastuCompliant: boolean;
  roadWidthFt: number;
  description?: string;
}

export interface FilterState {
  statuses: PlotStatus[];
  facings: FacingDirection[];
  zones: string[];
  minArea: number;
  maxArea: number;
  minPrice: number;
  maxPrice: number;
  searchQuery: string;
  showOnlyCorner: boolean;
  showOnlyVastu: boolean;
}

export interface Amenity {
  id: string;
  title: string;
  description: string;
  category: 'Infrastructure' | 'Recreation' | 'Security' | 'Eco-Friendly';
  icon: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  type: 'image' | 'video';
  url: string;
  thumbnail: string;
}

export type LandmarkCategory = 
  | 'river' 
  | 'stay' 
  | 'commercial' 
  | 'locality' 
  | 'resort' 
  | 'scenic' 
  | 'transit' 
  | 'education' 
  | 'health';

export interface Landmark {
  id: string;
  name: string;
  nameMr: string;
  category: LandmarkCategory;
  position: [number, number];
  distanceMeters: number;
  iconType: string;
  description: string;
}

export interface LocationHighlight {
  title: string;
  distance: string;
  travelTime: string;
  category: 'Transport' | 'Education' | 'Healthcare' | 'Commercial' | 'Natural Landmark' | 'Hospitality' | 'Recreation' | 'Cultural Landmark';
}

export interface ProjectData {
  id: string;
  name: string;
  tagline: string;
  location: string;
  coordinates: [number, number]; // Masterplan center [lat, lng]
  developer: string;
  totalPlots: number;
  totalAcres: number;
  reraId: string;
  possessionDate: string;
  amenities: Amenity[];
  gallery: GalleryItem[];
  locationHighlights: LocationHighlight[];
}

export interface BookingRequest {
  plotId: string;
  plotNumber: string;
  fullName: string;
  email: string;
  phone: string;
  preferredVisitDate: string;
  notes?: string;
}
