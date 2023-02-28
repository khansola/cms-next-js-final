import React from 'react'
import { CommonSEO } from "@/components/SEO";
import BlankTemplate from "@/components/templates/BlankTemplate";
import ImageHome from "@/components/molecules/ImageHome";



function index() {
  return (
    <BlankTemplate>
    <CommonSEO title="Home" description="Description of Create Next Page by hehe" />
    <ImageHome />
</BlankTemplate>
  )
}

export default index