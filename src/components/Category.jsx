import React from 'react'

export default function Category({ title, items }) {
    return (
        <section className='my-4'>
            <h3 className='text-xl text-white font-semibold mb-2'>{title}</h3>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                {items.map(e => {
                    return (
                    <div 
                    key={e.toString()}
                    className='rounded-md overflow-hidden'
                    >
                        <img src={e} alt="" className='h-full w-full object-cover'/>
                    </div>
                    );
                })}
            </div>
        </section>
    )
}
