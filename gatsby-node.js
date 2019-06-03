/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")
const ALL_POSTS_QUERY = `
{
  allMarkdownRemark(
    sort: { order: ASC, fields: [frontmatter___date] }
    filter: { frontmatter: { path: { ne: "/hall-of-fame/" } } }
    limit: 1000
  ) {
    edges {
      previous {
        frontmatter {
          title
          path
        }
      }
      next {
        frontmatter {
          title
          path
        }
      }
      node {
        frontmatter {
          path
        }
      }
    }
  }
}
`

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const postTemplate = path.resolve(`src/templates/postTemplate.js`)

  return graphql(ALL_POSTS_QUERY).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node, previous, next }) => {
      createPage({
        path: node.frontmatter.path,
        component: postTemplate,
        context: {
          previous,
          next,
        },
      })
    })
  })
}
