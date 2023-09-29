import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import IMAGE from "next/image";
import PermPhoneMsgRoundedIcon from "@mui/icons-material/PermPhoneMsgRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import { io } from "socket.io-client";
const URL = "http://localhost:8080";
export const socket = io(URL);

const TransactionSchema = Yup.object().shape({
  receiverId: Yup.string().required("Required!!!"),
  amount: Yup.string().required("Required!!!"),
});

const midHome = () => {
  const { userDetails } = useSelector((state) => state.user);
  const [userInfo, setUserInfo] = useState([]);
  try {
    const fetchUserData = async () => {
      const response = await fetch(
        "http:localhost:8080/users/" + userDetails._id
      );
      const result = await response.json();
      setUserInfo(result);
    };
  } catch (error) {
    console.log(error);
  }

  useEffect(() => {
    socket.on('connection');
  }, []);

  const handleRideRequest = ()=>{
    socket.emit('request', {senderId: userDetails.phoneNumber, receiverId, amount} )
   }

  const request = async (values) => {
    try {
      const response = await fetch("http://localhost:8080/", {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-Type": "application/json" },
      });

      const result = await response.json();
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <div className="flex flex-col justify-between h-screen max-h-screen m-4">
      <div className="p-4 rounded-xl bg-transparent bg-clip-padding backdrop-filter bg-opacity-10 shadow-2xl hover:border border-satinLinen-500">
        <h1 className="text-2xl ">{userDetails.fullName}</h1>
        <h2 className="text-xl">Balance: NRs.{userDetails.balance}</h2>
      </div>

      <div className="flex my-2">
        <div className="h-96 max-h-96 overflow-y-scroll scrollbar-thin scrollbar-thumb scrollbar-track w-1/2 mr-2 p-4 rounded-xl bg-transparent bg-clip-padding backdrop-filter bg-opacity-10 shadow-2xl hover:border border-satinLinen-500">
          <Formik
            initialValues={{
              receiverId: "",
              amount: "",
            }}
            validationSchema={TransactionSchema}
            onSubmit={(values) => {}}
          >
            {({ errors, touched }) => (
              <Form className="">
                <h1 className="font-bold text-center text-xl text-celery-600 pb-2">
                  Transfer Money
                </h1>
                <lable className="text-tuna-900 font-semibold">
                  Phone Number
                </lable>
                <br />
                <Field
                  name="receiverId"
                  type="text"
                  placeholder="Enter receiver number"
                  className="bg-transparent text-tuna-950 border-b-2 border-tuna-400 focus:border-tuna-950 outline-none text-xl p-1"
                />
                {errors.receiverId && touched.receiverId ? (
                  <div className="text-satinLinen-700">
                    {errors.receiverId}
                  </div>
                ) : null}
                <br />
                <br />

                <lable className="text-tuna-900 font-semibold">Amount</lable>
                <br />
                <Field
                  name="amount"
                  type="text"
                  placeholder="Enter sending amount"
                  className="bg-transparent text-tuna-950 border-b-2 border-tuna-400 focus:border-tuna-950 outline-none text-xl p-1"
                />
                {errors.amount && touched.amount ? (
                  <div className="text-satinLinen-700">{errors.amount}</div>
                ) : null}

                <br />
                <br />

                <button
                  type="submit"
                  className="w-full py-2  bg-celery-500 text-tuna-800 font-semibold rounded-md opacity-80 hover:opacity-100"
                >
                  Send
                </button>
              </Form>
            )}
          </Formik>
        </div>
        <div className="h-96 max-h-96 overflow-y-scroll scrollbar-thin scrollbar-thumb scrollbar-track w-1/2 ml-2 p-4 rounded-xl bg-transparent bg-clip-padding backdrop-filter bg-opacity-10 shadow-2xl hover:border border-satinLinen-500">
          <Formik
            initialValues={{
              receiverId: "",
              amount: "",
            }}
            validationSchema={TransactionSchema}
            onSubmit={(values) => {}}
          >
            {({ errors, touched }) => (
              <Form className="">
                <h1 className="font-bold text-center text-xl text-celery-600 pb-2">
                  Request Money
                </h1>
                <lable className="text-tuna-900 font-semibold">
                  Phone Number
                </lable>
                <br />
                <Field
                  name="receiverId"
                  type="text"
                  placeholder="Enter lenders number"
                  className="bg-transparent text-tuna-950 border-b-2 border-tuna-400 focus:border-tuna-950 outline-none text-xl p-1"
                />
                {errors.receiverId && touched.receiverId ? (
                  <div className="text-satinLinen-700">
                    {errors.receiverId}
                  </div>
                ) : null}
                <br />
                <br />

                <lable className="text-tuna-900 font-semibold">Amount</lable>
                <br />
                <Field
                  name="amount"
                  type="text"
                  placeholder="Enter request amount"
                  className="bg-transparent text-tuna-950 border-b-2 border-tuna-400 focus:border-tuna-950 outline-none text-xl p-1"
                />
                {errors.amount && touched.amount ? (
                  <div className="text-satinLinen-700">{errors.amount}</div>
                ) : null}

                <br />
                <br />

                <button
                  type="submit"
                  className="w-full py-2  bg-celery-500 text-tuna-800 font-semibold rounded-md opacity-80 hover:opacity-100"
                  onClick={() => socket.emit("request", "hi")}
                >
                  Request
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>

      <div className="flex justify-between p-4 rounded-xl bg-transparent bg-clip-padding backdrop-filter bg-opacity-10 shadow-2xl hover:border border-satinLinen-500">
        <div>
          <IMAGE
            src="/DigitalPay-logo.png"
            width={50}
            height={50}
            alt="DigitalPay"
            className=""
          />
          <h1 className="font-bold">Digital Pay</h1>
        </div>

        <div>
          <h1>Contact Us</h1>
          <p>
            <PermPhoneMsgRoundedIcon /> +977 9810101010
          </p>
          <p>
            <EmailRoundedIcon /> digitalPay123@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default midHome;
