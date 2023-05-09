import Image from 'next/image'
import QR from 'public/image-qr-code.png'

export default function Home() {
  return (
    <main className="flex flex-col h-screen bg-blue-100">
      <div className='flex h-screen justify-center items-center'>
        <section className='w-[350px] h-[550px] bg-white rounded-xl p-4'>
          <Image className='rounded-xl h-64 w-full object-cover' src={QR}></Image>
          <h1 className='text-center font-bold text-2xl text-blue-950 my-8'>Improve your front-end skills by building projects</h1>
          <p className='text-center text-gray-600 text-lg'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </section>
      </div>
    </main>
  )
}
