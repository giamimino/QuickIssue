import { Button, ButtonType } from "@/components/ui/button";
import { Login } from "@/lib/auth/auth-actions";
import { FaGithub } from "react-icons/fa";

const LoginButton = ({
  provider,
  ...rest
}: { provider: "github" } & ButtonType) => {
  return (
    <Button
      className={`w-full flex items-center justify-center bg-[#161B22]
      gap-3 py-5 px-5 rounded-xl border border-[#30363D] 
      hover:border-[#6366f1]/40 hover:bg-[#6366f1]/5 transition-all 
      duration-200 text-[#E6EDF3] text-sm font-medium cursor-pointer`}
      onClick={async () => {
        await Login(provider);
      }}
      {...rest}
    >
      <FaGithub className="w-4.5 h-4.5" />
      Continue with {provider}
    </Button>
  );
};

export default LoginButton;
