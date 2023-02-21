/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { Header, Input } from '../../Components/Form/index'
import { LoginConst } from './constant'
import Pic from '../../Images/img4.jpg'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { LoginStyle } from './style'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logindata } from '../../Redux/Login/action'

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const singupData = useSelector((data) => data.singReducer.user)
  const loginInfo = useSelector((data) => data.loginReducer.userlogin)
  console.log(singupData)
  console.log(loginInfo)
  const loginValidation = Yup.object().shape({
    email: Yup.string().email().required('Please Enter your email'),
    password: Yup.number().min(6).required('Please Enter password'),
  })
  const loginData = {
    email: '',
    password: '',
  }
  const onSubmit = (values) => {
    dispatch(logindata(values))
    if (
      singupData.findIndex(
        (x) => x.email === values.email && x.password === values.password,
      ) > -1
    ) {
      alert('login successfully')
      navigate('/userinfo')
    } else {
      alert('Please Registration First')
      navigate('/registration')
    }
  }
  useEffect(() => {
    if (loginInfo[0]?.email && loginInfo[0]?.password) {
      navigate('/userinfo')
    } else {
      navigate('/')
    }
  }, [])
  return (
    <LoginStyle>
      <div className="Login-form">
        <Header />
        <img className="backimg" src={Pic} alt="" />
        <div className="Form">
          <div className="Formik">
            <h1 className="title">{LoginConst.login}</h1>
            <Formik
              initialValues={loginData}
              validationSchema={loginValidation}
              onSubmit={async (values, { resetForm }) => {
                await onSubmit(values)
                resetForm()
              }}
            >
              {({ errors, touched, handleChange, values }) => (
                <Form>
                  <Input
                    name="email"
                    className="inp"
                    placeholder={LoginConst.email}
                    onChange={handleChange}
                    values={values.email}
                    error={touched.email && errors.email}
                  />
                  <br />
                  <Input
                    name="password"
                    className="inp"
                    placeholder={LoginConst.password}
                    onChange={handleChange}
                    values={values.password}
                    error={touched.password && errors.password}
                  />{' '}
                  <br />
                  <button className="btn" type="submit">
                    Submit
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </LoginStyle>
  )
}

export default Login
