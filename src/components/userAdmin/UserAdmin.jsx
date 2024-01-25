import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
function UserAdmin() {
  const { language, toggleLanguage } = useLanguage();
  return (
    <div className="bg-[#F2F6FE] px-8 w-full h-screen pt-20">
      <div className="  relative ">
        <div className="max-w-4xl mx-auto text-[40px] font-medium">
        {language==='english'? 'Managing all projects tasks from a single hub': 'إدارة جميع مهام المشاريع من مركز واحد'}
        </div>
        <div className="absolute bottom-0 inset-x-1/3 w-1/4 h-1 bg-gradient-to-r from-white via-green-600 to-transparent"></div>
      </div>
      <div className="flex sm:flex-row flex-col gap-4 md:gap-4 h-[calc(100%-6rem)] justify-center items-center">
        <Link>
          <div className="max-w-sm mx-auto bg-white rounded-md overflow-hidden shadow-md flex flex-col justify-center items-center">
            <img
              className=" object-cover h-20 w-20"
              src="../../../public/Images/userAdmin/open-book.svg"
              alt="image"
            />
            <div className="p-2 text-center">
              <h5 className="mb-2 text-base font-bold text-[#018B00]">
              {language==='english'? 'Knowledge Hub' : 'مركز المعرفة'}
              </h5>
              <p className=" font-medium ">
              {language==='english'? 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' : 'لوريم إسبوم هو بعض النصوص العشوائية لصناعة الطباعة والتنضيد.'}

              </p>
            </div>
          </div>
        </Link>
        <Link>
          <div className="max-w-sm mx-auto bg-white rounded-md overflow-hidden shadow-md flex flex-col justify-center items-center">
            <img
              className=" object-cover h-20 w-20"
              src="../../../public/Images/userAdmin/Frame (1).png"
              alt="image"
            />
            <div className="p-2 text-center">
              <h5 className="mb-2 text-base font-bold text-[#018B00]">
              {language==='english'? 'Project Management': 'ادارة مشروع'}
              </h5>
              <p className=" font-medium ">
              {language==='english'? 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' : 'لوريم إسبوم هو بعض النصوص العشوائية لصناعة الطباعة والتنضيد.'}

              </p>
            </div>
          </div>
        </Link>
        <Link to={`/database`}>
          <div className="max-w-sm mx-auto bg-white rounded-md overflow-hidden shadow-md flex flex-col justify-center items-center">
            <img
              className=" object-cover h-20 w-20"
              src="../../../public/Images/userAdmin/database.png"
              alt="image"
            />
            <div className="p-2 text-center">
              <h5 className="mb-2 text-base font-bold text-[#018B00]">
              {language==='english'? 'Database' : 'قاعدة البيانات'}
              </h5>
              <p className=" font-medium ">
              {language==='english'? 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' : 'لوريم إسبوم هو بعض النصوص العشوائية لصناعة الطباعة والتنضيد.'}

              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default UserAdmin;
