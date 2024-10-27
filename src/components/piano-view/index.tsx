import { useState } from "react";

const whiteKeys = ["C", "D", "E", "F", "G", "A", "B"];
const blackKeys = ["C#", "D#", "F#", "G#", "A#"];

export default function PianoView({
  selectedNotes,
  setSelectedNotes,
}: {
  selectedNotes: string[];
  setSelectedNotes: (notes: string[]) => void;
}) {
  const [hoveredKey, setHoveredKey] = useState<string | null>(null);

  const handleKeyPlay = (note: string, down: boolean) => {
    if (down) {
      setSelectedNotes([...selectedNotes, note]);
    } else {
      setSelectedNotes(selectedNotes.filter((n: string) => n !== note));
    }
  };

  const renderKey = (note: string, index: number, isBlack: boolean) => {
    const octave = Math.floor(index / 7) + 4; // Starting from octave 4
    const keyIndex = `${note}${octave}-${index}`; // Adding index to ensure uniqueness

    return (
      <button
        key={keyIndex}
        className={`
          ${
            isBlack
              ? "bg-black text-white"
              : "bg-white border-r border-gray-300"
          }
          ${hoveredKey === keyIndex ? "opacity-80" : ""}
          ${selectedNotes.includes(note) ? "opacity-100 bg-red-400" : ""}
          absolute top-0 flex items-end justify-center pb-2 transition-opacity duration-150 ease-in-out
        `}
        style={{
          width: isBlack ? "24px" : "40px",
          height: isBlack ? "100px" : "160px",
          left: isBlack
            ? `${
                Math.floor(index / 5) * 280 + [28, 68, 148, 188, 228][index % 5]
              }px`
            : `${index * 40}px`,
          zIndex: isBlack ? 1 : 0,
        }}
        onMouseEnter={() => setHoveredKey(keyIndex)}
        onMouseLeave={() => setHoveredKey(null)}
        onPointerDown={() => handleKeyPlay(note, true)}
        onPointerUp={() => handleKeyPlay(note, false)}
      >
        <span className="text-xs">{note}</span>
      </button>
    );
  };

  return (
    <div className="flex justify-center items-center flex-1 m-4">
      <div
        className="relative inline-flex"
        style={{ width: "840px", height: "160px" }}
      >
        {Array(21)
          .fill(null)
          .map((_, index) => renderKey(whiteKeys[index % 7], index, false))}
        {Array(15)
          .fill(null)
          .map((_, index) => renderKey(blackKeys[index % 5], index, true))}
      </div>
    </div>
  );
}
