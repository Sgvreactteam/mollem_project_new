import React from "react";
import "./Header.css";
import { useState, useEffect } from "react";
import { IoIosNotifications } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";

import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { FaUserFriends } from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";
function Header() {
  const location = useLocation();
  const admin =
    location.pathname == "/useradmin" || location.pathname == "/topiwala"
      ? false
      : true;

  const [isDrawerOpen, setDrawerOpen] = useState(admin);

  const handleHamburgerClick = () => {
    setDrawerOpen(!isDrawerOpen);
  };
  const { language, toggleLanguage } = useLanguage();
  const languageChangeHandler = () => {
    toggleLanguage();
  }
  return location.pathname == "/" || location.pathname == "/login" ? (
    <></>
  ) : (
    <div>
      <div className="w-full bg-primary h-14 flex justify-between fixed px-8 py-2  z-[3000]">
        <div className="flex flex-row gap-3 items-center justify-center">
          <button className="w-8 h-8">
            <img src="Images/navbar/Avatar.png" />
          </button>
          <button className="w-8 h-8 bg-[#ffffff] bg-opacity-20 drop-shadow-lg rounded-full flex justify-center items-center">
            <IoIosNotifications color="white" />
          </button>
        </div>

        <div className="flex justify-center items-center gap-6">
          <button onClick={languageChangeHandler}>Language change</button>
          <div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <CiSearch color="white" size={20} />
              </div>
              <input
                type="search"
                className="block w-full p-1 pl-10 border-0 rounded-xl ring-0 outline-none bg-[#f9fafb] bg-opacity-20 text-white placeholder-white focus:placeholder-opacity-75"
                placeholder="Search"
                required
              />
            </div>
          </div>

          <div>
            <RxHamburgerMenu
              color="white"
              size={30}
              onClick={handleHamburgerClick}
            />
          </div>

          <div className="pl-8">
            <img
              src="Images/navbar/Logo.png"
              alt="logo"
              className=""
            />
          </div>
        </div>
      </div>

      <SwipeableDrawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setDrawerOpen(false)}
        onOpen={() => setDrawerOpen(true)}
      >
        <div className="w-[300px] pt-16 px-4">
          <NestedDrawer />
        </div>
      </SwipeableDrawer>
    </div>
  );
}

export default Header;

