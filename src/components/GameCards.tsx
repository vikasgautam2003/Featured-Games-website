import React from 'react'

type GameCardProps = {
  title: string;
  image: string;
}

const gamecards = ({game}: {game: GameCardProps}) => {
  return (
    <div className='bg-gray-800 text-white p-4 rounded-lg shadow-md'>
      <img 
        src={game.image} 
        alt={game.title} 
        className='w-full h-32 object-cover rounded-md'
      />
      <h3 className="mt-2 text-lg font-semibold">{game.title}</h3>
    </div>
  )
}

export default gamecards
