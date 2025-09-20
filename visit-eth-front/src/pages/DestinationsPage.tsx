import React, { useState } from 'react';
import { DestinationCard } from '../components/ui/DestinationCard';
import { Search, Filter } from 'lucide-react';
// Mock data for destinations
const destinations = [{
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
}, {
  id: '7',
  name: 'Gondar',
  image: 'https://images.unsplash.com/photo-1504512485720-7d83a16ee930?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2004&q=80',
  region: 'Amhara Region'
}, {
  id: '8',
  name: 'Harar',
  image: 'https://images.unsplash.com/photo-1609198092458-38a293c7ac4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  region: 'Harari Region'
}, {
  id: '9',
  name: 'Blue Nile Falls',
  image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  region: 'Amhara Region'
}];
export function DestinationsPage() {
  const [showFilters, setShowFilters] = useState(false);
  return <div className="w-full bg-white">
      {/* Hero Section */}
      <div className="relative h-80 bg-cover bg-center" style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1591194620700-3b18f1f99460?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
    }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Explore Ethiopia's Destinations
          </h1>
          <p className="text-xl max-w-3xl">
            Discover ancient wonders, breathtaking landscapes, and vibrant
            cultures
          </p>
        </div>
      </div>
      {/* Search and Filters */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
          <div className="w-full md:w-auto flex-grow">
            <div className="relative">
              <input type="text" placeholder="Search destinations..." className="w-full py-3 px-4 pr-12 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 focus:outline-none" />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-amber-600">
                <Search size={20} />
              </button>
            </div>
          </div>
          <button onClick={() => setShowFilters(!showFilters)} className="flex items-center gap-2 py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-100">
            <Filter size={18} />
            <span>Filters</span>
          </button>
        </div>
        {/* Filters */}
        {showFilters && <div className="bg-white p-6 rounded-lg shadow-md mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Region
              </label>
              <select className="w-full p-2 border border-gray-300 rounded-md">
                <option>All Regions</option>
                <option>Amhara Region</option>
                <option>Tigray Region</option>
                <option>Oromia Region</option>
                <option>Afar Region</option>
                <option>Southern Nations</option>
                <option>Harari Region</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Type
              </label>
              <select className="w-full p-2 border border-gray-300 rounded-md">
                <option>All Types</option>
                <option>Historical</option>
                <option>Natural</option>
                <option>Cultural</option>
                <option>Urban</option>
                <option>Religious</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Popularity
              </label>
              <select className="w-full p-2 border border-gray-300 rounded-md">
                <option>Any</option>
                <option>Most Popular</option>
                <option>Hidden Gems</option>
                <option>UNESCO Sites</option>
              </select>
            </div>
          </div>}
        {/* Destinations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map(destination => <DestinationCard key={destination.id} id={destination.id} name={destination.name} image={destination.image} region={destination.region} />)}
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