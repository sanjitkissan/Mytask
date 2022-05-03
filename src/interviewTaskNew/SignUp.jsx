import React from 'react'
import { Fragment } from 'react'
import { Formik,Form,Field } from 'formik'
export default function SignUp() {
    const formOb = {
        userName:"",
        email:"",
        password:"",
        conformepassword:""
    }
    const submit = (values)=>{
        console.log("submited values", values)
    }
  return (
    <Fragment>
        <h3>Create Account</h3>
        <Formik initialValues={formOb} onSubmit={(values =>submit(values))}>
            <Form>
                User name : <Field type="text" name="userName" className="form-control" />
            </Form>
        </Formik>
    </Fragment>
  )
}
