// "use client";

// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { loginSchema, LoginFormValues } from "@/schemas/loginSchema";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import axiosClient from "@/axiosClient";
// import { toast } from "sonner";

// export default function LoginForm() {
//   const {
//     register,
//     setError,
//     handleSubmit,
//     formState: { errors, isSubmitting },
//   } = useForm<LoginFormValues>({
//     resolver: zodResolver(loginSchema),
//   });

//   const router = useRouter();

//   const onSubmit = async (data: LoginFormValues) => {
//     try {
//       const res = await axiosClient.post("/api/auth/login", data);

//       if (res.status === 200) {
//         toast.success(res.data.message);
//         router.push("/");
//       }
//       // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     } catch (error: any) {
//       const message =
//         error.status === 500
//           ? "Can't connect to the server. Please check your internet connection."
//           : error.response?.data?.message || "Login failed";
//       setError("root", {
//         type: "server",
//         message,
//       });
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit(onSubmit)}
//       className="space-y-4 max-w-md mx-auto p-4 "
//     >
//       <h2 className="text-xl font-semibold text-center">Login</h2>

//       <div>
//         <label className="block mb-1">Email</label>
//         <input
//           type="email"
//           {...register("email")}
//           className="border p-2 w-full rounded"
//         />
//         {errors.email && (
//           <p className="text-red-500 text-sm">{errors.email.message}</p>
//         )}
//       </div>

//       <div>
//         <label className="block mb-1">Password</label>
//         <input
//           type="password"
//           {...register("password")}
//           className="border p-2 w-full rounded"
//         />
//         {errors.password && (
//           <p className="text-red-500 text-sm">{errors.password.message}</p>
//         )}
//       </div>

//       {/* ✅ عرض الخطأ العام من السيرفر */}
//       {errors.root && (
//         <p className="text-red-500 text-sm">{errors.root.message}</p>
//       )}

//       <button
//         type="submit"
//         disabled={isSubmitting}
//         className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
//       >
//         {isSubmitting ? "Logging in..." : "Login"}
//       </button>
//     </form>
//   );
// }

"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginFormValues } from "@/schemas/loginSchema";
import { useRouter } from "next/navigation";
import axiosClient from "@/axiosClient";
import { toast } from "sonner";
import Image from "next/image";
import Link from "next/link";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { useState } from "react";

export default function LoginForm() {
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const router = useRouter();

  const onSubmit = async (data: LoginFormValues) => {
    try {
      const res = await axiosClient.post("/api/auth/login", data);
      if (res.status === 200) {
        toast.success(res.data.message || "Login successful");
        router.push("/");
      }
    } catch (error: any) {
      const message =
        error.status === 500
          ? "Can't connect to the server. Please check your internet connection."
          : error.response?.data?.message || "Login failed";
      setError("root", { type: "server", message });
    }
  };
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex min-h-scree w-full h-[500px] ">
      {/* Left Side - Image */}
      <div className="hidden md:flex w-1/2 items-center justify-center ">
        <Image
          src="/vecteezy_the-concept-of-online-shopping-on-social-media-app-3d_7278359.jpg"
          alt="Customer Shopping Online"
          width={700}
          height={700}
          priority
          className="h-full  object-cover object-right w-full "
        />
        {/* shadow-amber-400/45 shadow-2xl */}
      </div>

      {/* Right Side - Form */}
      <div className=" w-full md:w-1/2  p- bg-slate-8 h-full">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-gradient-to-tr to-slate-200 from-gray-300  shadow-lg rounded- p-8 w-full  h-full"
        >
          <h2 className="text-3xl font-bold mb-6 text-center text-slate-800">
            Welcome Back
          </h2>
          {/* Email */}
          <div className="space-y-3">
            <div className="relative">
              <label className="block mb-2 text-gray-700 font-semibold">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-4 text-gray-500 w-5 h-5" />
                <input
                  type="email"
                  {...register("email", { required: "Email is required" })}
                  className="border border-gray-400 p-3 pl-10 w-full rounded-lg 
               text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your email"
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="relative">
              <label className="block mb-2 text-gray-700 font-semibold">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-4 text-gray-500 w-5 h-5" />
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: "Password is required",
                  })}
                  className="border border-gray-400 p-3 pl-10 pr-10 w-full rounded-lg text-slate-700
                 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-4 text-gray-500 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
          </div>
          {/* Email */}
          {/* <div className="mb-4">
            <label className="block mb-2 text-gray-700">Email</label>
            <input
              type="email"
              {...register("email")}
              className="border border-gray-500 p-3 w-full rounded focus:outline-none 
              focus:ring-2 focus:ring-blue-400"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div> */}

          {/* Password */}
          {/* <div className="mb-4">
            <label className="block mb-2 text-gray-700">Password</label>
            <input
              type="password"
              {...register("password")}
              className="border border-gray-500 p-3 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div> */}

          {/* Server Error */}
          {errors.root && (
            <p className="text-red-500 text-sm mb-3">{errors.root.message}</p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-600  text-white w-full py-3 mt-4 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>

          <p className="text-center text-gray-600 text-sm mt-4">
            Don't have an account?{" "}
            <Link href="/register" className="text-blue-500 hover:underline">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
