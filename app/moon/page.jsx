import React from 'react'

export default function Moon() {
  return (
    <div className='flex h-screen'>
      <section className="bg-[url('/moon-hero.png')] bg-cover bg-center flex justify-center w-full h-full p-24">
        <section className='bg-gray-100 rounded-xl flex items-center justify-center min-h-full min-w-full p-8 bg-opacity-50'>
          <label for="file-upload" class="custom-file-upload">
            Choose File 
          </label>
          <input id="file-upload" type="file" />
        </section>
      </section>
    </div>
  )
}

