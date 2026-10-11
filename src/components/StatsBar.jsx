import React from "react";
import { FolderCode, TerminalSquare, GraduationCap, Trophy, Medal } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import "./StatsBar.css";

function StatsBar() {
  const { projects, achievements, education } = PORTFOLIO_DATA;

  const stats = [
    {
      value: `${projects.length}+`,
      label: "Projects Built",
      icon: FolderCode,
      color: "#3b82f6", // Vibrant Blue
    },
    {
      value: "500+",
      label: "Problems Solved",
      icon: TerminalSquare,
      color: "#a855f7", // Neon Purple
    },
    {
      value: education[1]?.cgpa || "8.18",
      label: "Current CGPA",
      icon: GraduationCap,
      color: "#06b6d4", // Bright Cyan
    },
    {
      value: `${achievements.length}+`,
      label: "Global Awards",
      icon: Trophy,
      color: "#f59e0b", // Glowing Gold
    },
    {
      value: "10+",
      label: "Certifications",
      icon: Medal,
      color: "#ec4899", // Hot Pink
    },
  ];

  return (
    <section className="stats-masterpiece">
      <div className="stats-compressed-grid">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div className="stat-compact-box" key={index}>
              <div className="stat-icon-wrapper">
                <Icon size={28} strokeWidth={2.5} color={stat.color} />
              </div>
              <div className="stat-typography">
                <h3 className="stat-compact-number">{stat.value}</h3>
                <p className="stat-compact-label">{stat.label}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default StatsBar;
