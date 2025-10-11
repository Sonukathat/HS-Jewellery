import { useNavigate } from "react-router-dom"

function Getknow() {

  const navigate = useNavigate();

  return (
    <div className="bg-[#FFD5D5] flex flex-col items-center py-10 gap-6">
      <h2 className="text-2xl font-serif">Get to know H&M</h2>
      <button onClick={() => navigate('/get-to-know')} className="bg-white px-8 py-3 rounded-lg cursor-pointer">Read Here</button>
    </div>
  )
}

export default Getknow
