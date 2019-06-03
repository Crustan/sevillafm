import styled from "styled-components"
import { Link } from "gatsby"

export const PostTitle = styled.h1`
  font-size: 0.8rem;
  text-align: center;
  text-transform: uppercase;
  color: #e10707;
`

export const PostLink = styled(Link)`
  display: block;
  color: hsla(0, 0%, 0%, 0.8);
  line-height: 1.75;
`

export const Post = styled.article`
  max-width: 55em;
  & > p {
    line-height: 1.75;
  }
`
