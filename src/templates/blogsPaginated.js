import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import BlogListing from '../components/BlogListing'
import Seo from "../components/seo"

export default function BlogsPaginated({data, pageContext: {limit, currentPage, numOfPages}}){
    const { nodes } = data.allMarkdownRemark
    const previousPage = currentPage - 1 === 1 ? '' : (currentPage - 1).toString()
    const nextPage = (currentPage+1).toString()

    const isFirst = currentPage === 1
    const isLast = currentPage === numOfPages

    return (
        <Layout>
            <Seo title='Blogs'
                description='Fresh code space'/>
            <BlogListing blogs={nodes}/> 
                <Link 
                className="button is-small"
                to={`/blogs/${previousPage}`}
                rel='prev'
                disabled={isFirst}
            >
                Previous
            </Link>  
            {' '}
             
                <Link 
                className="button is-small"
                to={`/blogs/${nextPage}`}
                rel='next'
                disabled={isLast}
            >
                Next
            </Link>
        </Layout>
    )
}

export const query = graphql `
    query BlogListQuery($skip: Int!, $limit: Int!) {
        allMarkdownRemark(
            sort: {order: DESC, fields: frontmatter___date}
            limit: $limit, 
            skip: $skip
        ) {
        nodes {
            id
            frontmatter {
                title
                subtitle
                slug
                date(formatString: "DD MMMM, YYYY")
                author
            }
        }
        }
    }
`