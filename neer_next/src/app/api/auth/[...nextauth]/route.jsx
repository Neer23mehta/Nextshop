import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { pages } from "next/dist/build/templates/app-page";

const authOptions = {
    providers : [
        Credentials({
            name : "credentials",
            credentials : {},

            async authorize(credentials){
                const user = {id:"1"};
                return user;
            }
        })
    ],
    session:{
        stratergy : "jwt",
    },
    secret:process.env.NEXTAUTH_SECRET,
    pages:{
        signIn: "/",
    },
};

const handler = NextAuth(authOptions);

export {handler as GET , handler as POST};