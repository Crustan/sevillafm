import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "gatsby"

function Pagination({ prev, next }) {
  if (!prev && !next) return null
  return (
    <Container>
      {prev && <PrevLink to={prev.path}>← {prev.title}</PrevLink>}
      {next && <NextLink to={next.path}>{next.title} →</NextLink>}
    </Container>
  )
}

const PrevLink = styled(Link)`
  margin-right: auto;
`

const NextLink = styled(Link)`
  margin-left: auto;
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
  & > * {
    color: #e10707;
  }
`

Pagination.propTypes = {
  prev: PropTypes.shape({
    path: PropTypes.string,
    title: PropTypes.string,
  }),
  next: PropTypes.shape({
    path: PropTypes.string,
    title: PropTypes.string,
  }),
}

export default Pagination
