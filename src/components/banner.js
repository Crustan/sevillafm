import React from "react"
import styled from "styled-components"
import sevilla from "../images/sevilla.png"
import portugal from "../images/portugal.png"
import england from "../images/england.png"

export default function Banner({ team = "sevilla" }) {
  return (
    <Container>
      {team === "sevilla" && <img src={sevilla} alt="banner" />}
      {team === "portugal" && <img src={portugal} alt="banner" />}
      {team === "england" && <img src={england} alt="banner" />}
    </Container>
  )
}

const Container = styled.div`
  text-align: center;
  margin-bottom: 1rem;
`
