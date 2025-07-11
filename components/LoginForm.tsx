"use client";

import { useForm } from "react-hook-form";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginFormValues } from "@/schemas/loginSchema";
import { useState } from "react";
import { useLoginUserMutation } from "@/store/users";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  // const router = useRouter();
  const [serverError, setServerError] = useState("");


  const onSubmit = async (data: LoginFormValues) => {
    try {
      setServerError("");
      const res = await axios.post(
        "http://localhost:3000/api/auth/login",
        data
      );
      localStorage.setItem("token", res.data.token);

      console.log(res.data);
    } catch (err: any) {
      setServerError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 max-w-md mx-auto p-4"
    >
      <h2 className="text-xl font-semibold text-center">Login</h2>

      <div>
        <label>Email</label>
        <input
          type="email"
          {...register("email")}
          className="border p-2 w-full rounded"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label>Password</label>
        <input
          type="password"
          {...register("password")}
          className="border p-2 w-full rounded"
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
      </div>

      {serverError && <p className="text-red-500 text-sm">{serverError}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        {isSubmitting ? "Logging in..." : "Login"}
      </button>
    </form>
  );
};

export default LoginForm;
