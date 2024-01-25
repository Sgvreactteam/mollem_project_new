import React from "react";
// import form from "./Group.jpg";
import { useLanguage } from "../../context/LanguageContext";
function Templates() {
  const { language, toggleLanguage } = useLanguage();
  return (
    <div className="bg-[#F2F6FE] px-8 w-full h-screen pt-20">
      <div className="  relative ">
        <div className="max-w-4xl mx-auto text-[40px] font-medium text-center">
          Project management best practices
        </div>
        <div className="absolute bottom-0 inset-x-1/3 w-1/4 h-1 bg-gradient-to-r from-white via-green-600 to-transparent"></div>
      </div>

      <div className="flex flex-col  mt-12">
        <div className="flex gap-3">
          <button className="bg-primary py-2 px-6 rounded-3xl font-medium   text-white focus:bg-[#F0F2FC] focus:text-primary">
            {language === "english" ? "Periodic Report" : "التقرير الدوري"}
          </button>
          <button className=" bg-primary py-2 px-6 rounded-3xl font-medium   text-white focus:bg-[#F0F2FC] focus:text-primary">
            {language === "english"
              ? "Project Management Plan"
              : "خطة إدارة المشروع"}{" "}
          </button>
        </div>
        <div className="grid grid-cols-5 gap-3 mt-4">
          <div className="flex flex-col  mt-4 ">
            <h2 className="font-semibold text-sm">
              {language === "english"
                ? "Creating Risk Log"
                : " إنشاء سجل المخاطر"}
            </h2>
            <div className=" bg-white   p-4 mt-1 rounded-2xl box-shadow">
              <p>
                {language === "english"
                  ? "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                  : "لوريم إسبوم هو بعض النصوص العشوائية لصناعة الطباعة والتنضيد."}
              </p>
            </div>
          </div>
          <div className="flex flex-col  mt-4">
            <h2 className="font-semibold">
              {language === "english"
                ? "Creating Stakeholder log"
                : " إنشاء سجل أصحاب المصلحة"}
            </h2>
            <div className=" bg-white   p-4 mt-1 rounded-2xl box-shadow">
              <p>
                {language === "english"
                  ? "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                  : "لوريم إسبوم هو بعض النصوص العشوائية لصناعة الطباعة والتنضيد."}
              </p>
            </div>
          </div>
          <div className="flex flex-col  mt-4">
            <h2 className="font-semibold">
              {language === "english"
                ? "Creating Disputes Log"
                : "إنشاء سجل النزاعات"}
            </h2>
            <div className=" bg-white   p-4 mt-1 rounded-2xl box-shadow">
              <p>
                {language === "english"
                  ? "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                  : "لوريم إسبوم هو بعض النصوص العشوائية لصناعة الطباعة والتنضيد."}
              </p>
            </div>
          </div>
          <div className="flex flex-col  mt-4">
            <h2 className="font-semibold">
              {language === "english" ? "Periodic Reports" : "  التقرير الدوري"}
            </h2>
            <div className=" bg-white   p-4 mt-1 rounded-2xl box-shadow">
              <p>
                {language === "english"
                  ? "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                  : "لوريم إسبوم هو بعض النصوص العشوائية لصناعة الطباعة والتنضيد."}
              </p>
            </div>
          </div>

          <div className="flex flex-col  mt-4 box-shadow bg-white px-2 rounded-2xl">
            <p className="font-semibold text-xl ">
              {language === "english"
                ? "Templates and Forms"
                : "القوالب والنماذج"}
            </p>
            <div className=" relative bg-transparent mt-4 flex justify-center items-center">
              <img
                src="../../../public/Images/img/Group.jpg"
                className=""
                alt=""
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className=" absolute bg-transparent -top-3 "
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <g clip-path="url(#clip0_343_864)">
                  <path
                    d="M15 0C23.2713 0 30 6.72867 30 15C30 23.2713 23.2713 30 15 30C6.72867 30 0 23.2713 0 15C0 6.72867 6.72867 0 15 0Z"
                    fill="#F15642"
                  />
                  <path
                    d="M8.43746 16.2498H13.75V21.5624C13.75 22.2525 14.3099 22.8123 15 22.8123C15.69 22.8123 16.2499 22.2525 16.2499 21.5624V16.2498H21.5625C22.2525 16.2498 22.8124 15.69 22.8124 14.9999C22.8124 14.3099 22.2525 13.75 21.5625 13.75H16.2499V8.43742C16.2499 7.74736 15.69 7.1875 15 7.1875C14.3099 7.1875 13.75 7.74736 13.75 8.43742V13.75H8.43746C7.7474 13.75 7.18753 14.3099 7.18753 14.9999C7.18753 15.69 7.7474 16.2498 8.43746 16.2498Z"
                    fill="#FAFAFA"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_343_864">
                    <rect
                      width="30"
                      height="30"
                      fill="white"
                      transform="matrix(-1 0 0 1 30 0)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-3 flex-wrap mt-12">
          <button className="bg-primary py-2 px-6 rounded-3xl font-medium    text-white">
            {language === "english" ? "Withdrawal Procedures" : "إجراءات السحب"}
          </button>
          <button className="bg-primary py-2 px-6 rounded-3xl font-medium    text-white">
            {language === "english"
              ? "Suspension/Resumption Procedures"
              : "إجراءات التعليق/الاستئناف"}
          </button>
          <button className="bg-primary py-2 px-6 rounded-3xl font-medium    text-white">
            {language === "english"
              ? " Change Request Procedures"
              : "تغيير إجراءات الطلب"}
          </button>
          <button className="bg-primary py-2 px-6 rounded-3xl font-medium    text-white">
            {language === "english"
              ? "Extension Procedures"
              : "إجراءات التمديد"}
          </button>
          <button className="bg-primary py-2 px-6 rounded-3xl font-medium    text-white">
            {language === "english"
              ? "Violation Procedures"
              : "إجراءات المخالفة"}
          </button>
          <button className="bg-primary py-2 px-6 rounded-3xl font-medium    text-white">
            {" "}
            {language === "english" ? "Warning Procedures" : "إجراءات التحذير"}
          </button>
          <button className="bg-primary py-2 px-6 rounded-3xl font-medium    text-white">
            {" "}
            {language === "english"
              ? "Paying Invoices and Acceptance of Outputs"
              : "دفع الفواتير وقبول المخرجات"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Templates;
