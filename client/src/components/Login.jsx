import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import Input from "./Input";
import { useForm } from "react-hook-form";
import { useUser } from "../context/AppContext";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "react-toastify";

function Login() {
  const [state, setState] = useState("Login");

  const { register, handleSubmit } = useForm();
  const { setShowLogin, setToken, backendUrl, setUser } = useUser();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const onSubmit = async (formData) => {
    try {
      if (state === "Login") {
        const { data } = await axios.post(`${backendUrl}/api/user/login`, {
          email: formData.email,
          password: formData.password,
        });

        if (data.success) {
          setToken(data.token);
          setUser(data.data);
          setShowLogin(false);
          localStorage.setItem("token", data.token);
        } else {
          toast.error(data.message || "Login failed");
        }
      } else {
        const { data } = await axios.post(`${backendUrl}/api/user/register`, {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        });

        if (data.success) {
          setUser(data.data);
          setToken(data.token);
          toast.success("Registration successful");
          setShowLogin(false);
          localStorage.setItem("token", data.token);
        } else {
          toast.error(data.message || "Registration failed");
        }
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "An error occurred");
    }
  };
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center">
      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        initial={{ opacity: 0.2, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="relative bg-white p-10 rounded-xl text-slate-500"
      >
        <h1 className="text-center text-2xl text-neutral-700 font-medium">
          {state}
        </h1>
        <p className="text-sm text-center">
          Welcome back! Please {state} to continue
        </p>

        {state !== "Login" && (
          <div className="border px-5 py-0.5 flex items-center gap-2 rounded-lg mt-5">
            <img
              src={assets.profile_icon}
              className="h-10 w-10 object-cover pl-0 pe-3"
              alt="user_icon"
            />
            <Input
              placeholder="Full Name"
              className="border-none"
              {...register("name", {
                required: "Name is required",
              })}
            />
          </div>
        )}

        <div className="border px-6 py-0.5 flex items-center gap-2 rounded-lg mt-5">
          <img src={assets.email_icon} className="h-4" alt="email_icon" />
          <Input
            placeholder="Email"
            className="border-none"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address",
              },
            })}
          />
        </div>

        <div className="border px-6 py-0.5 flex items-center gap-2 rounded-lg mt-5">
          <img src={assets.lock_icon} className="h-6" alt="lock_icon" />
          <Input
            placeholder="Password"
            className="border-none"
            type="password"
            {...register("password", {
              required: "Password is required",
            })}
          />
        </div>

        <p className="text-sm text-blue-600 my-4 cursor-pointer">
          Forgot password?
        </p>

        <button className="bg-blue-600 w-full font-medium tracking-wide text-white py-2.5 text-base mb-1 rounded-md">
          {state === "Login" ? "Login" : "Create Account"}
        </button>

        {state === "Login" ? (
          <p>
            Don't have an account?{" "}
            <span
              onClick={() => setState("Sign Up")}
              className="text-blue-600 cursor-pointer"
            >
              Sign up
            </span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span
              onClick={() => setState("Login")}
              className="text-blue-600 cursor-pointer"
            >
              Login
            </span>
          </p>
        )}

        <img
          onClick={() => setShowLogin(false)}
          src={assets.cross_icon}
          alt="close_icon"
          className="absolute top-5 right-5 cursor-pointer hover:rotate-90 duration-300 h-4"
        />
      </motion.form>
    </div>
  );
}

export default Login;
