"use server";

import { signIn, signOut } from "@/lib/auth";

// login with google/github , give action props google/github
export const doSocialLogin = async (action) => {
  await signIn(action, { redirectTo: "/" });
};

// Log out
export const doLogout = async () => {
  await signOut({ redirectTo: "/" });
};

// log in with email, password
export const doCredentialLogin = async (formData) => {
  const email = formData.email;
  const password = formData.password;

  try {
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    return res;
  } catch (err) {
    console.log("Credential Login", err);
    throw err;
  }
};
