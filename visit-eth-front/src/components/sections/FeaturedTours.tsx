import React from 'react';
import { TourCard } from '../ui/TourCard';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
// Mock data for featured tours
const featuredTours = [{
  id: '1',
  title: 'Historic Northern Circuit',
  image: 'https://images.unsplash.com/photo-1518341223789-51e3a61f5dc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  price: 1299,
  duration: '8 Days',
  rating: 4.8,
  shortDescription: 'Explore the ancient wonders of Lalibela, Axum, and Gondar on this comprehensive northern Ethiopia tour.'
}, {
  id: '2',
  title: 'Danakil Depression Adventure',
  image: 'https://images.unsplash.com/photo-1518002054494-3a6f870d4a8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  price: 1499,
  duration: '5 Days',
  rating: 4.6,
  shortDescription: 'Journey to one of the hottest places on Earth and witness otherworldly landscapes and salt formations.'
}, {
  id: '3',
  title: 'Omo Valley Cultural Experience',
  image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80',
  price: 1199,
  duration: '7 Days',
  rating: 4.7,
  shortDescription: "Immerse yourself in the diverse tribal cultures of Ethiopia's Omo Valley region."
}, {
  id: '4',
  title: 'Simien Mountains Trek',
  image: 'https://images.unsplash.com/photo-1591194620700-3b18f1f99460?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  price: 899,
  duration: '6 Days',
  rating: 4.9,
  shortDescription: 'Hike through stunning mountain landscapes and encounter unique wildlife like the Gelada baboon.'
}];
export function FeaturedTours() {
  return <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Featured Tours</h2>
            <p className="text-gray-600 mt-2">
              Explore our most popular experiences in Ethiopia
            </p>
          </div>
          <Link to="/tours" className="flex items-center text-amber-600 hover:text-amber-800 font-medium">
            <span className="mr-2">View All Tours</span>
            <ArrowRight size={18} />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredTours.map(tour => <TourCard key={tour.id} id={tour.id} title={tour.title} image={tour.image} price={tour.price} duration={tour.duration} rating={tour.rating} shortDescription={tour.shortDescription} />)}
        </div>
      </div>
    </section>;
}