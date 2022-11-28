import React from 'react'
import Carousel from '../components/Carousel'
import Subsidiaries from '../components/Subsidiaries'
import Categories from "../components/Categories";


function home() {
  return (
    <>
      <section className='bg-gradient-to-br from-gray-700	to-gray-900 py-2'>
        <Carousel />
        <div className='my-4 px-6 flex flex-col md:flex-row gap-3 justify-center items-center'>
          <Subsidiaries />
        </div>
        <section className='h-4/5 bg-background-dark-2 mt-8 px-6 py-3'>
          <Categories />
        </section>
      </section>

    </>


  )
}

export default home