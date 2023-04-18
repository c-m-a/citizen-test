import { useState } from 'react'
import './CitizenForm.css'

export default function CitizenForm() {
  const [citizen, setCitizen] = useState({
    firstName: '',
    lastName: '',
    address: '',
    ssn: ''
  })

  const { firstName, lastName, address, ssn } = citizen

  const changeValue = e => {
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

  const saveCitizen = e => {
    e.preventDefault()
  }

  return <div className="citizenContainer">
    <form className="citizenForm">
      <input type="text" name="firstName" value={firstName} onChange={e => changeValue(e)} placeholder="First Name" />
      <input type="text" name="lastName" value={lastName} onChange={e => changeValue(e)} placeholder="Last Name" />
      <input type="text" name="address" value={address} onChange={e => changeValue(e)} placeholder="Address" />
      <input type="text" name="ssn" value={ssn} onChange={e => changeValue(e)} placeholder="SSN" />
      <div className="citizenButtons">
        <button onClick={e => resetCitizen(e)}>Reset</button>
        <button onClick={e => saveCitizen(e)}>Save</button>
      </div>
    </form>
  </div>
}

