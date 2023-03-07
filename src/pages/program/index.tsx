import React from 'react'
import { CommonSEO } from "@/components/SEO";
import BlankTemplate from "@/components/templates/BlankTemplate";
import Program from '@/components/molecules/Program';


const index = () => {
  return (
    <BlankTemplate>
      <CommonSEO title="Home" description="Description of Create Next Page by hehe" />
      <Program />
      
    </BlankTemplate>
  )
}

export default index