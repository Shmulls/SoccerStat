"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import PerformanceChart from "../../components/charts/PerformanceChart";
import TeamComparison from "../../components/comparisons/TeamComparison";
import { MarqueeDemo } from "../../components/MarqueeDemo";
import PlayerRanking from "../../components/rankings/PlayerRanking";
import PlayerStats from "../../components/stats/PlayerStats";
import TeamStats from "../../components/stats/TeamStats";

export default function Dashboard() {
  const [userId, setUserId] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    if (!storedUserId) {
      router.push("/login");
    } else {
      setUserId(storedUserId);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    router.push("/login");
  };

  // Sample data for components
  const teamStatsData = {
    teamName: "Example FC",
    gamesPlayed: 38,
    wins: 20,
    draws: 10,
    losses: 8,
    goalsFor: 65,
    goalsAgainst: 40,
  };

  const playerStatsData = {
    playerName: "John Doe",
    position: "Forward",
    gamesPlayed: 35,
    goals: 22,
    assists: 10,
    yellowCards: 5,
    redCards: 1,
  };

  const performanceData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
    datasets: [
      {
        label: "Goals Scored",
        data: [2, 3, 1, 4, 2],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Goals Conceded",
        data: [1, 2, 2, 1, 3],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  const teamComparisonData = {
    team1: { name: "Team A", wins: 15, goalsFor: 45 },
    team2: { name: "Team B", wins: 12, goalsFor: 38 },
  };

  const playerRankingData = [
    { name: "Player 1", goals: 20, assists: 5 },
    { name: "Player 2", goals: 15, assists: 12 },
    { name: "Player 3", goals: 18, assists: 7 },
    { name: "Player 4", goals: 10, assists: 15 },
  ];

  if (!userId) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                {/* Space for future logo */}
                <div className="w-8 h-8 bg-indigo-500 rounded-full"></div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link
                  href="/dashboard"
                  className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  Dashboard
                </Link>
                {/* Add more nav items here */}
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <button
                onClick={handleLogout}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Logout
              </button>
            </div>
            <div className="-mr-2 flex items-center sm:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span className="sr-only">Open main menu</span>
                {/* Icon for menu button */}
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`sm:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="pt-2 pb-3 space-y-1">
          <Link
            href="/dashboard"
            className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
          >
            Dashboard
          </Link>
          {/* Add more mobile nav items here */}
        </div>
        <div className="pt-4 pb-3 border-t border-gray-200">
          <div className="flex items-center px-4">
            <div className="flex-shrink-0">
              {/* User avatar or icon can go here */}
            </div>
            <div className="ml-3">
              <div className="text-base font-medium text-gray-800">
                User ID: {userId}
              </div>
            </div>
          </div>
          <div className="mt-3 space-y-1">
            <button
              onClick={handleLogout}
              className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Marquee Demo */}
      <MarqueeDemo />

      {/* Main content area */}
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-semibold text-gray-900 mb-6">
            Soccer Statistics Dashboard
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TeamStats {...teamStatsData} />
            <PlayerStats {...playerStatsData} />
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Performance Chart
            </h2>
            <PerformanceChart
              labels={performanceData.labels}
              datasets={performanceData.datasets}
            />
          </div>

          <div className="mt-8">
            <TeamComparison
              team1={teamComparisonData.team1}
              team2={teamComparisonData.team2}
            />
          </div>

          <div className="mt-8">
            <PlayerRanking players={playerRankingData} />
          </div>
        </div>
      </div>
    </div>
  );
}
