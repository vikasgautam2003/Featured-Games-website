import Sidebar from '@/components/Sidebar';
import React from 'react';
import GameCards from '@/components/GameCards';
import { games } from '@/db/data';

const GamesPage = () => {
  return (
    <div className="flex"> 
      <Sidebar />
      <div className="flex-1 bg-gray-100 p-5">
        <h1 className="text-2xl font-bold mb-4">Featured Games</h1>
        <div className="flex gap-4 flex-wrap">
          {/* Game Cards */}
          {games.map((game) => (
            <GameCards key={game.id} game={game} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GamesPage;
