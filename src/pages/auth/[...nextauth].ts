import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
        clientId: "198554398975-ii93rli272blbmud41d8ap23ocs378mr.apps.googleusercontent.com",
        clientSecret: "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"
    })
    // CredentialsProvider({
    //   type: "credentials",
    //   credentials: {},
    //   authorize(credentials, req) {
    //     const { email, password } = credentials as {
    //       email: string;
    //       password: string;
    //     };
    //     // perform you login logic
    //     // find out user from db
    //     if (email !== "john@gmail.com" || password !== "1234") {
    //       throw new Error("invalid credentials");
    //     }

    //     // if everything is fine
    //     return {
    //       id: "1234",
    //       name: "John Doe",
    //       email: "john@gmail.com",
    //       role: "admin",
    //     };
    //   },
    // })
  ]
});