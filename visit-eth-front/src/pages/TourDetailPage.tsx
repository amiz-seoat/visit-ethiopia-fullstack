import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Clock, Users, Map, Calendar, CheckCircle, XCircle, Star, ChevronRight, ChevronDown } from 'lucide-react';
// Mock tour data
const tourData = {
  id: '1',
  title: 'Historic Northern Circuit',
  coverImage: 'https://images.unsplash.com/photo-1518341223789-51e3a61f5dc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  images: ['https://images.unsplash.com/photo-1563514227147-6d2e624f82b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80', 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80', 'https://images.unsplash.com/photo-1574267432553-4b4628081c31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80'],
  price: 1299,
  discount: 100,
  duration: '8 Days',
  rating: 4.8,
  reviewCount: 24,
  maxGroupSize: 12,
  currentBookings: 6,
  description: "Experience the best of Ethiopia's historical sites on this comprehensive 8-day journey through the northern circuit. Visit the rock-hewn churches of Lalibela, the ancient obelisks of Axum, and the medieval castles of Gondar. This tour offers a perfect blend of culture, history, and natural beauty, with comfortable accommodations and expert local guides throughout.",
  itinerary: [{
    day: 1,
    title: 'Arrival in Addis Ababa',
    description: "Welcome to Ethiopia! Upon arrival at Bole International Airport, you'll be met by your guide and transferred to your hotel. After some rest, enjoy a city tour including the National Museum, home to the famous Lucy skeleton, and St. George Cathedral."
  }, {
    day: 2,
    title: 'Fly to Lalibela',
    description: 'Morning flight to Lalibela. Spend the day exploring the first group of rock-hewn churches, including the impressive Bet Medhane Alem, the largest monolithic church in the world.'
  }, {
    day: 3,
    title: 'Lalibela Churches',
    description: 'Continue exploring the remaining churches of Lalibela, including the iconic Bet Giyorgis (St. George), carved in the shape of a cross. In the afternoon, visit a traditional Ethiopian home for coffee ceremony.'
  }, {
    day: 4,
    title: 'Fly to Axum',
    description: "Morning flight to Axum. Explore the ancient stelae fields, the ruins of the Queen of Sheba's palace, and the Church of St. Mary of Zion, which is said to house the Ark of the Covenant."
  }, {
    day: 5,
    title: 'Fly to Gondar',
    description: 'Morning flight to Gondar. Visit the Royal Enclosure with its medieval castles and palaces, as well as the beautiful Debre Berhan Selassie Church with its famous ceiling of painted angels.'
  }, {
    day: 6,
    title: 'Drive to Bahir Dar',
    description: 'Scenic drive to Bahir Dar along the shores of Lake Tana. In the afternoon, take a boat trip on Lake Tana to visit ancient island monasteries with beautiful murals and religious artifacts.'
  }, {
    day: 7,
    title: 'Blue Nile Falls',
    description: "Morning excursion to the spectacular Blue Nile Falls, known locally as Tis Issat or 'Smoking Water'. Afternoon at leisure to explore Bahir Dar's markets and lakeside."
  }, {
    day: 8,
    title: 'Return to Addis Ababa',
    description: 'Morning flight back to Addis Ababa. Last-minute shopping at the Merkato, the largest open-air market in Africa. Farewell dinner with traditional Ethiopian music and dance before departure.'
  }],
  inclusions: ['All accommodations (3-4 star hotels)', 'Domestic flights within Ethiopia', 'All ground transportation', 'English-speaking guide throughout', 'All entrance fees to sites', 'Daily breakfast, lunch, and dinner', 'Airport transfers', 'Bottled water during tours'],
  exclusions: ['International flights', 'Visa fees', 'Travel insurance', 'Personal expenses', 'Alcoholic beverages', 'Tips for guides and drivers'],
  availableDates: ['2023-10-15', '2023-11-05', '2023-11-26', '2023-12-17', '2024-01-14', '2024-02-04'],
  reviews: [{
    id: 1,
    name: 'Sarah Johnson',
    rating: 5,
    date: 'August 2023',
    comment: "The northern circuit tour was absolutely incredible! Our guide Dawit was knowledgeable and passionate about Ethiopia's history. The rock-hewn churches of Lalibela were mind-blowing. Highly recommend this tour!"
  }, {
    id: 2,
    name: 'Michael Thompson',
    rating: 4,
    date: 'July 2023',
    comment: 'Great tour with amazing historical sites. The hotels were comfortable and the food was delicious. Only giving 4 stars because some of the drives between cities were quite long, but the scenery was beautiful.'
  }, {
    id: 3,
    name: 'Emma Wilson',
    rating: 5,
    date: 'June 2023',
    comment: 'This was my second trip to Ethiopia and it was even better than the first! The northern circuit has so much history and culture to offer. Our guide made the experience special with his insights and local connections.'
  }]
};
export function TourDetailPage() {
  const {
    id
  } = useParams<{
    id: string;
  }>();
  const [selectedImage, setSelectedImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);
  const [selectedDate, setSelectedDate] = useState('');
  const [participants, setParticipants] = useState(1);
  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };
  const handleDateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDate(e.target.value);
  };
  const handleParticipantsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setParticipants(parseInt(e.target.value));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Prepare booking data according to schema
    const bookingData = {
      bookingType: 'tour',
      bookingItem: id,
      bookingDetails: {
        startDate: selectedDate,
        endDate: null,
        quantity: participants,
        participants: Array(participants).fill({
          name: '',
          age: null,
          specialRequirements: ''
        })
      },
      contactInfo: {
        fullName: '',
        email: '',
        phone: '',
        address: ''
      },
      payment: {
        amount: tourData.price * participants,
        currency: 'ETB',
        paymentMethod: 'credit_card',
        paymentStatus: 'pending'
      }
    };
    // Would call API: POST /api/bookings
    console.log('Booking data:', bookingData);
  };
  return <div className="bg-white w-full">
      {/* Hero Section */}
      <div className="relative h-80 md:h-96 bg-cover bg-center" style={{
      backgroundImage: `url(${tourData.coverImage})`
    }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-end pb-8">
          <div className="bg-amber-600 text-white py-1 px-3 rounded-full inline-block mb-3 text-sm font-medium">
            Featured Tour
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
            {tourData.title}
          </h1>
          <div className="flex items-center text-white">
            <div className="flex items-center mr-6">
              <Star size={18} fill="currentColor" className="mr-1" />
              <span>
                {tourData.rating} ({tourData.reviewCount} reviews)
              </span>
            </div>
            <div className="flex items-center mr-6">
              <Clock size={18} className="mr-1" />
              <span>{tourData.duration}</span>
            </div>
            <div className="flex items-center">
              <Users size={18} className="mr-1" />
              <span>
                {tourData.currentBookings}/{tourData.maxGroupSize} spots taken
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Tour Details */}
          <div className="lg:w-2/3">
            {/* Gallery */}
            <div className="mb-8">
              <div className="bg-gray-100 rounded-lg overflow-hidden mb-4">
                <img src={tourData.images[selectedImage]} alt={`${tourData.title} - Image ${selectedImage + 1}`} className="w-full h-96 object-cover" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {tourData.images.map((image, index) => <div key={index} className={`h-24 rounded-lg overflow-hidden cursor-pointer ${selectedImage === index ? 'ring-2 ring-amber-500' : ''}`} onClick={() => setSelectedImage(index)}>
                    <img src={image} alt={`${tourData.title} - Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                  </div>)}
              </div>
            </div>
            {/* Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Tour Overview</h2>
              <p className="text-gray-700">{tourData.description}</p>
            </div>
            {/* Itinerary */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Itinerary</h2>
              <div className="border rounded-lg overflow-hidden">
                {tourData.itinerary.map((day, index) => <div key={index} className="border-b last:border-b-0">
                    <button className="w-full px-6 py-4 flex items-center justify-between text-left" onClick={() => toggleAccordion(index)}>
                      <div>
                        <span className="text-amber-600 font-medium">
                          Day {day.day}:
                        </span>{' '}
                        <span className="font-medium">{day.title}</span>
                      </div>
                      {openAccordion === index ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                    </button>
                    {openAccordion === index && <div className="px-6 py-4 bg-gray-50">
                        <p className="text-gray-700">{day.description}</p>
                      </div>}
                  </div>)}
              </div>
            </div>
            {/* Inclusions & Exclusions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h2 className="text-xl font-bold mb-4">What's Included</h2>
                <ul className="space-y-2">
                  {tourData.inclusions.map((item, index) => <li key={index} className="flex items-start">
                      <CheckCircle size={18} className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>)}
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-bold mb-4">What's Not Included</h2>
                <ul className="space-y-2">
                  {tourData.exclusions.map((item, index) => <li key={index} className="flex items-start">
                      <XCircle size={18} className="text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>)}
                </ul>
              </div>
            </div>
            {/* Reviews */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">Reviews</h2>
                <button className="text-amber-600 font-medium hover:text-amber-800">
                  Write a Review
                </button>
              </div>
              <div className="space-y-6">
                {tourData.reviews.map(review => <div key={review.id} className="border-b pb-6 last:border-b-0">
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
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-gray-500 line-through">
                    ${tourData.price + tourData.discount}
                  </span>
                  <span className="text-3xl font-bold text-gray-900 ml-2">
                    ${tourData.price}
                  </span>
                </div>
                <span className="bg-green-100 text-green-800 text-sm font-medium py-1 px-2 rounded">
                  Save ${tourData.discount}
                </span>
              </div>
              <form className="space-y-4">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                    Select Date
                  </label>
                  <div className="relative">
                    <select id="date" value={selectedDate} onChange={handleDateChange} className="w-full p-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500" required>
                      <option value="">Select a date</option>
                      {tourData.availableDates.map(date => <option key={date} value={date}>
                          {new Date(date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                        </option>)}
                    </select>
                    <Calendar size={18} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                </div>
                <div>
                  <label htmlFor="participants" className="block text-sm font-medium text-gray-700 mb-1">
                    Number of Participants
                  </label>
                  <select id="participants" value={participants} onChange={handleParticipantsChange} className="w-full p-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500">
                    {[...Array(tourData.maxGroupSize - tourData.currentBookings + 1).keys()].map(num => <option key={num} value={num}>
                        {num} {num === 1 ? 'person' : 'people'}
                      </option>)}
                  </select>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Base Price</span>
                    <span>${tourData.price}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Participants</span>
                    <span>× {participants}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg border-t pt-2 mt-2">
                    <span>Total</span>
                    <span>${tourData.price * participants}</span>
                  </div>
                </div>
                <button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-4 rounded-md transition-colors">
                  Book Now
                </button>
              </form>
              <div className="mt-4 flex items-center text-gray-600 text-sm justify-center">
                <Map size={16} className="mr-1" />
                <span>Free cancellation up to 7 days before the tour</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
}