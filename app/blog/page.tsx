"use client";

import PageTitle from "@/components/Title";
import { useState } from "react";

export default function BlogPage() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <div>
      <PageTitle>Esto es mi BLOG fachero facheritooo 😎</PageTitle>

      <div className="bg-white/95 w-fit mx-auto p-4 rounded-lg">
        <p className="text-white/70">
          {clicked
            ? "VES, ME TOCASTE (y no el botón...) XD"
            : "Soy un texto que va a cambiar, no me crees? Haz click en el botón!"}
        </p>
        <button
          disabled={clicked}
          onClick={handleClick}
          type="button"
          className="bg-red-500 py-2 w-full rounded-md cursor-pointer hover:bg-red-500/40 transition-all mt-4 active:scale-105 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-red-500 disabled:active:scale-100"
        >
          Púlsame
        </button>
      </div>

      {clicked ? (
        <button
          className="bg-green-500/70 p-4 rounded-md font-bold tracking-wide mx-auto"
          type="button"
          onClick={() => setClicked(false)}
        >
          Resetear
        </button>
      ) : null}
    </div>
  );
}
