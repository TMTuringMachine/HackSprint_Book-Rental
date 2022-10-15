import React from "react";
import useQuery from "../../hooks/useQuery";
import { useEffect, useState } from "react";

const UserDashboard = () => {
  const { fetchData, isLoading, response } = useQuery({
    url: "/order/getRentals",
    showSnack: false,
    onSuccess: (data) => {
      console.log(data, "ewjnkjne");
    },
  });

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="w-full h-full bg-red-500">
      <div className="text-2xl font-semibold px-3">My rentals</div>
      <div>
        {isLoading ? (
          <div>loading...</div>
        ) : (
          response?.data.rentals.map((rental) => <div>fff</div>)
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
