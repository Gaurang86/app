import styled from 'styled-components'

const RegistrationStyle = styled.div`
  .registration-from {
    display: flex;
    height: 100vh;
  }
  .img-logo {
    height: 100vh;
    width: 70%;
  }
  .registration-page {
    height: 100vh;
    width: 30%;
    background-color: skyblue;
    float: right;
  }
  .formik {
    margin: auto;
    width: 70%;
    position: relative;
    top: 5em;
    bottom: 5em;
    height: fit-content;
  }
  input[type='date']::-webkit-calendar-picker-indicator {
    font-size: 1px;
  }
  .inp {
    height: 58px;
    width: 100%;
    font-size: 25px;
    background: none;
    border: solid 1px;
    margin-top: 1em;
    font-weight: 100;
  }
  .inp:hover {
    color: blue;
  }
  .title {
    text-align: center;
    font-size: 4em;
    font-weight: 100;
  }
  .btn {
    position: absolute;
    right: 0;
    left: 0;
    top: 35 em;
    font-size: 25px;
    box-shadow: 0px 0px 2px rgb(0 0 0 / 45%);
  }
  @media screen and (max-width: 599px) {
    .img-logo {
      display: none;
    }
    .registration-page {
      width: 100%;
      height: 100vh;
    }
    .inp {
      height: 50px;
      width: 120%;
      margin-top: 18px;
      margin-left: -1em;
      font-weight: 100;
    }
    .title {
      font-size: 2.5em;
    }
    .btn {
      position: absolute;
      right: 0;
      left: 0;
    }
  }
  @media screen and (min-width: 600px) and (max-width: 850px) {
    .img-logo {
      width: 100%;
      height: 70em;
    }
    .registration-page {
      position: absolute;
      right: 5em;
      left: 5em;
      top: 7em;
      width: 80%;
      height: 1000px;
      border-radius: 25px;
    }
    .btn {
      position: absolute;
      right: 0;
      left: 0;
      top: 29em;
    }
    .title {
      font-size: 2.3em;
    }
  }
  @media screen and (min-width: 851px) and (max-width: 1400px) {
    .img-logo {
      width: 100%;
      height: 70em;
    }
    .registration-page {
      position: absolute;
      right: 7em;
      left: 10em;
      top: 7em;
      width: 65%;
      height: 1000px;
      border-radius: 25px;
    }
    .btn {
      position: absolute;
      right: 0;
      left: 0;
      top: 29em;
    }
    .title {
      font-size: 2.3em;
    }
  }
`

export { RegistrationStyle }
