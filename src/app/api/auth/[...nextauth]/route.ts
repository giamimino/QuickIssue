import { authOptions } from "@/lib/auth/auth";
import NextAuth from "next-auth";

const handler = NextAuth(authOptions);

export { handler as get, handler as post };
