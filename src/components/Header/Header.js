import { useState } from 'react'
import { header } from '../../portfolio'
import Navbar from '../Navbar/Navbar'
import './Header.css'

const Header = () => {
  const { homepage, title } = header

  const [email, setEmail] = useState(title)

  return (
    <header className='header center'>
      <button onClick={() => setEmail(email === title ? homepage : title)} type='button' className={email === homepage && 'email'}>{email}</button>
      <Navbar />
    </header>
  )
}

export default Header
