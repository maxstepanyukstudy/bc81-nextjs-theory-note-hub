import { notFound } from "next/navigation";

interface ProfilePageProps {
  params: Promise<{ id: string }>;
}

const BAD_DEMO_ID = "0";

export default async function ProfilePageById({ params }: ProfilePageProps) {
  const { id } = await params;

  if (id === BAD_DEMO_ID) {
    notFound(); // Показує /profile/not-found.tsx
  }

  return (
    <section>
      <h1>ProfilePage for id {id}</h1>
      <p>
        to test redirect function <code>notFound()</code>and local{" "}
        <code>not-found.tsx</code> page use id 0
      </p>
    </section>
  );
}
