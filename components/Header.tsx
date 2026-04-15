"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <h2>Bando da Ellie</h2>

      {/* BOTÃO MOBILE */}
      <button
        className="menu-btn"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* MENU */}
      <nav className={`nav ${open ? "open" : ""}`}>
        <Link href="/">Home</Link>
        <Link href="/album">Álbum</Link>
        <Link href="/rotina">Rotina</Link>
        <Link href="/quem-somos">Quem somos</Link>
      </nav>
    </header>
  );
}