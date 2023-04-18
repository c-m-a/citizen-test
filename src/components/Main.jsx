import { useEffect, useState } from 'react'
import axios from '../axios'

import CitizenForm from './CitizenForm'
import CitizenList from './CitizenList'

import './Main.css'

export default function Main() {
  const [token, setToken] = useState('')
  const [citizens, setCitizens] = useState([]) 

  const getToken = () => {
    axios.post('/auth', {
      username: import.meta.env.VITE_REACT_APP_USERNAME,
      password: import.meta.env.VITE_REACT_APP_PASSWORD
    }).then(res => setToken(res.data.token))
    .catch(err => alert(`${err.message}, please check your connection`))
  }

  const getCitizens = token => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }

    if (token) {
      axios.get('/api/members', config).then(res => {
        setCitizens(res.data)
      }).catch(err => console.log(err))
    }
  }

  useEffect(() => {
    getToken()
  }, [])

  useEffect(() => {
    // get Citizens every 2 secs
    const intervalId = setInterval(getCitizens, 2000, token)
    return () => clearInterval(intervalId)
  }, [])

  useEffect(() => {
    getCitizens(token)
  }, [token])

  return <main>
    <CitizenForm token={token} citizens={citizens} setCitizens={setCitizens} />
    <CitizenList citizens={citizens} />
  </main>
}
