import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { PostTitle, PostLink } from "../components/styled/post"
import Banner from "../components/banner"

function IndexPage() {
  const { allMarkdownRemark } = useStaticQuery(INDEX_QUERY)
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`sevilla`, `football manager 2006`, `react`]}
      />
      <Banner />
      <PostTitle>Index</PostTitle>
      <Index>
        {allMarkdownRemark.edges
          .map(edge => ({ ...edge.node.frontmatter }))
          .map(post => (
            <PostLink key={post.id} to={post.path}>
              {post.title}
            </PostLink>
          ))}
      </Index>
    </Layout>
  )
}

const Index = styled.nav`
  @media (min-width: 480px) {
    column-count: 2;
  }

  @media (min-width: 960px) {
    column-count: 3;
  }
`

export const INDEX_QUERY = graphql`
  query {
    allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___date] }
      filter: { frontmatter: { path: { ne: "/hall-of-fame/" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            id
            path
          }
        }
      }
    }
  }
`

export default IndexPage
