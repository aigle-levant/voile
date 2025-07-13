export function TextCard({ text }) {
  return (
    <div
      id="card"
      className="bg-zinc-950 px-4 py-4 text-zinc-50 dark:bg-zinc-50 dark:text-zinc-950"
    >
      <p>{text}</p>
    </div>
  );
}
