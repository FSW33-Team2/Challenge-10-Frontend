"use client";

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "../lib/axios";
import RPSGame from "./Game";
// import Cookies from "js-cookie";
import {
  playRPSGame,
  updateScore,
  updateInfo,
  finishGame,
  updateRound,
} from "../../redux/features/RpsGameSlice";

const choices = ["rock", "paper", "scissors"];

const RPSLogic = () => {
  const dispatch = useDispatch();
  const {
    currentRound,
    playerScore,
    botScore,
    playerwinRound,
    botwinRound,
    gameInfo,
    result,
  } = useSelector((state) => state.rpsgame);

  useEffect(() => {
    if (currentRound > 0) {
      dispatch(updateInfo(`${playerwinRound} - ${botwinRound}`));
    }
    console.log(gameInfo);
    console.log(result);
  }, [dispatch, botwinRound, playerwinRound, currentRound, result]);

  useEffect(() => {
    if (currentRound === 5) {
      const playerWins = parseInt(playerwinRound);
      const botWins = parseInt(botwinRound);

      if (playerWins > botWins) {
        dispatch(updateScore({ playerScore: 1, botScore: 0 }));
        dispatch(finishGame("PLAYER WIN"));
      } else if (playerWins < botWins) {
        dispatch(updateScore({ playerScore: 0, botScore: 1 }));
        dispatch(finishGame("COM WIN"));
      } else {
        dispatch(updateScore({ playerScore: 0, botScore: 0 }));
        dispatch(finishGame("DRAW"));
      }
    }
  }, [currentRound, playerwinRound, botwinRound, dispatch]);

  const playGame = (choice) => {
    if (currentRound < 5) {
      const computerChoice = getRandomChoice();
      const result = determineResult(choice, computerChoice);
      dispatch(
        playRPSGame({
          playerChoice: choice,
          botChoice: computerChoice,
          result: result,
        })
      );
    } else if (currentRound === 5) {
      dispatch(finishGame(`${playerScore} - ${botScore}`));
    }
  };

  const getRandomChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  };

  const determineResult = (playerChoice, botChoice) => {
    if (playerChoice === botChoice) {
      dispatch(updateRound({ playerwinRound: 0, botwinRound: 0 }));
      return "DRAW";
    } else if (
      (playerChoice === "rock" && botChoice === "scissors") ||
      (playerChoice === "paper" && botChoice === "rock") ||
      (playerChoice === "scissors" && botChoice === "paper")
    ) {
      const result = "PLAYER WIN";
      // if (result === "PLAYER WIN") {
      //   sendScoreToAPI();
      // }
      dispatch(updateRound({ playerwinRound: 1, botwinRound: 0 }));
      return result;
    } else {
      dispatch(updateRound({ playerwinRound: 0, botwinRound: 1 }));
      return "COM WIN";
    }
  };

  // const sendScoreToAPI = async () => {
  //   try {
  //     const userId = Cookies.get("userId");
  //     await axios.post(
  //
  //     );
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <>
      <RPSGame playGame={playGame} />
    </>
  );
};

export default RPSLogic;
