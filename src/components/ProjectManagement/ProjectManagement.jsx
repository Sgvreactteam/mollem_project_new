import React from 'react'
import '../preparation/evaluation.css'
import img from './construction_image.jpeg'
import { WiTime4 } from "react-icons/wi";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { useLanguage } from '../../context/LanguageContext';
function ProjectManagement() {
    const { language, toggleLanguage } = useLanguage();
    const projects = [
        {
            id: 1,
            name: 'Project Name',
            progress: 25,
            img: img
        },
        {
            id: 1,
            name: 'Project Name',
            progress: 25,
            img: img
        },
        {
            id: 1,
            name: 'Project Name',
            progress: 25,
            img: img
        },
        {
            id: 1,
            name: 'Project Name',
            progress: 25,
            img: img
        },
        {
            id: 1,
            name: 'Project Name',
            progress: 25,
            img: img
        },
        {
            id: 1,
            name: 'Project Name',
            progress: 25,
            img: img
        },
    ]
    const projects_A = [
        {
            id: 1,
            name: 'اسم المشروع',
            progress: 25,
            img: img
        },
        {
            id: 1,
            name: 'اسم المشروع',
            progress: 25,
            img: img
        },
        {
            id: 1,
            name: 'اسم المشروع',
            progress: 25,
            img: img
        },
        {
            id: 1,
            name: 'اسم المشروع',
            progress: 25,
            img: img
        },
        {
            id: 1,
            name: 'اسم المشروع',
            progress: 25,
            img: img
        },
        {
            id: 1,
            name: 'اسم المشروع',
            progress: 25,
            img: img
        },
    ]
  return (
    <div className='flex flex-col w-[90vw] mx-auto pt-20 mb-8 background'>
        <div className="flex flex-row justify-between">
            <p className='text-3xl font-medium'>{language==='english' ?'All Projects': 'جميع المشاريع'}</p>
            <button className='buttonPrep cursor-pointer'>{language==='english'? '+ Create new Project' : '+ إنشاء مشروع جديد'}</button>
        </div>
            <div className="flex flex-row flex-wrap justify-between mt-8">
                { language==='english'? (
                projects.map((item,index) => (
                    <div id={index} className="flex flex-col box2 bg-white mt-4">
                        <img className='w-[100%] image h-[200px]' src={item.img} alt="" />
                        <div className="flex flex-row px-4 justify-between mt-4">
                            <p className="text-xl font-medium">{item.name} </p>
                            <div className='flex items-center stage'>
                            <WiTime4 className='mr-2' size={24}/> {language==='english'? 'Project Stage': 'مرحلة المشروع'}
                            </div>
                        </div>
                        <p className='mt-4 px-4'>{item.progress}% {language==='english'? 'completed': 'مكتمل'}</p>
                        <progress className='mt-2 px-4' value={0.25}></progress>
                        <button className='buttonPr px-4 items-center mb-4 flex flex-row justify-end w-[150px] mt-4 bg-white mr-4 cursor-pointer'>View Project <MdOutlineArrowRightAlt/></button>
                    </div>
                ))): (
                    projects_A.map((item,index) => (
                        <div id={index} className="flex flex-col box2 bg-white mt-4">
                            <img className='w-[100%] image h-[200px]' src={item.img} alt="" />
                            <div className="flex flex-row px-4 justify-between mt-4">
                                <p className="text-xl font-medium">{item.name} </p>
                                <div className='flex items-center stage'>
                                <WiTime4 className='mr-2' size={24}/> {language==='english'? 'Project Stage': 'مرحلة المشروع'}
                                </div>
                            </div>
                            <p className='mt-4 px-4'>{item.progress}% {language==='english'? 'completed': 'مكتمل'}</p>
                            <progress className='mt-2 px-4' value={0.25}></progress>
                            <button className='buttonPr px-4 items-center mb-4 flex flex-row justify-end w-[150px] mt-4 bg-white mr-4 cursor-pointer'>View Project <MdOutlineArrowRightAlt/></button>
                        </div>
                    ))
                )}
            </div>
    </div>
  )
}

export default ProjectManagement