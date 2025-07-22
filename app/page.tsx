import React from 'react'
import { Button } from '@/components/ui/button'
import CompanionCard from '@/components/CompanionCard'
import CTA from '@/components/CTA'
import CompanionsList from '@/components/CompanionsList'
import { recentSessions } from '@/constants'

const Page = () => {
  return (
    <div className='flex flex-col px-16 gap-4'>
      <h1 className='text-2xl'>Popular Companions</h1>
      <section className='home-section'>
        <CompanionCard
         id='123'
         name='Neura the Brainy Explorer'
         topic='Neural Network of the Brain'
         subject='science'
         duration={45}
         color='#E5D0FF'
        />
        <CompanionCard
         id='456'
         name='Countsy the Number Wizard'
         topic='Derivatives & Integrals'
         subject='maths'
         duration={30}
         color='#FFDA6E'
        />
        <CompanionCard
         id='789'
         name='Verba the Vocabulary Builder'
         topic='English Literature '
         subject='language'
         duration={45}
         color='#BDE7FF'
        />
      </section>
      <section>
        <CTA/>
        <CompanionsList
        title='Recently Completed Sessions'
        companions={recentSessions}
        classNames='w-2/3 max-lg:full'
        />
      </section>
    </div>
  )
}

export default Page