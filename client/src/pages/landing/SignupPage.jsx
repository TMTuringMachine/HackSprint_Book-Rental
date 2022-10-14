import CustomTextfield from "../../components/CustomTextfield/CustomTextfield.component";
import CustomButton from "../../components/CustomButton/CustomButton.component";
import { Fade } from "react-reveal";
import { useState } from "react";

const SignupPage = ({ setCurrentState }) => {
  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
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
        <form
          onSubmit={handleSubmit}
          className="w-3/5 mt-16 flex flex-col gap-4 items-start"
        >
          <CustomTextfield
            label="Username"
            fullWidth
            onChange={handleChange}
            name="username"
            value={data.username}
            required
          />
          <CustomTextfield
            label="Email"
            fullWidth
            onChange={handleChange}
            name="email"
            value={data.email}
            required
          />
          <CustomTextfield
            label="Phone"
            fullWidth
            onChange={handleChange}
            name="phone"
            value={data.phone}
            required
          />
          <CustomTextfield
            label="Password"
            fullWidth
            onChange={handleChange}
            name="password"
            value={data.password}
            required
          />
          <CustomButton type="submit" style={{ marginTop: "30px" }}>
            SIGNUP
          </CustomButton>
        </form>
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

export default SignupPage;
