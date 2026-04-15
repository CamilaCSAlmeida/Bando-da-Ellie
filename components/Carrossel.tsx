"use client";

import { useEffect, useState } from "react";

const imagens = [
  "/imagens/ellie.png",
  "/imagens/abby.png",
  "/imagens/aurea.png",
  "/imagens/ada.png",
  "/imagens/kratos.png",
];

export default function Carrossel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndex((prev) => (prev + 1) % imagens.length);
    }, 3000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div style={{ marginTop: 30 }}>
      <img
        src={imagens[index]}
        style={{
          width: "250px",
          borderRadius: "12px",
        }}
      />
    </div>
  );
}