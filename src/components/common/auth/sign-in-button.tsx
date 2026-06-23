import { Button, ButtonType } from "@/components/ui/button";
import { Login } from "@/lib/auth/auth-actions";

const LoginButton = ({
  provider,
  ...rest
}: { provider: "github" } & ButtonType) => {
  return (
    <Button
      onClick={async () => {
        await Login(provider);
      }}
      {...rest}
    >
      Continue with {provider}
    </Button>
  );
};

export default LoginButton;
