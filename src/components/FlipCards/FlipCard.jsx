import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { Flip } from "gsap/all";
import { useGSAP } from "@gsap/react";
import "./FlipCards.css";
import bucket_dpp from "../../assets/damp-proof-paint.png"
import wall_filler from "../../assets/wall-filler.png"
import wood_polish from "../../assets/wood-polish.png"
import wall_pop from "../../assets/wall-pop.png"
import wall_primer from "../../assets/wall-primer.png"
import ultimo_shine from "../../assets/ultimo-shine.png"
import premium_acrylic_emulsion from "../../assets/premium-acrylic-emulsion.png"
import heat_resistant_paint from "../../assets/heat-resistant-paint.png"
import uv_paint_for_exterior from "../../assets/uv-paint-for-exterior.png"
import acrylic_bond_distemper from "../../assets/acrylic-bond-distemper.png"
import floor_coating from "../../assets/floor-coating.png"
import synthetic_enamel from "../../assets/synthetic-enamel.png"
import owl from "../../assets/owl.png"

gsap.registerPlugin(Flip);


const users = [
  {
    title: "Damp Proof Paint",
    details: {
      secondary: "",
      text: "Excellent waterproofing solution that seals and waterproofs fine cracks and porous plaster",
      image: bucket_dpp // we can leave it empty or use a placeholder
    }
  },
  {
    title: "Wall Filler",
    details: {
      secondary: "",
      text: "Enhances durability and provides excellent long lasting foundation base increasing wall life",
      image: wall_filler
    }
  },
  {
    title: "Wood Polish",
    details: {
      secondary: "",
      text: "Enhances wood beauty with lacquer, PU, melamine & duco finishes for doors, windows, and furniture",
      image: wood_polish
    }
  },
  {
    title: "Wall POP",
    details: {
      secondary: "",
      text: "Good adhesive strength forming protective base increasing durability of paints",
      image: wall_pop
    }
  },
  {
    title: "Wall Primer",
    details: {
      secondary: "",
      text: "Ensures better cohesiveness and excellent adhesion of finish coats before final application",
      image: wall_primer
    }
  },
  {
    title: "Ultimo Shine",
    details: {
      secondary: "",
      text: "Radiates higher sheen with smooth silky finish and unique anti-bacterial shield for walls",
      image: ultimo_shine
    }
  },
  {
    title: "Premium Acrylic Emulsion",
    details: {
      secondary: "",
      text: "Gives rich matte finish and designed to prevent fungal growth on walls with durability",
      image: premium_acrylic_emulsion
    }
  },
  {
    title: "Heat Resistant Paint",
    details: {
      secondary: "",
      text: "Ensures excellent heat protection, drop in room temperature & provides power saving benefits",
      image: heat_resistant_paint
    }
  },
  {
    title: "UV Paint for Exterior",
    details: {
      secondary: "",
      text: "Protects against sunlight and rain water degradation with thermal barrier technology",
      image: uv_paint_for_exterior
    }
  },
  {
    title: "Acrylic Bond Distemper",
    details: {
      secondary: "",
      text: "Wide coverage area ensuring good opacity and delivers tough durable economical interior solutions",
      image: acrylic_bond_distemper
    }
  },
  {
    title: "Floor Coating",
    details: {
      secondary: "",
      text: "High-build durable product with excellent gloss, color retention and mechanical strength for industrial floors",
      image: floor_coating
    }
  },
  {
    title: "Synthetic Enamel",
    details: {
      secondary: "",
      text: "Solvent-based paints with superior mirror gloss finish applicable on metal, wall & wood surfaces",
      image: synthetic_enamel
    }
  }
];


const FlipCards = () => {
  const boardRef = useRef(null);
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
      Flip.fit(chosenRef.current, card, { scale: false, fitChild: chosenImageRef.current });
      const state = Flip.getState(chosenRef.current);
      const boardRect = boardRef.current.getBoundingClientRect();
      const chosenRect = chosenRef.current.getBoundingClientRect();

      const centerX =
        boardRect.left + boardRect.width / 2 - chosenRect.width / 2;
      const centerY =
        boardRect.top + boardRect.height / 2 - chosenRect.height / 2;

      gsap.set(chosenRef.current, {
        position: "absolute",
        left: centerX,
        top: centerY,
        xPercent: -50,
        yPercent: -50,
        visibility: "visible",
        overflow: "hidden",
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
      <div className="card-board" ref={boardRef}>
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
