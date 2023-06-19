import React from 'react'
import ContactInfo from './ContactInfo'
import ContactForm from './ContactForm'

function Contact() {
  return (
    <section className='py-14'>
        <div className="container mx-auto">
            <div className="flex items-start max-w-7xl mx-auto rounded-lg shadow-lg shadow-slate-200 bg-white">
                <ContactInfo />
                <ContactForm />
            </div>
        </div>
    </section>
  )
}

export default Contact