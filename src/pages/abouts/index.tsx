import React from 'react'
import { CommonSEO } from "@/components/SEO";
import BlankTemplate from "@/components/templates/BlankTemplate";
import About from '@/components/molecules/About';

const index = () => {
  return (
    <BlankTemplate>
      <CommonSEO title="Home" description="Description of Create Next Page by hehe" />
      <About />
    </BlankTemplate>
  )
}

export default index