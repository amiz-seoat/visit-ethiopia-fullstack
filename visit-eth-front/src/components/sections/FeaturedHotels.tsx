import React from 'react';
import { HotelCard } from '../ui/HotelCard';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
// Mock data for featured hotels
const featuredHotels = [{
  id: '1',
  name: 'Sheraton Addis',
  image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  stars: 5,
  rating: 4.7,
  location: 'Addis Ababa',
  priceRange: '$180/night'
}, {
  id: '2',
  name: 'Kuriftu Resort & Spa',
  image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2025&q=80',
  stars: 4,
  rating: 4.5,
  location: 'Bahir Dar',
  priceRange: '$120/night'
}, {
  id: '3',
  name: 'Gondar Hills Resort',
  image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2049&q=80',
  stars: 4,
  rating: 4.6,
  location: 'Gondar',
  priceRange: '$110/night'
}, {
  id: '4',
  name: 'Maribela Hotel',
  image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  stars: 3,
  rating: 4.4,
  location: 'Lalibela',
  priceRange: '$90/night'
}];
export function FeaturedHotels() {
  return <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">
              Featured Hotels
            </h2>
            <p className="text-gray-600 mt-2">
              Comfortable stays across Ethiopia
            </p>
          </div>
          <Link to="/hotels" className="flex items-center text-amber-600 hover:text-amber-800 font-medium">
            <span className="mr-2">View All Hotels</span>
            <ArrowRight size={18} />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredHotels.map(hotel => <HotelCard key={hotel.id} id={hotel.id} name={hotel.name} image={hotel.image} stars={hotel.stars} rating={hotel.rating} location={hotel.location} priceRange={hotel.priceRange} />)}
        </div>
      </div>
    </section>;
}