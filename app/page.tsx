import React from 'react'
import { Button } from '@/components/ui/button'
import CompanionCard from '@/components/CompanionCard'
import CTA from '@/components/CTA'
import CompanionsList from '@/components/CompanionsList'

const Page = () => {
  return (
    <div>
      <h1 className='text-2xl'>Popular Companions</h1>
      <section className='home-section'>
        <CompanionCard
         id='123'
         name='Neura the Brainy Explorer'
         topic='Neural Network of the Brain'
         subject='Science'
         duration={45}
         color='#E5D0FF'
        />
        <CompanionCard
         id='456'
         name='Countsy the Number Wizard'
         topic='Derivatives & Integrals'
         subject='Maths'
         duration={30}
         color='#FFDA6E'
        />
        <CompanionCard
         id='789'
         name='Verba the Vocabulary Builder'
         topic='English Literature '
         subject='Language'
         duration={45}
         color='#BDE7FF'
        />
      </section>
      <section>
        <CompanionsList/>
        <CTA/>
      </section>
    </div>
  )
}

export default Page