import { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

export default function Search({ setData, setLoading }) {

  /** NOTE: Variable that holds the state of API request errors */
  const [requestError, setRequestError] = useState(false)
  /** NOTE: Function passed into handleSubmit to set the state of API request errors */
  const requestValidation = (status, message) => setRequestError({ status, message });

  /** NOTE: Variable that holds the form elements and values for Yup schema */
  const initialValues = { queryTerm: '' }

  /** NOTE: Object that defines conditions for validation with Formik */
  const validationSchema = Yup.object().shape({
    queryTerm: Yup.string()
      .required('Search box can\'t be empty.')
      .min(3, 'Please type at least 3 characters.')
  })

  /**
   * NOTE:
   * Function receives values from Formik after form validation
   * Makes the API request and stores data and error objects
   * Handles the loading state and resets form after successeful API request 
   */
  const handleSubmit = (values, actions) => {
    setLoading(true)
    axios.get('http://openlibrary.org/search.json?limit=10&q=' + values.queryTerm, { timeout: 5000 }) // 
      .then(data => {
        requestValidation(false, 'Success.')
        setLoading(false)
        setData(data.data)
      })
      /** NOTE: Handles error logs for inspection and stores message */
      .catch(function (error) {
        console.log('Request object: ', error.config)
        if (error.response) {
          console.log('Response error: ', error.response.status, error.response.data)
        } else if (error.request) {
          console.log('Request error: ', error.request)
        } else {
          console.log('Error: ', error.message)
        }
        requestValidation(true, 'Something went wrong. Please try again.')
        setLoading(false)
      });
    actions.resetForm({});
  }

  return (
    /** NOTE: Formik methods for validation and form submission based on Yup schema */
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <>
          <Form>
            <Field type="text" name="queryTerm" placeholder="Search..." />
            <button type="submit" disabled={isSubmitting}>Submit</button>
          </Form>
          {/* NOTE: Display Formik validation errors */}
          <ErrorMessage name="queryTerm" component="p" />
          {/* NOTE: Display Axios API request errors */}
          {requestError.status ? <p>{requestError.message}</p> : null}
        </>
      )}
    </Formik>
  )
}
