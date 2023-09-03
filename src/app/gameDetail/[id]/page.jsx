"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import RPSGame from "@/components/GameDetail/gameLogic";
import NavbarSimple from "@/components/Navigation/Navbar";
import { fetchAllGames } from "@/redux/features/GamesByIdSlice";

export default function GameDetail({ params }) {
  let id = params.id;
  const dispatch = useDispatch();
  const games = useSelector((state) => state.allgames.data);

  useEffect(() => {
    dispatch(fetchAllGames());
  }, [dispatch]);

  function renderGame(id) {
    const matchingGame = games.find((game) => game.id === parseInt(id, 10));
    let render = null;
    if (matchingGame) {
      render = <RPSGame />;
    } else {
      render;
    }
    return render;
  }
  return (
    <main className="">
      <NavbarSimple />
      {renderGame(id)}
    </main>
  );
}
