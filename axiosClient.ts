import axios from "axios";
import { toast } from "sonner";

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      toast.error("Your session has expired. Redirecting to login...");
      window.location.href = "/login";
    }
    // else {
    //   // Show generic error if not 401
    //   toast.error(error.response?.data?.message || "Something went wrong");
    // }
    return Promise.reject(error);
  }
);

export default axiosClient;
