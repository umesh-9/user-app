"use client";
import Link from "next/link";
import React, { useState } from "react";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username && password) {
      <Link href="/users"></Link>;
    }
  };
  return (
    <div className="flex min-h-screen justify-center items-center  ">
      <div className="flex flex-col gap-1 bg-slate-600 p-6 rounded-md text-2xl">
        <h2 className="text-center text-3xl">Login</h2>
        <label htmlFor="username"> Username</label>
        <input
          type="text"
          placeholder="Username"
          value={username}
          autoFocus
          required
          onChange={(e) => setUsername(e.target.value)}
          className="text-black rounded-sm p-1 outline-none"
        />
        <label htmlFor="password"> Password</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          className="text-black rounded-sm p-1 outline-none"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Link
          className="bg-black w-[90px] mx-auto pl-3 py-3 rounded-lg  mt-2  hover:text-slate-700"
          href="/users"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
