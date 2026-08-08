import Link from "next/link";
import { getCategories } from "@/lib/api";

const NotesSidebar = async () => {
  const categories = await getCategories();

  return (
    <ul>
      <li>
        <Link href={`/notes2/filter/all`}>All notes</Link>
      </li>
      {categories.map((category) => (
        <li key={category.id}>
          <Link href={`/notes2/filter/${category.id}`}>{category.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NotesSidebar;
