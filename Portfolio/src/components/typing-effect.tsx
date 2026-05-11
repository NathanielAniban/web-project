import { useState, useEffect } from "react";


interface TypingEffectProps {
  text: string;
  speed: number;
  delay: number;
  styleProp?: string;
  onRepeat?: boolean;
  cursorBlink?: boolean;
  cursorType?: string;
}

const TypingEffect: React.FC<TypingEffectProps> = ({
  text,
  speed,
  delay,
  styleProp = "",
  onRepeat = false,
  cursorBlink = true,
  cursorType = "|",
}) => {
  const [index, setIndex] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  useEffect(() => {
    if (index === text.length && !isDeleting) {
      if (onRepeat) {
        setTimeout(() => setIsDeleting(true), delay);
      }
      return;
    }
    if (index === 0 && isDeleting) {
      if (onRepeat) {
        setIsDeleting(false);
      } else {
        return;
      }
    }

    const timeout = setTimeout(() => {
      setIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, speed);

    return () => clearTimeout(timeout);
  }, [index, isDeleting, text, speed, delay, onRepeat]);

  return (
    <span className={styleProp}>
      {text.slice(0, index)}
      <span className={cursorBlink ? "animate-blink" : ""}>
        {cursorType}
      </span>
    </span>
  );
};

export default TypingEffect;