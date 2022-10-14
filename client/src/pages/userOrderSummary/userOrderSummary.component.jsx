import { MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import CustomButton from "../../components/CustomButton/CustomButton.component";
import CustomTextfield from "../../components/CustomTextfield/CustomTextfield.component";

const UserCheckout = () => {
  const [address, setAddress] = useState("address1");

  const handleChange = (e) => {
    setAddress(e.target.value);
  };
  return (
    <div className="w-full h-full flex flex-col">
      <div className="text-3xl font-semibold px-3">Your Order Summary</div>
      <div className="p-3 w-4/5 shadow-shadow1 mt-5 rounded-lg flex gap-4">
        <div className="flex-1 border-r-2 border-primary px-4">
          <div className="text-lg font-semibold">BOOKS:</div>
          <div className="w-full flex flex-col gap-2">
            {[...Array(5)].map((item) => (
              <div className="w-full border-b-2 border-primary p-2 flex gap-3">
                <img
                  src="https://images.unsplash.com/photo-1633477189729-9290b3261d0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1922&q=80"
                  alt=""
                  className="h-20 w-20 rounded-lg"
                />
                <div className="flex flex-col justify-between">
                  <div>
                    <div className="text-lg font-medium">
                      Once upon a time in MMCOE
                    </div>
                    <div className="text-sm text-surface2">
                      - by Aryan Shinde
                    </div>
                  </div>
                  <div className="tet-xl font-semibold text-primary">
                    Rs 330/-
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1">
          <div className="text-lg font-semibold">ADDRESS:</div>
          <div className="my-3">
            <div>B-16-1/403,Shiv Sai Chs, Ashokvan , Borivali East</div>
            <div>Mumbai,Maharastra</div>
            <div>
              <span>Pincode:</span> <span>400066</span>
            </div>
          </div>
          <div className="text-lg font-semibold">SUMMARY:</div>
          <div className="my-3">
            <div className="flex gap-3 items-center">
              <span className="text-lg font-semibold">Order total:</span>
              <span>Rs 3001/-</span>
            </div>
          </div>
          <CustomButton>PAY FOR ORDER</CustomButton>
        </div>
      </div>
    </div>
  );
};

export default UserCheckout;
