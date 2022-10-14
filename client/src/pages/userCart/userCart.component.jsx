import React from "react";
import { useSelector } from "react-redux";
import CustomButton from "../../components/CustomButton/CustomButton.component";

const UserCart = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="text-3xl font-semibold px-3">My Cart</div>
      <div className="flex w-full flex-">
        <div className="mt-5 w-3/5 p-3 flex flex-col gap-4">
          {[...Array(5)].map((item) => (
            <div className="w-3/4 shadow-shadow1 p-2 rounded-lg flex gap-3">
              <img
                src="https://images.unsplash.com/photo-1633477189729-9290b3261d0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1922&q=80"
                alt=""
                className="h-32 w-32 rounded-lg"
              />
              <div className="flex flex-col justify-between">
                <div>
                  <div className="text-2xl font-medium">
                    Once upon a time in MMCOE
                  </div>
                  <div className="text-md text-surface2">- by Aryan Shinde</div>
                </div>
                <div className="tet-xl font-semibold text-primary">
                  Rs 330/-
                </div>
                <div className="flex gap-3">
                  <CustomButton size="small">VIEW BOOK</CustomButton>
                  <CustomButton
                    size="small"
                    style={{ backgroundColor: "#d11a2a" }}
                  >
                    REMOVE BOOK
                  </CustomButton>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5 flex-1 w-2/5">
          <div className="w-3/5 h-fit p-3 shadow-shadow1 rounded-lg flex flex-col gap-3">
            <div className="text-2xl font-semibold">Cart summary:</div>
            <div>
              <div className="flex gap-2 items-center">
                <span className="text-lg font-medium">Items:</span>
                <span>7</span>
              </div>
              <div className="flex gap-2 items-center">
                <span className="text-lg font-medium">Cart total:</span>
                <span>Rs 450/-</span>
              </div>
            </div>
            <CustomButton>PROCEES TO CHECKOUT</CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCart;
