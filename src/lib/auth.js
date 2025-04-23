import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { getUserByEmail, createUser } from "./utils";
import bcrypt from "bcryptjs";
import Error from "@/app/error";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        if (!credentials) return null;
        try {
          const user = await getUserByEmail(credentials.email);
          console.log("user?.banStatus", user?.banStatus)
          if (!user) {
            throw new Error("User not found");
          }
      
          if (user.banStatus) {
            // Use return null + error message
            const error = new Error("You are banned. Contact support.");
            error.name = "CredentialsSignin"; // This is required
            throw error;
          }
        
      
          
            const isMatch = await bcrypt.compare(
              credentials.password,
              user.password
            );
            // console.log(user?.banStatus)

            if (isMatch) {
              return user;
            } else {
              const error = new Error("Incorrect password");
        error.name = "CredentialsSignin";
        throw error;

            }
      
            // throw new Error("User not found");
          
        } catch (error) {
          throw error;
        }
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),

    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
          redirect_uri: process.env.NEXTAUTH_URL + "/api/auth/callback/github",
        },
      },
    }),
  ],

  callbacks: {
    async jwt({ token }) {
      let isExistingUser = await getUserByEmail(token.email);
      if (!isExistingUser) {
        const userData = {
          name: token.name,
          email: token.email,
          image: token.picture,
          password: "default_password",
          role: "student",
          banStatus: false,
        };
        isExistingUser = await createUser(userData);
      }
      if (isExistingUser.banStatus) {
        throw new Error("You are banned. Contact support.");
      }

      token.id = isExistingUser._id.toString();
      token.role = isExistingUser.role;
      token.banStatus = isExistingUser.banStatus || false;
      return token;
    },
   

    async session({ session, token }) {
      session.user.id = token.id;
      session.user.role = token.role;
      session.user.banStatus = token.banStatus
      return session;
    },
  },
});