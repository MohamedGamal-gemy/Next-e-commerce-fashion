"use server";

import { cookies } from "next/headers";
import { LoginFormValues } from "@/schemas/loginSchema";

export async function loginUser(data: LoginFormValues) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const response = await res.json();

    if (!res.ok) {
      return { success: false, message: response.message || "Login failed" };
    }

    const setCookie = res.headers.get("set-cookie");

    if (setCookie) {
      const cookieStore = await cookies();
      const token = extractToken(setCookie);

      cookieStore.set("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: "/",
      });
    }

    return { success: true, message: response.message };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return { success: false, message: "Something went wrong" };
  }
}

function extractToken(setCookie: string): string {
  const match = setCookie.match(/token=([^;]+)/);
  return match ? match[1] : "";
}
