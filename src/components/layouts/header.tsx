"use client";
import clsx from "clsx";
import { X, Zap, Menu } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  console.log(pathname);

  const isAuth = pathname === "/login";
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    document.addEventListener("scroll", onScroll);

    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        `fixed top-0 left-0 w-full 
    z-99 flex justify-between py-4 px-6 items-center transition-all
    duration-300`,
        scrolled && "bg-background border-b border-foreground/10",
      )}
    >
      <div
        className="flex items-center gap-4 cursor-pointer"
        onClick={() => router.push("/")}
      >
        <div
          className="w-8 h-8 rounded-md bg-linear-to-br from-indigo-400 to-violet-400 flex items-center justify-center"
          style={{ borderRadius: "10px" }}
        >
          <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
        </div>
        <h1 className="text-2xl text-foreground font-bold tracking-light">
          QuickIssue
        </h1>
      </div>

      {!isAuth && (
        <>
          <div className="hidden md:flex gap-4 items-center">
            {["Features", "How it works", "Benefits"].map((item) => (
              <a
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                key={item.toLowerCase().replace(/\s+/g, "-")}
                className="text-foreground/50 hover:text-primary transition-colors rounded-md cursor-pointer"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => router.push("/login")}
              className="text-foreground/50 hover:text-primary cursor-pointer text-sm transition-colors px-3 py-1.5"
            >
              Log in
            </button>
            <button
              onClick={() => router.push("/login")}
              className="px-4 py-1.5 cursor-pointer text-sm font-medium text-white transition-all duration-400 hover:opacity-90 hover:shadow-lg hover:shadow-violet-500/25"
              style={{
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                borderRadius: "10px",
              }}
            >
              Get Started
            </button>
          </div>

          <button
            className="md:hidden p-2 text-foreground cursor-pointer hover:text-primary transition-colors rounded-md"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </>
      )}
    </header>
  );
}
