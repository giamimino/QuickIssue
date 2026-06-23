import { Zap } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const links: Record<string, { label: string; url?: string }[]> = {
  Product: [
    { label: "Features", url: "#features" },
    { label: "How it works", url: "#how-it-works" },
    { label: "Benefits", url: "#benefits" },
  ],
  Developers: [
    { label: "Documentation" },
    { label: "GitHub" },
    { label: "Status" },
  ],
};

export function Footer() {
  return (
    <footer
      className="border-t border-[#30363D] py-16 px-4 sm:px-6 lg:px-8"
      style={{ background: "#0D1117" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between gap-8 mb-14">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-linear-to-br from-[#6366f1] to-[#8b5cf6] flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-[#E6EDF3] font-semibold">QuickIssue</span>
            </div>
            <p className="text-[#8B949E] text-sm leading-relaxed max-w-xs mb-6">
              Create, manage, and share GitHub issue templates. Better issues
              start here.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/giamimino"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg border border-[#30363D] flex items-center justify-center text-[#8B949E] hover:text-[#E6EDF3] hover:border-[#6366f1]/40 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div className="flex gap-12">
            {Object.entries(links).map(([category, items]) => (
              <div key={category}>
                <h4 className="text-[#E6EDF3] font-medium text-sm mb-4">
                  {category}
                </h4>
                <ul className="space-y-2.5">
                  {items.map((item) => (
                    <li key={item?.label}>
                      <a
                        href={item?.url || "#"}
                        className="text-[#8B949E] hover:text-[#E6EDF3] text-sm transition-colors"
                      >
                        {item?.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-[#30363D]">
          <p className="text-[#8B949E] text-xs">
            © 2026 QuickIssue, Inc. All rights reserved.
          </p>
          <p className="text-[#8B949E] text-xs">
            Built with ❤️ for developers everywhere
          </p>
        </div>
      </div>
    </footer>
  );
}
