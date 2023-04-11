import React from "react";
import "../styles/Section.css";
import ejemplo from "../img/ejemplo.jfif";

const Section = () => {
  return (
    <section>
      <div className="container-section">
        <div className="title-section">
          <h1>1-What is the blue screen?</h1>
          <p>
            The <span className="bold-text">"blue screen"</span> typically
            refers to the blue screen of death{" "}
            <span className="bold-text">(BSOD)</span> on a Windows computer.
            This is a critical error screen that appears when the operating
            system encounters a fatal system error that it cannot recover from,
            and it is designed to prevent further damage to the system.
          </p>
          <p>
            The blue screen is usually accompanied by an error message that
            provides information about the error, such as a stop code, which can
            be helpful in identifying the cause of the problem. When the blue
            screen appears, it usually means that the computer has crashed and
            needs to be restarted.
          </p>
          <p>
            It's worth noting that other operating systems, such as{" "}
            <span className="bold-text-2">macOS</span> and{" "}
            <span className="bold-text-2">Linux</span>, also have similar error
            screens that appear when the system encounters a fatal error.
            However, they may not be referred to as the "blue screen"
            specifically.
          </p>
        </div>
        <div className="image-section">
          <img src={ejemplo} alt="" />
        </div>
      </div>

      <div className="container-section">
        <div className="image-section">
          <img src={ejemplo} alt="" />
        </div>
        <div className="title-section">
          <h1>1-What is the blue screen?</h1>
          <p>
            The <span className="bold-text">"blue screen"</span> typically
            refers to the blue screen of death{" "}
            <span className="bold-text">(BSOD)</span> on a Windows computer.
            This is a critical error screen that appears when the operating
            system encounters a fatal system error that it cannot recover from,
            and it is designed to prevent further damage to the system.
          </p>
          <p>
            The blue screen is usually accompanied by an error message that
            provides information about the error, such as a stop code, which can
            be helpful in identifying the cause of the problem. When the blue
            screen appears, it usually means that the computer has crashed and
            needs to be restarted.
          </p>
          <p>
            It's worth noting that other operating systems, such as{" "}
            <span className="bold-text-2">macOS</span> and{" "}
            <span className="bold-text-2">Linux</span>, also have similar error
            screens that appear when the system encounters a fatal error.
            However, they may not be referred to as the "blue screen"
            specifically.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section;
