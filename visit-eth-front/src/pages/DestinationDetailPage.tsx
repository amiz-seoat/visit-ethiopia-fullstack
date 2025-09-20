import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { TourCard } from '../components/ui/TourCard';
import { HotelCard } from '../components/ui/HotelCard';
// Mock destination data
const destinationData = {
  id: '1',
  name: 'Lalibela',
  region: 'Amhara Region',
  description: 'Lalibela is famous for its monolithic rock-cut churches, which date from the 12th and 13th centuries. These extraordinary buildings are still used for religious ceremonies today and are a testament to the faith, technical skill, and strength of the Ethiopian people. Lalibela is considered one of the holiest cities in Ethiopia and a center of pilgrimage for much of the country.',
  longDescription: "Lalibela, a small town in northern Ethiopia, is home to one of the world's most astounding sacred sites: eleven rock-hewn churches, each carved entirely out of a single block of granite with its roof at ground level. Dating from the 12th century, the churches were built on the orders of King Lalibela, who aimed to create a 'New Jerusalem' after Muslim conquests halted Christian pilgrimages to the Holy Land.\n\nThe churches are connected by a maze of tunnels and passages, with narrow courtyards, isolated chambers, and caves. Some are monolithic, completely freed from the surrounding rock; others are only partially separated; and a few are carved into a cliff face. Each church is uniquely designed and architecturally distinct, showcasing the incredible craftsmanship and engineering skills of the time.\n\nBet Medhane Alem, the largest monolithic church in the world, resembles a Greek temple with its rows of pillars. Bet Maryam is believed to be the oldest of the churches, while Bet Giyorgis (St. George's Church), carved in the shape of a cross, is considered the most beautiful and best preserved.\n\nToday, Lalibela remains an active pilgrimage site for Coptic Christians and a living testament to Ethiopia's ancient Christian traditions. The town itself retains a medieval, timeless feel with traditional round houses scattered across the rocky landscape.",
  coverImage: 'https://images.unsplash.com/photo-1563514227147-6d2e624f82b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
  images: ['https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80', 'https://images.unsplash.com/photo-1626964143945-1c10c50deb84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'],
  highlights: ['Rock-Hewn Churches of Lalibela (UNESCO World Heritage Site)', 'Bet Giyorgis (Church of St. George)', 'Bet Medhane Alem (the largest monolithic church in the world)', 'Bet Maryam (Church of Mary)', 'Yemrehana Kristos (earlier church built inside a cave)', 'Traditional Ethiopian Coffee Ceremonies', 'Local Markets and Handicrafts'],
  bestTimeToVisit: 'October to March (dry season)',
  howToGetThere: 'Flights to Lalibela Airport from Addis Ababa take about 1 hour. Alternatively, bus services are available from major cities, though journeys can be long on partially unpaved roads.',
  tours: [{
    id: '1',
    title: 'Historic Northern Circuit',
    image: 'https://images.unsplash.com/photo-1518341223789-51e3a61f5dc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    price: 1299,
    duration: '8 Days',
    rating: 4.8,
    shortDescription: 'Explore the ancient wonders of Lalibela, Axum, and Gondar on this comprehensive northern Ethiopia tour.'
  }, {
    id: '9',
    title: 'Lalibela Churches Tour',
    image: 'https://images.unsplash.com/photo-1626964143945-1c10c50deb84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    price: 599,
    duration: '3 Days',
    rating: 4.9,
    shortDescription: "Immerse yourself in the spiritual wonder of Lalibela's rock-hewn churches with expert local guides."
  }, {
    id: '10',
    title: 'Ethiopian Orthodox Festival',
    image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    price: 799,
    duration: '5 Days',
    rating: 4.7,
    shortDescription: 'Experience the vibrant Timkat or Meskel festivals in Lalibela, with traditional ceremonies and celebrations.'
  }],
  hotels: [{
    id: '4',
    name: 'Maribela Hotel',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    stars: 3,
    rating: 4.4,
    location: 'Lalibela',
    priceRange: '$90/night'
  }, {
    id: '11',
    name: 'Mountain View Hotel',
    image: 'https://images.unsplash.com/photo-1561501900-3701fa6a0864?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    stars: 4,
    rating: 4.5,
    location: 'Lalibela',
    priceRange: '$110/night'
  }, {
    id: '12',
    name: 'Tukul Village',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    stars: 3,
    rating: 4.3,
    location: 'Lalibela',
    priceRange: '$85/night'
  }]
};
export function DestinationDetailPage() {
  const {
    id
  } = useParams<{
    id: string;
  }>();
  return <div className="bg-white w-full">
      {/* Hero Section */}
      <div className="relative h-80 md:h-96 bg-cover bg-center" style={{
      backgroundImage: `url(${destinationData.coverImage})`
    }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-end pb-8">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
            {destinationData.name}
          </h1>
          <div className="flex items-center text-white">
            <MapPin size={18} className="mr-1" />
            <span>{destinationData.region}</span>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Destination Details */}
          <div className="lg:w-2/3">
            {/* Gallery */}
            <div className="mb-8 grid grid-cols-3 gap-4">
              {destinationData.images.map((image, index) => <div key={index} className="h-48 rounded-lg overflow-hidden">
                  <img src={image} alt={`${destinationData.name} - Image ${index + 1}`} className="w-full h-full object-cover" />
                </div>)}
            </div>
            {/* Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">
                About {destinationData.name}
              </h2>
              <p className="text-gray-700 mb-4">
                {destinationData.description}
              </p>
              <p className="text-gray-700 whitespace-pre-line">
                {destinationData.longDescription}
              </p>
            </div>
            {/* Highlights */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Highlights</h2>
              <ul className="space-y-2">
                {destinationData.highlights.map((highlight, index) => <li key={index} className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-amber-500 text-white flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-gray-700">{highlight}</span>
                  </li>)}
              </ul>
            </div>
            {/* Travel Information */}
            <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Calendar size={20} className="text-amber-600 mr-2" />
                  <h3 className="text-xl font-bold">Best Time to Visit</h3>
                </div>
                <p className="text-gray-700">
                  {destinationData.bestTimeToVisit}
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Clock size={20} className="text-amber-600 mr-2" />
                  <h3 className="text-xl font-bold">How to Get There</h3>
                </div>
                <p className="text-gray-700">{destinationData.howToGetThere}</p>
              </div>
            </div>
            {/* Tours */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">
                  Tours to {destinationData.name}
                </h2>
                <Link to="/tours" className="flex items-center text-amber-600 hover:text-amber-800 font-medium">
                  <span className="mr-2">View All Tours</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {destinationData.tours.map(tour => <TourCard key={tour.id} id={tour.id} title={tour.title} image={tour.image} price={tour.price} duration={tour.duration} rating={tour.rating} shortDescription={tour.shortDescription} />)}
              </div>
            </div>
            {/* Hotels */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">
                  Where to Stay in {destinationData.name}
                </h2>
                <Link to="/hotels" className="flex items-center text-amber-600 hover:text-amber-800 font-medium">
                  <span className="mr-2">View All Hotels</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {destinationData.hotels.map(hotel => <HotelCard key={hotel.id} id={hotel.id} name={hotel.name} image={hotel.image} stars={hotel.stars} rating={hotel.rating} location={hotel.location} priceRange={hotel.priceRange} />)}
              </div>
            </div>
          </div>
          {/* Right Column - Sidebar */}
          <div className="lg:w-1/3">
            {/* Map Placeholder */}
            <div className="bg-gray-200 h-64 rounded-lg mb-6 flex items-center justify-center">
              <span className="text-gray-600">Interactive Map Coming Soon</span>
            </div>
            {/* Quick Info */}
            <div className="bg-white border rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-bold mb-4">Quick Information</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin size={18} className="text-amber-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <span className="block font-medium">Location</span>
                    <span className="text-gray-600">
                      {destinationData.region}, Ethiopia
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Calendar size={18} className="text-amber-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <span className="block font-medium">
                      Best Time to Visit
                    </span>
                    <span className="text-gray-600">
                      {destinationData.bestTimeToVisit}
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <User size={18} className="text-amber-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <span className="block font-medium">Perfect For</span>
                    <span className="text-gray-600">
                      History Buffs, Religious Tourism, Cultural Experiences
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            {/* Book Tour CTA */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">
                Ready to Explore {destinationData.name}?
              </h3>
              <p className="text-gray-700 mb-4">
                Book a guided tour with our expert local guides to make the most
                of your visit.
              </p>
              <Link to="/tours" className="block text-center bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-4 rounded-md transition-colors">
                Find Tours to {destinationData.name}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>;
}