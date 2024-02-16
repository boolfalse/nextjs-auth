
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/app/models/user";
import bcrypt from "bcrypt";

export const options = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      name: "GitHub",
      profile(profile) {
        // When user authenticated with GitHub, add the role to the profile.
        // So this role will be saved in the JWT token.
        // This role will be used in the middleware.js to check if the user is authorized to access some pages.
        return {
          ...profile,
          role: profile?.email === process.env.ADMIN_EMAIL ? "admin" : "common_user",
        };
      },
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email:", type: "text", placeholder: "Email" },
        password: { label: "Password:", type: "password", placeholder: "Password" },
      },
      async authorize(credentials) {
        try {
          const user = await User.findOne({ email: credentials.email }).lean().exec();
          if (user) {
            const match = await bcrypt.compare(credentials.password, user.password);
            if (match) {
              delete user.password;
              user["role"] = "common_user";

              return user;
            }
          }
        } catch (err) {
          console.log(err);
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },
    async session({ session, token }) {
      if (session?.user) session.user.role = token.role;
      return session;
    },
  },
};
