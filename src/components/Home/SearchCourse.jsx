import React from 'react'

function SearchCourse() {
  return (
    <section className='pb-9'>
        <div className="container mx-auto rounded-lg shadow-lg shadow-slate-200 p-10 bg-white">
            <h2 class="mb-6">Search</h2>
            <div className='flex items-center overflow-hidden w-full border-[1px] border-slate-300/60 rounded-xl'>
                <input className='py-3.5 px-5 bg-white w-full outline-none text-base text-[#747474]' type="search" name="search" id="search" placeholder='Search courses...'/>
                <i className="ri-search-line py-2.5 px-5 bg-[#2A283B] text-white text-2xl"></i>
            </div>
        </div>
    </section>
  )
}

export default SearchCourse