// Fallback only if beforeFiles rewrite didn't run. No redirect() = no Server Action "x".
export default function Home() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: `window.location.replace("/index.html");` }} />
      <p>Redirecting to <a href="/index.html">home</a>...</p>
    </>
  );
}
