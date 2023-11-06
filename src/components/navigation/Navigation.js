import React from "react";

export function Navigation() {
  return (
    <nav className="w-full bg-slate-500 text-white px-32 py-2">
      <ul className="flex text-xs">
        <li key="home" className="px-6">
          HOME
        </li>
        <li key="contacts" className="px-6">
          CONTACTS
        </li>
      </ul>
    </nav>
  );
}
