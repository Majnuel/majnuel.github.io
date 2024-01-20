import React, { useState } from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const QuestionComponent = () => {
  const [answer, setAnswer] = useState("");
  const [maxattempts, setmaxattempts] = useState(false);
  const [priceState, setPriceState] = useState(false);
  const winningMsg = "Congratulations, click to redeem your prize :)";
  const [attempts, setAttempts] = useState(0);
  const [showPrize, setShowPrize] = useState(false);

  const question = "What franchise does the melody belong to?";
  const wrongAnswerPhrases = [
    "",
    "Come on",
    "Try again",
    "mmhhhh...",
    "you said the music was intoxicating",
    "its fast and blue",
    "it wears gloves",
    "it has spikes on its back",
    "really?!? watch the video again:"
  ];

  const handleAnswerChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleCheckAnswer = () => {
    const correctAnswer = "sonic";
    if (answer != correctAnswer && attempts != 8) {
      setAttempts(attempts + 1);
      if (attempts > 8) {
        setmaxattempts(true);
      }
      console.log("attempts: ", attempts);
    }

    if (answer.toLowerCase() === correctAnswer.toLowerCase()) {
      setPriceState(true);
    }
  };

  const handleRedeem = () => {
    setShowPrize(true);
  };

  const handleToVideo = () => {
    window.location.assign("https://youtu.be/OMdSDAp4Zu4");
  };

  return (
    <div>
      {!priceState ? (
        <div>
          <h2>{question}</h2>
          <input
            type="text"
            value={answer}
            onChange={handleAnswerChange}
            placeholder="Type your answer here"
          />
          <button onClick={handleCheckAnswer}>Check Answer</button>
        </div>
      ) : null}

      <div></div>
      <p>{attempts == 0 || priceState ? null : wrongAnswerPhrases[attempts]}</p>
      {wrongAnswerPhrases[attempts] == "really?!? watch the video again:" ? (
        <p>
          <p onClick={handleToVideo}>to video</p>
        </p>
      ) : null}
      <div>{priceState ? winningMsg : null}</div>
      {priceState ? <button onClick={handleRedeem}>Redeem</button> : null}
      <div>
        {showPrize ? (
          <div>
            <h1>YOU'VE EARNED A TICKET FOR</h1>
            <Image
              src="/deich.jpeg"
              alt="Vercel Logo"
              className="center"
              width={700}
              height={450}
              priority
            />
            <h1>
              SAVE THE DATE: 24.08.2024 - KIDS IN MEINEM ALTER Tour 2024 -
              Parkbühne Wuhlheide, Berlin
            </h1>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default QuestionComponent;
