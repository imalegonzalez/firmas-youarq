import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import GoogleProvider from 'next-auth/providers/google'

const handler =  NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
  ],
});

export default handler;