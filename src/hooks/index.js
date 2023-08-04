import { useEffect, useRef } from "react";

const useFLIPAnimation = (ref, callback) => {
  const hasChange = useRef(false);
  const playerRef = useRef(null);

  const first = () => {
    const dom = ref.current;

    const position = dom.getBoundingClientRect();

    dom.style.position = "relative";
    dom.style.left = hasChange.current ? "0" : "50%";
    dom.style.scale = hasChange.current ? "1" : "0.5";
    hasChange.current = !hasChange.current;

    return position;
  };

  const last = () => {
    const dom = ref.current;

    return dom.getBoundingClientRect();
  };

  const invert = (startPosition, endPosition) => {
    return {
      deltaX: startPosition.left - endPosition.left,
      deltaY: startPosition.top - endPosition.top,
      deltaW: startPosition.width / endPosition.width,
      deltaH: startPosition.height / endPosition.height
    };
  };

  const play = (deltas) => {
    const dom = ref.current;
    const { deltaX, deltaW, deltaH } = deltas;

    const keyframes = [
      { transform: `translateX(${deltaX}px) scale(${deltaW}, ${deltaH})` },
      { transform: `none` }
    ];

    const transition = {
      duration: 400,
      easing: "cubic-bezier(0.42, 0.0, 1.0, 1.0)",
      fill: "both"
    };

    return dom.animate(keyframes, transition);
  };

  const finishAfter = (player) => {
    if (callback) {
      player.removeEventListener("finish", callback);

      player.addEventListener("finish", callback);

      playerRef.current = player;
    }
  };

  const action = () => {
    const startPosition = first();
    const endPosition = last();
    const deltas = invert(startPosition, endPosition);
    const player = play(deltas);

    finishAfter(player);
  };

  useEffect(() => {
    return () => playerRef.current?.removeEventListener("finish", callback);
  }, [playerRef, callback]);

  return action;
};

export { useFLIPAnimation };
