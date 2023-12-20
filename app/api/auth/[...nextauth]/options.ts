import type { NextAuthOptions } from "next-auth";
import GitHubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'

export const options: NextAuthOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),

        CredentialsProvider({
            name: "Credentials",
            credentials:{
                username: {
                    lable: "Username:",
                    type: "text",
                    placeholder: "Enter your Username"
                },
                password: {
                    lable: "Password:",
                    type: "password",
                    placeholder: "Enter your Password"

                }
            },

            async authorize(credentials){
                //This is where you need to retrive user data
                // to verify with credentials
                //Docs: https://next-auth.js.org/configuration/providers/credentials
                const user = { id: "42", name: "admin", password: "password" }

                if (credentials?.username === user.name && credentials?.password === user.password){
                    return user
                }else{
                    return null
                }

            }
        })
    ],
}