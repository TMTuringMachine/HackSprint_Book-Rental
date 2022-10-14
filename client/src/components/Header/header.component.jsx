import React from "react";
import { Icon } from "@iconify/react";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  return (
    <div className="w-full h-14 bg-primary flex items-center px-8 justify-between">
      <Link to="/user/home">
        <div className="logo text-xl font-semibold">BookMyBook</div>
      </Link>
      <div className="flex gap-8">
        <Icon
          icon="ant-design:heart-filled"
          width="30px"
          height="30px"
          color="white"
        />
        <Link to="/user/cart" >
          <Icon
            icon="eva:shopping-cart-fill"
            width="30px"
            height="30px"
            color="white"
          />
        </Link>

        <Icon icon="bxs:user-circle" width="30px" height="30px" color="white" />
      </div>
    </div>
  );
};

export default Header;
