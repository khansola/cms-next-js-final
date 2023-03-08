import React from 'react'
import { CommonSEO } from "@/components/SEO";
import BlankTemplate from "@/components/templates/BlankTemplate";
import ArticleFlow from '@/components/molecules/ArticleFlow';


const index = () => {
  return (
    <BlankTemplate>
      <CommonSEO title="Home" description="Description of Create Next Page by hehe" />
      <ArticleFlow />

    </BlankTemplate>
  )
}

export default index