import CustomTextfield from '../../components/CustomTextfield/CustomTextfield.component';
import CustomButton from '../../components/CustomButton/CustomButton.component';
import { Fade } from 'react-reveal';
import { useState } from 'react';
import useMutation from '../../hooks/useMutation';
import { useNavigate } from 'react-router-dom';

const SignupPage = ({ setCurrentState }) => {
  const navigate = useNavigate();
  const { mutate, isLoading } = useMutation({
    url: '/signup',
    showSnack: true,
    onSuccess: (res) => setCurrentState('login'),
    onError: (err) => console.log(err),
  });
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    mutate(data);
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
