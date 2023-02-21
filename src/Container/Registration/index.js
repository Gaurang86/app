/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { Header, Input } from '../../Components/Form/index'
import { Formik, Form } from 'formik'
import { RegistrationStyle } from './style'
import { RegistrationConst } from './constant'
import * as Yup from 'yup'
import logo from '../../Images/img4.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { singup } from '../../Redux/Registration/action'
import { useNavigate } from 'react-router-dom'
const Registration = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const singupData = useSelector((data) => data.singReducer.user)
  console.log(singupData)
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  const registrationValidation = Yup.object().shape({
    name: Yup.string().min(4).max(25).required('Please Enter your name'),
    email: Yup.string().email().required('Please Enter your email'),
    password: Yup.number().min(6).required('Please Enter password'),
    confirmpassword: Yup.number()
      .min(6)
      .required()
      .oneOf([Yup.ref('password'), null], 'Passwords must match'),
    mobile: Yup.string()
      .min(10)
      .max(10)
      .matches(phoneRegExp)
      .required('Please enter valid number'),
    date: Yup.string().required('Please Enter Date'),
  })
  const registrationData = {
    name: '',
    email: '',
    password: '',
    confirmpassword: '',
    date: '',
    mobile: '',
  }
  const onSubmit = (values) => {
    dispatch(singup(values))
    console.log(values)
    navigate('/')
  }
  useEffect(() => {
    if (singupData.length !== 0) {
      navigate('/')
    }
  }, [])
  return (
    <RegistrationStyle>
      <div className="registration-from">
        <Header />
        <img className="img-logo" src={logo} alt="" />
        <div className="registration-page">
          <div className="formik">
            <h1 className="title">{RegistrationConst.registration}</h1>
            <Formik
              initialValues={registrationData}
              validationSchema={registrationValidation}
              onSubmit={async (values, { resetForm }) => {
                await onSubmit(values)
                resetForm()
              }}
            >
              {({ errors, touched, handleChange, values }) => (
                <Form>
                  <Input
                    name="name"
                    className="inp"
                    placeholder={RegistrationConst.name}
                    onChange={handleChange}
                    values={values.name}
                    error={touched.name && errors.name}
                  />
                  <br />
                  <Input
                    name="email"
                    className="inp"
                    placeholder={RegistrationConst.email}
                    onChange={handleChange}
                    values={values.email}
                    error={touched.email && errors.email}
                  />
                  <br />
                  <Input
                    name="password"
                    className="inp"
                    placeholder={RegistrationConst.password}
                    onChange={handleChange}
                    values={values.password}
                    error={touched.password && errors.password}
                  />
                  <br />
                  <Input
                    name="confirmpassword"
                    className="inp"
                    placeholder={RegistrationConst.confirmpassword}
                    onChange={handleChange}
                    values={values.confirmpassword}
                    error={touched.confirmpassword && errors.confirmpassword}
                  />
                  <br />
                  <Input
                    name="mobile"
                    className="inp"
                    placeholder={RegistrationConst.mobile}
                    onChange={handleChange}
                    values={values.mobile}
                    error={touched.mobile && errors.mobile}
                  />
                  <br />
                  <Input
                    type="date"
                    name="date"
                    className="inp"
                    placeholder={RegistrationConst.date}
                    onChange={handleChange}
                    values={values.date}
                    error={touched.date && errors.date}
                  />
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
    </RegistrationStyle>
  )
}

export default Registration
