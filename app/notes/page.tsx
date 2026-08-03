import { Metadata } from "next";
import { getNotes } from "@/lib/api";

export const metadata: Metadata = {
  title: "Notes Page",
  description: "Notes Page ...",
};

export default async function Notes() {
  const notes = await getNotes();
  console.log("notes", notes);

  return <div>Notes</div>;
}
