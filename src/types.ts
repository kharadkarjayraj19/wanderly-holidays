/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  activities: string[];
}

export interface DestinationPackage {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  price: number; // Transport + Stay price
  originalPrice: number; // Transport + Stay original price
  transportPrice: number; // Transport Only price
  transportOriginalPrice: number; // Transport Only original price
  rating: number;
  reviewsCount: number;
  image: string;
  category: string; // 'pilgrimage', 'jyotirling', 'monsoon-maharashtra', 'kerala', 'kashmir', 'ladakh', 'shillong', 'goa'
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: ItineraryDay[];
  tags: string[];
  popular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  comment: string;
  rating: number;
  avatar: string;
  destinationVisited: string;
}

export interface InquiryFormData {
  name: string;
  email: string;
  phone: string;
  travelDate: string;
  guests: number;
  notes?: string;
}
