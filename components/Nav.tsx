"use client";

import { useState } from "react";
import { MenuIcon, CloseIcon } from "./Icons";

const links = [
  { label: "Home", href: "#" },
  { label: "Listings", href: "#listings" },
  { label: "About", href: "#about" },
  { label: "Sellers", href: "#why" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#" className="wordmark">
          Lush <span>Properties</span>
        </a>

        <nav aria-label="Main">
          <ul className="nav-links">
            {links.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-actions">
          <a href="#listings" className="btn btn-accent nav-cta">
            Browse Listings
          </a>
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="nav-mobile container" aria-label="Mobile">
          <ul>
            {links.map((link) => (
              <li key={link.label}>
                <a href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
