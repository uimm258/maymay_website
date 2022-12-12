import { contact } from '../../portfolio'
import './Contact.css'
import pdfFile from './Maymay_Liu.pdf'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact & Resume</h2>
      <a href={`mailto:${contact.email}`}>
        <span type='button' className='btn btn--outline'>
          Email me
        </span>
      </a>
      <a href = {pdfFile} target = "_blank" rel="noreferrer">
        <span type='button' className='btn btn--outline'> My Resume</span>
      </a>
    </section>
  )
}

export default Contact
