import React, { useState } from 'react';
import Confetti from 'react-dom-confetti';

function ConfettiButton() {
  const [isConfettiActive, setConfettiActive] = useState(false);

  const handleButtonClick = () => {
    setConfettiActive(true);
    setTimeout(() => {
      setConfettiActive(false);
    }, 2000); // Hentikan confetti setelah 2 detik
  };

  const config = {
    angle: 90,
    spread: 360,
    startVelocity: 40,
    elementCount: 70,
    dragFriction: 0.12,
    duration: 2000,
    stagger: 3,
    width: "10px",
    height: "10px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
  };

  return (
    <div className="flex justify-center my-26">
      <button
        className="hover:scale-110 shadow-xl shadow-[40px_20px_30px_rgba(0,255,255,0.53] bg-stone-300 hover:shadow-[0_30px_45px_-15px_rgba(0,111,255,0.6)] transition-all duration-500 ease-in-out text-white font-bold py-2 px-4 rounded my-20"
        onClick={handleButtonClick}
      >
        Apresiasi mereka 🎉
      </button>
      <Confetti active={isConfettiActive} config={config}/>
    </div>
  );
}

export default ConfettiButton;
