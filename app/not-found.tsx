"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NotFoundRedirect() {
  const router = useRouter();

  useEffect(() => {
    // Редірект через 3 секунди
    // хук спрацює при рендері
    const timer = setTimeout(() => router.push("/"), 3000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div>
      <h1>404 - Сторінку не знайдено</h1>
      <p>Вас буде перенаправлено на головну через кілька секунд…</p>
    </div>
  );
}
