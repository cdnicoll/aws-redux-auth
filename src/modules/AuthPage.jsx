import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  AmplifySignOut,
  AmplifyAuthenticator,
  AmplifySignUp,
} from "@aws-amplify/ui-react";
import { isEmpty, isLoaded, signOut } from "../aws-redux";
// import SocialLoginButton from '../common/components/auth/SocialLoginButton'

function AuthPage() {
  const auth = useSelector((state) => state.aws.auth);
  // const profile = useSelector(state => state.aws.profile)

  return (
    <section>
      <div className="container">
        {/* <div className="row">
          <div className="col-12">
            <h2>AWS: Profile</h2>
            <div>{JSON.stringify(profile, null, 2)}</div>
          </div>
        </div> */}
        <hr />
        <div className="row">
          <div className="col-12">
            <h2>AWS: Auth</h2>
            {/* <div>{JSON.stringify(auth, null, 2)}</div> */}
            {!isLoaded(auth) ? (
              <p>Loading ...</p>
            ) : isEmpty(auth) ? (
              <>
                <h3>You are not signed in</h3>
                <AmplifyAuthenticator usernameAlias="email">
                  <AmplifySignUp
                    slot="sign-up"
                    usernameAlias="email"
                    formFields={[
                      {
                        type: "email",
                        label: "Email",
                        placeholder: "Enter Email Address...",
                        required: true,
                      },
                      {
                        type: "password",
                        label: "Password",
                        placeholder: "Enter Password...",
                        required: true,
                      },
                    ]}
                  />
                </AmplifyAuthenticator>
              </>
            ) : (
              <>
                <p>Congrats! You are in</p>
                <div className="mb-5">
                  <button className="btn btn-warning" type="button" onClick={() => signOut()}>Sign-out</button>
                </div>

                {JSON.stringify(auth, null, 2)}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AuthPage;
