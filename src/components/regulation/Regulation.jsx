import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
// import Typography from "@mui/material/Typography";
// import pdf_image from "../public/pdf.svg";
// import logo_png from "../public/logo-2222_1.png";

import pdf from "/Images/pdf.svg";
import pdflogo from "/Images/pdf-logo.png";

import { TbDownload } from "react-icons/tb";
import { Link } from "react-router-dom";
// import pdf1 from "../src/EngineeringPractices/1.pdf";

export default function Regulation() {
  let cardData = [
    {
      title: "PDF title here",
      date: "12/01/2000",
      //   source: pdf1,
    },
    {
      title: "PDF title here",
      date: "12/02/2000",
    },
    {
      title: "PDF title here",
      date: "12/05/2000",
    },
    {
      title: "PDF title here",
      date: "12/07/2000",
    },
    {
      title: "PDF title here",
      date: "12/08/2000",
    },
    {
      title: "PDF title here",
      date: "12/08/2000",
    },
  ];
  return (
    <>
      <div className="w-full px-8">
        <div className="  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-10  pt-20">
          {cardData.map((card, key) => (
            <div className="" key={key}>
              <Card sx={{}}>
                <div className="mx-5 mt-5">
                  <Link
                    target="_blank"
                    className=" bg-[#F2F6FA] relative flex justify-center items-center lg:py-10 py-5"
                  >
                    <div>
                      <img className="" src={pdf} alt="pdf-image" />
                    </div>
                    <div className=" absolute top-0 left-0">
                      <div>
                        <img src={pdflogo} alt="image" />
                      </div>
                    </div>
                  </Link>
                  <CardContent>
                    <div className="">
                      <div className=" flex justify-between items-center">
                        <div className="font-semibold text-lg">
                          {card.title}
                        </div>

                        <div className="font-bold text-[#808080]">
                          {card.date}
                        </div>
                      </div>
                      <div className=" flex justify-between items-center pt-2">
                        <p className="font-bold text-[#808080]">2.3 MB</p>
                        <div className="flex flex-row gap-2 text-xl text-[#0C0830] items-center font-bold cursor-pointer">
                          <p>Download</p>
                          <TbDownload />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
