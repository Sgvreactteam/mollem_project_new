import React, { useState } from "react";
import "./prep.css";
import BillofQuantities from "./BillofQuantities";
import Evaluation from "./Evaluation";
import CashFlow from "./CashFlow";
import TimeFrame from "./TimeFrame";
import { useLanguage } from "../../context/LanguageContext";
function PreparationPhase() {
  const { language, toggleLanguage } = useLanguage();
  const [bill, setBill] = useState(false);
  const [evaluation, setEvaluation] = useState(true);
  const [timeframe, setTimeframe] = useState(false);
  const [cash, setCash] = useState(false);

  const showBillHandler = () => {
    setBill(true);
    setCash(false);
    setEvaluation(false);
    setTimeframe(false);
  };

  const showEvaluationHandler = () => {
    setEvaluation(true);
    setBill(false);
    setCash(false);
    setTimeframe(false);
  };
  const showTimeHandler = () => {
    setTimeframe(true);
    setEvaluation(false);
    setBill(false);
    setCash(false);
  };
  const showCashHandler = () => {
    setCash(true);
    setTimeframe(false);
    setEvaluation(false);
    setBill(false);
  };

  return (
    <div className="bg-[#F2F6FE] px-8 w-full flex flex-col h-full pt-20">
      <div className="  relative ">
        <div className="max-w-4xl mx-auto text-[40px] font-medium text-center">
          Project Phases
        </div>
        <div className="absolute bottom-0 inset-x-1/3 w-1/4 h-1 bg-gradient-to-r from-white via-green-600 to-transparent"></div>
      </div>

      <div className="flex flex-col">
        <p className="text-xl font-medium mt-4">
          {language === "english" ? "Activities, RPFs .." : "الأنشطة، RPF"}
        </p>
        <div className="flex flex-row gap-3 mt-6">
          <button
            onClick={showBillHandler}
            className="bg-primary py-2 px-6 rounded-3xl font-medium   text-white focus:bg-white focus:text-primary"
          >
            {language === "english" ? "Bill of Quantities" : "فاتورة الكميات"}
          </button>
          <button
            onClick={showEvaluationHandler}
            className="bg-primary py-2 px-6 rounded-3xl font-medium   text-white focus:bg-white focus:text-primary"
          >
            {language === "english" ? "Evaluation Criteria" : "معايير التقييم"}
          </button>
          <button
            onClick={showTimeHandler}
            className="bg-primary py-2 px-6 rounded-3xl font-medium   text-white focus:bg-white focus:text-primary"
          >
            {language === "english" ? "Time Frame" : "إطار زمني"}
          </button>
          <button
            onClick={showCashHandler}
            className="bg-primary py-2 px-6 rounded-3xl font-medium   text-white focus:bg-white focus:text-primary"
          >
            {language === "english" ? "Cash - Flow" : "تدفق مالي"}
          </button>
        </div>
        {bill && <BillofQuantities />}
        {evaluation && <Evaluation />}
        {cash && <CashFlow />}
        {timeframe && <TimeFrame />}
      </div>
    </div>
  );
}

export default PreparationPhase;
