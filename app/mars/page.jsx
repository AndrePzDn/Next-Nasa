import React from 'react'

export default function Mars() {
  return (
    <div className='flex h-screen'>
      <section className="bg-[url('/mars-hero.png')] bg-cover bg-center flex justify-center w-full h-full p-24">
        <section className='bg-gray-100 rounded-xl flex items-center justify-center min-h-full min-w-full p-8 bg-opacity-50'>
          <label for="file-upload" class="custom-file-upload">
            Custom Upload
          </label>
          <input id="file-upload" type="file" />
        </section>
      </section>
    </div>
  )
}

