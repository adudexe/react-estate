import React, { useEffect, useState } from 'react'
import { assets, projectsData } from '../assets/assets'

const Projects = () => {

    const [currentIndex,setCurrentIndex] = useState(0);
    const [cardsToShow,setCardsToShow] = useState(1);

    const nextProject = () => {
        setCurrentIndex( (prev) => (prev + 1) % projectsData.length)
    }

    const previousProject = () => {
        setCurrentIndex( (prev) => prev === 0 ? projectsData.length-1 : prev - 1 )  
    }

    useEffect(() => {
        
        const updateCardToShow = () => {
            if(window.innerWidth >= 1024){
                setCardsToShow(projectsData.length)
            } else {
                setCardsToShow(1)
            }
        }

        updateCardToShow();
         
        window.addEventListener('resize',updateCardToShow);

        return () => window.removeEventListener('resize',updateCardToShow);


    },[]) 


  return (
    <div className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden min-h-full' id='Projects'>
        <h1 className='text-2xl font-bold sm:text-4xl mb-2 text-center'>Projects <span className='font-light underline underline-offset-4 under decoration-1'>Completed</span></h1>
        <p className='text-center mb-8 max-w-80 mx-auto text-gray-500'>Crafting Spaces, Building Legacies--Explore Our Portfolio</p>

        {/*-------Slider Button-------*/}
        <div className='flex justify-end items-center mb-8'>
            <button className='p-3 bg-gray-200 rounded mr-2' aria-label='Previous Project' onClick={previousProject}>
                <img src={assets.left_arrow} alt="Previous"/>
            </button>
            <button className='p-3 bg-gray-200 rounded mr-2' aria-label='Next Project' onClick={nextProject}>
                <img src={assets.right_arrow} alt="Next" />
            </button>
        </div>

        {/*Project Slider Container */}
        <div className='overflow-hidden'>
            <div className='flex gap-8 transition-transform duration-500 ease-in-out' style={{ transform:`translateX(-${(currentIndex * 100) / cardsToShow}%)` }}>
                {projectsData.map((proj,i) => { 
                    return(
                        <div key={i} className='relative flex-shrink-0 w-full sm:w-1/4'>
                            <img src={proj.image} alt={proj.title} className='w-full h-auto mb-14'/> 
                            <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                                <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-md'>
                                    <h2 className='text-xl font-semibold text-gray-800'>
                                        {proj.title}
                                    </h2>
                                    <p className='text-gray-500 text-sm'>
                                        {proj.price} <span>{proj.location}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                 })}
            </div>
        </div>

    </div>
  )
}

export default Projects
