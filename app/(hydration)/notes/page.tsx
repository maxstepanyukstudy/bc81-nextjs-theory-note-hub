"use client";

import { Metadata } from "next";
import { getNotes, Note } from "@/lib/api";
import NoteList from "@/components/NoteList/NoteList";
import { useState } from "react";

// // cant use during "use client"; 
// export const metadata: Metadata = {
//   title: "Notes Page",
//   description: "Notes Page ...",
// };

export default function Notes() {
  const [notes, setNotes] = useState<Note[]>([]);

  const handleClick = async () => {
    const response = await getNotes();
    if (response?.notes) {
      setNotes(response.notes);
    }
  };

  return (
    <section>
      <h1>Notes List</h1>
      <button onClick={handleClick}>Get my notes</button>
      {notes.length > 0 && <NoteList notes={notes} />}
    </section>
  );
}
