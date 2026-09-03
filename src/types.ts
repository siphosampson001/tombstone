export interface TombstoneModel {
  id: string;
  name: string;
  category: 'executive' | 'classic' | 'kerbing' | 'companion' | 'scroll' | 'cross';
  graniteType: string;
  dimensions: string;
  features: string[];
  description: string;
  priceEstimateUSD: number;
  popular?: boolean;
  shapeStyle: 'arch' | 'scroll' | 'heart' | 'cross' | 'double' | 'executive';
}

export interface MemorialCustomizerState {
  shape: 'arch' | 'scroll' | 'heart' | 'cross' | 'double' | 'executive';
  graniteColor: 'black' | 'grey' | 'emerald' | 'red';
  letteringColor: 'gold' | 'white' | 'silver';
  baseText: string; // e.g. "NKOSI" or "MAWERE"
  fullName: string;
  sunriseDate: string;
  sunsetDate: string;
  epitaph: string;
  includePhotoMedallion: boolean;
  includeSideVases: boolean;
  includeKerbing: boolean;
  specialNotes: string;
}

export interface KitchenTopCalculation {
  slabType: string;
  lengthMeters: number;
  widthMeters: number;
  edgeProfile: 'eased' | 'bevel' | 'bullnose' | 'ogee';
  sinkCutouts: number;
  hobCutout: boolean;
  windowSillsCount: number;
  windowSillLengthTotal: number;
}

export interface ServiceSpecialty {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  highlights: string[];
}
