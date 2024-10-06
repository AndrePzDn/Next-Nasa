import moon from './assets/moon-planet.png'
import mars from './assets/mars-planet.png'
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="grid grid-cols-2 grid-rows-1 h-screen bg-black">
      <Link
              className="bg-[url('./assets/moon.png')] bg-cover bg-center flex flex-col items-center justify-center h-full opacity-70 hover:opacity-100 transition duration-300 ease-in-out p-4 gap-4" href={'/moon'}    >
        <Image src={moon} alt='moon'/>
        <h2 className="text-white text-4xl">Moon</h2>
      </Link>

        <Link
              className="bg-[url('./assets/mars.png')] bg-cover bg-center flex flex-col p-4 gap-4 items-center justify-center h-full hover:opacity-100 opacity-70 transition duration-300 ease-in-out" href={'/mars'}      >
        <Image src={mars} alt='mars'/>
          <h2 className="text-white text-4xl">Mars</h2>
        </Link>
      </div>
  );
}
