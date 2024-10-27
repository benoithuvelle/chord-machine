import { useEffect } from "react";
import MachineButton from "./MachineButton";

export default function ButtonGrid({
  selectedNotes,
  setSelectedNotes,
}: {
  selectedNotes: string[];
  setSelectedNotes: (notes: string[]) => void;
}) {
  useEffect(() => {
    document.addEventListener("pointerup", () => {
      setSelectedNotes([]);
    });
  }, [setSelectedNotes]);

  return (
    <g transform="translate(444, 70)">
      <g transform="translate(0, 0)">
        {["D#", "A#", "F", "C", "G", "D", "A"].map((note, index) => (
          <MachineButton
            key={index}
            x={95 * index}
            note={note}
            selectedNotes={selectedNotes}
            setSelectedNotes={setSelectedNotes}
          />
        ))}
      </g>
      <g transform="translate(47,85)">
        {["G", "D", "A", "E", "B", "F#", "C#"].map((note, index) => (
          <MachineButton
            key={index}
            x={95 * index}
            note={note}
            selectedNotes={selectedNotes}
            setSelectedNotes={setSelectedNotes}
          />
        ))}
      </g>
      <g transform="translate(95, 170)">
        {["B", "F#", "C#", "G#", "D#", "A#", "F"].map((note, index) => (
          <MachineButton
            key={index}
            x={95 * index}
            note={note}
            selectedNotes={selectedNotes}
            setSelectedNotes={setSelectedNotes}
          />
        ))}
      </g>
      <g transform="translate(142.5, 255)">
        {["D#", "A#", "F", "C", "G", "D", "A"].map((note, index) => (
          <MachineButton
            key={index}
            x={95 * index}
            note={note}
            selectedNotes={selectedNotes}
            setSelectedNotes={setSelectedNotes}
          />
        ))}
      </g>
    </g>
  );
}
