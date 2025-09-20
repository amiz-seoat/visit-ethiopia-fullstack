import React, { useState } from 'react';
import { Calendar, Tag, ChevronRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
// Mock data for news articles
const newsArticles = [{
  id: '1',
  title: 'Ethiopia Named One of Top Travel Destinations for 2024',
  excerpt: 'International travel publications have recognized Ethiopia as one of the must-visit destinations for 2024, highlighting its rich history, diverse landscapes, and cultural experiences.',
  content: "Ethiopia has been named one of the top travel destinations for 2024 by several major international travel publications. The country's unique combination of ancient historical sites, breathtaking natural landscapes, and vibrant cultural experiences has captured the attention of travel experts worldwide. From the rock-hewn churches of Lalibela to the otherworldly landscapes of the Danakil Depression, Ethiopia offers experiences that can't be found anywhere else on the planet. Tourism officials expect a significant increase in visitors over the coming year as more travelers seek authentic and off-the-beaten-path destinations. Local tour operators are already reporting increased bookings for the high season. This recognition comes after years of infrastructure development and tourism promotion efforts by the Ethiopian government.",
  image: 'https://images.unsplash.com/photo-1518002054494-3a6f870d4a8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  date: 'November 15, 2023',
  author: 'Michael Johnson',
  category: 'Travel News',
  tags: ['Tourism', 'Recognition', 'Travel Trends']
}, {
  id: '2',
  title: 'New Luxury Eco-Lodge Opens in Simien Mountains National Park',
  excerpt: "A sustainable luxury eco-lodge has opened its doors in the stunning Simien Mountains, offering travelers a comfortable base to explore one of Ethiopia's most spectacular landscapes.",
  content: "A new luxury eco-lodge has opened in Ethiopia's Simien Mountains National Park, providing travelers with sustainable accommodations in one of the country's most breathtaking settings. The lodge, built using local materials and traditional building techniques, features 15 private bungalows with panoramic views of the mountains. Solar power, rainwater harvesting, and a zero-waste policy are at the core of the lodge's operations. Guests can enjoy guided treks to spot endemic wildlife like the Gelada baboon and Walia ibex, or immerse themselves in the local culture through community visits. The lodge employs staff from nearby communities and sources food from local farmers, creating a positive economic impact on the region. Conservation experts have praised the development for its minimal environmental footprint and contribution to sustainable tourism in the protected area.",
  image: 'https://images.unsplash.com/photo-1591194620700-3b18f1f99460?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  date: 'October 28, 2023',
  author: 'Sarah Williams',
  category: 'Accommodations',
  tags: ['Eco-Tourism', 'Luxury Travel', 'Sustainable']
}, {
  id: '3',
  title: 'Ethiopian Airlines Adds New Routes to Key Tourist Destinations',
  excerpt: "Ethiopia's flag carrier has announced new domestic routes connecting Addis Ababa to emerging tourist destinations, making it easier for travelers to explore the country.",
  content: "Ethiopian Airlines has announced the addition of several new domestic routes that will connect Addis Ababa to emerging tourist destinations throughout the country. The new flights, which will begin operating next month, aim to improve accessibility to locations that have previously been challenging to reach. Among the new destinations are Nech Sar National Park, known for its diverse wildlife and scenic beauty, and the ancient city of Harar with its historic walled city. The airline will use its modern fleet of Bombardier Q400 aircraft for these routes, chosen for their fuel efficiency and suitability for shorter runways. This expansion is part of Ethiopian Airlines' strategy to support the country's growing tourism sector and provide better connectivity for both international visitors and domestic travelers. Tourism officials have welcomed the announcement, noting that improved air access is crucial for developing new tourism circuits beyond the established northern historical route.",
  image: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  date: 'October 10, 2023',
  author: 'Daniel Kebede',
  category: 'Transportation',
  tags: ['Airlines', 'Domestic Travel', 'Accessibility']
}, {
  id: '4',
  title: 'Major Restoration Project Completed at Lalibela Rock Churches',
  excerpt: 'A five-year restoration project has been completed at the UNESCO World Heritage site of Lalibela, ensuring the preservation of these remarkable 12th-century monuments.',
  content: "After five years of meticulous work, the major restoration project at Lalibela's rock-hewn churches has been completed. The project, funded by international organizations and the Ethiopian government, focused on addressing structural issues, improving drainage systems, and preserving the intricate carvings that make these 12th-century monuments a UNESCO World Heritage site. Experts from Ethiopia and around the world collaborated to ensure that the restoration work respected the original craftsmanship while employing modern conservation techniques. New protective shelters have been installed over some of the most vulnerable churches, designed to be both effective and visually unobtrusive. The completion of this project ensures that these remarkable monuments will be preserved for future generations while continuing to serve as active places of worship for the local community. A ceremony marking the completion of the restoration was attended by government officials, religious leaders, and representatives from UNESCO.",
  image: 'https://images.unsplash.com/photo-1563514227147-6d2e624f82b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
  date: 'September 22, 2023',
  author: 'Emma Rodriguez',
  category: 'Cultural Heritage',
  tags: ['UNESCO', 'Restoration', 'Cultural Preservation']
}, {
  id: '5',
  title: 'New Community-Based Tourism Initiative Launches in Omo Valley',
  excerpt: 'A sustainable tourism initiative has been launched in the Omo Valley, allowing visitors to experience authentic tribal cultures while ensuring benefits flow directly to local communities.',
  content: "A new community-based tourism initiative has been launched in Ethiopia's Omo Valley, home to some of Africa's most distinctive tribal cultures. The program, developed in partnership with local communities, NGOs, and tourism authorities, aims to create authentic cultural experiences while ensuring that tourism benefits flow directly to the people being visited. Participating communities have established guidelines for respectful interaction and photography, and visitors will be hosted in traditional accommodations upgraded for basic comfort. A significant portion of the fees paid by tourists goes directly to community development projects chosen by the villages themselves, including education, healthcare, and clean water initiatives. The program includes cultural exchanges, traditional craft workshops, and guided nature walks led by local experts. Tourism experts have praised the initiative as a model for responsible cultural tourism that preserves traditions while providing economic opportunities in remote areas.",
  image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80',
  date: 'September 5, 2023',
  author: 'Thomas Ngeze',
  category: 'Sustainable Tourism',
  tags: ['Community Tourism', 'Cultural Experience', 'Responsible Travel']
}, {
  id: '6',
  title: 'Ethiopia Simplifies Visa Process for International Travelers',
  excerpt: 'The Ethiopian government has announced changes to its visa policy, making it easier for international tourists to visit the country through an improved e-visa system.',
  content: "The Ethiopian government has announced significant changes to its visa policy, introducing an improved e-visa system designed to make it easier for international tourists to visit the country. The new system allows travelers from all countries to apply online and receive approval within 48 hours, eliminating the need to visit embassies or consulates in person. Multiple-entry visas are now available, and the validity period has been extended from 30 to 90 days for tourist visas. Additionally, visa fees have been reduced to encourage more visitors, especially during the upcoming high season. Tourism officials expect these changes to boost international arrivals by at least 15% in the coming year. The move comes as part of broader efforts to position Ethiopia as a leading tourism destination in East Africa and to reach the country's ambitious target of welcoming one million international visitors annually by 2025.",
  image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
  date: 'August 17, 2023',
  author: 'Lisa Chen',
  category: 'Travel News',
  tags: ['Visa Policy', 'Travel Regulations', 'Tourism Development']
}];
// Categories for filtering
const categories = ['All Categories', 'Travel News', 'Cultural Heritage', 'Accommodations', 'Transportation', 'Sustainable Tourism'];
export function NewsPage() {
  const [activeCategory, setActiveCategory] = useState('All Categories');
  const [searchQuery, setSearchQuery] = useState('');
  const filteredArticles = newsArticles.filter(article => {
    // Filter by category
    if (activeCategory !== 'All Categories' && article.category !== activeCategory) {
      return false;
    }
    // Filter by search query
    if (searchQuery && !article.title.toLowerCase().includes(searchQuery.toLowerCase()) && !article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    return true;
  });
  return <div className="w-full bg-white">
      {/* Hero Section */}
      <div className="relative h-80 bg-cover bg-center" style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1504512485720-7d83a16ee930?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2004&q=80')"
    }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Travel News & Updates
          </h1>
          <p className="text-xl max-w-3xl">
            Stay informed about the latest developments in Ethiopian tourism
          </p>
        </div>
      </div>
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Column - News Articles */}
          <div className="lg:w-2/3">
            {/* Search and Categories */}
            <div className="mb-8">
              <div className="relative mb-6">
                <input type="text" placeholder="Search articles..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full py-3 px-4 pr-12 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 focus:outline-none" />
                <Search size={20} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              <div className="flex overflow-x-auto space-x-2 pb-2">
                {categories.map(category => <button key={category} onClick={() => setActiveCategory(category)} className={`px-4 py-2 rounded-full whitespace-nowrap ${activeCategory === category ? 'bg-amber-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                    {category}
                  </button>)}
              </div>
            </div>
            {/* Featured Article */}
            {filteredArticles.length > 0 && <div className="mb-12">
                <Link to={`/news/${filteredArticles[0].id}`} className="block">
                  <div className="relative h-80 rounded-lg overflow-hidden mb-4">
                    <img src={filteredArticles[0].image} alt={filteredArticles[0].title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <span className="inline-block bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-2">
                        {filteredArticles[0].category}
                      </span>
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        {filteredArticles[0].title}
                      </h2>
                      <div className="flex items-center text-white/80">
                        <Calendar size={16} className="mr-2" />
                        <span>{filteredArticles[0].date}</span>
                      </div>
                    </div>
                  </div>
                </Link>
                <p className="text-gray-700 mb-4">
                  {filteredArticles[0].excerpt}
                </p>
                <Link to={`/news/${filteredArticles[0].id}`} className="flex items-center text-amber-600 hover:text-amber-800 font-medium">
                  Read Full Article
                  <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>}
            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredArticles.slice(1).map(article => <div key={article.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  <Link to={`/news/${article.id}`}>
                    <div className="h-48 overflow-hidden">
                      <img src={article.image} alt={article.title} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
                    </div>
                  </Link>
                  <div className="p-4">
                    <div className="flex items-center mb-2">
                      <span className="inline-block bg-amber-100 text-amber-800 px-2 py-1 rounded text-xs font-medium">
                        {article.category}
                      </span>
                      <span className="text-gray-500 text-sm ml-auto flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {article.date}
                      </span>
                    </div>
                    <Link to={`/news/${article.id}`}>
                      <h3 className="font-bold text-lg mb-2 hover:text-amber-600 transition-colors">
                        {article.title}
                      </h3>
                    </Link>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <Link to={`/news/${article.id}`} className="text-sm font-medium text-amber-600 hover:text-amber-800 flex items-center">
                      Read More
                      <ChevronRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>)}
            </div>
            {filteredArticles.length === 0 && <div className="text-center py-12">
                <h3 className="text-xl font-medium text-gray-600">
                  No articles found matching your criteria
                </h3>
                <p className="mt-2 text-gray-500">
                  Try adjusting your search or category filters
                </p>
              </div>}
            {/* Pagination */}
            {filteredArticles.length > 0 && <div className="mt-12 flex justify-center">
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
                    Next
                  </button>
                </nav>
              </div>}
          </div>
          {/* Sidebar */}
          <div className="lg:w-1/3">
            {/* Popular Tags */}
            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              <h3 className="text-lg font-bold mb-4">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {Array.from(new Set(newsArticles.flatMap(article => article.tags))).map(tag => <span key={tag} className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-sm hover:bg-gray-200 cursor-pointer">
                    <Tag size={14} className="mr-1 text-amber-600" />
                    {tag}
                  </span>)}
              </div>
            </div>
            {/* Newsletter Signup */}
            <div className="bg-amber-50 border border-amber-200 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-bold mb-2">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-gray-700 mb-4">
                Get the latest news and updates about Ethiopia travel delivered
                to your inbox
              </p>
              <form className="space-y-3">
                <input type="email" placeholder="Your email address" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500 focus:outline-none" required />
                <button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
                  Subscribe
                </button>
              </form>
            </div>
            {/* Recent Articles */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-4">Recent Articles</h3>
              <div className="space-y-4">
                {newsArticles.slice(0, 4).map(article => <Link key={article.id} to={`/news/${article.id}`} className="flex items-start space-x-3 group">
                    <div className="w-16 h-16 flex-shrink-0 rounded overflow-hidden">
                      <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm group-hover:text-amber-600 transition-colors line-clamp-2">
                        {article.title}
                      </h4>
                      <span className="text-gray-500 text-xs">
                        {article.date}
                      </span>
                    </div>
                  </Link>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
}