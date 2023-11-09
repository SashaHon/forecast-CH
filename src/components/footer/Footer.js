import React from "react";

export function Footer() {
  return (
    <footer className="bg-slate-800 text-white shrink-0">
      <ol className="container mx-auto px-20 text-xs">
        <b>Upcoming features:</b>
        <li className="mt-1rem">do routing</li>
        <li>change background image according to the season</li>
        <li>add forecast for next 3 days, weak</li>
      </ol>
    </footer>
  );
}
