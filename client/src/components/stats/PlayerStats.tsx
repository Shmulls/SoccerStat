import React from "react";

interface PlayerStatsProps {
  playerName: string;
  position: string;
  gamesPlayed: number;
  goals: number;
  assists: number;
  yellowCards: number;
  redCards: number;
}

const PlayerStats: React.FC<PlayerStatsProps> = ({
  playerName,
  position,
  gamesPlayed,
  goals,
  assists,
  yellowCards,
  redCards,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 m-4 text-black">
      <h2 className="text-2xl font-bold mb-2 text-black">{playerName}</h2>
      <p className="text-gray-600 mb-4 text-black">{position}</p>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="font-semibold text-black">Games Played:</p>
          <p className="text-black">{gamesPlayed}</p>
        </div>
        <div>
          <p className="font-semibold text-black">Goals:</p>
          <p className="text-black">{goals}</p>
        </div>
        <div>
          <p className="font-semibold text-black">Assists:</p>
          <p className="text-black">{assists}</p>
        </div>
        <div>
          <p className="font-semibold text-black">Cards:</p>
          <p className="text-black">
            {yellowCards} Yellow, {redCards} Red
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlayerStats;
