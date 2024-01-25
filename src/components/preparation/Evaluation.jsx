import React, { useState } from "react";
import "./evaluation.css";
import { FormControl, MenuItem, Select } from "@mui/material";
import { useLanguage } from "../../context/LanguageContext";
function Evaluation() {
  const [mainCriteria, setMainCriteria] = useState("");
  const onCriteriaChange = (event) => {
    // console.log(event.target)
    setMainCriteria(event.target.value);
  };
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="bg-[#F2F6FE]  w-full flex flex-col  ">
      <p className="text-xl font-normal mt-8  text-[#808080]">
        {language === "english"
          ? "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
          : "لوريم إيبسوم هو ببساطة نص وهمي من صناعة الطباعة والتنضيد. لقد كان لوريم إيبسوم هو النص الوهمي القياسي في الصناعة منذ القرن السادس عشر، عندما أخذت طابعة غير معروفة لوح الكتابة وخلطته لصنع نموذج كتاب. لقد صمدت ليس فقط لخمسة قرون، بل قفزت أيضًا إلى التنضيد الإلكتروني، وبقيت دون تغيير بشكل أساسي."}
      </p>
      <div className="flex flex-col items-center mt-8">
        <div className="flex flex-row justify-center">
          <div className="flex flex-col bg-white box mr-8">
            <p className="text-xl font-medium mt-4 mx-4">
              {language === "english" ? "Weight" : "وزن"}
            </p>
            <input
              type="number"
              className="outline-none pl-4 input m-4  h-[35px]"
            />
          </div>
          <div className="flex flex-col bg-white box ml-8 w-[250px]">
            <p className="text-xl font-medium mt-4 mx-4">
              {language === "english" ? "Main Criteria" : "المعايير الرئيسية"}
            </p>
            <FormControl className="app-dropdown">
              <Select
                className="m-4 bg-white"
                variant="outlined"
                onChange={onCriteriaChange}
                value={mainCriteria}
                sx={{
                  borderRadius: "6px",
                  height: "35px",
                }}
              >
                <MenuItem disabled value={mainCriteria}>
                  {language === "english"
                    ? "Main Criteria"
                    : "المعايير الرئيسية"}
                </MenuItem>
                <MenuItem value="criteria1" onClick={onCriteriaChange}>
                  {language === "english" ? "Criteria 1" : "معايير 1"}
                </MenuItem>
                <MenuItem value="criteria2">
                  {language === "english" ? "Criteria 1" : "معايير 2"}
                </MenuItem>
                <MenuItem value="criteria3">
                  {language === "english" ? "Criteria 1" : "معايير 3"}
                </MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="flex flex-row gap-3 mt-16">
          <button className="bg-primary py-2 px-6 rounded-3xl font-medium    text-white">
            {language === "english" ? "Print" : "مطبعة"}
          </button>
          <button className="bg-primary py-2 px-6 rounded-3xl font-medium    text-white">
            {language === "english" ? "Export" : "يصدّر"}
          </button>
          <button className="bg-primary py-2 px-6 rounded-3xl font-medium    text-white">
            {language === "english" ? "Save Later" : "حفظ في وقت لاحق"}
          </button>
          <button className="bg-primary py-2 px-6 rounded-3xl font-medium    text-white">
            {language === "english" ? "Verify" : "يؤكد"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Evaluation;
