import React from "react";
import "./sign.css";
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
      name: "",
      password: "",
    },

    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),

      name: Yup.string().required("Name  is required"),
      password: Yup.string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters long"),
    }),

    onSubmit: (values) => {
      console.log(values);
    },
  });
  const languageChangeHandler = () => {
    toggleLanguage()
  }
  const imageUrl = "/Images/login.png";
  const imgUrl2 = "/Images/bg-bottom.png";
  return (
    <div
      className="w-screen h-screen flex flex-row items-center  px-8  bg-bottom bg-no-repeat"
      style={{ backgroundImage: `url(${imgUrl2})` }}
    >

      <div className="grid items-center justify-center relative basis-1/2 h-full">
              <button className="absolute top-16 left-72 bg-primary text-white px-4 py-2 rounded-xl text-lg" onClick={languageChangeHandler}>Change Language</button>
        <div className="px-28 my-5">
          <img
            src="../../../public/Images/loginLogo.svg"
            alt="logo"
            className=""
          />

          <h1 className="text-xl font-medium text-[#0C0830] py-1 mt-2">
            {language==='english'? 'Sign Up':'اشتراك'}
          </h1>
          <p className="text-lg font-normal text-[#808080] leading-[1.5rem] ">
            {language==='english'? 'Give us some of your information to get access to Mollem.':'أعطنا بعض المعلومات الخاصة بك للوصول إلى Mollem.'}
          </p>

          <form
            className="flex flex-col gap-2 mt-3"
            onSubmit={formik.handleSubmit}
          >
            <div className="w-full flex flex-col">
              <label className="font-medium text-[#0C0830] ">{language==='english'? 'Name':'اسم'} </label>
              <input
                className="bg-[#F9FAFB] border-2 p-1 outline-0 rounded-md text-base text-[#808080] px-2"
                placeholder="name"
                type="text"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="text-start text-sm text-red-600 ">
                  {formik.errors.name}
                </div>
              ) : null}
            </div>
            <div className="w-full flex flex-col">
              <label className="font-medium text-[#0C0830] ">{language==='english'? 'Your Email':'بريدك الالكتروني'}</label>
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
              <label className="flex items-center justify-center">
                <input
                  type="checkbox"
                  className=" "
                  style={{ accentColor: "#018B00" }}
                />
                <span className="ml-2 font-normal text-[#808080]">
                  {language==='english'? 'By creating an account you agree to the':'من خلال إنشاء حساب فإنك توافق على'}{" "}
                  <span className="text-[#018B00]">{language==='english'?'terms of use':'شروط الاستخدام'}</span> {language==='english'? 'and our':'و لنا'}
                  <span className="text-[#018B00]">{language==='english'? 'privacy policy.': 'سياسة الخصوصية'}</span>
                </span>
              </label>
            </div>
            <button
              type="submit"
              className="  rounded-md bg-primary py-3 text-white flex items-center justify-center"
            >
              {" "}
              {language==='english'? 'Create account':'إنشاء حساب'}
              <span className="ml-1">
                <FaArrowRight />
              </span>
            </button>
            <div className=" text-center ">
              <h4 className="mt-2">
                <span className="font-normal text-[#808080]">
                  {language==='english'? 'Already have an account?':"هل لديك حساب"}
                </span>
                <Link to="/login">
                  <span className="font-semibold text-primary">{language==='english'? 'Login':'تسجيل الدخول'} </span>
                </Link>
              </h4>
            </div>
          </form>
        </div>
      </div>
      <div
        className=" h-full basis-1/2 relative "
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundPosition: "center",
          backgroundSize: "100%, 100%",
          backgroundRepeat: "no-repeat",
        }}
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
