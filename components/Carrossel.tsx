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
    if (imagens.length === 0) return;

    const intervalo = setInterval(() => {
      setIndex((prev) => (prev + 1) % imagens.length);
    }, 3000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div
      style={{
        marginTop: 30,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <img
        src={imagens[index]}
        alt="imagem do carrossel"
        style={{
          width: "250px",
          height: "250px",
          objectFit: "cover",
          borderRadius: "12px",
          transition: "0.5s",
        }}
      />
    </div>
  );
}