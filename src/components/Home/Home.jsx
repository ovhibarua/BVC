import React from 'react'
import HeroBnnr from './Hero/HeroBnnr'
import CounterUp from './CountUp/CounterUp'
import Partners from './Partners/Partners'
import Service from './Services/Service'
import Community from './Community/Community'
import Course from './Course/Course'

function Home() {
  return (
    <>
        <HeroBnnr />
        <CounterUp />
        <Partners />
        <Service />
        <Course trandingCourseTitle="Trending Courses" />
        <Course trandingCourseTitle="IT Courses" />
        <Course trandingCourseTitle="Networking Courses" />
        <Course trandingCourseTitle="Data Science Courses" />
        <Course trandingCourseTitle="Featured Courses" />
        <Community />
    </>
  )
}

export default Home