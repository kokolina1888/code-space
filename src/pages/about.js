import React from 'react' 
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import Seo from '../components/seo'

export default function About({data}){
    return (
        <Layout>
        <Seo 
            title='About'
            description='About page meta description'
        />
            <h1>{process.env.BASE_URL}</h1>
            <h1>{data.site.siteMetadata.title}</h1>
            <h1>{data.site.siteMetadata.body.contet}</h1>
        </Layout>
       
    )
}

export const query = graphql `
query {
    site {
        siteMetadata {
            title
            body {
                content
            }
        }
    }
}
`
