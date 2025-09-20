import React, { useState, Children } from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, Star, MapPin, Wifi, Coffee, Utensils, Car, ChevronRight, ChevronDown, BoxIcon } from 'lucide-react';
// Mock hotel data
const hotelData = {
  id: '1',
  name: 'Sheraton Addis',
  description: "Experience luxury in the heart of Addis Ababa at the iconic Sheraton Addis, a Luxury Collection Hotel. This 5-star hotel offers elegant accommodations with traditional Ethiopian touches, set in beautiful landscaped grounds with outdoor pools. Located in the city center near the National Museum and Holy Trinity Cathedral, it's the perfect base for exploring Ethiopia's capital.",
  coverImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  images: ['https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', 'https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2025&q=80'],
  stars: 5,
  rating: 4.7,
  reviewCount: 124,
  location: 'Taitu Street, Addis Ababa, Ethiopia',
  mapUrl: 'https://maps.google.com/?q=Sheraton+Addis',
  amenities: [{
    name: 'Free Wi-Fi',
    icon: 'Wifi'
  }, {
    name: 'Swimming Pool',
    icon: 'BoxIcon'
  }, {
    name: 'Restaurant',
    icon: 'Utensils'
  }, {
    name: 'Airport Shuttle',
    icon: 'Car'
  }, {
    name: 'Spa & Wellness Center',
    icon: 'Spa'
  }, {
    name: 'Fitness Center',
    icon: 'Dumbbell'
  }, {
    name: 'Room Service',
    icon: 'Bell'
  }, {
    name: 'Business Center',
    icon: 'Briefcase'
  }, {
    name: 'Bar/Lounge',
    icon: 'Wine'
  }, {
    name: 'Coffee Shop',
    icon: 'Coffee'
  }],
  roomTypes: [{
    id: 'classic',
    name: 'Classic Room',
    description: 'Comfortable room with city views, featuring a king-size bed or twin beds, work desk, and marble bathroom.',
    price: 180,
    capacity: '2 Adults',
    size: '35 m²',
    bedType: '1 King or 2 Twin Beds',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80'
  }, {
    id: 'deluxe',
    name: 'Deluxe Room',
    description: 'Spacious room with garden views, featuring a king-size bed, sitting area, work desk, and marble bathroom with separate shower and bathtub.',
    price: 220,
    capacity: '2 Adults, 1 Child',
    size: '45 m²',
    bedType: '1 King Bed',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  }, {
    id: 'suite',
    name: 'Executive Suite',
    description: 'Luxurious suite with separate living room, bedroom with king-size bed, and marble bathroom with jetted tub and separate shower.',
    price: 350,
    capacity: '2 Adults, 2 Children',
    size: '75 m²',
    bedType: '1 King Bed',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  }],
  reviews: [{
    id: 1,
    name: 'Michael Johnson',
    rating: 5,
    date: 'September 2023',
    comment: 'Fantastic hotel with exceptional service. The staff went above and beyond to make our stay special. The rooms are spacious and beautifully decorated, and the pool area is stunning. Would highly recommend for anyone visiting Addis Ababa.'
  }, {
    id: 2,
    name: 'Sarah Williams',
    rating: 4,
    date: 'August 2023',
    comment: 'Very nice hotel with comfortable rooms and great amenities. The breakfast buffet was excellent with a wide variety of options. The only downside was some noise from the street, but overall a very pleasant stay.'
  }, {
    id: 3,
    name: 'David Chen',
    rating: 5,
    date: 'July 2023',
    comment: "One of the best hotels I've stayed at in Africa. The grounds are beautiful and well-maintained, the rooms are luxurious, and the staff is incredibly friendly and professional. The location is also perfect for exploring the city."
  }],
  policies: {
    checkIn: '2:00 PM',
    checkOut: '12:00 PM',
    cancellation: 'Free cancellation up to 24 hours before check-in. Cancellations after this time are subject to a one-night charge.',
    children: 'Children of all ages are welcome. Children under 12 stay free when using existing bedding.',
    pets: 'Pets are not allowed.',
    paymentOptions: 'Visa, Mastercard, American Express, Cash'
  }
};
export function HotelDetailPage() {
  const {
    id
  } = useParams<{
    id: string;
  }>();
  const [selectedImage, setSelectedImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState<string | null>('policies');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guests, setGuests] = useState(2);
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);
  const toggleAccordion = (section: string) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };
  return <div className="bg-white w-full">
      {/* Hero Section */}
      <div className="relative h-80 md:h-96 bg-cover bg-center" style={{
      backgroundImage: `url(${hotelData.coverImage})`
    }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-end pb-8">
          <div className="flex items-center mb-3">
            {Array.from({
            length: 5
          }).map((_, i) => <Star key={i} size={20} fill={i < hotelData.stars ? 'currentColor' : 'none'} className={i < hotelData.stars ? 'text-amber-400' : 'text-gray-300'} />)}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
            {hotelData.name}
          </h1>
          <div className="flex items-center text-white">
            <MapPin size={18} className="mr-1" />
            <span>{hotelData.location}</span>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Hotel Details */}
          <div className="lg:w-2/3">
            {/* Gallery */}
            <div className="mb-8">
              <div className="bg-gray-100 rounded-lg overflow-hidden mb-4">
                <img src={hotelData.images[selectedImage]} alt={`${hotelData.name} - Image ${selectedImage + 1}`} className="w-full h-96 object-cover" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {hotelData.images.map((image, index) => <div key={index} className={`h-24 rounded-lg overflow-hidden cursor-pointer ${selectedImage === index ? 'ring-2 ring-amber-500' : ''}`} onClick={() => setSelectedImage(index)}>
                    <img src={image} alt={`${hotelData.name} - Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                  </div>)}
              </div>
            </div>
            {/* Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">
                About {hotelData.name}
              </h2>
              <p className="text-gray-700">{hotelData.description}</p>
            </div>
            {/* Amenities */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Amenities</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {hotelData.amenities.map((amenity, index) => <div key={index} className="flex items-center">
                    {amenity.icon === 'Wifi' && <Wifi size={18} className="text-amber-600 mr-2" />}
                    {amenity.icon === 'BoxIcon' && <div size={18} className="text-amber-600 mr-2" />}
                    {amenity.icon === 'Utensils' && <Utensils size={18} className="text-amber-600 mr-2" />}
                    {amenity.icon === 'Car' && <Car size={18} className="text-amber-600 mr-2" />}
                    {amenity.icon === 'Coffee' && <Coffee size={18} className="text-amber-600 mr-2" />}
                    <span className="text-gray-700">{amenity.name}</span>
                  </div>)}
              </div>
            </div>
            {/* Room Types */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Available Rooms</h2>
              <div className="space-y-6">
                {hotelData.roomTypes.map(room => <div key={room.id} className="border rounded-lg overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/3 h-48 md:h-auto">
                        <img src={room.image} alt={room.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="p-4 md:w-2/3 flex flex-col">
                        <div className="flex-grow">
                          <h3 className="font-bold text-xl mb-2">
                            {room.name}
                          </h3>
                          <p className="text-gray-600 text-sm mb-4">
                            {room.description}
                          </p>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm mb-4">
                            <div>
                              <span className="font-medium">Capacity:</span>{' '}
                              {room.capacity}
                            </div>
                            <div>
                              <span className="font-medium">Size:</span>{' '}
                              {room.size}
                            </div>
                            <div>
                              <span className="font-medium">Bed:</span>{' '}
                              {room.bedType}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                          <div className="text-xl font-bold text-amber-600">
                            ${room.price}
                            <span className="text-sm text-gray-600 font-normal">
                              /night
                            </span>
                          </div>
                          <button onClick={() => setSelectedRoom(room.id)} className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-md transition-colors">
                            Select
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>)}
              </div>
            </div>
            {/* Policies and Info */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Hotel Policies</h2>
              <div className="border rounded-lg overflow-hidden">
                <button className="w-full px-6 py-4 flex items-center justify-between text-left border-b" onClick={() => toggleAccordion('policies')}>
                  <span className="font-medium">Policies & Rules</span>
                  {openAccordion === 'policies' ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                </button>
                {openAccordion === 'policies' && <div className="px-6 py-4 bg-gray-50">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p>
                          <span className="font-medium">Check-in:</span>{' '}
                          {hotelData.policies.checkIn}
                        </p>
                        <p>
                          <span className="font-medium">Check-out:</span>{' '}
                          {hotelData.policies.checkOut}
                        </p>
                        <p>
                          <span className="font-medium">Pets:</span>{' '}
                          {hotelData.policies.pets}
                        </p>
                      </div>
                      <div>
                        <p>
                          <span className="font-medium">Children:</span>{' '}
                          {hotelData.policies.children}
                        </p>
                        <p>
                          <span className="font-medium">Payment Options:</span>{' '}
                          {hotelData.policies.paymentOptions}
                        </p>
                      </div>
                    </div>
                  </div>}
                <button className="w-full px-6 py-4 flex items-center justify-between text-left border-b" onClick={() => toggleAccordion('cancellation')}>
                  <span className="font-medium">Cancellation Policy</span>
                  {openAccordion === 'cancellation' ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                </button>
                {openAccordion === 'cancellation' && <div className="px-6 py-4 bg-gray-50">
                    <p>{hotelData.policies.cancellation}</p>
                  </div>}
              </div>
            </div>
            {/* Reviews */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">Guest Reviews</h2>
                <div className="flex items-center">
                  <div className="flex text-amber-500 mr-2">
                    <Star size={18} fill="currentColor" />
                  </div>
                  <span className="font-medium">{hotelData.rating}</span>
                  <span className="text-gray-500 ml-1">
                    ({hotelData.reviewCount} reviews)
                  </span>
                </div>
              </div>
              <div className="space-y-6">
                {hotelData.reviews.map(review => <div key={review.id} className="border-b pb-6 last:border-b-0">
                    <div className="flex justify-between mb-2">
                      <h3 className="font-medium">{review.name}</h3>
                      <span className="text-gray-500 text-sm">
                        {review.date}
                      </span>
                    </div>
                    <div className="flex text-amber-500 mb-2">
                      {Array.from({
                    length: 5
                  }).map((_, i) => <Star key={i} size={16} fill={i < review.rating ? 'currentColor' : 'none'} className={i < review.rating ? 'text-amber-500' : 'text-gray-300'} />)}
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>)}
              </div>
            </div>
          </div>
          {/* Right Column - Booking */}
          <div className="lg:w-1/3">
            <div className="bg-white border rounded-lg shadow-md p-6 sticky top-24">
              <h3 className="text-xl font-bold mb-4">Book Your Stay</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="check-in" className="block text-sm font-medium text-gray-700 mb-1">
                    Check-in Date
                  </label>
                  <div className="relative">
                    <input id="check-in" type="date" value={checkInDate} onChange={e => setCheckInDate(e.target.value)} className="w-full p-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500" required />
                    <Calendar size={18} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label htmlFor="check-out" className="block text-sm font-medium text-gray-700 mb-1">
                    Check-out Date
                  </label>
                  <div className="relative">
                    <input id="check-out" type="date" value={checkOutDate} onChange={e => setCheckOutDate(e.target.value)} className="w-full p-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500" required />
                    <Calendar size={18} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">
                    Guests
                  </label>
                  <select id="guests" value={guests} onChange={e => setGuests(parseInt(e.target.value))} className="w-full p-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500">
                    {[1, 2, 3, 4].map(num => <option key={num} value={num}>
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Room Type
                  </label>
                  <div className="space-y-2">
                    {hotelData.roomTypes.map(room => <label key={room.id} className="flex items-center p-3 border rounded-md cursor-pointer hover:bg-gray-50">
                        <input type="radio" name="roomType" value={room.id} checked={selectedRoom === room.id} onChange={() => setSelectedRoom(room.id)} className="mr-2 text-amber-600 focus:ring-amber-500" />
                        <div className="flex-grow">
                          <div className="font-medium">{room.name}</div>
                          <div className="text-sm text-gray-500">
                            ${room.price}/night
                          </div>
                        </div>
                      </label>)}
                  </div>
                </div>
                {selectedRoom && checkInDate && checkOutDate && <div className="border-t pt-4 mt-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Room Rate</span>
                      <span>
                        $
                        {hotelData.roomTypes.find(r => r.id === selectedRoom)?.price}
                        /night
                      </span>
                    </div>
                    <div className="flex justify-between font-bold text-lg border-t pt-2 mt-2">
                      <span>Total</span>
                      <span>
                        $
                        {hotelData.roomTypes.find(r => r.id === selectedRoom)?.price || 0}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      *Price shown is for one night
                    </p>
                  </div>}
                <button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-4 rounded-md transition-colors">
                  Book Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>;
}