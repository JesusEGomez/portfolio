import { BiMailSend } from 'react-icons/bi';
import { contact } from '../portFolio';
const Contact = () => {
    return (
        <section id='contact' className='flex flex-col items-center'>
            <h2 className='title-section'>Contacto</h2>
            <a href={`mailto:${contact.email}`}>
                <button className='m-1 btn bg-azul text-4xl h-fit w-28  text-clarito'> <BiMailSend className=' text-clarito' /></button>
            </a>
        </section>
    )
}

export default Contact