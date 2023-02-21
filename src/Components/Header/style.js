import styled from 'styled-components'

const HeaderStyle = styled.div`
  font-style: initial;
  .navbar {
    height: 100px;
    width: 50%;
    position: absolute;
    overflow: hidden;
  }

  ul {
    list-style: none;
  }
  li {
    float: left;
  }
  li a {
    display: inline;
    text-align: center;
    padding: 10px 25px;
    text-decoration: none;
    font-size: 1.5em;
  }
  li a:hover {
    color: gray;
  }
  @media screen and (max-width: 599px) {
    .navbar {
      width: 100%;
      display: flex;
      justify-content: start;
    }
    li a {
      display: inline;
      font-size: 16px;
      padding: 10px 25px;
    }
  }
  @media screen and (min-width: 600px) and (max-width: 850px) {
    .navbar {
      width: 100%;
      display: flex;
      justify-content: start;
    }
    li a {
      font-size: 18px;
    }
  }
  @media screen and (min-width: 851px) and (max-width: 1400px) {
    .navbar {
      width: 100%;
      display: flex;
      justify-content: start;
    }
    li a {
      font-size: 20px;
    }
  }
`

export { HeaderStyle }
