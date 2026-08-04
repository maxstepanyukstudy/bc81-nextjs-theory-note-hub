import { getSingleNote } from "@/lib/api";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function NoteDetails({ params }: Props) {
  const { id } = await params;
  const note = await getSingleNote(id);
  console.log(note);

  return <div>NoteDetails for id {id}</div>;
}
