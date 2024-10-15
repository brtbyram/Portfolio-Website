"use client";

import React from 'react'
import CountUp from 'react-countup';


const stats = [
    {
        number: 2,
        text: 'Years of experience'
    },
    {
        number: 10,
        text: 'Projects completed'
    },
    {
        number: 7,
        text: 'Technologies mastered'
    },
    {
        number: 500,
        text: 'Code commits'
    }
    ]

function Stats() {

  return (
    <section className='pt-4 pb-12 xl:py-0'>
        <div className='container mx-auto'>
            <div className='flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none'>
                {stats.map((stat, index) => (
                    <div key={index} className='flex flex-1 gap-4 items-center justify-center xl:justify-start'>
                        <CountUp end={stat.number} duration={5} delay={2} className='text-4xl xl:text-6xl font-extrabold text-accent'/>
                        <span className={`${stat.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]" } text-white/80 leading-snug`}>{stat.text}</span>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Stats