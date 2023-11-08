import React from "react";

export function Navigation() {
  return (
    <nav className="w-full container mx-auto px-20 py-4">
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
