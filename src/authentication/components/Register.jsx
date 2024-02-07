'use client';
import { StateRegister } from './useRegister';
import Image from 'next/image';
import image from "../style/images/logo.png"
import Link from 'next/link';
import { useRef } from 'react';
export default function pageRegister() {
    const serviceState = StateRegister();
    const { stateRegister, handleChange, handleSubmit } = serviceState;
    
  return (
    <div>
      <div className="grid w-full grow grid-cols-1 place-items-center">
        <div className="w-full max-w-[26rem] p-4 sm:px-5">
          <div className="text-center">
            <Image
              className="mx-auto h-20 w-20"
              src={image}
              alt="logo"
            />
            <div className="mt-4">
              <h2 className="text-2xl font-semibold text-slate-600 dark:text-navy-100">
                Welcome To E-commerce
              </h2>
              <p className="text-slate-400 dark:text-navy-300">
                Please sign up to continue
              </p>
            </div>
          </div>
          <div className="card mt-5 rounded-lg p-5 lg:p-7">
            <label className="relative flex">
              <input
                className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                placeholder="Username"
                type="text"
                name="username"
                value={stateRegister.username}
                onChange={handleChange}
              />
              <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 transition-colors duration-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </span>
            </label>
            <label className="relative mt-4 flex">
              <input
                className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                placeholder="Email"
                type="email"
                name="email"
                value={stateRegister.email}
                onChange={handleChange}
              />
              <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 transition-colors duration-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </span>
            </label>
            <label className="relative mt-4 flex">
              <input
                className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                placeholder="Password"
                type="password"
                name="password"
                value={stateRegister.password}
                onChange={handleChange}
              />
              <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 transition-colors duration-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </span>
            </label>
            <label className="relative mt-4 flex">
              <input
                className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                placeholder="Repeat Password"
                type="password"
                name="passwordConfirm"
                value={stateRegister.passwordConfirm}
                onChange={handleChange}
              />
              <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 transition-colors duration-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </span>
            </label>
            <div className="mt-4 flex items-center space-x-2">
              <input
                className="form-checkbox is-basic h-5 w-5 rounded border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent"
                type="checkbox"
              />
              <p className="line-clamp-1">
                I agree with
                <a
                  href="#"
                  className="text-slate-400 hover:underline dark:text-navy-300 p-2"
                >
                  privacy policy
                </a>
              </p>
            </div>
            <button
              onClick={handleSubmit}
              className="btn mt-5 w-full bg-primary font-medium text-white bg-violet-600 rounded-lg p-2 hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
            >
              Sign Up
            </button>
            <div className="mt-4 text-center text-xs+">
              <p className="line-clamp-1">
                <span>Already have an account? </span>
                <Link
                  className="text-primary transition-colors hover:text-primary-focus text-violet-600 p-2  dark:text-accent-light dark:hover:text-accent"
                  href="login"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
