import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import Seo from "../components/seo";

export default function Blog({data, pageContext: {slug}}){
    const { html, frontmatter: {title, subtitle } } = data.markdownRemark
    return (
        <Layout>
            <Seo title={title} description={subtitle}/>
            <h1>{ title }</h1> 
            <div className='blog-content'>
            <div  
                dangerouslySetInnerHTML={{ __html: html }} />
            </div>
        </Layout>
    )

}
export const query = graphql`
    query($slug: String){
        markdownRemark(frontmatter: {slug: {eq: $slug}}) {
            html
            frontmatter {
                title
            }
             
        }
    }
`