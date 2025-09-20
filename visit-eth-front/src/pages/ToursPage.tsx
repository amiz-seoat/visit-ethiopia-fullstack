import React, { useState } from 'react';
import { TourCard } from '../components/ui/TourCard';
import { Search, Filter, Grid, List } from 'lucide-react';
// Mock data for tours
const tours = [{
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
}, {
  id: '5',
  title: 'Bale Mountains National Park',
  image: 'https://images.unsplash.com/photo-1574267432553-4b4628081c31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
  price: 1099,
  duration: '5 Days',
  rating: 4.5,
  shortDescription: 'Explore the diverse ecosystems of Bale Mountains and spot rare Ethiopian wolves and other wildlife.'
}, {
  id: '6',
  title: 'Ethiopian Coffee Tour',
  image: 'https://images.unsplash.com/photo-1447933601403-0c44657c85b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2056&q=80',
  price: 799,
  duration: '4 Days',
  rating: 4.7,
  shortDescription: 'Discover the birthplace of coffee and experience traditional Ethiopian coffee ceremonies.'
}, {
  id: '7',
  title: 'Addis Ababa City Tour',
  image: 'https://images.unsplash.com/photo-1635946365415-fcdbb1d8e14e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
  price: 199,
  duration: '1 Day',
  rating: 4.3,
  shortDescription: "Explore Ethiopia's vibrant capital city, including museums, markets, and historical sites."
}, {
  id: '8',
  title: 'Lake Tana Monasteries',
  image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  price: 499,
  duration: '3 Days',
  rating: 4.6,
  shortDescription: 'Visit ancient island monasteries on Lake Tana and see the spectacular Blue Nile Falls.'
}];
export function ToursPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  return <div className="w-full bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-80 bg-cover bg-center" style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1518341223789-51e3a61f5dc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
    }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Ethiopia Tours
          </h1>
          <p className="text-xl max-w-3xl">
            Discover the best guided experiences across Ethiopia
          </p>
        </div>
      </div>
      {/* Search and Filters */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
          <div className="w-full md:w-auto flex-grow">
            <div className="relative">
              <input type="text" placeholder="Search tours..." className="w-full py-3 px-4 pr-12 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 focus:outline-none" />
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
                <option>Under $500</option>
                <option>$500 - $1000</option>
                <option>$1000 - $1500</option>
                <option>$1500+</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Duration
              </label>
              <select className="w-full p-2 border border-gray-300 rounded-md">
                <option>Any Duration</option>
                <option>1-3 Days</option>
                <option>4-7 Days</option>
                <option>8-14 Days</option>
                <option>15+ Days</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Region
              </label>
              <select className="w-full p-2 border border-gray-300 rounded-md">
                <option>All Regions</option>
                <option>Northern Circuit</option>
                <option>Southern Ethiopia</option>
                <option>Eastern Ethiopia</option>
                <option>Western Ethiopia</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tour Type
              </label>
              <select className="w-full p-2 border border-gray-300 rounded-md">
                <option>All Types</option>
                <option>Cultural</option>
                <option>Adventure</option>
                <option>Wildlife</option>
                <option>Historical</option>
              </select>
            </div>
          </div>}
        {/* Tours Grid */}
        <div className={`grid ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' : 'grid-cols-1'} gap-6`}>
          {tours.map(tour => <TourCard key={tour.id} id={tour.id} title={tour.title} image={tour.image} price={tour.price} duration={tour.duration} rating={tour.rating} shortDescription={tour.shortDescription} />)}
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