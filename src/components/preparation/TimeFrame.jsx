import React from "react";
import "./evaluation.css";
import { useLanguage } from "../../context/LanguageContext";
function TimeFrame() {
  const { language, toggleLanguage } = useLanguage();
  return (
    <div className="items-center flex flex-col">
      <p className="text-xl font-normal mt-8  text-[#808080]">
        {language === "english"
          ? "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
          : "لوريم إيبسوم هو ببساطة نص وهمي من صناعة الطباعة والتنضيد. لقد كان لوريم إيبسوم هو النص الوهمي القياسي في الصناعة منذ القرن السادس عشر، عندما أخذت طابعة غير معروفة لوح الكتابة وخلطته لصنع نموذج كتاب. لقد صمدت ليس فقط لخمسة قرون، بل قفزت أيضًا إلى التنضيد الإلكتروني، وبقيت دون تغيير بشكل أساسي."}
      </p>
      <div className="flex flex-col  my-8 p-4 rounded-3xl bg-white">
        <p className="text-xl font-medium ">
          ETA{" "}
          {language === "english"
            ? "(Estimated Time of Arrival)"
            : "(الوقت المقدر للوصول)"}
        </p>
        <a
          href="https://www.oracle.com/in/construction-engineering/primavera-p6/"
          className="colorText font-medium mt-2"
        >
          https://www.oracle.com/in/construction-engineering/primavera-p6/
        </a>
        <div className="flex w-auto">
          <button className="bg-primary py-2 px-6 rounded-3xl font-medium    text-white mt-4">
            View More
          </button>
        </div>
      </div>
    </div>
  );
}

export default TimeFrame;
