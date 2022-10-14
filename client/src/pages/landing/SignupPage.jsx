import CustomTextfield from '../../components/CustomTextfield/CustomTextfield.component';
import CustomButton from '../../components/CustomButton/CustomButton.component';
import { Fade } from 'react-reveal';
import { useState, useRef } from 'react';
import useMutation from '../../hooks/useMutation';
import { useNavigate } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import axiosInstance from '../../utils/axiosInstance';
import { useSnackbar } from 'notistack';
const SignupPage = ({ setCurrentState }) => {
  const navigate = useNavigate();
  const { mutate, isLoading } = useMutation({
    url: '/signup',
    showSnack: true,
    onSuccess: (res) => setCurrentState('login'),
    onError: (err) => console.log(err),
  });
  const { enqueueSnackbar } = useSnackbar();
  const [data, setData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    cpassword: '',
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const recaptchaRef = useRef();

  const verifyCapFun = async (token) => {
    const res = await axiosInstance.post('/recaptchaVerify', { token });
    return res;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    const token = recaptchaRef.current.getValue();
    console.log(token);
    const res = await verifyCapFun(token);
    console.log(res);
    if (res.data.data.success) {
      mutate(data);
    } else {
      enqueueSnackbar('Something went wrong', {
        variant: 'error',
      });
    }
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
            name="name"
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
          <CustomTextfield
            label="Confirm Password"
            fullWidth
            onChange={handleChange}
            name="cpassword"
            value={data.cpassword}
            required
          />
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey="6LdAN4AiAAAAAHXcHg3bVrNjdZdwnSLJGeIxKXEV"
          />
          <CustomButton type="submit" style={{ marginTop: '30px' }}>
            SIGNUP
          </CustomButton>
        </form>
        <div className="mt-3">
          Already a member?{' '}
          <button
            className="text-primary font-semibold cursor-pointer"
            onClick={() => {
              setCurrentState('login');
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
