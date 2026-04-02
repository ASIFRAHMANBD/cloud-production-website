"use client";

import { useEffect } from "react";

// Fallback only if beforeFiles rewrite didn't run. No redirect() = no Server Action "x".
export default function Home() {
  useEffect(() => {
    window.location.replace("/index.html");
  }, []);

  return (
    <>
      <p>Redirecting to <a href="/index.html">home</a>...</p>
    </>
  );
}
