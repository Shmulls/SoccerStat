import React from "react";

interface TeamStatsProps {
  teamName: string;
  gamesPlayed: number;
  wins: number;
  draws: number;
  losses: number;
  goalsFor: number;
  goalsAgainst: number;
}

const TeamStats: React.FC<TeamStatsProps> = ({
  teamName,
  gamesPlayed,
  wins,
  draws,
  losses,
  goalsFor,
  goalsAgainst,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 m-4 text-black">
      <h2 className="text-2xl font-bold mb-4 text-black">{teamName}</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="font-semibold text-black">Games Played:</p>
          <p className="text-black">{gamesPlayed}</p>
        </div>
        <div>
          <p className="font-semibold text-black">Record:</p>
          <p className="text-black">
            {wins}W - {draws}D - {losses}L
          </p>
        </div>
        <div>
          <p className="font-semibold text-black">Goals For:</p>
          <p className="text-black">{goalsFor}</p>
        </div>
        <div>
          <p className="font-semibold text-black">Goals Against:</p>
          <p className="text-black">{goalsAgainst}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamStats;
