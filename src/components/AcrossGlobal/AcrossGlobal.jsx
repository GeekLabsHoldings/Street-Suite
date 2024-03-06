import React from 'react'
import "./AcrossGlobal.css"
import AcrossGlobalImg from "../../assets/Across the globe.png"

const AcrossGlobal = () => {
  return (
    <section className='acrossGlobal'>
        <div className='lg:container mx-auto px-4 acrossGlobal-container'>
             <img src={AcrossGlobalImg} alt="" className='w-full'/>
        </div>
    </section>    
  )
}

export default AcrossGlobal
