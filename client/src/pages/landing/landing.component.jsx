import React, { useState, useEffect } from "react";
import Lottie from "react-lottie";
import LandingPageLottie from "../../assets/landing.json";
import CustomButton from "../../components/CustomButton/CustomButton.component";
import { Fade } from "react-reveal";
import CustomTextfield from "../../components/CustomTextfield/CustomTextfield.component";

const IntroPage = ({ setCurrentState }) => {
  return (
    <div className="w-full flex-1">
      <div className="mt-12 text-2xl text-surface2 w-4/5">
        The best place on web to rent out the best books in the world
      </div>
      <CustomButton
        size="large"
        style={{ marginTop: "50px" }}
        onClick={() => {
          setCurrentState("signup");
        }}
      >
        BECOME A MEMBER
      </CustomButton>
      <div className="mt-3">
        Already a member?{" "}
        <span className="text-primary font-semibold cursor-pointer">Login</span>
      </div>
    </div>
  );
};

const LoginPage = ({ setCurrentState }) => {
  return (
    <Fade right>
      <div className="w-full flex-1">
        <div className="w-3/5 mt-16 flex flex-col gap-4 items-start">
          <CustomTextfield label="Email" fullWidth />
          <CustomTextfield label="Password" fullWidth />
          <CustomButton style={{ marginTop: "30px" }}>LOGIN</CustomButton>
        </div>
        <div className="mt-3">
          New to BookMyBook?{" "}
          <button
            className="text-primary font-semibold cursor-pointer"
            onClick={() => {
              setCurrentState("signup");
            }}
          >
            SignUp
          </button>
        </div>
      </div>
    </Fade>
  );
};

const SignupPage = ({ setCurrentState }) => {
  return (
    <Fade right>
      <div className="w-full flex-1">
        <div className="w-3/5 mt-16 flex flex-col gap-4 items-start">
          <CustomTextfield label="Username" fullWidth />
          <CustomTextfield label="Email" fullWidth />
          <CustomTextfield label="Phone" fullWidth />
          <CustomTextfield label="Password" fullWidth />
          <CustomButton style={{ marginTop: "30px" }}>SIGNUP</CustomButton>
        </div>
        <div className="mt-3">
          Already a member?{" "}
          <button
            className="text-primary font-semibold cursor-pointer"
            onClick={() => {
              setCurrentState("login");
            }}
          >
            Log in
          </button>
        </div>
      </div>
    </Fade>
  );
};

const Landing = () => {
  const [currentState, setCurrentState] = useState("signup");

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LandingPageLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  let page;

  if (currentState == "login") {
    page = <LoginPage setCurrentState={setCurrentState} />;
  } else if (currentState == "signup") {
    page = <SignupPage setCurrentState={setCurrentState} />;
  } else {
    page = <IntroPage setCurrentState={setCurrentState} />;
  }

  return (
    <div className="w-screen h-screen bg-background flex box-border">
      <div className="h-full flex-1 bg-primary p-8 flex flex-col">
        <h1 className="text-3xl font-bold ">BookMyBook</h1>
        <div className="w-full flex-1">
          <div className="w-4/5 h-full">
            <Lottie options={defaultOptions} width="100%" height="100%" />
          </div>
        </div>
      </div>
      <div className="h-full flex-1 p-8 flex flex-col">
        <h1 className="text-7xl font-medium w-4/5">
          Welcome to{" "}
          <span className="text-primary font-semibold">BookMyBook</span>{" "}
        </h1>
        {page}
      </div>
    </div>
  );
};

export default Landing;
