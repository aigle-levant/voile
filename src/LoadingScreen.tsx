export default function LoadingScreen() {
  return (
    <div
      id="loading-screen"
      className="fixed m-0 flex h-full w-full flex-col items-center justify-center bg-zinc-50 p-6 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50"
    >
      <h1 className="font-heading mb-10 text-5xl">Loading...</h1>
      <div className="h-5 w-5 animate-pulse bg-zinc-950 p-1 dark:bg-zinc-50"></div>
    </div>
  );
}
