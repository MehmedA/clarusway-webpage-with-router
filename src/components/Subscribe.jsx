import React from 'react';

const Subscribe = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-between bg-gray-600 p-10'>
        <div><h2 className='text-white text-2xl font-bold'>Subscribe To Our Newsletter</h2></div>
        <form className='flex gap-3 m-auto sm:m-0'>
            <input type='email' placeholder='Enter Email...' className='px-2 rounded-m outline-none sm:m-4'/>
            <button className='text-white bg-red-600 px-6 py-2 rounded-m sm:m-4'>Subscribe</button>
        </form>
    </div>
  );
}

export default Subscribe;
