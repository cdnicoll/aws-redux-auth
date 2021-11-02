import Auth from "@aws-amplify/auth"

export const signOut = async () => await Auth.signOut()
