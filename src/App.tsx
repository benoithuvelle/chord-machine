import { useState } from "react";
import ChordMachine from "@/components/chord-machine/index";
import PianoView from "@/components/piano-view/index";
import "./App.css";

export default function App() {
  const [selectedNotes, setSelectedNotes] = useState<string[]>([]); // Typage des selectedNotes comme un tableau de strings

  return (
    <div className="min-h-screen w-full bg-[#ff3601] flex flex-col items-center justify-center p-4">
      <ChordMachine
        selectedNotes={selectedNotes}
        setSelectedNotes={setSelectedNotes}
      />
      <PianoView
        selectedNotes={selectedNotes}
        setSelectedNotes={setSelectedNotes}
      />
    </div>
  );
}
