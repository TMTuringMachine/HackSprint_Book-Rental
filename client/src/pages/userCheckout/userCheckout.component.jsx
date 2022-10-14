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
      <div className="text-3xl font-semibold px-3">Checkout your cart</div>
      <div className="p-3 w-4/5 shadow-shadow1 mt-5 rounded-lg">
        <div className="text-xl font-semibold mb-5">Set delivery address:</div>
        <FormControl fullWidth variant="standard" >
          <InputLabel
            onChange={handleChange}
            name="address"
            id="demo-simple-select-label"
          >
            Address
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={address}
            name="address"
            label="Address"
            onChange={handleChange}
          >
            <MenuItem value="address1">IT</MenuItem>
            <MenuItem value="address2">Production</MenuItem>
            <MenuItem value="address3">Transport</MenuItem>
          </Select>
        </FormControl>
        <div className="text-md font-bold my-3">OR</div>
        <div className="w-3/5 flex flex-col gap-2 mb-6">
          <CustomTextfield label="Address" fullWidth />
          <CustomTextfield label="City" fullWidth />
          <CustomTextfield label="State" fullWidth />
          <CustomTextfield label="Pincode" fullWidth />
        </div>
        <CustomButton>CHECKOUT</CustomButton>
      </div>
    </div>
  );
};

export default UserCheckout;
