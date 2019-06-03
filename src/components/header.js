import { Link } from "gatsby"
import styled from "styled-components"
import PropTypes from "prop-types"
import React from "react"
import { StaticQuery, graphql } from "gatsby"

const Header = ({ siteTitle }) => (
  <StaticQuery query={SITE_TITLE_QUERY}>
    {data => (
      <Container>
        <HeaderLink to="/">{data.site.siteMetadata.title}</HeaderLink>
        <HeaderLink to="/hall-of-fame">Hall of Fame</HeaderLink>
      </Container>
    )}
  </StaticQuery>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  background: #e10707;
  padding: 0 1rem;
  text-transform: uppercase;

  & > * {
    font-weight: bold;
    min-height: 3rem;
    line-height: 3rem;
  }
`

const HeaderLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`

const SITE_TITLE_QUERY = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default Header
