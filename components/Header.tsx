"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header
        style={{
          width: "100vw",
          padding: "15px 20px", // 👈 mais espaço lateral
          background: "#f8cdd3",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
      >
        <h2 style={{ color: "#fff", margin: 0 }}>
          Bando da Ellie
        </h2>

        {/* MENU DESKTOP */}
        <nav className="nav-desktop">
          <Link href="/">Home</Link>
          <Link href="/album">Álbum</Link>
          <Link href="/rotina">Rotina</Link>
          <Link href="/quem-somos">Quem somos</Link>
        </nav>

        {/* BOTÃO HAMBURGUER */}
        <button onClick={() => setOpen(true)} className="menu-btn">
          ☰
        </button>
      </header>

      {/* OVERLAY */}
      {open && (
        <div className="overlay" onClick={() => setOpen(false)}>
          <div className="menu" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setOpen(false)}>
              ✕
            </button>

            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/album" onClick={() => setOpen(false)}>Álbum</Link>
            <Link href="/rotina" onClick={() => setOpen(false)}>Rotina</Link>
            <Link href="/quem-somos" onClick={() => setOpen(false)}>Quem somos</Link>
          </div>
        </div>
      )}

      <style jsx>{`
        .nav-desktop {
          display: flex;
          gap: 14px; /* 👈 menor espaço */
        }

        .nav-desktop a {
          color: white;
          text-decoration: none;
          font-weight: 500;
          font-size: 14px; /* 👈 menor fonte */
          white-space: nowrap; /* 👈 NÃO QUEBRA TEXTO */
          transition: 0.3s;
        }

        .nav-desktop a:hover {
          opacity: 0.7;
        }

        .menu-btn {
          display: none;
          font-size: 24px;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
        }

        /* 🔥 MELHOR BREAKPOINT */
        @media (max-width: 900px) {
          .nav-desktop {
            display: none;
          }

          .menu-btn {
            display: block;
          }
        }

        /* OVERLAY */
        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.4);
          display: flex;
          justify-content: flex-end;
          z-index: 2000;
        }

        .menu {
          width: 250px;
          height: 100%;
          background: #f8cdd3;
          display: flex;
          flex-direction: column;
          padding: 20px;
          gap: 20px;
          animation: slideIn 0.3s ease;
        }

        .menu a {
          color: white;
          text-decoration: none;
          font-size: 18px;
        }

        .close-btn {
          align-self: flex-end;
          font-size: 22px;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
        }

        @keyframes slideIn {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}