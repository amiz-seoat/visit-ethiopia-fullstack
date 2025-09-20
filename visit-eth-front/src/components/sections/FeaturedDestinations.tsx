import React from 'react';
import { DestinationCard } from '../ui/DestinationCard';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
// Mock data for featured destinations
const featuredDestinations = [{
  id: '1',
  name: 'Lalibela',
  image: 'https://images.unsplash.com/photo-1563514227147-6d2e624f82b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
  region: 'Amhara Region'
}, {
  id: '2',
  name: 'Simien Mountains',
  image: 'https://images.unsplash.com/photo-1591194620700-3b18f1f99460?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  region: 'Amhara Region'
}, {
  id: '3',
  name: 'Danakil Depression',
  image: 'https://images.unsplash.com/photo-1518002054494-3a6f870d4a8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  region: 'Afar Region'
}, {
  id: '4',
  name: 'Omo Valley',
  image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80',
  region: 'Southern Nations'
}, {
  id: '5',
  name: 'Bale Mountains',
  image: 'https://images.unsplash.com/photo-1574267432553-4b4628081c31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
  region: 'Oromia Region'
}, {
  id: '6',
  name: 'Axum',
  image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
  region: 'Tigray Region'
}];
export function FeaturedDestinations() {
  return <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">
              Top Destinations
            </h2>
            <p className="text-gray-600 mt-2">
              Discover Ethiopia's most remarkable places
            </p>
          </div>
          <Link to="/destinations" className="flex items-center text-amber-600 hover:text-amber-800 font-medium">
            <span className="mr-2">View All Destinations</span>
            <ArrowRight size={18} />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredDestinations.map(destination => <DestinationCard key={destination.id} id={destination.id} name={destination.name} image={destination.image} region={destination.region} />)}
        </div>
      </div>
    </section>;
}