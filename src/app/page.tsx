"use client";

import { siteConfig } from "../../site.config";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <main className="flex flex-1 items-center justify-center">
        <h1 className="text-4xl font-light tracking-wide text-foreground">
          Building<span className="animate-blink">...</span>
        </h1>
      </main>
      <footer className="border-border border-t bg-background py-6 text-center">
        <div className="flex justify-center gap-8">
          {siteConfig.social.twitter && (
            <a
              href={siteConfig.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-foreground"
            >
              X / Twitter
            </a>
          )}
          {siteConfig.social.github && (
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-foreground"
            >
              GitHub
            </a>
          )}
        </div>
      </footer>
    </div>
  );
}
