import React from 'react'
import { CommonSEO } from "@/components/SEO";
import BlankTemplate from "@/components/templates/BlankTemplate";
import ImageHome from "@/components/molecules/ImageHome";
import Galery from '@/components/molecules/Galery2';



function index() {
  return (
    <BlankTemplate>
    <CommonSEO title="Home" description="Description of Create Next Page by hehe" />
    <Galery />
</BlankTemplate>
  )
}

export default index