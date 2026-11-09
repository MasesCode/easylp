import { cn } from "@/lib/utils";

export function Brilho({ className }: { readonly className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={cn("fill-current", className)}>
      <path d="M12 0c.7 6.3 5.7 11.3 12 12-6.3.7-11.3 5.7-12 12-.7-6.3-5.7-11.3-12-12C6.3 11.3 11.3 6.3 12 0Z" />
    </svg>
  );
}

export function Bolha({ className }: { readonly className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "block rounded-pill border-2 border-current bg-current/10",
        "after:absolute after:top-[18%] after:left-[22%] after:size-[22%] after:rounded-pill after:bg-white/70",
        "relative",
        className,
      )}
    />
  );
}
