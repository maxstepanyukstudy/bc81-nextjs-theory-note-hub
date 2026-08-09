import { Metadata } from "next";
import { getNotes } from "@/lib/api";
import NoteList from "@/components/NoteList/NoteList";

export const metadata: Metadata = {
  title: "Notes Page",
  description: "Notes Page ...",
};

export default async function NotePage() {
  const response = await getNotes();

  return (
    <section>
      <h1>Notes List</h1>
      {response?.notes?.length > 0 && <NoteList notes={response.notes} />}
    </section>
  );
}
