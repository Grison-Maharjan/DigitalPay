import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { setUserDetails} from "../../redux/reducerSlices/userSlice";
import Image from "next/image";

const SignupSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required!!!"),
  email: Yup.string()
    .min(10, "Too Short!")
    .max(50, "Too Long!")
    .required("Required!!!"),
  phoneNumber: Yup.string()
    .min(10, "Too Short!")
    .max(15, "Too Long!")
    .required("Required!!!"),
  gender: Yup.string().required("Required!!!"),
  password: Yup.string()
    .min(7, "Too Short!")
    .max(20, "Too Long!")
    .required("Required!!!"),
});

const Register = () => {
  // const dispatch = useDispatch();
  // const router = useRouter()
  // const {isLoggedIn} = useSelector((state)=> state.user)

  const registerNewUser = async (values) => {
    try {
      const response = await fetch("http://localhost:8080/registers", {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-Type": "application/json" },
      });

      const result = await response.json();
      // dispatch(setUserDetails(result));
      // if(isLoggedIn) {
      //   router.push('./home')
      // }
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <div
      className="flex flex-col justify-center content-center bg-cover bg-center h-screen"
      style={{ backgroundImage: `url('/SignupBg.png')` }}
    >
      <div className="flex h-[80vh] m-10 mb-4 bg-center rounded-xl bg-tuna-900 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-satinLinen-500">
        <div className="text-center text-tuna-900 w-1/2 border-r-2 border-tuna-200">
          <h3 className="text-4xl my-6">Welcome to DigitalPay!</h3>
          <p className="text-4xl m-4">
            Hey there! Ready to join our online cash app? Sign up now and start
            using it!
          </p>
          <div className="flex justify-center my-2">
            <Image
              src="/SignUpPics.gif"
              width={320}
              height={320}
              alt="LoginPic"
            />
          </div>
        </div>

        <div className="flex justify-center w-1/2 overflow-y-scroll scrollbar-thin scrollbar-thumb scrollbar-track">
          <Formik
            initialValues={{
              fullName: "",
              email: "",
              phoneNumber: "",
              gender: "",
              password: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              registerNewUser(values);
            }}
          >
            {({ errors, touched }) => (
              <Form className="m-10">
                <h1 className="text-center text-3xl font-semibold text-tuna-950">
                  Sign Up
                </h1>
                <br />

                <lable className="text-tuna-900 font-semibold">Full Name</lable>
                <br />
                <Field
                  name="fullName"
                  type="text"
                  className="bg-transparent text-tuna-950 border-b-2 border-tuna-400 focus:border-tuna-950 outline-none text-base p-1"
                />
                {errors.fullName && touched.fullName ? (
                  <div className="text-satinLinen-400">{errors.fullName}</div>
                ) : null}
                <br />
                <br />

                <lable className="text-tuna-900 font-semibold">Email</lable>
                <br />
                <Field
                  name="email"
                  type="email"
                  className="bg-transparent text-tuna-950 border-b-2 border-tuna-400 focus:border-tuna-950 outline-none text-base p-1"
                />
                {errors.email && touched.email ? (
                  <div className="text-satinLinen-400">{errors.email}</div>
                ) : null}
                <br />
                <br />

                <lable className="text-tuna-900 font-semibold">
                  Phone Number
                </lable>
                <br />
                <Field
                  name="phoneNumber"
                  type="text"
                  className="bg-transparent text-tuna-950 border-b-2 border-tuna-400 focus:border-tuna-950 outline-none text-base p-1"
                />
                {errors.phoneNumber && touched.phoneNumber ? (
                  <div className="text-satinLinen-400">
                    {errors.phoneNumber}
                  </div>
                ) : null}
                <br />
                <br />

                <lable className="text-tuna-900 font-semibold">Gender</lable>
                <br />
                <div className="flex justify-between">
                  <div>
                    <Field name="gender" type="radio" value="male" />
                    Male
                  </div>
                  <div>
                    <Field name="gender" type="radio" value="female" />
                    Female
                  </div>
                  <div>
                    <Field name="gender" type="radio" value="others" />
                    Others
                  </div>
                </div>
                {errors.gender && touched.gender ? (
                  <div>{errors.gender}</div>
                ) : null}
                <br />

                <lable className="text-tuna-900 font-semibold">Password</lable>
                <br />
                <Field
                  name="password"
                  type="password"
                  className="bg-transparent text-tuna-950 border-b-2 border-tuna-400 focus:border-tuna-950 outline-none text-base p-1"
                />
                {errors.password && touched.password ? (
                  <div className="text-satinLinen-400">{errors.password}</div>
                ) : null}
                <br />
                <br />

                <button
                  type="submit"
                  className="w-full mb-2 py-2 bg-celery-500 text-tuna-800 font-semibold rounded-md opacity-80 hover:opacity-100"
                >
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <h1 className="flex justify-center text-tuna-950 font-semibold mb-4">
        Already have an account?
        <Link
          href="/login"
          className="mx-2 rounded bg-tuna-900 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-satinLinen-500"
        >
          {" "}
          Log In
        </Link>
      </h1>
    </div>
  );
};

export default Register;
