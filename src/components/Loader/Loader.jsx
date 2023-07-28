import './Loader.css'
export const Loader = () => {
  return (
    <div className='bg-black h-screen flex justify-center items-center w-full z-50 top-0 left-0'>
        <div className="custom-loader text-white">
            <img src="/assets/img/loader.png" alt="" />
        </div>
    </div>
    
  )
}
