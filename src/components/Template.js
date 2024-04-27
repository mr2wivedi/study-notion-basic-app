import React from "react";
import frameImg from "../assets/frame.jpg";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { FcGoogle } from "react-icons/fc";

const Template = ({ title, desc1, desc2, formType, image, setIsLoggedIn }) => {
  return (
    <div className="flex justify-between w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0">
      <div className="w-11/12 max-w-[450px]">
        <h1 className="text-zinc-200 font-semibold text-[1.875rem] leading-[2.375rem]">
          {title}
        </h1>
        <p className="flex flex-col text-[1.125rem] leading-[1.625rem] mt-4">
          <span className="text-zinc-500">{desc1}</span>
          <span className="text-cyan-900 italic">{desc2}</span>
        </p>
        {formType === "signup" ? (
          <SignupForm setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <LoginForm setIsLoggedIn={setIsLoggedIn} />
        )}
        <div className="flex w-full items-center my-4 gap-x-2">
          <div className="w-full h-[1px] bg-zinc-700"></div>
          <p className="text-zinc-700 font-medium leading-[1.375rem]">OR</p>
          <div className="w-full h-[1px] bg-zinc-700"></div>
        </div>
        <button className="w-full flex justify-center items-center rounded-[8px] font-medium text-zinc-300 border border-zinc-800 px-[12px] py-[8px] gap-x-2 mt-6">
          <FcGoogle />
          <p>Sign Up with Google</p>
        </button>
      </div>

      <div className="relative w-11/12 max-w-[450px]">
        <img
          src={frameImg}
          alt="pattern"
          style={{ height: 400, width: 500 }}
          loading="lazy"
          className="absolute right-2"
        />
        <img
          src={image}
          alt="student"
          style={{ height: 400, width: 500 }}
          loading="lazy"
          className="absolute -top-4 right-6"
        />
      </div>
    </div>
  );
};

export default Template;
