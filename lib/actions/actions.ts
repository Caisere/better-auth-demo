'use server'

import { headers } from "next/headers"
import { auth } from "../auth"
import { redirect } from "next/navigation"

export async function signUp(email: string, password:string, name: string) {
    const result = await auth.api.signUpEmail({
      body: {
        email,
        password,
        name,
        callbackURL: '/dashboard'
      }
    })
    
    return result
}

export async function signIn (email: string, password: string) {
  const result = await auth.api.signInEmail({
    body: {
      email, 
      password,
      callbackURL: '/dashboard'
    }
  })
  
  return result
}

export async function signOut () {
  const result = await auth.api.signOut({headers: await headers()})
  return result;
}

export async function signInWithSocial(provider: 'google' | 'github') {
  const {url} = await auth.api.signInSocial({
    body: {
      provider,
      callbackURL: '/dashboard'
    }
  })
  
  if (url) {
    redirect(url)
  }
}
