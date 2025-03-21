"use server";

import { signIn, signOut } from "@/lib/auth";

// Login with Google/Github , give action props Google/Github
export const doSocialLogin = async (action) => {
  await signIn(action, { redirectTo: "/dashboard" });
};

// Log out
export const doLogout = async () => {
  await signOut({ redirectTo: "/login" });
};

// Log in with email, password
export const doCredentialLogin = async (formData) => {
  try {
    const response = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    return response;
  } catch (err) {
    console.log("Credential Login", err);
    throw err;
  }
};
