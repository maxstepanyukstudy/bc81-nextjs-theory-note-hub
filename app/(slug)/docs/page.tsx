import Link from "next/link";

export default async function DocsRoot() {
  return (
    <section>
      <h1>Docs ROOT</h1>
      <ul>
        <li>
          <Link href="/docs/demo">demo</Link>
        </li>
        <li>
          <Link href="/docs/test">test</Link>
        </li>
        <li>
          <Link href="/docs/settings">settings</Link>
        </li>
        <li>
          <Link href="/docs/state/on">on</Link>
        </li>
        <li>
          <Link href="/docs/state/off">off</Link>
        </li>
        <li>
          <Link href="/docs/setup/install/mac">mac</Link>
        </li>
        <li>
          <Link href="/docs/setup/install/linux">linux</Link>
        </li>
        <li>
          <Link href="/docs/setup/install/bsd">bsd</Link>
        </li>
      </ul>
    </section>
  );
}
