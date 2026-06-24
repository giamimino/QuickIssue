"use server";

import { signIn as authSignIn, signOut as authSignOut } from "./auth";

export const Login = async (provider: "github") => {
  await authSignIn(provider, { redirectTo: "/dashboard" });
};

export const Logout = async () => {
  await authSignOut({ redirectTo: "/login" });
};
