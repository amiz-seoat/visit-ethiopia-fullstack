import React, { useState, Component } from 'react';
import { Search, Filter, Car, Bus, Plane, Map, Calendar, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
// Mock data for transport options
const transportOptions = [{
  id: '1',
  type: 'Flight',
  name: 'Ethiopian Airlines',
  route: 'Addis Ababa to Lalibela',
  image: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  price: 120,
  duration: '1h 15m',
  departureTime: '08:30',
  arrivalTime: '09:45',
  frequency: 'Daily'
}, {
  id: '2',
  type: 'Bus',
  name: 'Selam Bus',
  route: 'Addis Ababa to Bahir Dar',
  image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
  price: 25,
  duration: '10h',
  departureTime: '06:00',
  arrivalTime: '16:00',
  frequency: 'Daily'
}, {
  id: '3',
  type: 'Flight',
  name: 'Ethiopian Airlines',
  route: 'Addis Ababa to Axum',
  image: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  price: 150,
  duration: '1h 45m',
  departureTime: '10:15',
  arrivalTime: '12:00',
  frequency: 'Mon, Wed, Fri, Sun'
}, {
  id: '4',
  type: 'Car Rental',
  name: 'Ethiopia Car Rental',
  route: 'Addis Ababa',
  image: 'https://images.unsplash.com/photo-1546614042-7df3c24c9e5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  price: 45,
  duration: '24h',
  departureTime: 'Flexible',
  arrivalTime: 'Flexible',
  frequency: 'Daily'
}, {
  id: '5',
  type: 'Flight',
  name: 'Ethiopian Airlines',
  route: 'Addis Ababa to Gondar',
  image: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  price: 135,
  duration: '1h 30m',
  departureTime: '14:45',
  arrivalTime: '16:15',
  frequency: 'Tue, Thu, Sat'
}, {
  id: '6',
  type: 'Bus',
  name: 'Sky Bus',
  route: 'Addis Ababa to Hawassa',
  image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
  price: 18,
  duration: '4h 30m',
  departureTime: '07:30',
  arrivalTime: '12:00',
  frequency: 'Daily'
}, {
  id: '7',
  type: 'Car Rental',
  name: 'Ride Ethiopia',
  route: 'Lalibela',
  image: 'https://images.unsplash.com/photo-1546614042-7df3c24c9e5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  price: 40,
  duration: '24h',
  departureTime: 'Flexible',
  arrivalTime: 'Flexible',
  frequency: 'Daily'
}, {
  id: '8',
  type: 'Flight',
  name: 'Ethiopian Airlines',
  route: 'Addis Ababa to Dire Dawa',
  image: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  price: 140,
  duration: '1h 20m',
  departureTime: '16:30',
  arrivalTime: '17:50',
  frequency: 'Daily'
}];
// Transport Card Component
const TransportCard = ({
  option
}: {
  option: (typeof transportOptions)[0];
}) => {
  const getIcon = () => {
    switch (option.type) {
      case 'Flight':
        return <Plane size={20} className="text-amber-600" />;
      case 'Bus':
        return <Bus size={20} className="text-amber-600" />;
      case 'Car Rental':
        return <Car size={20} className="text-amber-600" />;
      default:
        return <Map size={20} className="text-amber-600" />;
    }
  };
  return <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <img src={option.image} alt={option.name} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
        <div className="absolute top-0 right-0 bg-amber-600 text-white px-3 py-1 m-2 rounded-full text-sm font-medium">
          ${option.price}
        </div>
        <div className="absolute top-0 left-0 bg-white/80 text-gray-800 px-3 py-1 m-2 rounded-full text-sm font-medium flex items-center">
          {getIcon()}
          <span className="ml-1">{option.type}</span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-1">{option.name}</h3>
        <p className="text-gray-600 text-sm mb-3">{option.route}</p>
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="flex items-center text-gray-500 text-sm">
            <Calendar size={16} className="mr-1" />
            <span>{option.frequency}</span>
          </div>
          <div className="flex items-center text-gray-500 text-sm">
            <Clock size={16} className="mr-1" />
            <span>{option.duration}</span>
          </div>
          <div className="text-gray-500 text-sm">
            <span className="font-medium">Departs:</span> {option.departureTime}
          </div>
          <div className="text-gray-500 text-sm">
            <span className="font-medium">Arrives:</span> {option.arrivalTime}
          </div>
        </div>
        <div className="flex items-center justify-between mt-auto">
          <div className="text-amber-600 font-medium">${option.price}</div>
          <button className="text-sm font-medium text-white bg-amber-600 px-3 py-1 rounded hover:bg-amber-700 transition-colors">
            Book Now
          </button>
        </div>
      </div>
    </div>;
};
// Clock component for TransportCard
const Clock = ({
  size,
  className
}: {
  size: number;
  className?: string;
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>;
export function TransportPage() {
  const [showFilters, setShowFilters] = useState(false);
  const [activeTab, setActiveTab] = useState<'all' | 'flights' | 'buses' | 'cars'>('all');
  const filteredTransport = transportOptions.filter(option => {
    if (activeTab === 'all') return true;
    if (activeTab === 'flights') return option.type === 'Flight';
    if (activeTab === 'buses') return option.type === 'Bus';
    if (activeTab === 'cars') return option.type === 'Car Rental';
    return true;
  });
  return <div className="w-full bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-80 bg-cover bg-center" style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1570125909232-eb263c188f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')"
    }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Transportation in Ethiopia
          </h1>
          <p className="text-xl max-w-3xl">
            Find the best way to travel between Ethiopia's amazing destinations
          </p>
        </div>
      </div>
      {/* Search Form */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <form className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                From
              </label>
              <select className="w-full p-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500">
                <option>Addis Ababa</option>
                <option>Lalibela</option>
                <option>Gondar</option>
                <option>Bahir Dar</option>
                <option>Axum</option>
                <option>Hawassa</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                To
              </label>
              <select className="w-full p-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500">
                <option>Lalibela</option>
                <option>Addis Ababa</option>
                <option>Gondar</option>
                <option>Bahir Dar</option>
                <option>Axum</option>
                <option>Hawassa</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Date
              </label>
              <input type="date" className="w-full p-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Passengers
              </label>
              <select className="w-full p-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500">
                <option>1 Passenger</option>
                <option>2 Passengers</option>
                <option>3 Passengers</option>
                <option>4+ Passengers</option>
              </select>
            </div>
            <div className="flex items-end">
              <button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Tabs and Filters */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
          <div className="flex overflow-x-auto space-x-2 pb-2">
            <button onClick={() => setActiveTab('all')} className={`px-4 py-2 rounded-full whitespace-nowrap ${activeTab === 'all' ? 'bg-amber-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}>
              All Transport
            </button>
            <button onClick={() => setActiveTab('flights')} className={`px-4 py-2 rounded-full whitespace-nowrap flex items-center ${activeTab === 'flights' ? 'bg-amber-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}>
              <Plane size={16} className="mr-2" />
              Flights
            </button>
            <button onClick={() => setActiveTab('buses')} className={`px-4 py-2 rounded-full whitespace-nowrap flex items-center ${activeTab === 'buses' ? 'bg-amber-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}>
              <Bus size={16} className="mr-2" />
              Buses
            </button>
            <button onClick={() => setActiveTab('cars')} className={`px-4 py-2 rounded-full whitespace-nowrap flex items-center ${activeTab === 'cars' ? 'bg-amber-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}>
              <Car size={16} className="mr-2" />
              Car Rentals
            </button>
          </div>
          <button onClick={() => setShowFilters(!showFilters)} className="flex items-center gap-2 py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-100 bg-white">
            <Filter size={18} />
            <span>Filters</span>
          </button>
        </div>
        {/* Filters */}
        {showFilters && <div className="bg-white p-6 rounded-lg shadow-md mb-8 grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price Range
              </label>
              <select className="w-full p-2 border border-gray-300 rounded-md">
                <option>Any Price</option>
                <option>Under $50</option>
                <option>$50 - $100</option>
                <option>$100 - $150</option>
                <option>$150+</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Duration
              </label>
              <select className="w-full p-2 border border-gray-300 rounded-md">
                <option>Any Duration</option>
                <option>Under 2 hours</option>
                <option>2-5 hours</option>
                <option>5-10 hours</option>
                <option>10+ hours</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Departure Time
              </label>
              <select className="w-full p-2 border border-gray-300 rounded-md">
                <option>Any Time</option>
                <option>Morning (6AM-12PM)</option>
                <option>Afternoon (12PM-6PM)</option>
                <option>Evening (6PM-12AM)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Operator
              </label>
              <select className="w-full p-2 border border-gray-300 rounded-md">
                <option>All Operators</option>
                <option>Ethiopian Airlines</option>
                <option>Selam Bus</option>
                <option>Sky Bus</option>
                <option>Ethiopia Car Rental</option>
                <option>Ride Ethiopia</option>
              </select>
            </div>
          </div>}
        {/* Transport Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTransport.map(option => <TransportCard key={option.id} option={option} />)}
        </div>
        {/* Info Sections */}
        <div className="mt-16 space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-4">
              Transportation in Ethiopia
            </h2>
            <p className="text-gray-700 mb-4">
              Ethiopia offers a variety of transportation options for travelers
              looking to explore this diverse country. From domestic flights
              that save time when covering long distances, to buses that provide
              an economical way to travel between cities, and car rentals that
              offer flexibility for independent exploration.
            </p>
            <p className="text-gray-700">
              While the country's transportation infrastructure continues to
              develop, planning ahead is essential for a smooth journey. Our
              booking platform helps you find and secure the best transportation
              options for your Ethiopian adventure.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">Travel Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <Plane size={24} className="text-amber-600 mr-3" />
                  <h3 className="font-bold text-lg">Domestic Flights</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    • Book flights in advance, especially during high season
                  </li>
                  <li>
                    • Arrive at airports 2 hours before domestic departures
                  </li>
                  <li>• Expect occasional schedule changes and be flexible</li>
                  <li>• Ethiopian Airlines dominates domestic routes</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <Bus size={24} className="text-amber-600 mr-3" />
                  <h3 className="font-bold text-lg">Bus Travel</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>• Choose premium bus services for comfort and safety</li>
                  <li>• Buses typically depart early in the morning</li>
                  <li>• Bring snacks and water for longer journeys</li>
                  <li>• Expect stops along the way for breaks</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <Car size={24} className="text-amber-600 mr-3" />
                  <h3 className="font-bold text-lg">Car Rentals</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>• Consider hiring a driver with your rental car</li>
                  <li>• 4WD vehicles are recommended for rural areas</li>
                  <li>• Carry paper maps as backup to GPS</li>
                  <li>• Check road conditions before long journeys</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
        {/* Call to Action */}
        <div className="mt-12 bg-amber-50 border border-amber-200 rounded-lg p-6 md:p-8 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0 md:mr-6">
            <h3 className="text-xl font-bold mb-2">
              Need Help Planning Your Transportation?
            </h3>
            <p className="text-gray-700">
              Our travel experts can help you arrange the best transportation
              options for your Ethiopian journey.
            </p>
          </div>
          <Link to="/contact" className="flex items-center bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-md transition-colors whitespace-nowrap">
            Contact Us
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </div>;
}