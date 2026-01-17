import { SITE_INFO } from "@/config/site";
import { SOCIAL_LINKS } from "@/features/portfolio/data/social-links";

export function SiteFooter() {
  return (
    <footer className="max-w-screen overflow-x-hidden px-2">
      <div className="screen-line-before mx-auto border-x border-edge pt-4 md:max-w-3xl">
        <p className="mb-4 px-4 text-center font-mono text-sm text-balance text-muted-foreground">
          Built by{" "}
          <a
            className="link"
            href={SITE_INFO.url}
            target="_blank"
            rel="noreferrer"
          >
            {SITE_INFO.name}
          </a>
          . The source code is available on{" "}
          <a
            className="link"
            href="https://github.com/sinukumar/portfolio"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          .
        </p>

        <div className="screen-line-before screen-line-after flex w-full before:z-1 after:z-1">
          <div className="mx-auto flex items-center justify-center gap-3 border-x border-edge bg-background px-4">
            {SOCIAL_LINKS.map((link, index) => (
              <div key={link.title} className="flex items-center gap-3">
                {index > 0 && <Separator />}
                <a
                  className="flex items-center text-muted-foreground transition-colors hover:text-foreground"
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={link.icon} alt={link.title} className="size-4" />
                  <span className="sr-only">{link.title}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="pb-[env(safe-area-inset-bottom,0px)]">
        <div className="flex h-2" />
      </div>
    </footer>
  );
}

function Separator() {
  return <div className="flex h-11 w-px bg-edge" />;
}
