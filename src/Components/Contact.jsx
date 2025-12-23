import {} from '../assets/assets'


const Contact = () => {
  return (
    <div className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='Contact'>
        <h2 className='text-2xl sm:text-4xl font-bold'>Contact <span className='underline decoration-1 underline-offset-4 font-light under'>With Us</span></h2>
        <p className='text-center text-grey-500 mb-12 mx-auto'>Ready to Make a Move? Let's Build Your Futer Together</p>

        <form className='max-w-2xl mx-auto text-gray-600 pt-8'>
            <div className='flex flex-wrap '>
                <div className='w-full md:w-1/2 text-left'>
                    Your Name:
                    <input type="text" placeholder='Your Name' className='w-full border border-grey-300 rounded py-3 px-3 mt-2' required/>
                </div>
                <div className='w-full md:w-1/2 text-left md:pl-4'>
                    Your Email:
                    <input type="text" placeholder='Your Email' className='w-full border border-grey-300 rounded py-3 px-3 mt-2' required/>
                </div>
            </div>
            <div className='text-left my-6'>
                Message
                <textarea name="Message" placeholder='Message' className='w-full border border-gray-300 rounded py-3 px-4 h-48 resize-none' required></textarea>
            </div>
            <button className='bg-blue-600 text-white px-10 py-3'>Send Message</button>
        </form>


    </div>
  )
}

export default Contact
