import React, { useState, useEffect } from "react";
import MenuBar from "@/components/menuBar";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import NewPassword from "@/components/newPassword";
import { loadGetInitialProps } from "next/dist/shared/lib/utils";

const SignupSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  phoneNumber: Yup.string()
    .min(10, "Too Short!")
    .max(15, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(7, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
});

const userProfile = () => {
  const { userDetails } = useSelector((state) => state.user);

  const [userInfo, setUserInfo] = useState([]);

  try {
    const fetchUserInfo = async () => {
      const response = await fetch(
        "http://localhost:8080/users/" + userDetails._id
      );

      const result = await response.json();
      setUserInfo(result.data);
    };
  } catch (err) {
    console.log(err);
  }

  return (
    <>
      {/* Whole Page */}
      <div className="flex h-screen bg-tuna-200">
        {/* First section */}
        <div className="flex flex-col bg-red-400 h-400 justify-between w-1/6 m-4 rounded-3xl shadow-2xl">
          <MenuBar />
        </div>

        <div className="bg-red-400 w-5/6 m-4 rounded-3xl shadow-2xl">
          {userDetails.fullName}
        </div>
      </div>
    </>
  );
};

export default userProfile;
