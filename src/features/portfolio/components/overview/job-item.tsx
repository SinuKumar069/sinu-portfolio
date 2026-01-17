import { BriefcaseIcon } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";

export function JobItem({
    title,
    company,
    website,
    className,
}: {
    title: string;
    company: string;
    website?: string;
    className?: string;
}) {
    return (
        <div className={cn("flex items-center gap-3", className)}>
            <div className="flex size-8 shrink-0 items-center justify-center rounded-lg border bg-muted/50">
                <BriefcaseIcon className="size-4 text-muted-foreground" />
            </div>
            <div className="flex flex-col gap-0.5">
                <div className="text-sm font-medium">{title}</div>
                {website ? (
                    <Link
                        href={website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-muted-foreground hover:underline"
                    >
                        {company}
                    </Link>
                ) : (
                    <div className="text-xs text-muted-foreground">{company}</div>
                )}
            </div>
        </div>
    );
}
