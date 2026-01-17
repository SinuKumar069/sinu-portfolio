import { SOURCE_CODE_GITHUB_REPO, SOURCE_CODE_GITHUB_URL } from "@/config/site";

async function getStargazerCount() {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${SOURCE_CODE_GITHUB_REPO}`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          Authorization: `Bearer ${process.env.GITHUB_API_TOKEN}`,
          "X-GitHub-Api-Version": "2022-11-28",
        },
        next: { revalidate: 86400 }, // Cache for 1 day (86400 seconds)
      }
    );

    if (!response.ok) {
      return 0;
    }

    const json = await response.json();
    return Number(json?.stargazers_count) || 0;
  } catch {
    return 0;
  }
}

export async function NavItemGitHub() {
  const stargazersCount = await getStargazerCount();

  return (
    <a
      href={SOURCE_CODE_GITHUB_URL}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-1 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
    >
      <span>Star on GitHub</span>
      <span className="flex items-center gap-1 text-muted-foreground">
        <span className="h-3 w-px bg-border" />
        <span>{stargazersCount}</span>
      </span>
    </a>
  );
}
