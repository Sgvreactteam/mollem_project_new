import React from "react";
import "./login.css";
// import Swiper core and required modules
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { useLanguage } from "../../context/LanguageContext";
function Login() {
  const { language, toggleLanguage } = useLanguage();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      keepLogin: true,
    },

    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .required("Password is required")
        .min(4, "Password must be at least 8 characters long"),
    }),

    onSubmit: (values) => {
      console.log(values);
      // handleLogin(values);
    },
  });
  const languageChangeHandler = () => {
    toggleLanguage()
  }
  const imageUrl = "/Images/login.png";
  const imgUrl2 = "/Images/bg-bottom.png";
  return (
    <div
      className="w-screen h-screen grid relative grid-cols-2 px-8  bg-bottom bg-no-repeat"
      style={{ backgroundImage: `url(${imgUrl2})` }}
    >
      <div className="grid items-center justify-center  ">
        <button className="absolute top-16 left-72 bg-primary text-white px-4 py-2 rounded-xl text-lg" onClick={languageChangeHandler}>Change Language</button>
        <div className="px-28 my-5 ">
          <img
            src="../../../public/Images/loginLogo.svg"
            alt="logo"
            className=""
            />

            
          <h1 className="text-xl font-medium text-[#0C0830] py-1 mt-2">
            {language==='english'? 'Login':'تسجيل الدخول'}
          </h1>
          <p className="text-lg font-normal text-[#808080]  leading-[1.5rem] ">
            {language==='english'? 'Log in with your data that you entered during your registration.':'قم بتسجيل الدخول ببياناتك التي قمت بإدخالها أثناء تسجيلك.'}
          </p>

          <form
            className="flex flex-col gap-2 mt-3"
            onSubmit={formik.handleSubmit}
          >
            <div className="w-full flex flex-col">
              <label className="font-medium text-[#0C0830] "> {language==='english'? 'Your Email':'بريدك الالكتروني'}</label>
              <input
                className="bg-[#F9FAFB] border-2 p-1 outline-0 rounded-md text-base text-[#808080] px-2"
                placeholder="name@gmail.com"
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-start text-sm text-red-600 ">
                  {formik.errors.email}
                </div>
              ) : null}
            </div>{" "}
            <div className="w-full flex flex-col">
              <label className="font-medium text-[#0C0830] ">{language==='english'? 'Password':'كلمة المرور'}</label>
              <input
                className="bg-[#F9FAFB] border-2 p-1 outline-0 rounded-md text-base text-[#808080] px-2"
                placeholder="password"
                type="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              {formik.touched.password && formik.errors.password ? (
                <div className="text-start text-sm text-red-600 ">
                  {formik.errors.password}
                </div>
              ) : null}
            </div>
            <div>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className=" "
                  style={{ accentColor: "#018B00" }}
                />
                <span className="ml-2 font-normal text-[#808080]">
                  {language==='english'? 'Keep me logged in':'أبق تسجيل دخولي'}
                </span>
              </label>
            </div>
            <button
              type="submit"
              className="  rounded-md bg-primary py-3 text-white flex items-center justify-center"
            >
              {" "}
              {language==='english'? 'Login':'تسجيل الدخول'}
              <span className="ml-1">
                <FaArrowRight />
              </span>
            </button>
            <div className=" text-center ">
              <h4 className="mt-2">
                <span className="font-normal text-[#808080]">
                  {language==='english'? "Don't have an account?":"ليس لديك حساب؟"}
                </span>
                <Link to="/">
                  <span className="font-semibold text-primary">{language==='english'? 'Sign Up': 'اشتراك'} </span>
                </Link>
              </h4>
            </div>
            <div className="flex justify-center text-primary">
              <Link to="/useradmin">
                <h4 className="font-semibold">{language==='english'? 'Forgot Password ?':'هل نسيت كلمة السر ؟'}</h4>
              </Link>
            </div>
          </form>
        </div>
      </div>
      <div
        className=" bg-center bg-auto  bg-no-repeat  relative "
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute bottom-0 left-1/3 max-w-44">
          <Swiper
            // install Swiper modules
            modules={[Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <div className="mb-5 text-[#BFC4DB]">
                {language==='english'? 'One Stop Solution for all':'حل وقفة واحدة للجميع'}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mb-5 text-[#BFC4DB]">
              {language==='english'? 'One Stop Solution for all':'حل وقفة واحدة للجميع'}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mb-5 text-[#BFC4DB]">
              {language==='english'? 'One Stop Solution for all':'حل وقفة واحدة للجميع'}
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Login;
