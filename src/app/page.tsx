"use client";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-neutral-100">
      <main className="flex flex-1 items-center justify-center">
        <h1 className="text-4xl font-light tracking-wide text-neutral-600">
          Building<span className="animate-blink">...</span>
        </h1>
      </main>
      <footer className="border-t border-neutral-200 bg-neutral-50 py-6 text-center">
        <div className="flex justify-center gap-8">
          <a
            href="https://x.com/skyman_one"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 transition-colors hover:text-neutral-800"
          >
            X / Twitter
          </a>
          <a
            href="https://github.com/markoff-finance"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 transition-colors hover:text-neutral-800"
          >
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}
