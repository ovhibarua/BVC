import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

function CounterUp() {
    const [counterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
        <section className='py-14'>
            <div className='container mx-auto'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-4'>
                        <div className='rounded-[34px] bg-white p-7 shadow-lg shadow-slate-200'>
                            <img src="Vector(4).png" alt="countup" />
                        </div>
                        <div>
                            <h2 className='mb-1'>
                                {counterOn && <CountUp start={0} end={350000} duration={4} delay={0} />}+ 
                            </h2>
                            <p>Students Enrolled</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <div className='rounded-[34px] bg-white py-7 px-[30px] shadow-lg shadow-slate-200'>
                            <img src="Vector(3).png" alt="countup" />
                        </div>
                        <div>
                            <h2 className='mb-1'>{counterOn && <CountUp start={0} end={40} duration={2} delay={0} />}+ Nations</h2>
                            <p>Student Base</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <div className='rounded-[34px] bg-white px-7 py-[32px] shadow-lg shadow-slate-200'>
                            <img src="Vector (1).png" alt="countup" />
                        </div>
                        <div>
                            <h2 className='mb-1'>{counterOn && <CountUp start={0} end={800} duration={3} delay={0} />}K+</h2>
                            <p>Learning Hours</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <div className='rounded-[34px] bg-white p-7 shadow-lg shadow-slate-200'>
                            <img src="Vector (2).png" alt="countup" />
                        </div>
                        <div>
                            <h2 className='mb-1'>{counterOn && <CountUp start={0} end={90} duration={2} delay={0} />}%</h2>
                            <p>Programming Completion Rates</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </ScrollTrigger>
  )
}

export default CounterUp