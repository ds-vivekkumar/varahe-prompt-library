// This file is deprecated. Google authentication is now handled via Firebase in the app components.
// If you want to implement Google Auth using Firebase, use the following example in your React component:
//
// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { auth } from "../app/firebase/config";
//
// const handleGoogleSignIn = async () => {
//   const provider = new GoogleAuthProvider();
//   await signInWithPopup(auth, provider);
//   // handle redirect or user state here
// };
//
// You can safely delete this file if you no longer use NextAuth.

import type { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      // Only allow users with @varaheanalytics.com email domain
      if (user.email && user.email.endsWith("@varaheanalytics.com")) {
        return true
      }
      return "/auth/error?error=AccessDenied"
    },
    async session({ session, token }) {
      return session
    },
    async jwt({ token, user, account }) {
      if (user) {
        token.id = user.id
      }
      return token
    },
  },
  pages: {
    signIn: "/login",
    error: "/auth/error",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
}
