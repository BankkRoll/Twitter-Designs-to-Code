export function Footer() {
  return (
    <footer className="border-border/40 py-6 mt-4 border-t dark:border-border md:px-8 md:py-0">
      <div className="container flex flex-col justify-between items-center gap-4 md:h-24 md:flex-row">
        <p className="text-muted-foreground text-sm leading-loose text-balance text-center md:text-left">
          Built by{" "}
          <a
            href="https://x.com/bankkroll_eth"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Bankk
          </a>
          . The source code is available on{" "}
          <a
            href="https://github.com/BankkRoll/tweet-to-code"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
