import styled from 'styled-components'

const UserStyle = styled.div`
  .user-page {
    display: flex;
  }
  .user-img {
    height: 99.7vh;
    width: 100%;
    background-size: cover;
  }
  .card {
    ${'' /* height: 500px; */}
    width: 20%;
    background: none;
    position: absolute;
    right: 0px;
    left: 50px;
    top: 10em;
    border: none;
  }
  h3 {
    font-size: 2.5em;
    font-weight: 100;
  }
  h2 {
    font-size: 2em;
    font-weight: 100;
  }
`

export { UserStyle }
