import React from "react";
import { Icon } from "@iconify/react";

const Header = () => {
  return (
    <div className="w-full h-14 bg-primary flex items-center px-8 justify-between">
      <div className="logo text-xl font-semibold">BookMyBook</div>
      <div className="flex gap-8">
        <Icon
          icon="ant-design:heart-filled"
          width="30px"
          height="30px"
          color="white"
        />
        <Icon
          icon="eva:shopping-cart-fill"
          width="30px"
          height="30px"
          color="white"
        />
        <Icon icon="bxs:user-circle" width="30px" height="30px" color="white" />
      </div>
    </div>
  );
};

export default Header;
