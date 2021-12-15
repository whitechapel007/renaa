import React from "react";
import { Link } from "react-router-dom";
import { HookInput } from "../../components/BasicInputField";
import Button from "../../components/Button";

export default function Login() {
  return (
    <div className="w-full py-10 my-12 lg:mt-24 flex items-center justify-center ">
      <div className="flex flex-col items-start ">
        <h1 className="text-2xl pb-2 md:text-3xl lg:text-4xl text-black font-dm-sans lg:pb-4">
          Let's Create your Account
        </h1>
        <p className="text-sm md:text-base text-center text-black font-dm-sans">
          Welcome to the creative gateway
        </p>

        <div className="pt-12 w-full">
          <HookInput
            label="First Name"
            name="firstName"
            type="text"
            className="w-full"
            show
          />
          <HookInput
            label="Last Name"
            name="lastName"
            type="text"
            className=" lg:w-600 pt-10"
            show
          />
          <HookInput
            label="Email Address"
            name="lastName"
            type="text"
            className=" lg:w-600 pt-10"
          />
          <HookInput
            label="Phone Number"
            name="lastName"
            type="text"
            className=" lg:w-600 pt-10"
          />
          <HookInput
            label="Password"
            name="lastName"
            type="text"
            className=" lg:w-600 pt-10"
          />
          <HookInput
            label="Confirm Password"
            name="lastName"
            type="text"
            className=" lg:w-600 pt-10"
          />
          <span className="hidden md:flex items-center justify-center font-dm-sans pt-8 text-xs">
            By clicking <span className="text-secondary px-1">"Sign up" </span>{" "}
            you agree to Rentaa's{" "}
            <Link to="#" className="px-1 text-secondary">
              Private Policy
            </Link>{" "}
            and{" "}
            <Link to="#" className="px-1 text-secondary">
              Terms and Conditions
            </Link>
          </span>
          <p className="text-xs md:hidden text-center w-72 pt-6">
            By clicking sign up you agree to Rentaa's Private Policy and Terms
            and Conditions
          </p>

          <Button
            child="Sign Up"
            type="submit"
            className="w-full bg-secondary mt-10 py-3 md:py-6 font-dm-sans text-white rounded"
          />
        </div>
      </div>
    </div>
  );
}
