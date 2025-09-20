import React, { useState } from 'react';
import { HotelCard } from '../components/ui/HotelCard';
import { Search, Filter, Grid, List } from 'lucide-react';
// Mock data for hotels
const hotels = [{
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
}, {
  id: '5',
  name: 'Hilton Addis Ababa',
  image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80',
  stars: 5,
  rating: 4.5,
  location: 'Addis Ababa',
  priceRange: '$160/night'
}, {
  id: '6',
  name: 'Haile Resort',
  image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  stars: 4,
  rating: 4.3,
  location: 'Hawassa',
  priceRange: '$100/night'
}, {
  id: '7',
  name: 'Bale Mountain Lodge',
  image: 'https://images.unsplash.com/photo-1610641818989-37b2a196cb7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  stars: 4,
  rating: 4.8,
  location: 'Bale Mountains',
  priceRange: '$140/night'
}, {
  id: '8',
  name: 'Simien Lodge',
  image: 'https://images.unsplash.com/photo-1568084680786-a84f91d1153c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
  stars: 3,
  rating: 4.5,
  location: 'Simien Mountains',
  priceRange: '$95/night'
}];
export function HotelsPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  return <div className="w-full bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-80 bg-cover bg-center" style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
    }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hotels in Ethiopia
          </h1>
          <p className="text-xl max-w-3xl">
            Find comfortable and authentic accommodations across Ethiopia
          </p>
        </div>
      </div>
      {/* Search and Filters */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
          <div className="w-full md:w-auto flex-grow">
            <div className="relative">
              <input type="text" placeholder="Search hotels..." className="w-full py-3 px-4 pr-12 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 focus:outline-none" />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-amber-600">
                <Search size={20} />
              </button>
            </div>
          </div>
          <div className="w-full md:w-auto flex items-center gap-4">
            <button onClick={() => setShowFilters(!showFilters)} className="flex items-center gap-2 py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-100">
              <Filter size={18} />
              <span>Filters</span>
            </button>
            <div className="flex border border-gray-300 rounded-lg overflow-hidden">
              <button onClick={() => setViewMode('grid')} className={`p-2 ${viewMode === 'grid' ? 'bg-amber-100 text-amber-700' : 'bg-white text-gray-600'}`}>
                <Grid size={20} />
              </button>
              <button onClick={() => setViewMode('list')} className={`p-2 ${viewMode === 'list' ? 'bg-amber-100 text-amber-700' : 'bg-white text-gray-600'}`}>
                <List size={20} />
              </button>
            </div>
          </div>
        </div>
        {/* Filters */}
        {showFilters && <div className="bg-white p-6 rounded-lg shadow-md mb-8 grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price Range
              </label>
              <select className="w-full p-2 border border-gray-300 rounded-md">
                <option>Any Price</option>
                <option>Under $100/night</option>
                <option>$100 - $150/night</option>
                <option>$150 - $200/night</option>
                <option>$200+/night</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Star Rating
              </label>
              <select className="w-full p-2 border border-gray-300 rounded-md">
                <option>Any Rating</option>
                <option>5 Stars</option>
                <option>4 Stars</option>
                <option>3 Stars</option>
                <option>2 Stars</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location
              </label>
              <select className="w-full p-2 border border-gray-300 rounded-md">
                <option>All Locations</option>
                <option>Addis Ababa</option>
                <option>Lalibela</option>
                <option>Gondar</option>
                <option>Bahir Dar</option>
                <option>Axum</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Amenities
              </label>
              <select className="w-full p-2 border border-gray-300 rounded-md">
                <option>All Amenities</option>
                <option>Swimming Pool</option>
                <option>Wi-Fi</option>
                <option>Restaurant</option>
                <option>Spa</option>
                <option>Airport Shuttle</option>
              </select>
            </div>
          </div>}
        {/* Hotels Grid */}
        <div className={`grid ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' : 'grid-cols-1'} gap-6`}>
          {hotels.map(hotel => <HotelCard key={hotel.id} id={hotel.id} name={hotel.name} image={hotel.image} stars={hotel.stars} rating={hotel.rating} location={hotel.location} priceRange={hotel.priceRange} />)}
        </div>
        {/* Pagination */}
        <div className="mt-12 flex justify-center">
          <nav className="flex items-center space-x-2">
            <button className="px-3 py-1 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">
              Previous
            </button>
            <button className="px-3 py-1 bg-amber-600 text-white rounded-md">
              1
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">
              2
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">
              3
            </button>
            <span className="px-2">...</span>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">
              Next
            </button>
          </nav>
        </div>
      </div>
    </div>;
}