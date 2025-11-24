"use client"
import React, { useState, useMemo } from 'react';

// Star Rating Component
const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${
            star <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 fill-gray-300'
          }`}
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.953a1 1 0 00.95.69h4.163c.969 0 1.371 1.24.588 1.81l-3.376 2.454a1 1 0 00-.364 1.118l1.287 3.953c.3.921-.755 1.688-1.538 1.118l-3.376-2.454a1 1 0 00-1.176 0l-3.376 2.454c-.783.57-1.838-.197-1.538-1.118l1.287-3.953a1 1 0 00-.364-1.118L2.312 9.38c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.286-3.953z" />
        </svg>
      ))}
    </div>
  );
};

// Fake Games Data
const gamesData = [
  { id: 1, title: "Cyberpunk 2077", category: "RPG", size: "72 GB", rating: 4.5, downloads: 8500000, featured: true, img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=400&fit=crop" },
  { id: 2, title: "Elden Ring", category: "Action RPG", size: "49 GB", rating: 5, downloads: 12000000, featured: true, img: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=400&h=400&fit=crop" },
  { id: 3, title: "Valorant", category: "FPS", size: "28 GB", rating: 4.7, downloads: 45000000, featured: false, img: "https://images.unsplash.com/photo-1547041662-4be6ace1050f?w=400&h=400&fit=crop" },
  { id: 4, title: "Minecraft", category: "Sandbox", size: "1.2 GB", rating: 4.9, downloads: 180000000, featured: true, img: "https://images.unsplash.com/photo-1553481184-4d0e2e2d4e7a?w=400&h=400&fit=crop" },
  { id: 5, title: "GTA V", category: "Open World", size: "105 GB", rating: 4.8, downloads: 190000000, featured: false, img: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400&h=400&fit=crop" },
  { id: 6, title: "The Witcher 3", category: "RPG", size: "58 GB", rating: 5, downloads: 50000000, featured: true, img: "https://images.unsplash.com/photo-1586182987387-5b8a2b0e9e7b?w=400&h=400&fit=crop" },
  { id: 7, title: "Fortnite", category: "Battle Royale", size: "95 GB", rating: 4.3, downloads: 400000000, featured: false, img: "https://images.unsplash.com/photo-1542751111-7e23b23a4d2f?w=400&h=400&fit=crop" },
  { id: 8, title: "Red Dead Redemption 2", category: "Adventure", size: "119 GB", rating: 5, downloads: 65000000, featured: true, img: "https://images.unsplash.com/photo-1553481184-d2b5f2d0e7b3?w=400&h=400&fit=crop" },
];

export default function GamesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState("grid"); // grid or list

  const categories = ["All", "RPG", "FPS", "Open World", "Battle Royale", "Sandbox", "Adventure", "Action RPG"];

  const filteredGames = useMemo(() => {
    return gamesData.filter(game => {
      const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "All" || game.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        {/* Hero Header */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">PC Games Collection</h1>
            <p className="text-lg md:text-xl opacity-90">Download the best games for Windows - Free & Premium</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-10">
          {/* Search & Filters */}
          <div className="mb-10 space-y-6">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative w-full md:w-96">
                <input
                  type="text"
                  placeholder="Search games..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-4 focus:ring-purple-200 outline-none transition-all text-gray-800"
                />
                <svg className="absolute left-4 top-4 w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-3 rounded-lg transition-all ${viewMode === "grid" ? "bg-purple-600 text-white" : "bg-white text-gray-700 shadow-md"}`}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-3 rounded-lg transition-all ${viewMode === "list" ? "bg-purple-600 text-white" : "bg-white text-gray-700 shadow-md"}`}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all ${
                    selectedCategory === cat
                      ? "bg-purple-600 text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-purple-100 shadow-md"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Games Grid / List */}
          {filteredGames.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-2xl text-gray-500">No games found matching your criteria</p>
            </div>
          ) : (
            <div className={`grid gap-6 ${viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" : "grid-cols-1"}`}>
              {filteredGames.map((game) => (
                <div
                  key={game.id}
                  className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 ${
                    game.featured ? "border-yellow-400" : "border-transparent"
                  }`}
                >
                  {game.featured && (
                    <div className="absolute top-3 left-3 z-10 bg-gradient-to-r from-yellow-400 to-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      Featured
                    </div>
                  )}

                  <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                    <img
                      src={game.img}
                      alt={game.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-5 space-y-3">
                    <h3 className="font-bold text-lg text-gray-900 line-clamp-1 group-hover:text-purple-600 transition-colors">
                      {game.title}
                    </h3>

                    <div className="flex items-center justify-between text-sm">
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full font-medium">
                        {game.category}
                      </span>
                      <StarRating rating={Math.round(game.rating)} />
                    </div>

                    <div className="flex items-center justify-between text-gray-600 text-sm">
                      <div>
                        <p className="font-semibold text-gray-900">{game.size}</p>
                        <p className="text-xs">Size</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-900">{(game.downloads / 1000000).toFixed(1)}M</p>
                        <p className="text-xs">Downloads</p>
                      </div>
                    </div>

                    <button className="w-full mt-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105">
                      Download Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}