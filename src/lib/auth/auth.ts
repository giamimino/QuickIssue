import NextAuth from "next-auth"
import NeonAdapter from "@auth/neon-adapter"
import { pool } from "../db"
  
export const { handlers, auth, signIn, signOut } = NextAuth({
    adapter: NeonAdapter(pool),
    providers: [],
})