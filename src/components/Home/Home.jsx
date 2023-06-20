import React from 'react'
import HeroBnnr from './Hero/HeroBnnr'
import CounterUp from './CountUp/CounterUp'
import Partners from './Partners/Partners'
import Service from './Services/Service'
import Community from './Community/Community'
import Course from './Course/Course'
import SearchCourse from './SearchCourse'

function Home() {
  return (
    <>
        <HeroBnnr />
        <CounterUp />
        <Partners />
        <Service />
        <SearchCourse />
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