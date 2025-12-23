import { assets } from '../assets/assets'


const Footer = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='Footer'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
            <div className='w-full md:w-1/3 mb-8 md:mb-0 '>
                <img src={assets.logo_dark} alt="" />
                <p className='text-gray-400 mt-4'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet augue quis enim rutrum
                    sollicitudin ac in nibh. Nulla aliquam ac tortor vulputate iaculis. Aliquam sit amet lacinia 
                    turpis. Vivamus tincidunt, dolor quis egestas feugiat, neque est posuere turpis, non efficitur 
                    enim lectus et velit. Nam varius lobortis mi a posuere.
                </p>
            </div>
            <div className='w-full md:w-1/5 mb-8 md:mb-0'>
                <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
                <ul className='flex flex-col gap-2 text-gray-400'>
                    <a href="#Header" className='hover:text-white'>Home</a>
                    <a href="#Header" className='hover:text-white'>About us</a>
                    <a href="#Header" className='hover:text-white'>Contact us</a>
                    <a href="#Header" className='hover:text-white'>Privacy Policy</a>
                </ul>
            </div>
            <div className='w-full md:w-1/3'>
                <h3 className='text-white text-lg font-bold mb-4'>Subscribe to our NewsLetter</h3>
                <p className='text-gray-400 mb-4 max-w-80'>The latest news, and article, and resources, sent to your ibox weekly.</p>
                <div className='flex gap-2'>
                    <input type="email" placeholder='Enter your email' className='p-2 rounded bg-gray-800 text-gray-400 border-gray-700 focus:outline-none w-full md:w-auto' />
                    <button className='py-2 px-4 rounded bg-blue-500 text-whtie'>Subscribe</button>
                </div>
            </div>
        </div>
        <div className='border-t border-gray-700 py-4 mt-10 text-gray-500 text-center'>
            Copyright 2025 © adudeAll Right Reserved.
        </div>
    </div>
  )
}

export default Footer
