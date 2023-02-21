import styled from 'styled-components'

const LoginStyle = styled.div`
  .Login-form {
    display: flex;
    height: fit-content;
  }
  .backimg {
    height: 100vh;
    width: 70%;
  }
  .Form {
    height: 100vh;
    width: 30%;
    background-color: skyblue;
    float: right;
  }
  .Formik {
    margin: auto;
    width: 70%;
    position: relative;
    top: 5em;
    bottom: 5em;
    height: fit-content;
  }
  .inp {
    height: 58px;
    width: 100%;
    font-size: 1.5em;
    background: none;
    border: solid 1px;
    align-item: center;
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
    top: 13em;
    font-size: 25px;
    box-shadow: 0px 0px 2px rgb(0 0 0 / 45%);
  }
  @media screen and (max-width: 599px) {
    .backimg {
      display: none;
    }
    .Form {
      width: 100%;
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
  @media screen and (min-width: 600px) and (max-width: 1500px) {
    .backimg {
      width: 100%;
      height: 70em;
    }
    .Form {
      position: absolute;
      right: 5em;
      left: 10em;
      top: 7em;
      width: 65%;
      height: 500px;
      border-radius: 25px;
    }
    .btn {
      position: absolute;
      right: 0;
      left: 0;
      top: 12em;
    }
    .title {
      font-size: 2.3em;
    }
  }
`

export { LoginStyle }
