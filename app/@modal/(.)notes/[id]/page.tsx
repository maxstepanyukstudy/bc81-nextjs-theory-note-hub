import InterceptingModal from "@/components/InterceptingModal/InterceptingModal";
import { getSingleNote } from "@/lib/api";

type Props = {
  params: Promise<{ id: string }>;
};

const NotePreview = async ({ params }: Props) => {
  const { id } = await params;
  const note = await getSingleNote(id);

  return (
    <InterceptingModal>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
    </InterceptingModal>
  );
};

export default NotePreview;
