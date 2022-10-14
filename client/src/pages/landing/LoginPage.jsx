import CustomTextfield from "../../components/CustomTextfield/CustomTextfield.component";
import CustomButton from "../../components/CustomButton/CustomButton.component";
import { Fade } from "react-reveal";
import { useState } from "react";

const LoginPage = ({ setCurrentState }) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Fade right>
      <div className="w-full flex-1">
        <form className="w-3/5 mt-16 flex flex-col gap-4 items-start" onSubmit={handleSubmit} >
          <CustomTextfield label="Email" fullWidth required name="email" onChange={handleChange} value={data.email} />
          <CustomTextfield label="Password" fullWidth required name="password" onChange={handleChange} value={data.password} />
          <CustomButton style={{ marginTop: "30px" }}>LOGIN</CustomButton>
        </form>
        <div className="mt-3">
          New to BookMyBook?{" "}
          <button
            className="text-primary font-semibold cursor-pointer"
            onClick={() => {
              setCurrentState("signup");
            }}
          >
            Sign Up
          </button>
        </div>
      </div>
    </Fade>
  );
};

export default LoginPage;
