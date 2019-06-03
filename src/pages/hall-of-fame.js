import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import { PostTitle, Post } from "../components/styled/post"

const HOF_QUERY = graphql`
  query {
    markdownRemark(frontmatter: { path: { eq: "/hall-of-fame/" } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`

function HallOfFame() {
  const { markdownRemark } = useStaticQuery(HOF_QUERY)
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <SEO title="Hall of Fame" />
      <Banner team={frontmatter.team} />
      <PostTitle>{frontmatter.title}</PostTitle>
      <Post dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export default HallOfFame
