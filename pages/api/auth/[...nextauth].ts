import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: '495963441295-0gcstmonm72qq9ntm2si6qs1qt85v0fj.apps.googleusercontent.com',
      clientSecret: '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'
    })
    // ...add more providers here
  ]
}
export default NextAuth(authOptions)
