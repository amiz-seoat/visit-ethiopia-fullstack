import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { User, Calendar, Home, CreditCard, Heart, Settings, LogOut, MapPin, ChevronRight, Clock, Edit, AlertCircle, CheckCircle } from 'lucide-react';
// Mock user data
const userData = {
  name: 'Sarah Johnson',
  email: 'sarah.johnson@example.com',
  phone: '+1 (555) 123-4567',
  avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
  address: '123 Main St, Boston, MA 02108',
  dateJoined: 'January 2023'
};
// Mock bookings data
const bookingsData = [{
  id: 'B001',
  type: 'Tour',
  name: 'Historic Northern Circuit',
  image: 'https://images.unsplash.com/photo-1518341223789-51e3a61f5dc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  startDate: '2023-11-15',
  endDate: '2023-11-22',
  status: 'Upcoming',
  price: 1299,
  participants: 2,
  paymentStatus: 'Paid',
  confirmationNumber: 'ET12345678'
}, {
  id: 'B002',
  type: 'Hotel',
  name: 'Sheraton Addis',
  image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  startDate: '2023-11-15',
  endDate: '2023-11-17',
  status: 'Upcoming',
  price: 360,
  participants: 2,
  paymentStatus: 'Paid',
  confirmationNumber: 'HA87654321'
}, {
  id: 'B003',
  type: 'Tour',
  name: 'Danakil Depression Adventure',
  image: 'https://images.unsplash.com/photo-1518002054494-3a6f870d4a8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  startDate: '2023-08-10',
  endDate: '2023-08-15',
  status: 'Completed',
  price: 1499,
  participants: 2,
  paymentStatus: 'Paid',
  confirmationNumber: 'ET24681012'
}];
// Mock wishlist data
const wishlistData = [{
  id: 'W001',
  type: 'Tour',
  name: 'Simien Mountains Trek',
  image: 'https://images.unsplash.com/photo-1591194620700-3b18f1f99460?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  price: 899,
  duration: '6 Days'
}, {
  id: 'W002',
  type: 'Hotel',
  name: 'Kuriftu Resort & Spa',
  image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2025&q=80',
  price: 120,
  duration: 'Per Night'
}, {
  id: 'W003',
  type: 'Tour',
  name: 'Omo Valley Cultural Experience',
  image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80',
  price: 1199,
  duration: '7 Days'
}];
export function UserDashboardPage() {
  // Check if user is logged in (in a real app, this would use auth state)
  const isLoggedIn = true; // This would normally be determined by your auth system
  // If not logged in, redirect to login page
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  const [activeTab, setActiveTab] = useState<'dashboard' | 'bookings' | 'wishlist' | 'profile' | 'settings'>('dashboard');
  const [editingProfile, setEditingProfile] = useState(false);
  const [profileData, setProfileData] = useState({
    ...userData
  });
  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      name,
      value
    } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to your API
    console.log('Profile updated:', profileData);
    setEditingProfile(false);
    // Update the user data (in a real app, this would come from the API response)
    // userData = {...profileData};
  };
  // Format date for display
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  return <div className="w-full bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="flex items-center mb-6">
                <img src={userData.avatar} alt={userData.name} className="w-16 h-16 rounded-full object-cover mr-4" />
                <div>
                  <h2 className="font-bold text-xl">{userData.name}</h2>
                  <p className="text-gray-600 text-sm">
                    Member since {userData.dateJoined}
                  </p>
                </div>
              </div>
              <nav className="space-y-1">
                <button onClick={() => setActiveTab('dashboard')} className={`w-full flex items-center p-3 rounded-md ${activeTab === 'dashboard' ? 'bg-amber-50 text-amber-700' : 'hover:bg-gray-50'}`}>
                  <Home size={20} className="mr-3" />
                  <span>Dashboard</span>
                </button>
                <button onClick={() => setActiveTab('bookings')} className={`w-full flex items-center p-3 rounded-md ${activeTab === 'bookings' ? 'bg-amber-50 text-amber-700' : 'hover:bg-gray-50'}`}>
                  <Calendar size={20} className="mr-3" />
                  <span>My Bookings</span>
                </button>
                <button onClick={() => setActiveTab('wishlist')} className={`w-full flex items-center p-3 rounded-md ${activeTab === 'wishlist' ? 'bg-amber-50 text-amber-700' : 'hover:bg-gray-50'}`}>
                  <Heart size={20} className="mr-3" />
                  <span>Wishlist</span>
                </button>
                <button onClick={() => setActiveTab('profile')} className={`w-full flex items-center p-3 rounded-md ${activeTab === 'profile' ? 'bg-amber-50 text-amber-700' : 'hover:bg-gray-50'}`}>
                  <User size={20} className="mr-3" />
                  <span>My Profile</span>
                </button>
                <button onClick={() => setActiveTab('settings')} className={`w-full flex items-center p-3 rounded-md ${activeTab === 'settings' ? 'bg-amber-50 text-amber-700' : 'hover:bg-gray-50'}`}>
                  <Settings size={20} className="mr-3" />
                  <span>Account Settings</span>
                </button>
                <button className="w-full flex items-center p-3 rounded-md text-red-600 hover:bg-red-50">
                  <LogOut size={20} className="mr-3" />
                  <span>Logout</span>
                </button>
              </nav>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <h3 className="font-medium mb-2">Need Help?</h3>
              <p className="text-sm text-gray-700 mb-3">
                Our travel experts are here to assist you with any questions
                about your bookings.
              </p>
              <a href="/contact" className="text-sm font-medium text-amber-700 hover:text-amber-800">
                Contact Support
              </a>
            </div>
          </div>
          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Dashboard Tab */}
            {activeTab === 'dashboard' && <div>
                <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
                {/* Welcome Card */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                  <h2 className="text-xl font-bold mb-2">
                    Welcome back, {userData.name}!
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Track your upcoming trips, manage your bookings, and
                    discover new destinations to explore in Ethiopia.
                  </p>
                  {/* Quick Stats */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <div className="bg-amber-50 rounded-lg p-4">
                      <div className="font-bold text-2xl text-amber-700 mb-1">
                        {bookingsData.filter(b => b.status === 'Upcoming').length}
                      </div>
                      <div className="text-sm text-gray-600">
                        Upcoming Trips
                      </div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <div className="font-bold text-2xl text-green-700 mb-1">
                        {bookingsData.filter(b => b.status === 'Completed').length}
                      </div>
                      <div className="text-sm text-gray-600">
                        Completed Trips
                      </div>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4">
                      <div className="font-bold text-2xl text-blue-700 mb-1">
                        {wishlistData.length}
                      </div>
                      <div className="text-sm text-gray-600">
                        Wishlist Items
                      </div>
                    </div>
                  </div>
                </div>
                {/* Upcoming Trips */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Upcoming Trips</h2>
                    <button onClick={() => setActiveTab('bookings')} className="text-sm text-amber-600 hover:text-amber-800 font-medium flex items-center">
                      View All <ChevronRight size={16} />
                    </button>
                  </div>
                  {bookingsData.filter(b => b.status === 'Upcoming').length > 0 ? <div className="space-y-4">
                      {bookingsData.filter(booking => booking.status === 'Upcoming').slice(0, 2).map(booking => <div key={booking.id} className="border rounded-lg overflow-hidden flex flex-col md:flex-row">
                            <div className="md:w-1/4 h-48 md:h-auto">
                              <img src={booking.image} alt={booking.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="p-4 flex-grow">
                              <div className="flex justify-between">
                                <h3 className="font-bold text-lg">
                                  {booking.name}
                                </h3>
                                <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                                  {booking.status}
                                </span>
                              </div>
                              <div className="flex flex-wrap gap-y-2 mt-2 text-sm text-gray-600">
                                <div className="w-full md:w-1/2 flex items-center">
                                  <Calendar size={16} className="mr-2" />
                                  <span>
                                    {formatDate(booking.startDate)} -{' '}
                                    {formatDate(booking.endDate)}
                                  </span>
                                </div>
                                <div className="w-full md:w-1/2 flex items-center">
                                  <User size={16} className="mr-2" />
                                  <span>
                                    {booking.participants}{' '}
                                    {booking.participants === 1 ? 'Person' : 'People'}
                                  </span>
                                </div>
                                <div className="w-full md:w-1/2 flex items-center">
                                  <CreditCard size={16} className="mr-2" />
                                  <span>{booking.paymentStatus}</span>
                                </div>
                                <div className="w-full md:w-1/2 flex items-center">
                                  <MapPin size={16} className="mr-2" />
                                  <span>{booking.type}</span>
                                </div>
                              </div>
                              <div className="mt-4 flex justify-between items-center">
                                <div className="font-bold text-amber-600">
                                  ${booking.price}
                                </div>
                                <button className="bg-amber-600 hover:bg-amber-700 text-white py-1 px-3 rounded text-sm transition-colors">
                                  View Details
                                </button>
                              </div>
                            </div>
                          </div>)}
                    </div> : <div className="text-center py-8 text-gray-500">
                      <Calendar size={48} className="mx-auto mb-3 text-gray-300" />
                      <p>You don't have any upcoming trips.</p>
                      <a href="/tours" className="text-amber-600 font-medium mt-2 inline-block">
                        Browse tours
                      </a>
                    </div>}
                </div>
                {/* Recommended For You */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-xl font-bold mb-4">
                    Recommended For You
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="border rounded-lg overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1574267432553-4b4628081c31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" alt="Bale Mountains National Park" className="w-full h-40 object-cover" />
                      <div className="p-3">
                        <h3 className="font-medium">
                          Bale Mountains National Park
                        </h3>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-amber-600 font-bold">
                            $1,099
                          </span>
                          <button className="text-sm text-amber-600 font-medium">
                            View Tour
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="border rounded-lg overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1580060839134-75a5edca2e99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Lake Tana Monasteries" className="w-full h-40 object-cover" />
                      <div className="p-3">
                        <h3 className="font-medium">Lake Tana Monasteries</h3>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-amber-600 font-bold">$499</span>
                          <button className="text-sm text-amber-600 font-medium">
                            View Tour
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="border rounded-lg overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80" alt="Axum Historical Tour" className="w-full h-40 object-cover" />
                      <div className="p-3">
                        <h3 className="font-medium">Axum Historical Tour</h3>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-amber-600 font-bold">$699</span>
                          <button className="text-sm text-amber-600 font-medium">
                            View Tour
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>}
            {/* Bookings Tab */}
            {activeTab === 'bookings' && <div>
                <h1 className="text-2xl font-bold mb-6">My Bookings</h1>
                {/* Tabs */}
                <div className="border-b mb-6">
                  <div className="flex space-x-8">
                    <button className="border-b-2 border-amber-600 text-amber-600 font-medium pb-2">
                      All Bookings
                    </button>
                    <button className="text-gray-500 hover:text-gray-700 pb-2">
                      Upcoming
                    </button>
                    <button className="text-gray-500 hover:text-gray-700 pb-2">
                      Completed
                    </button>
                    <button className="text-gray-500 hover:text-gray-700 pb-2">
                      Cancelled
                    </button>
                  </div>
                </div>
                {/* Bookings List */}
                <div className="space-y-6">
                  {bookingsData.map(booking => <div key={booking.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/4 h-48 md:h-auto">
                          <img src={booking.image} alt={booking.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="p-6 flex-grow">
                          <div className="flex justify-between mb-2">
                            <h3 className="font-bold text-lg">
                              {booking.name}
                            </h3>
                            <span className={`inline-block text-xs font-medium px-2.5 py-0.5 rounded ${booking.status === 'Upcoming' ? 'bg-green-100 text-green-800' : booking.status === 'Completed' ? 'bg-blue-100 text-blue-800' : 'bg-red-100 text-red-800'}`}>
                              {booking.status}
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-y-3 mt-4 text-sm text-gray-600">
                            <div className="w-full md:w-1/2 flex items-center">
                              <Calendar size={16} className="mr-2" />
                              <span>
                                {formatDate(booking.startDate)} -{' '}
                                {formatDate(booking.endDate)}
                              </span>
                            </div>
                            <div className="w-full md:w-1/2 flex items-center">
                              <MapPin size={16} className="mr-2" />
                              <span>{booking.type}</span>
                            </div>
                            <div className="w-full md:w-1/2 flex items-center">
                              <User size={16} className="mr-2" />
                              <span>
                                {booking.participants}{' '}
                                {booking.participants === 1 ? 'Person' : 'People'}
                              </span>
                            </div>
                            <div className="w-full md:w-1/2 flex items-center">
                              <CreditCard size={16} className="mr-2" />
                              <span>{booking.paymentStatus}</span>
                            </div>
                          </div>
                          <div className="mt-4 pt-4 border-t flex flex-wrap items-center justify-between gap-y-3">
                            <div>
                              <span className="text-gray-600">
                                Confirmation:{' '}
                              </span>
                              <span className="font-medium">
                                {booking.confirmationNumber}
                              </span>
                            </div>
                            <div className="font-bold text-lg text-amber-600">
                              ${booking.price}
                            </div>
                            <div className="flex space-x-2">
                              <button className="bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded transition-colors">
                                View Details
                              </button>
                              {booking.status === 'Upcoming' && <button className="border border-red-500 text-red-500 hover:bg-red-50 py-2 px-4 rounded transition-colors">
                                  Cancel
                                </button>}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>)}
                </div>
                {bookingsData.length === 0 && <div className="bg-white rounded-lg shadow-md p-8 text-center">
                    <Calendar size={48} className="mx-auto mb-3 text-gray-300" />
                    <h3 className="text-lg font-medium mb-2">
                      No bookings found
                    </h3>
                    <p className="text-gray-500 mb-4">
                      You haven't made any bookings yet.
                    </p>
                    <a href="/tours" className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 px-4 rounded transition-colors">
                      Browse Tours
                    </a>
                  </div>}
              </div>}
            {/* Wishlist Tab */}
            {activeTab === 'wishlist' && <div>
                <h1 className="text-2xl font-bold mb-6">My Wishlist</h1>
                {wishlistData.length > 0 ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {wishlistData.map(item => <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="relative">
                          <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                          <button className="absolute top-3 right-3 bg-white/80 hover:bg-white p-1.5 rounded-full text-red-500">
                            <Heart size={20} fill="currentColor" />
                          </button>
                          <div className="absolute top-3 left-3 bg-white/80 px-2 py-1 rounded text-xs font-medium">
                            {item.type}
                          </div>
                        </div>
                        <div className="p-4">
                          <h3 className="font-bold mb-2">{item.name}</h3>
                          <div className="flex items-center justify-between mb-4">
                            <div className="text-amber-600 font-bold">
                              ${item.price}
                            </div>
                            <div className="text-gray-600 text-sm">
                              {item.duration}
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <button className="flex-grow bg-amber-600 hover:bg-amber-700 text-white py-2 rounded text-sm transition-colors">
                              Book Now
                            </button>
                            <button className="border border-gray-300 hover:bg-gray-50 py-2 px-3 rounded text-sm transition-colors">
                              View Details
                            </button>
                          </div>
                        </div>
                      </div>)}
                  </div> : <div className="bg-white rounded-lg shadow-md p-8 text-center">
                    <Heart size={48} className="mx-auto mb-3 text-gray-300" />
                    <h3 className="text-lg font-medium mb-2">
                      Your wishlist is empty
                    </h3>
                    <p className="text-gray-500 mb-4">
                      Save tours and hotels you're interested in by clicking the
                      heart icon.
                    </p>
                    <div className="flex justify-center space-x-4">
                      <a href="/tours" className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 px-4 rounded transition-colors">
                        Browse Tours
                      </a>
                      <a href="/hotels" className="inline-block border border-gray-300 hover:bg-gray-50 font-medium py-2 px-4 rounded transition-colors">
                        Browse Hotels
                      </a>
                    </div>
                  </div>}
              </div>}
            {/* Profile Tab */}
            {activeTab === 'profile' && <div>
                <div className="flex justify-between items-center mb-6">
                  <h1 className="text-2xl font-bold">My Profile</h1>
                  {!editingProfile && <button onClick={() => setEditingProfile(true)} className="flex items-center text-amber-600 hover:text-amber-800">
                      <Edit size={18} className="mr-1" /> Edit Profile
                    </button>}
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  {editingProfile ? <form onSubmit={handleProfileSubmit} className="space-y-6">
                      <div className="flex items-center mb-6">
                        <img src={profileData.avatar} alt={profileData.name} className="w-20 h-20 rounded-full object-cover mr-4" />
                        <button type="button" className="text-sm text-amber-600 hover:text-amber-800">
                          Change Photo
                        </button>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name
                          </label>
                          <input type="text" id="name" name="name" value={profileData.name} onChange={handleProfileChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500 focus:outline-none" />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address
                          </label>
                          <input type="email" id="email" name="email" value={profileData.email} onChange={handleProfileChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500 focus:outline-none" />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                            Phone Number
                          </label>
                          <input type="tel" id="phone" name="phone" value={profileData.phone} onChange={handleProfileChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500 focus:outline-none" />
                        </div>
                        <div>
                          <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                            Address
                          </label>
                          <input type="text" id="address" name="address" value={profileData.address} onChange={handleProfileChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500 focus:outline-none" />
                        </div>
                      </div>
                      <div className="flex space-x-3">
                        <button type="submit" className="bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 px-4 rounded transition-colors">
                          Save Changes
                        </button>
                        <button type="button" onClick={() => {
                    setEditingProfile(false);
                    setProfileData({
                      ...userData
                    });
                  }} className="border border-gray-300 hover:bg-gray-50 font-medium py-2 px-4 rounded transition-colors">
                          Cancel
                        </button>
                      </div>
                    </form> : <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                        <div>
                          <h3 className="text-sm font-medium text-gray-500">
                            Full Name
                          </h3>
                          <p className="mt-1">{userData.name}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-gray-500">
                            Email Address
                          </h3>
                          <p className="mt-1">{userData.email}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-gray-500">
                            Phone Number
                          </h3>
                          <p className="mt-1">{userData.phone}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-gray-500">
                            Address
                          </h3>
                          <p className="mt-1">{userData.address}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-gray-500">
                            Member Since
                          </h3>
                          <p className="mt-1">{userData.dateJoined}</p>
                        </div>
                      </div>
                    </div>}
                </div>
                {/* Travel Preferences */}
                <div className="bg-white rounded-lg shadow-md p-6 mt-6">
                  <h2 className="text-xl font-bold mb-4">Travel Preferences</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium mb-2">Interests</h3>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Historical Sites
                        </span>
                        <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Wildlife
                        </span>
                        <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Hiking
                        </span>
                        <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Cultural Experiences
                        </span>
                        <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded hover:bg-amber-100 hover:text-amber-800 cursor-pointer">
                          + Add Interest
                        </span>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">
                        Preferred Accommodation
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Luxury Hotels
                        </span>
                        <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Boutique Hotels
                        </span>
                        <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded hover:bg-amber-100 hover:text-amber-800 cursor-pointer">
                          + Add Preference
                        </span>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Dietary Requirements</h3>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          None Specified
                        </span>
                        <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded hover:bg-amber-100 hover:text-amber-800 cursor-pointer">
                          + Add Requirement
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>}
            {/* Settings Tab */}
            {activeTab === 'settings' && <div>
                <h1 className="text-2xl font-bold mb-6">Account Settings</h1>
                {/* Password Change */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                  <h2 className="text-xl font-bold mb-4">Change Password</h2>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="current-password" className="block text-sm font-medium text-gray-700 mb-1">
                        Current Password
                      </label>
                      <input type="password" id="current-password" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500 focus:outline-none" />
                    </div>
                    <div>
                      <label htmlFor="new-password" className="block text-sm font-medium text-gray-700 mb-1">
                        New Password
                      </label>
                      <input type="password" id="new-password" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500 focus:outline-none" />
                    </div>
                    <div>
                      <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-1">
                        Confirm New Password
                      </label>
                      <input type="password" id="confirm-password" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500 focus:outline-none" />
                    </div>
                    <div>
                      <button type="submit" className="bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 px-4 rounded transition-colors">
                        Update Password
                      </button>
                    </div>
                  </form>
                </div>
                {/* Notification Settings */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                  <h2 className="text-xl font-bold mb-4">
                    Notification Settings
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Email Notifications</h3>
                        <p className="text-sm text-gray-500">
                          Receive updates about your bookings and account
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-amber-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-600"></div>
                      </label>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">SMS Notifications</h3>
                        <p className="text-sm text-gray-500">
                          Receive text message updates about your bookings
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-amber-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-600"></div>
                      </label>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">
                          Marketing Communications
                        </h3>
                        <p className="text-sm text-gray-500">
                          Receive special offers, promotions and travel
                          inspiration
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-amber-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-600"></div>
                      </label>
                    </div>
                  </div>
                </div>
                {/* Account Actions */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-xl font-bold mb-4">Account Actions</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium text-red-600">
                        Delete Account
                      </h3>
                      <p className="text-sm text-gray-500 mt-1 mb-3">
                        Permanently delete your account and all associated data.
                        This action cannot be undone.
                      </p>
                      <button className="border border-red-500 text-red-500 hover:bg-red-50 py-2 px-4 rounded transition-colors flex items-center">
                        <AlertCircle size={18} className="mr-2" />
                        Delete Account
                      </button>
                    </div>
                    <div>
                      <h3 className="font-medium">Download Personal Data</h3>
                      <p className="text-sm text-gray-500 mt-1 mb-3">
                        Download a copy of your personal data including profile
                        information and booking history.
                      </p>
                      <button className="border border-gray-300 hover:bg-gray-50 py-2 px-4 rounded transition-colors">
                        Download Data
                      </button>
                    </div>
                  </div>
                </div>
              </div>}
          </div>
        </div>
      </div>
    </div>;
}