import NextAuth from "next-auth";
import NeonAdapter from "@auth/neon-adapter";
import { pool } from "../db";
import Github from "next-auth/providers/github";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: NeonAdapter(pool),
  providers: [
    Github({
      clientId: process.env.AUTH_GITHUB_ID!,
      clientSecret: process.env.AUTH_GITHUB_SECRET!,
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      // @ts-ignore
      session.user = {
        id: user.id,
        name: user.name,
        email: user.email,
        image: user.image,
      };

      return session;
    },
  },
});
