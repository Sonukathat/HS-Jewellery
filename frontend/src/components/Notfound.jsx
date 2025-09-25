import { useNavigate } from 'react-router-dom'
import notfoundimg from '../assets/404-Error-Animation-4.gif'

function Notfound() {

    const navigate = useNavigate()

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gradient-to-r from-[#f8dcdb] via-white to-[#f8dcdb]'>
        <img src={notfoundimg} alt="not found" className='h-1/3 w-1/2 md:w-1/3 md:h-1/2'/>
        <h2 className='text-xl md:text-3xl font-bold'>Page Not Found</h2>
        <button onClick={()=>navigate('/')} className='bg-[#f8dcdb] py-1 px-4 rounded-sm mt-6 font-medium cursor-pointer md:py-2 md:px-8'>GO TO HOME</button>
    </div>
  )
}

export default Notfound
