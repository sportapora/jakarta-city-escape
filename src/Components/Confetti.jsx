import { useState } from "react";
import Confetti from "react-dom-confetti";
import useSound from "use-sound";
import confettiSfx from "/sound/ConfettiSound.mp3";

function ConfettiButton() {
  const [play] = useSound(confettiSfx);
  const [isConfettiActive, setConfettiActive] = useState(false);

  const handleButtonClick = () => {
    play();
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
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
  };

  return (
    <div>
      <button
        className="bg-blue-500 text-white px-4 py-2 mt-10 rounded-full  hover:ring-2 ring-black"
        onClick={handleButtonClick}
      >
        Appreciation
      </button>
      <Confetti active={isConfettiActive} config={config} />
    </div>
  );
}

export default ConfettiButton;
