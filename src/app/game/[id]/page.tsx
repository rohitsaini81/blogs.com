// app/games/[id]/page.tsx
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Star, Download, Clock, Calendar, HardDrive, Shield, Globe } from 'lucide-react';

// Temporary DB (in real app: fetch from API or database)
const gamesDB = [
  { id: 1, title: "Cyberpunk 2077", category: "RPG", size: "72 GB", rating: 4.5, downloads: 8500000, image: "/games/cyberpunk.jpg", description: "An open-world, action-adventure RPG set in the night city of the future. Become V, a cyber-enhanced mercenary.", releaseDate: "December 10, 2020", publisher: "CD Projekt Red", version: "2.1", systemRequirements: "Windows 10/11, Intel i7, 16GB RAM, RTX 3060", screenshots: ["/ss1.jpg", "/ss2.jpg", "/ss3.jpg"], featured: true },
  { id: 2, title: "Elden Ring", category: "Action RPG", size: "58 GB", rating: 5, downloads: 12000000, image: "/games/eldenring.jpg", description: "Rise, Tarnished. A vast world with open fields, dungeons, and legendary bosses awaits in the Lands Between.", releaseDate: "February 25, 2022", publisher: "FromSoftware", version: "1.12", systemRequirements: "Windows 10, Intel i5, 12GB RAM, GTX 1070", screenshots: ["/ss4.jpg", "/ss5.jpg"], featured: true },
  { id: 3, title: "Valorant", category: "Tactical Shooter", size: "28 GB", rating: 4.7, downloads: 50000000, image: "/games/valorant.jpg", description: "A 5v5 character-based tactical FPS where precise gunplay meets unique agent abilities.", releaseDate: "June 2, 2020", publisher: "Riot Games", version: "8.11", systemRequirements: "Windows 10, Intel i3, 4GB RAM, Integrated GPU", screenshots: [], featured: false },
  // Add more games as needed...
];

type Game = typeof gamesDB[0];

interface Params {
  params: { id: string };
}

export async function generateMetadata({ params }: Params) {
  const game = gamesDB.find(g => g.id === Number(params.id));
  if (!game) return { title: "Game Not Found" };

  return {
    title: `${game.title} - Download Free PC Game`,
    description: game.description,
  };
}

export default function GameDetailPage({ params }: Params) {
  const gameId = Number(params.id);
  const game = gamesDB.find(g => g.id === gameId);

  if (!game) {
    notFound();
  }

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${i < Math.round(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
        />
      ))}
      <span className="ml-2 text-sm font-medium text-gray-600">{rating.toFixed(1)}</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        <Image
          src={game.image}
          alt={game.title}
          fill
          className="object-cover brightness-75"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-2xl">
              {game.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-lg">
              <span className="px-4 py-2 bg-purple-600 rounded-full font-semibold">
                {game.category}
              </span>
              <StarRating rating={game.rating} />
              <span className="flex items-center gap-2">
                <Download className="w-5 h-5" />
                {(game.downloads / 1000000).toFixed(1)}M+ Downloads
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 -mt-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Download Card */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-200">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-3">Ready to Play?</h2>
                  <div className="space-y-2 text-gray-600">
                    <p className="flex items-center gap-3"><HardDrive className="w-5 h-5 text-teal-600" /> Size: <strong>{game.size}</strong></p>
                    <p className="flex items-center gap-3"><Shield className="w-5 h-5 text-green-600" /> 100% Safe & Virus-Free</p>
                    <p className="flex items-center gap-3"><Clock className="w-5 h-5 text-blue-600" /> Version: {game.version}</p>
                  </div>
                </div>

                <button className="group relative px-12 py-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xl font-bold rounded-2xl shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300 overflow-hidden">
                  <span className="relative z-10 flex items-center gap-3">
                    <Download className="w-7 h-7" />
                    Download Now
                  </span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
                </button>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">About This Game</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {game.description}
              </p>
            </div>

            {/* System Requirements */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">System Requirements</h2>
              <div className="bg-gray-50 rounded-2xl p-6 font-mono text-sm">
                {game.systemRequirements}
              </div>
            </div>

            {/* Screenshots (if any) */}
            {game.screenshots.length > 0 && (
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Screenshots</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {game.screenshots.map((src, i) => (
                    <div key={i} className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
                      <Image src={src} alt={`Screenshot ${i+1}`} fill className="object-cover hover:scale-110 transition-transform duration-500" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl shadow-xl p-6">
              <h3 className="font-bold text-lg mb-4 text-gray-800">Game Info</h3>
              <div className="space-y-4 text-gray-700">
                <div className="flex justify-between">
                  <span className="flex items-center gap-2"><Calendar className="w-5 h-5 text-purple-600" /> Release Date</span>
                  <span className="font-medium">{game.releaseDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="flex items-center gap-2"><Globe className="w-5 h-5 text-blue-600" /> Publisher</span>
                  <span className="font-medium">{game.publisher}</span>
                </div>
                <div className="flex justify-between">
                  <span className="flex items-center gap-2"><Shield className="w-5 h-5 text-green-600" /> Version</span>
                  <span className="font-medium">{game.version}</span>
                </div>
              </div>
            </div>

            {/* Fake Reviews */}
            <div className="bg-white rounded-3xl shadow-xl p-6">
              <h3 className="font-bold text-lg mb-4 text-gray-800">User Reviews</h3>
              <div className="space-y-4">
                {[
                  { name: "Alex", rating: 5, text: "Amazing game! Runs perfectly." },
                  { name: "Sarah", rating: 4, text: "Great graphics, love the story." },
                ].map((review, i) => (
                  <div key={i} className="border-b border-gray-200 pb-4 last:border-0">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold">{review.name}</span>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, j) => (
                          <Star key={j} className={`w-4 h-4 ${j < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">{review.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}