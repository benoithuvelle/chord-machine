interface MachineButtonProps {
  x: number; // x-coordinate for positioning the circles
  note: string; // Note associated with the button
  selectedNotes: string[]; // Array of selected notes
  setSelectedNotes: (notes: string[]) => void; // Function to update selected notes
}

export default function MachineButton({
  x,
  note,
  selectedNotes,
  setSelectedNotes,
}: MachineButtonProps) {
  return (
    <g
      strokeWidth="1"
      fill="transparent"
      onPointerDown={() => setSelectedNotes([...selectedNotes, note])}
    >
      <circle
        cx={x}
        r="44"
        className={`${
          selectedNotes.includes(note) ? "fill-[#FCFCFC]" : ""
        } pointer-events-all transition-all duration-300 hover:fill-gray-100 hover:opacity-25 active:opacity-100`}
      />
      <circle cx={x} r="40" className="pointer-events-none" />
      <circle cx={x} r="3" className="pointer-events-none" />
    </g>
  );
}
