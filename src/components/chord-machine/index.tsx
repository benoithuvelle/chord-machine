import Potard from "./Potard";
import ButtonGrid from "./ButtonGrid";

export default function ChordMachine({
  selectedNotes,
  setSelectedNotes,
}: {
  selectedNotes: string[];
  setSelectedNotes: (selectedNotes: string[]) => void;
}) {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 1400 392"
      stroke="#FCFCFC"
      strokeWidth="2"
      fill="none"
    >
      <rect id="frame" x="0" y="0" width="1370" height="392" rx="10" ry="10" />

      <rect
        id="screen"
        x="0"
        y="0"
        width="362"
        height="372"
        rx="5"
        ry="5"
        transform="translate(10,10)"
      />

      <ButtonGrid
        selectedNotes={selectedNotes}
        setSelectedNotes={setSelectedNotes}
      />
      <Potard />
    </svg>
  );
}
