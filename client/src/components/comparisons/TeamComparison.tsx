import React from "react";

interface TeamComparisonProps {
  team1: {
    name: string;
    wins: number;
    goalsFor: number;
  };
  team2: {
    name: string;
    wins: number;
    goalsFor: number;
  };
}

const TeamComparison: React.FC<TeamComparisonProps> = ({ team1, team2 }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 m-4 text-black">
      <h2 className="text-2xl font-bold mb-4">Team Comparison</h2>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <p className="font-semibold">{team1.name}</p>
        </div>
        <div className="text-center">
          <p className="font-semibold">Stat</p>
        </div>
        <div className="text-right">
          <p className="font-semibold">{team2.name}</p>
        </div>
        <div>{team1.wins}</div>
        <div className="text-center">Wins</div>
        <div className="text-right">{team2.wins}</div>
        <div>{team1.goalsFor}</div>
        <div className="text-center">Goals For</div>
        <div className="text-right">{team2.goalsFor}</div>
      </div>
    </div>
  );
};

export default TeamComparison;
