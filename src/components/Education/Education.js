import { education } from '../../portfolio'
import './Education.css'

const Education = () => (
    <div className='section' id='education'>
        <h2 className='section__title'>Education</h2>
        <section className='section education'>    
            <span className='education_grid'>
                <h3>{education.name}</h3>
                <h6>{education.degree}</h6>
                <h6>{education.award}</h6>
            </span>
        </section>
    </div>

)

export default Education