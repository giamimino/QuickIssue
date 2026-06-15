import { signIn, signOut } from "./auth";

export const Login = async (provider: "github") => {
  await signIn(provider, { redirectTo: "/" });
};

export const Logout = async () => {
  await signOut({ redirectTo: "/login" });
};
