import React from 'react'
import Tittle from '../components/Tittle'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
       <div className='text-2xl text-center pt-8 border-t'>
        <Tittle text1={'ABOUT'} text2={'US'}/>
       </div>

       <div className='my-10 flex flex-col md:flex-row gap-16'>
         <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
         <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut impedit dolorum ad dolores officiis velit est amet error sunt temporibus officia sed harum adipisci quia, quidem nihil illo. Dolores, laborum?</p>
            <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias dolorem repellendus nemo doloremque, sunt ex ab delectus voluptatum, laudantium iure unde tenetur perspiciatis eum aliquam iste inventore neque accusantium. Expedita!</p>
            <b className='text-gray-800'>Our Mission</b>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, earum sed! Itaque, consequatur. Dolores architecto quos fugit, numquam saepe animi, impedit temporibus odio alias veritatis accusamus cum vero, eius quia.</p>
         </div>
       </div>

       <div className='text-xl py-4'>
          <Tittle text1={'WHY'}text2={'CHOOSE US'}/>
       </div>
       <div className='flex flex-col md:flex-row text-sm mb-20'>
           <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
             <b>Quality Assurance:</b>
             <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem fuga blanditiis vero magni et officiis, expedita reprehenderit autem debitis corporis dicta unde porro nihil doloremque illo necessitatibus inventore provident odit.</p>
           </div>

           <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
             <b>Convenience:</b>
             <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem fuga blanditiis vero magni et officiis, expedita reprehenderit autem debitis corporis dicta unde porro nihil doloremque illo necessitatibus inventore provident odit.</p>
           </div>

           <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
             <b>Exceptional Customer Service:</b>
             <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem fuga blanditiis vero magni et officiis, expedita reprehenderit autem debitis corporis dicta unde porro nihil doloremque illo necessitatibus inventore provident odit.</p>
           </div>
       </div>
       {/* <NewsleterBox/> */}
       <NewsLetterBox/>
    </div>
  )
}

export default About
