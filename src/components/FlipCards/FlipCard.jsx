import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { Flip } from "gsap/all";
import { useGSAP } from "@gsap/react";
import "./FlipCards.css";

gsap.registerPlugin(Flip);

const users = [
  {
    title: "Damp Proof Paint",
    details: {
      secondary: "",
      text: "Excellent waterproofing solution that seals and waterproofs fine cracks and porous plaster",
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/181794/kl-owl.png"
    }
  },
  {
    title: "Wall Filler",
    details: {
      secondary: "",
      text: "Enhances durability and provides excellent long lasting foundation base increasing wall life",
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/181794/kl-owl.png"
    }
  },
  {
    title: "Wood Polish",
    details: {
      secondary: "",
      text: "Enhances wood beauty with lacquer, PU, melamine & duco finishes for doors, windows, and furniture",
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/181794/kl-owl.png"
    }
  },
  // ... Add remaining users here
];

const FlipCards = () => {
  const appRef = useRef(null);
  const chosenRef = useRef(null);
  const chosenDetailsRef = useRef(null);
  const chosenImageRef = useRef(null);
  const chosenNameRef = useRef(null);
  const chosenAliasesRef = useRef(null);
  const chosenDescriptionRef = useRef(null);

  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [activeItem, setActiveItem] = useState(null);

  const { contextSafe } = useGSAP({ scope: appRef });

  const showDetails = contextSafe((card) => {
    if (activeItem) hideDetails();

    const cards = gsap.utils.toArray(".user-card");

    const onLoad = () => {
      Flip.fit(chosenRef.current, card, { scale: true, fitChild: chosenImageRef.current });
      const state = Flip.getState(chosenRef.current);

      gsap.set(chosenRef.current, {
        xPercent: -50,
        yPercent: -50,
        top: "50%",
        left: "50%",
        visibility: "visible",
        overflow: "hidden"
      });

      // Flip zoom animation
      Flip.from(state, {
        duration: 0.5,
        ease: "power2.inOut",
        scale: true,
        onComplete: () => {
          // Slide details in after image zooms
          gsap.to(chosenDetailsRef.current, { xPercent: 0, duration: 0.5, ease: "power2.out" });
          gsap.set(chosenDetailsRef.current, { overflow: "auto" });
        }
      });

      document.addEventListener("click", hideDetails);
      chosenImageRef.current.removeEventListener("load", onLoad);
    };

    const data = card.dataset;
    chosenImageRef.current.src = card.querySelector("img").src;
    chosenImageRef.current.addEventListener("load", onLoad);

    chosenNameRef.current.textContent = data.title || "";
    chosenAliasesRef.current.textContent = data.secondary || "";
    chosenDescriptionRef.current.textContent = data.text || "";

    // Fade out other cards
    gsap.to(cards, { opacity: 0.3 });
    setActiveItem(card);
  });

  const hideDetails = contextSafe(() => {
    if (!activeItem) return;

    document.removeEventListener("click", hideDetails);
    const cards = gsap.utils.toArray(".user-card");

    const state = Flip.getState(chosenRef.current);
    Flip.fit(chosenRef.current, activeItem, { scale: true, fitChild: chosenImageRef.current });

    const tl = gsap.timeline();
    tl.to(chosenDetailsRef.current, { xPercent: -100, duration: 0.5 })
      .to(cards, { opacity: 1, duration: 0.5 }, "<");

    Flip.from(state, { scale: true, duration: 0.5 }).set(chosenRef.current, { visibility: "hidden" });

    setActiveItem(null);
  });

  useEffect(() => {
    if (imagesLoaded === users.length) {
      gsap.to(".app", { autoAlpha: 1 });
      gsap.from(".user-card", { autoAlpha: 0, yPercent: 30, stagger: 0.05 });
    }
  }, [imagesLoaded]);

  useEffect(() => {
    gsap.set(chosenDetailsRef.current, { xPercent: -100 });
  }, []);

  return (
    <div className="app" ref={appRef}>
      <div className="card-board">
        {users.map((user, i) => (
          <div
            key={i}
            className="user-card"
            data-title={user.title}
            data-secondary={user.details.secondary}
            data-text={user.details.text}
            onClick={(e) => showDetails(e.currentTarget)}
          >
            <img src={user.details.image} alt="" onLoad={() => setImagesLoaded((p) => p + 1)} />
          </div>
        ))}
      </div>

      <div className="chosen" ref={chosenRef}>
        <div className="chosen__image">
          <img ref={chosenImageRef} onClick={hideDetails} />
        </div>
        <div className="chosen__details" ref={chosenDetailsRef}>
          <div className="chosen__details__name" ref={chosenNameRef}></div>
          <div className="chosen__details__aliases" ref={chosenAliasesRef}></div>
          <div className="chosen__details__description" ref={chosenDescriptionRef}></div>
        </div>
      </div>
    </div>
  );
};

export default FlipCards;
