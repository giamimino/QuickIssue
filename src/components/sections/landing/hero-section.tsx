import { Button } from "@/components/ui/button";
import { ArrowRight, GitBranch, Terminal } from "lucide-react";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import React from "react";

function IssueEditorMockup() {
  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, y: -12, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="rounded-xl border border-[#30363D] overflow-hidden shadow-2xl shadow-black/60"
        style={{ background: "#161B22" }}
      >
        <div
          className="flex items-center gap-1.5 px-4 py-3 border-b border-[#30363D]"
          style={{ background: "#0D1117" }}
        >
          <div className="w-3 h-3 rounded-full bg-[#F85149]/80" />
          <div className="w-3 h-3 rounded-full bg-[#F0883E]/80" />
          <div className="w-3 h-3 rounded-full bg-[#3FB950]/80" />
          <div className="flex items-center gap-2 ml-3">
            <Terminal className="w-3.5 h-3.5 text-[#8B949E]" />
            <span className="text-[#8B949E] text-xs font-mono">
              bug-report.yml
            </span>
          </div>
        </div>
        <div className="p-5 font-mono text-xs leading-relaxed">
          <div className="text-[#8B949E]">1 </div>
          <div>
            <span className="text-[#8B949E]">2 </span>
            <span className="text-[#FF7B72]">name</span>
            <span className="text-[#E6EDF3]">: </span>
            <span className="text-[#A5D6FF]">{`"🐛 Bug Report"`}</span>
          </div>
          <div>
            <span className="text-[#8B949E]">3 </span>
            <span className="text-[#FF7B72]">about</span>
            <span className="text-[#E6EDF3]">: </span>
            <span className="text-[#A5D6FF]">{`"Report a reproducible bug"`}</span>
          </div>
          <div>
            <span className="text-[#8B949E]">4 </span>
            <span className="text-[#FF7B72]">labels</span>
            <span className="text-[#E6EDF3]">: [</span>
            <span className="text-[#A5D6FF]">{`"bug"`}</span>
            <span className="text-[#E6EDF3]">, </span>
            <span className="text-[#A5D6FF]">{`"triage"`}</span>
            <span className="text-[#E6EDF3]">]</span>
          </div>
          <div className="text-[#8B949E]">5 </div>
          <div>
            <span className="text-[#8B949E]">6 </span>
            <span className="text-[#FF7B72]">body</span>
            <span className="text-[#E6EDF3]">:</span>
          </div>
          <div>
            <span className="text-[#8B949E]">7 </span>
            <span className="text-[#E6EDF3]">- </span>
            <span className="text-[#FF7B72]">type</span>
            <span className="text-[#E6EDF3]">: </span>
            <span className="text-[#79C0FF]">textarea</span>
          </div>
          <div>
            <span className="text-[#8B949E]">8 </span>
            <span className="text-[#FF7B72]">label</span>
            <span className="text-[#E6EDF3]">: </span>
            <span className="text-[#A5D6FF]">{`"Describe the bug"`}</span>
          </div>
          <div>
            <span className="text-[#8B949E]">9 </span>
            <span className="text-[#FF7B72]">placeholder</span>
            <span className="text-[#E6EDF3]">: </span>
            <span className="text-[#A5D6FF]">{`"A clear description..."`}</span>
          </div>
          <div className="text-[#8B949E]">10 </div>
          <div>
            <span className="text-[#8B949E]">11 </span>
            <span className="text-[#E6EDF3]">- </span>
            <span className="text-[#FF7B72]">type</span>
            <span className="text-[#E6EDF3]">: </span>
            <span className="text-[#79C0FF]">input</span>
          </div>
          <div>
            <span className="text-[#8B949E]">12 </span>
            <span className="text-[#FF7B72]">label</span>
            <span className="text-[#E6EDF3]">: </span>
            <span className="text-[#A5D6FF]">{`"Expected behavior"`}</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="absolute -bottom-8 -right-6 w-72 rounded-xl border border-[#30363D] shadow-2xl shadow-black/60 overflow-hidden"
        style={{ background: "#161B22" }}
      >
        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[#30363D]">
          <GitBranch className="w-3.5 h-3.5 text-[#3FB950]" />
          <span className="text-[#E6EDF3] text-xs font-medium">
            Issue generated
          </span>
          <span className="ml-auto text-xs text-[#3FB950] font-mono">#247</span>
        </div>
        <div className="p-4">
          <p className="text-[#E6EDF3] text-xs font-medium mb-1">
            🐛 Button does not submit form on iOS Safari
          </p>
          <p className="text-[#8B949E] text-xs leading-relaxed mb-3">
            The submit button on the checkout form fails to respond to tap
            events on iOS 17+ Safari...
          </p>
          <div className="flex items-center gap-2">
            <span
              className="px-2 py-0.5 rounded-full text-[10px] font-medium"
              style={{
                background: "rgba(248, 81, 73, 0.15)",
                color: "#F85149",
                border: "1px solid rgba(248, 81, 73, 0.3)",
              }}
            >
              bug
            </span>
            <span
              className="px-2 py-0.5 rounded-full text-[10px] font-medium"
              style={{
                background: "rgba(63, 185, 80, 0.15)",
                color: "#3FB950",
                border: "1px solid rgba(63, 185, 80, 0.3)",
              }}
            >
              triage
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

const HeroSection = () => {
  const router = useRouter();

  return (
    <section
      className="min-h-screen"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(99, 102, 241, 0.18) 0%, transparent 60%), radial-gradient(ellipse 40% 40% at 85% 40%, rgba(139, 92, 246, 0.1) 0%, transparent 60%), #0D1117",
      }}
    >
      <div className="px-18 pt-24 mt-20 max-lg:px-15 max-lg:pt-20 max-md:px-9 max-md:pt-12 max-sm:px-0 max-sm:pt-9 flex justify-between">
        <div className="flex flex-col gap-6">
          <p className="text-7xl max-lg:text-6xl max-md:text-5xl text-muted-foreground flex flex-col font-bold">
            <motion.span
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.5 }}
            >
              Create Better
            </motion.span>
            <motion.span
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.5, delay: 0.1 }}
              className="text-8xl max-lg:text-7xl max-md:text-6xl max-sm:text-5xl >>>> bg-[linear-gradient(135deg,#A78BFA_0%,#818CF8_40%,#60A5FA_100%)] bg-clip-text text-transparent"
            >
              GitHub Issues
            </motion.span>
            <motion.span
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.5, delay: 0.2 }}
            >
              in Seconds
            </motion.span>
          </p>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.3 }}
            className="w-full max-w-150 font-medium text-xl max-md:text-base text-muted-foreground"
          >
            Build a library of reusable issue templates, generate
            well-structured GitHub issues in one click, and share templates with
            the developer community.
          </motion.p>
          <div className="flex gap-3">
            <Button
              className={`py-6 px-3 text-sm cursor-pointer 
              bg-linear-to-br from-indigo-500 to-violet-400 
              text-foreground transition-all duration-200 
              hover:opacity-90 hover:shadow-xl hover:shadow-violet-500/30 
              hover:-translate-y-0.5 font-medium`}
              onClick={() => router.push("/login")}
            >
              <span>{`Get Started — it's free`}</span>
              <span>
                <ArrowRight />
              </span>
            </Button>
            <Button
              variant={"outline"}
              className={`py-6 px-3 
              text-sm cursor-pointer text-foreground font-medium`}
            >
              Browse Templates
            </Button>
          </div>
        </div>
        <div className="max-lg:hidden">
          <IssueEditorMockup />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
