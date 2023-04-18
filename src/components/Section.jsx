import React from "react";
import "../styles/Section.css";
import otra from "../img/otra.png";
import section from "../img/section.jpg"
import imagen from "../img/imagen.png"
import imagen2 from "../img/imagen2.png"

const Section = () => {
  return (
    <section>
      {/* ----------------1------------------- */}
      <div className="container-section">
        <div className="title-section">
          <h1>What is the blue screen?</h1>
          <p>
            <span className="bold-text">"Blue screen"</span> generally refers to
            the blue screen of death <span className="bold-text">(BSOD)</span>{" "}
            on a Windows computer. This is a critical error screen that appears
            when the operating system encounters a fatal system error from which
            it cannot recover and is designed to prevent further damage to the
            system.
          </p>
          <p>
            The real cause can be almost anything, it can be a bug in Windows,
            or third party software, hardware defect, data corruption... drivers
            are a big culprit.
          </p>
          <p>
            The blue screen is often accompanied by an error message that
            provides information about the error, such as a stop code, which can
            be helpful in identifying the cause of the problem. When the blue
            screen appears, it usually means that the computer has crashed and
            needs to be restarted.
          </p>
        </div>

        <div className="image-section">
          <img src={imagen2} alt="" />
        </div>
      </div>

      {/* ----------------2------------------- */}
      <div className="container-section">
      <div className="image-section">
          <img src={imagen} alt="" />
        </div>
        <div className="title-section">
          <h1>Possible solutions</h1>
          <p>
          If you have adjusted something in a non-standard state: if you have
            overclocked your hardware or undervolted it; before doing anything
            else, return it to stock configuration.
          </p>
          <p>
          Faulty hardware can cause blue screens so if you can easily unplug
            some cables to rule it out, go for it. Obviously, if you know you
            did something to cause the blue screen...undo it.
          </p>
          <p>
          If you installed something just before it crashed, uninstall it. If
            you can't do that because Windows crashes before
          </p>
          <p>
          Another thing that's always worth trying is installing any
            available software and driver updates. You may be lucky and find a
            vendor has already issued a fix.
          </p>
          <p>
          ⚠️-Important: do not attempt to update your BIOS unless you know it's
            really the solution.
          </p>
          <p>
            If your computer crashes partway through that process, you may not
            be able to recover it without physically replacing the hardware. (If
            the computer is crashing before getting to Windows, the first thing
            we need to do is gather information. On the blue screen itself,
            there should be a stop code, and it might even tell you which file
            caused the error.)
          </p>
          <p>
            An easy way to get to this is to right-click on the Start menu and
            select Event Viewer. From there, expand Windows Logs and select
            System. There will be a lot of information here, but we're looking
            for a specific entry. The event level will be "Error", the source
            will be "BugCheck", and the event ID will be "1001". The time of the
            event should be right after the computer started up from a crash.
            You can filter the log to find it more easily, but it can be helpful
            to view all the events around it.
          </p>
        </div>
      </div>

      <div className="container-section">

        <div className="title-section">
          <p>
            If you can pinpoint where the crash occurred, you can take a look at
            the events in the system and application logs around the time of the
            crash to see if they give you any clues. (It's fairly normal to see
            a series of warnings and errors here, so don't be alarmed, but if
            you see something consistently failing immediately before a crash,
            you may want to take a closer look at that particular message. )
          </p>
          <p>
            Whatever application is logged, it could be the source of your
            problems. For now, though, go back to your bugcheck event. If you
            read the detail it will say "The bugcheck was" followed by a bunch
            of numbers and letters starting with "0x". Take that first set of
            numbers and letters before the brackets. That's the hexadecimal
            error code that matches the error on the blue screen.
          </p>

          <p>
            If it shows up on Google you can figure out what the blue screen
            said. That error code may be enough to point you in the right
            direction. Most of the time it will probably lead you towards a
            driver issue, which isn't particularly helpful because it could
            still be almost anything at that point. You may get lucky and have a
            more specific error.
          </p>
          <p>
            If it mentions a file system, for example, it's talking about your
            hard drive.
          </p>
          <p>
          If you follow these steps, it will help you fix most of the blue screens of death, but ultimately, you may reach a point where you need expertise, practice instead of a YouTube video or webpage.
          </p>
          <p>
          If you're still stuck, seek help. Take it to a store or someone you trust. Blue screens can have some very rare causes.
          </p>
        </div>
        <div className="image-section">
          <img src={otra} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Section;
