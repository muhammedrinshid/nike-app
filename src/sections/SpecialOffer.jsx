import React from 'react'
import { offer } from '../assets/images'
import { arrowRight } from '../assets/icons'
import Button from '../Components/Button'

const SpecialOffer = () => {
  return (
    <section className='flex flex-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'> 
        <img src={offer} width={773} height={687} alt="" className='object-contain w-full' />
      </div>
      <div className='flex  flex-1 flex-col'>
        <h2 className=' font-palanquin text-4xl capitalize   font-bold'>
          <span className='text-coral-red inline-block mt-3'> Super</span>
          { } Offer
        </h2>
        <p className='mt-4  info-text'>
        Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.        </p>
        <p className='mt-6  info-text'>Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.</p>
        <div className='mt-11 flex flex-wrap gap-4'>
          <Button
            label={"View detailes"}
            iconURL={arrowRight}
          />    
          <Button
            label={"Learn More"}
            backgroundColor='bg-white'
            borderColor='border-slate-gray'
            textColor='text-slate-gray'
            
          />    
          
        </div>
      </div>

    </section>
  )
}

export default SpecialOffer
