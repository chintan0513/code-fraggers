import boyImage from '../../assets/Frameboy.png';
import '../../styles/boy.css';

const Boy=props=>{
    return( 
    <section>
        <img src={boyImage} alt='Boy Image' className='boyImg' ></img>
    </section>
    )
}
export default Boy;