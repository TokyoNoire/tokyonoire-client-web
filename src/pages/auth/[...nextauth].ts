import NextAuth from "next-auth";
import GoogleProvier from "next-auth/providers/google";
import AppleProvider from "next-auth/providers/apple"


// Initialize NExtAuth

export default NextAuth({
    providers: [
        GoogleProvier({
            clientId: "198554398975-ii93rli272blbmud41d8ap23ocs378mr.apps.googleusercontent.com",
            clientSecret: "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"
        })
    ]
})