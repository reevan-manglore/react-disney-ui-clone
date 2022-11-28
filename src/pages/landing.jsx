import { useNavigate } from 'react-router-dom';
import cta1 from '../assets/images/cta-logo-one.svg'
import cta2 from '../assets/images/cta-logo-two.png'
export default function LandingPage() {
    const navigate = useNavigate();
    return (
        <section className="h-full grid place-items-center login-background-image">
            <div className='flex flex-col justify-center align-middle px-10 md:w-2/4'>
                <img src={cta1} alt="top call to action"  className='w-full' />
                <button 
                className='py-3 px-5 bg-background-blue rounded-md mt-4 w-full text-white font-semibold text-xl'
                onClick={()=>navigate("/home")}
                >
                    Get All Three
                </button>
                <span className='text-stone-300 text-sm text-center my-4'>
                    Get Premier Access to Raya and the Last Dragon for
                    an additional fee with a Disney+ subscription. As of
                    03/26/21. the price of Disney+ and The Disney
                    Bundle will increase by $1.
                </span>
                <img src={cta2} alt="bottom call to action"  className='w-full' />
                
            </div>
        </section>
    );
}