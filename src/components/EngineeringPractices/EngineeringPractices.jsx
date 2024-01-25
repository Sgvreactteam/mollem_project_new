import React, {useState} from 'react'

import image from './pdf.jpg'
import './ep.css'
import { AiOutlineDownload } from "react-icons/ai";
import pdf1 from './1.pdf'
import pdf2 from './2.pdf'
import pdf3 from './3.pdf'
import pdf4 from './4.pdf'
import pdf5 from './5.pdf'
import pdf6 from './6.pdf'
import photo2 from './photo2.jpeg'
import { useLanguage } from '../../context/LanguageContext';
function EngineeringPractices() {

    const { language, toggleLanguage } = useLanguage();

    const pdf = [
        {
            id: 1,
            name: 'PDF Title here',
            date: '31 sept. 2023',
            size: '2.3MB',
            source: pdf1
        },
        {
            id: 2,
            name: 'PDF Title here',
            date: '31 sept. 2023',
            size: '2.3MB',
            source: pdf2
        },
        {
            id: 3,
            name: 'PDF Title here',
            date: '31 sept. 2023',
            size: '2.3MB',
            source: pdf3
        },
        {
            id: 4,
            name: 'PDF Title here',
            date: '31 sept. 2023',
            size: '2.3MB',
            source: pdf4
        },
        {
            id: 5,
            name: 'PDF Title here',
            date: '31 sept. 2023',
            size: '2.3MB',
            source: pdf5
        },
        {
            id: 6,
            name: 'PDF Title here',
            date: '31 sept. 2023',
            size: '2.3MB',
            source: pdf6
        },
    ]

   
  return (
    <div className='background pt-24'>
        <div className=' flex flex-row flex-wrap w-[80vw] ml-8'>
            {pdf.map((item, index)=> (
            <div key={index} className="flex flex-col pdfBox px-4 m-4">
                <div className='w-[100%] items-center relative flex justify-center h-[200px]'>
                    <a href={item.source}  target='_blank'>
                        <img src={photo2} className='absolute z-100 w-[40px] h-[40px] top-2 left-0' alt="" />
                        <img src={image} alt="" />
                    </a>
                </div>
                <div className="flex flex-row justify-between mb-2">
                    <p>{item.name}</p>
                    <p className='dateColor'> {item.date} </p>
                </div>
                <div className="flex flex-row justify-between mb-4">
                    <p className='dateColor'> {item.size} </p>
                    <a className='flex flex-row items-center' href={item.source} target='_blank'>{language==='english'? 'Download': 'تحميل'} <AiOutlineDownload/> </a>
                </div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default EngineeringPractices;