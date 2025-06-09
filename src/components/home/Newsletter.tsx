export default function Newsletter() {
  return (
    <section
      id="newsletter"
      className="my-4 flex flex-col items-center justify-center p-4"
    >
      <p className="font-heading text-2xl">Subscribe to our newsletter</p>
      <form className="my-4 flex flex-row items-center">
        <input
          className="mx-4 rounded-md border-zinc-700 bg-zinc-800 px-4 py-2 text-zinc-300 placeholder:text-zinc-600"
          type="email"
          placeholder="yourname@example.com"
        />
        <button
          type="submit"
          className="rounded-md bg-zinc-950 px-4 py-2 font-sans text-zinc-50 dark:bg-zinc-50 dark:text-zinc-950"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
