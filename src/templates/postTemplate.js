import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Banner from "../components/banner"
import Pagination from "../components/pagination"
import { PostTitle, Post } from "../components/styled/post"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
  pageContext,
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  const { previous, next } = pageContext

  const compClass =
    frontmatter.team === "portugal"
      ? "comp-national"
      : frontmatter.title.includes("Champions League")
      ? "comp-cl"
      : "comp-laliga"

  const classes = `${compClass}${
    frontmatter.path === "/1-28-helarsrapport/" ? " summit" : ""
  }`

  return (
    <Layout>
      <Pagination
        prev={previous && previous.frontmatter}
        next={next && next.frontmatter}
      />
      <Banner team={frontmatter.team} />
      <PostTitle>{frontmatter.title}</PostTitle>
      <Post className={classes} dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        team
      }
    }
  }
`