const NestedDrawer = () => {
  const [isProjectOpen, setProjectOpen] = useState(false);
  const [isHubOpen, setHubOpen] = useState(false);

  const toggleProject = () => {
    setProjectOpen(!isProjectOpen);
    setHubOpen(false);
  };
  const { language, toggleLanguage } = useLanguage();
  const toggleHub = () => {
    setHubOpen(!isHubOpen);
    setProjectOpen(false);
  };
  return (
    <div>
      <div>
        <ListItemButton onClick={toggleProject}>
          <div className="flex items-center justify-between w-full">
            {isProjectOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}

            <div className="flex gap-2">
              {language==='english'? (<ListItemText primary="Project Phases" />):(<ListItemText primary="مراحل المشروع" />)}
              
              <ListItemIcon className="flex items-center justify-center">
                <img
                  src="Images/sidebar/Vector.png"
                  alt="project-image"
                  className="w-4 h-4"
                />
              </ListItemIcon>
            </div>
          </div>
        </ListItemButton>

        {isProjectOpen && (
          <div className="">
            <Link to="/preparation">
              <ListItemButton className=" !text-end !pr-10">
                {language==='english'?(<ListItemText primary="Preparation phase" />): (<ListItemText primary="مرحلة التحضير" />)}
              </ListItemButton>
            </Link>

            <Link to="/initiating">
              <ListItemButton className=" !text-end !pr-10">
                {language==='english'?(<ListItemText primary="Initiating phase" />): (<ListItemText primary="مرحلة البدء" />)}
              </ListItemButton>
            </Link>
            <Link to="/execution">
              <ListItemButton className=" !text-end !pr-10">
                {language==='english'? (<ListItemText primary="Execution phase" />):(<ListItemText primary="مرحلة التنفيذ" />)}
              </ListItemButton>
            </Link>
            <Link to="/close">
              <ListItemButton className=" !text-end !pr-10">
                {language==='english'? (<ListItemText primary="Close out phase" />):(<ListItemText primary="مرحلة الإغلاق" />)}
              </ListItemButton>
            </Link>
          </div>
        )}
      </div>

      <div>
        <ListItemButton onClick={toggleHub}>
          <div className="flex items-center justify-between w-full">
            {isHubOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}

            <div className="flex gap-3">
              {language==='english'? (<ListItemText primary="Knowledge Hub" />):(<ListItemText primary="مركز المعرفة" />)}

              <ListItemIcon className="flex items-center justify-center">
                <img
                  src="Images/sidebar/Vector.png"
                  alt="project-image"
                  className="w-4 h-4"
                />
              </ListItemIcon>
            </div>
          </div>
        </ListItemButton>

        {isHubOpen && (
          <div className="">
            <Link to="/reg">
              <ListItemButton className=" !text-end !pr-10">
                {language==='english'? (<ListItemText primary="Regulations" />):(<ListItemText primary="أنظمة" />)}
              </ListItemButton>
            </Link>

            <Link to="/template">
              <ListItemButton className=" !text-end !pr-10">
                {language==='english'? (<ListItemText primary="Templates" />):(<ListItemText primary="قوالب" />)}
              </ListItemButton>
            </Link>

            <Link to="/ep">
              <ListItemButton className=" !text-end !pr-10">
                {language==='english'? (<ListItemText primary="Engineering Pratices" />):(<ListItemText primary="الممارسات الهندسية" />)}
              </ListItemButton>
            </Link>
          </div>
        )}
      </div>

      <ListItemButton>
        <div className="flex items-center justify-end w-full">
          <Link to="/database">
            <div className="flex gap-3">
              {language==='english'? (<ListItemText primary='Database' />): (<ListItemText primary='قاعدة البيانات' />)}
              
               {/* <ListItemText primary='Database' /> */}
               

              <ListItemIcon className="flex items-center justify-center">
                <img
                  src="Images/sidebar/database.svg"
                  alt="project-image"
                  className="w-4 h-4"
                />
              </ListItemIcon>
            </div>
          </Link>
        </div>
      </ListItemButton>

      <ListItemButton>
        <Link to={`/projectManagement`}>
        <div className="flex items-center justify-end w-full">
          <div className="flex gap-3">
            {language==='english'? (<ListItemText primary="Project Management" />):(<ListItemText primary="ادارة مشروع" />)}

            <ListItemIcon className="flex items-center justify-center">
              <img
                src="Images/sidebar/project.svg"
                alt="project-image"
                className="w-4 h-4"
              />
            </ListItemIcon>
          </div>
        </div>
        </Link>
      </ListItemButton>

      <ListItemButton>
        <div className="flex items-center justify-end w-full">
          <div className="flex gap-3">
            {language==='english'? (<ListItemText primary="Calculator" />):(<ListItemText primary="آلة حاسبة" />)}

            <ListItemIcon className="flex items-center justify-center">
              <img
                src="Images/sidebar/calculator.svg"
                alt="project-image"
                className="w-4 h-4"
              />
            </ListItemIcon>
          </div>
        </div>
      </ListItemButton>

      <ListItemButton>
        <div className="flex items-center justify-end w-full">
          <div className="flex gap-3">
            {language==='english'? (<ListItemText primary="Report" />):(<ListItemText primary="تقرير" />)}

            <ListItemIcon className="flex items-center justify-center">
              <img
                src="Images/sidebar/report.svg"
                alt="project-image"
                className="w-4 h-4"
              />
            </ListItemIcon>
          </div>
        </div>
      </ListItemButton>

      <ListItemButton>
        <div className="flex items-center justify-end w-full">
          <div className="flex gap-3">
            {language==='english'? (<ListItemText primary="Technical Support" />):(<ListItemText primary="دعم فني" />)}

            <ListItemIcon className="flex items-center justify-center">
              <img
                src="Images/sidebar/support.svg"
                alt="project-image"
                className="w-4 h-4"
              />
            </ListItemIcon>
          </div>
        </div>
      </ListItemButton>
      <ListItemButton>
        <div className="flex items-center justify-end w-full">
          <Link to="/topiwala">
            <div className="flex gap-3">
              <ListItemText primary="Topiwala" />

              <ListItemIcon className="flex items-center justify-center">
                <img
                  src="Images/sidebar/database.svg"
                  alt="project-image"
                  className="w-4 h-4"
                />
              </ListItemIcon>
            </div>
          </Link>
        </div>
      </ListItemButton>
    </div>
  );
};
