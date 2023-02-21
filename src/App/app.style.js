import styled, { createGlobalStyle } from 'styled-components'
import { size } from './device'
import { Theme } from './theme'

const AppContainer = styled.div`
  height: 100vh;
  .form-error,
  .text-danger {
    color: red;
  }
  .pointer {
    cursor: pointer;
  }
  .flex {
    display: flex;
  }
  .txtWrap {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  a,
  a:hover {
    color: #000;
  }
  .otrDiv {
    background-color: #fafafa;
    width: 100%;
  }
  .actDiv span {
    margin-left: 8px;
    cursor: pointer;
  }
  .ant-table {
    background-color: #f6f6f6;
    overflow-x: auto;
  }
  .main {
    padding: 1em;
    height: 87.5vh;
    overflow-y: auto;
    ::-webkit-scrollbar {
      width: 8px;
      height: 2px;
    }
    /* Track */
    ::-webkit-scrollbar-track {
      background: #f4f5f6;
    }
    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #777;
      border-radius: 10px;
    }
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
    .head {
      display: flex;
      .title {
        margin-bottom: 0 !important;
        font-weight: 600;
        font-size: 24px;
        line-height: 32px;
        color: #8d8686;
      }
      button {
        color: #fff;
        margin-left: auto;
        background: #9fa4a6;
        min-width: 70px;
      }
    }
    .display {
      border: 1px solid #ddd;
      margin-top: 1em;
      border-radius: 11px;
      padding: 10px;
      .title {
        padding: 0.25rem;
        font-weight: 600;
        font-size: 16px;
        color: #717479;
        border-radius: 0 !important;
        box-shadow: none;
      }
      .upbtn {
        margin-top: 1.7em;
        .uploadbtn {
          border: 1px solid #c5c5c5;
          color: #898989;
          height: 35px;
          line-height: 35px;
          font-size: 12px;
          :hover {
            color: #fff;
          }
        }
      }
    }
  }
  .pDiv {
    box-shadow: 0 0 10px rgb(0 0 0 / 20%);
    background-color: #fff;
    border-radius: 1em;
    padding: 1em;
    margin-bottom: 1em;
    // .pDiv {
    // @media ${size['tablet-max']} {
    //   margin-left: 1em;
    // }
    .header {
      font-weight: 700;
    }
    .label {
      font-weight: 400;
      padding-top: 10px;
    }
    .check {
      display: flex;
    }
  }
  .cardDiv {
    display: flex;
    max-width: 18em;
    text-align: center;
    @media ${size['laptop-sm-max']} {
      display: block;
    }
    .ant-card {
      border-radius: 10px;
      margin-bottom: 5px;
      + .ant-card {
        margin-left: 1em;
        @media ${size['laptop-sm-max']} {
          margin-left: 0;
        }
      }
      .ant-card-body {
        width: max-content;
      }
      .text {
        cursor: pointer;
        font-size: larger;
        font-weight: 600;
        color: ${Theme.mainColor};
      }
      :hover {
        background-color: ${Theme.mainColor};
        .text {
          color: #fff;
        }
      }
    }
  }
`
export { AppContainer }
const GlobalStyle = createGlobalStyle`
  body {
    ::-webkit-scrollbar {
      width: 8px;
      height: 2px;
    }
    /* Track */
    ::-webkit-scrollbar-track { 
      background: #f4f5f6;
    }
    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #777;
      border-radius: 10px;
    }
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }
  .anime{
    opacity: 0;
    position: relative;
    animation: anime-animation 0.4s ease-in-out 0.33333s;
    animation-fill-mode: forwards;
    transform: translateX(50px);     
  }
  @-webkit-keyframes anime-animation {
    to {
      opacity: 1;
      transform: translatex(0);
    }
  }
  @keyframes anime-animation {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  .anime:first-child{
    animation-delay: .1s;
  }
  .anime:nth-child(2){
    animation-delay: .2s;
  }
  .anime:nth-child(3){
    animation-delay: .3s;
  }
  .anime:nth-child(4){
    animation-delay: .4s;
  }
  .anime:nth-child(5){
    animation-delay: .5s;
  }
  .anime:nth-child(6){
    animation-delay: .6s;
  }
  .anime:nth-child(7){
    animation-delay: .7s;
  }
  .anime:nth-child(8){
    animation-delay: .8s;
  }
  .anime:nth-child(9){
    animation-delay: .9s;
  }
  .anime:nth-child(10){
    animation-delay: .91s;
  }
  .anime:nth-child(11){
    animation-delay: .92s;
  }
  .anime:nth-child(12){
    animation-delay: .93s;
  }
  .anime:nth-child(13){
    animation-delay: .94s;
  }
  .anime:nth-child(14){
    animation-delay: .95s;
  }
  .anime:nth-child(15){
    animation-delay: .96s;
  }
  .anime:nth-child(16){
    animation-delay: .97s;
  }
  .anime:nth-child(17){
    animation-delay: .98s;
  }
  .anime:nth-child(18){
    animation-delay: .99s;
  }
  .anime:nth-child(19){
    animation-delay: .991s;
  }
  .anime:nth-child(20){ 
    animation-delay: .992s;
  }
  .highZ{z-index: 22;}
  .highZ2{z-index: 20;}
  .highZ3{z-index: 18;}
  .highZ4{z-index: 23;}
`

export default GlobalStyle
