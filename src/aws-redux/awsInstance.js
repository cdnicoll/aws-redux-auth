import Amplify, { Hub } from "aws-amplify";
import { init, signIn, signOut } from "./actions/auth";
import { hubTypes } from "./constants";

export const createAwsInstance = ({ awsConfig, dispatch }) => {
  Hub.listen(/.*/, async ({ payload: { event, data } }) => {
    console.log('Listening for all messages: ', event, data)
    switch (event) {
      case hubTypes.CONFIGURED:
        await init(dispatch)
        break;
      case hubTypes.SIGNIN:
        await signIn(dispatch, data)
        break;
      case hubTypes.SIGNOUT:
        await signOut(dispatch)
        break;
      default:
        break;
    }
  })

  Amplify.configure(awsConfig);
}