"use client";
import clsx from "clsx";
import { X, Zap, Menu } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

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
    z-99 flex flex-col transition-all
    duration-300`,
        scrolled && "bg-background border-b border-foreground/10",
      )}
    >
      <div className="flex justify-between items-center w-full py-4 px-6">
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
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-background-secondary border-t border-[#30363D]"
          >
            <div className="px-4 py-4 space-y-1">
              {["Features", "How it works", "Benefits"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="block px-3 py-2 text-foreground hover:text-[#E6EDF3] hover:bg-[#21262D] rounded-lg transition-colors text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="pt-3 border-t border-[#30363D] flex flex-col gap-2">
                <button
                  className="block px-3 py-2 text-muted-foreground hover:text-[#E6EDF3] text-sm"
                  onClick={() => router.push("/dashboard")}
                >
                  Dashboard
                </button>
                <button
                  className="block px-3 py-2 rounded-lg text-sm font-medium text-white text-center"
                  style={{
                    background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                  }}
                  onClick={() => router.push("/login")}
                >
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
