import React from 'react';

const StarRating = ({ count }) => {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, idx) => (
        <svg
          key={idx}
          className={`w-5 h-5 transition-all ${idx < count
            ? 'text-yellow-400 fill-yellow-400'
            : 'text-gray-300 fill-none'
            }`}
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.979 2.89a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.979-2.89a1 1 0 00-1.176 0l-3.979 2.89c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.979-2.89c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      ))}
    </div>
  );
};

export default function Applications({ windowsApps, pcGames }) {
  if (!windowsApps || !pcGames) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Grid Layout - Responsive */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Main Content: Windows Apps */}
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-6 py-5">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                  <h2 className="text-2xl font-bold flex items-center gap-3">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M2 3v18h10V3H2zm12 0v10h8v-10h-8z" />
                    </svg>
                    Windows Applications
                  </h2>
                  <button className="px-5 py-2 bg-white/20 hover:bg-white/30 rounded-lg font-medium transition-all backdrop-blur">
                    View All →
                  </button>
                </div>
              </div>

              <div className="p-4 sm:p-6 space-y-4">
                {windowsApps.map((app, idx) => (
                  <div
                    key={idx}
                    className={`relative bg-white rounded-2xl overflow-hidden transition-all duration-300
      border-2 ${app.featured ? 'border-yellow-400 shadow-2xl' : 'border-gray-200 shadow-lg'}
      hover:shadow-2xl hover:-translate-y-1`}
                  >
                    {/* Featured Badge */}
                    {app.featured && (
                      <div className="absolute -top-3 left-4 z-10 bg-gradient-to-r from-yellow-400 to-amber-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-xl animate-pulse">
                        Featured
                      </div>
                    )}<div className="p-4 sm:p-6">
                      <div className="flex flex-col gap-6">
                        {/* Top: App Icon + Info */}
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
                          <img
                            src={app.icon}
                            alt={app.title}
                            className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover shadow-md flex-shrink-0 border border-gray-200"
                          />

                          <div className="flex-1 min-w-0">
                            <h3 className="font-bold text-lg sm:text-xl text-gray-900 line-clamp-2">
                              {app.title}
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600 mt-1 line-clamp-2">
                              {app.description}
                            </p>
                            <div className="mt-3">
                              <span className="inline-block px-3 py-1.5 bg-teal-100 text-teal-700 text-xs sm:text-sm font-bold rounded-full">
                                {app.category}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4 text-center text-sm">
                          {/* OS & Downloads */}
                          <div className="space-y-1">
                            <div className="flex items-center justify-center gap-1.5 text-blue-600 font-semibold">
                              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M2 3v18h10V3H2zm12 0v10h8v-10h-8z" />
                              </svg>
                              <span className="text-xs sm:text-sm">{app.os}</span>
                            </div>
                            <p className="text-xs text-gray-500">
                              {app.downloads.toLocaleString()} dl
                            </p>
                          </div>

                          {/* Reputation */}
                          <div className="space-y-1">
                            <p className="text-xs font-medium text-gray-600">Reputation</p>
                            <div className="flex justify-center">
                              <StarRating count={app.reputation} />
                            </div>
                          </div>

                          {/* Size */}
                          <div className="space-y-1">
                            <p className="text-base sm:text-lg font-bold text-gray-800">{app.size}</p>
                            <p className="text-xs text-gray-500">Size</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>



          {/* Sidebar: PC Games (Hidden on mobile unless large screen) */}
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
              <h2 className="text-xl font-bold text-gray-800 mb-5 pb-3 border-b-2 border-teal-600 inline-block">
                Popular PC Games
              </h2>
              <div className="space-y-4">
                {pcGames.map((game, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer border border-gray-100"
                  >
                    <img
                      src={game.img}
                      alt={game.title}
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg object-cover shadow-sm group-hover:scale-110 transition-transform duration-300 flex-shrink-0"
                    />

                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-gray-800 group-hover:text-teal-600 transition-colors text-sm sm:text-base line-clamp-1">
                        {game.title}
                      </h4>
                      <p className="text-xs text-teal-700 font-medium mt-0.5">{game.category}</p>
                      <p className="text-sm font-bold text-gray-700 mt-1">{game.size}</p>
                    </div>

                    <span className="text-xl text-gray-400 group-hover:text-teal-600 group-hover:translate-x-2 transition-all">
                      →
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}