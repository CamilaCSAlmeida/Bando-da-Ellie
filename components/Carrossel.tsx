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
    <div
      style={{
        marginTop: 30,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <img
        key={index}
        src={imagens[index]}
        alt="imagem do carrossel"
        style={{
          width: "260px",
          height: "260px",
          objectFit: "cover",
          borderRadius: "16px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
          transition: "0.5s",
        }}
      />
    </div>
  );
}