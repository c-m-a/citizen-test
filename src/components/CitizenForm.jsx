import { useState, useEffect } from 'react'
import axios from '../axios'

import './CitizenForm.css'

export default function CitizenForm({ token, citizens, setCitizens }) {
  const [disabled, setDisabled] = useState(true)

  const [citizen, setCitizen] = useState({
    firstName: '',
    lastName: '',
    address: '',
    ssn: ''
  })
  const [errors, setErrors] = useState({})

  const { firstName, lastName, address, ssn } = citizen

  const handleChange = e => {
    const key = e.target.name
    const value = e.target.value

    setCitizen(prevCitizen => ({
      ...prevCitizen,
      [key]: value,
    }))
  }

  const resetCitizen = e => {
    e.preventDefault()
    setCitizen(() => ({
      firstName: '',
      lastName: '',
      address: '',
      ssn: ''
    }))
  }

  const validate = () => {
    const ssnRe = /\d{3}\-\d{2}\-\d{4}/
    let errors = {}

    if (firstName.trim().length === 0)
      errors.firstName = 'First Name is required'
    
    if (lastName.trim().length === 0)
      errors.lastName = 'Last Name is required'

    if (address.trim().length === 0)
      errors.address = 'Address is required'

    if (ssnRe.exec(ssn.trim()) === null)
      errors.ssn = 'SSN needs to be on the follow format: 111-22-4444'

    const isValid = Object.keys(errors).length === 0 && errors.constructor === Object

    return [ isValid, errors ]
  }

  const handleSubmit = async e => {
    e.preventDefault()
    let config = {}
    const data = { 
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      address: address.trim(),
      ssn
    }

    if (token) {
      config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }

      const res = await axios.post('/api/members', data, config)

      if (res.status === 200) {
        setCitizens(prevCitizens => [ ...prevCitizens, data])
      } else {
        alert(res.message)
      }
    }
  }

  useEffect(() => {
    const [ isValid, errorMsgs ] = validate()

    setDisabled(!isValid)
    setErrors(prevErrors => ({ ...prevErrors, ...errorMsgs }))
  }, [citizen])

  return <div className="citizenContainer">
    <form className="citizenForm" onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        value={firstName}
        onChange={handleChange}
        placeholder="First Name"
      />
      <input
        type="text"
        name="lastName"
        value={lastName}
        onChange={handleChange}
        placeholder="Last Name"
      />
      <input
        type="text"
        name="address"
        value={address}
        onChange={handleChange}
        placeholder="Address" />
      <input
        type="text"
        name="ssn"
        maxLength="11"
        value={ssn}
        onChange={handleChange}
        placeholder="SSN format (###-##-####)"
      />
      <div className="citizenButtons">
        <button onClick={resetCitizen}>Reset</button>
        <button disabled={disabled}>Save</button>
      </div>
    </form>
  </div>
}

