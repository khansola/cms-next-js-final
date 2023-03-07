import React from 'react'
import { CommonSEO } from "@/components/SEO";
import BlankTemplate from "@/components/templates/BlankTemplate";
import About from '@/components/molecules/About';
import CardCircle from '@/components/atoms/CardCircle';
import Share  from '@/components/atoms/Share';
import Image  from 'next/image';


const index = () => {
  return (
    <BlankTemplate>
      <CommonSEO title="Home" description="Description of Create Next Page by hehe" />
      <About />
      <CardCircle image='/images/f.jpg' caption='test' title='test2' >
        
      </CardCircle >

    </BlankTemplate>
  )
}

export default index