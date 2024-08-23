import React from "react";

interface Player {
  name: string;
  goals: number;
  assists: number;
}

interface PlayerRankingProps {
  players: Player[];
}

const PlayerRanking: React.FC<PlayerRankingProps> = ({ players }) => {
  const sortedPlayers = [...players].sort(
    (a, b) => b.goals + b.assists - (a.goals + a.assists)
  );

  return (
    <div className="bg-white shadow-md rounded-lg p-6 m-4 text-black">
      <h2 className="text-2xl font-bold mb-4 text-black">Player Rankings</h2>
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="text-left text-black">Name</th>
            <th className="text-left text-black">Goals</th>
            <th className="text-left text-black">Assists</th>
            <th className="text-left text-black">Total</th>
          </tr>
        </thead>
        <tbody>
          {sortedPlayers.map((player, index) => (
            <tr
              key={index}
              className={
                index % 2 === 0
                  ? "bg-gray-50 text-black"
                  : "bg-white text-black"
              }
            >
              <td>{player.name}</td>
              <td>{player.goals}</td>
              <td>{player.assists}</td>
              <td>{player.goals + player.assists}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlayerRanking;
