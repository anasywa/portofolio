import { useState } from "react";

type IntroScreenProps = {
  onEnter: () => void;
};

const IntroScreen = ({ onEnter }: IntroScreenProps) => {
  const [leaving, setLeaving] = useState(false);

  const handleEnter = () => {
  setLeaving(true);

  setTimeout(() => {
    onEnter();
  }, 700);
};

  return (
    <div className={`intro-screen ${leaving ? "intro-screen--hide" : ""}`}>
      <div className="intro-content">
        <p className="intro-small">WELCOME TO MY PORTFOLIO</p>

        <h1>A. NASYWA ATJA</h1>

        <p className="intro-role">
          WEB DEVELOPMENT • DATA • CREATIVE
        </p>

        <button onClick={handleEnter}>
          ENTER PORTFOLIO
        </button>
      </div>
    </div>
  );
};

export default IntroScreen;