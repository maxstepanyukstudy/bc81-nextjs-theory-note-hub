import css from "./Header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className={css.header}>
      <h2>NoteHub</h2>
      <nav>
        <ul className={css.navigation}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/notesold">notes-old</Link>
          </li>
          <li>
            <Link href="/notes">note</Link>
          </li>
          <li>
            <Link href="/notes/filter/all">notes/filter/all</Link>
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/404">Test-404</Link>
          </li>
          <li>
            <Link href="/docs">Docs(Slug-demo)</Link>
          </li>
          <li>
            <Link href="/wip">Wip(redirect-demo)</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
