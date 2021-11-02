import React from 'react'
import { socialLogin } from '../../utils/auth'

const SocialLoginButton = () => {
  return (
    <>
      <button className="btn btn-secondary" type="button" onClick={() => socialLogin({ provider: 'google' })}>Login Test</button>
    </>
  )
}

export default SocialLoginButton
