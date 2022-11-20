import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <>
    <header className='flex flex-col sm:flex-row m-5 justify-center items-center h-auto'>
        <Link href='/'>
        <Image alt="Hulu Logo" className="object-contain cursor-pointer" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Hulu_Logo.svg/1200px-Hulu_Logo.svg.png" width={200} height={100}/>
        </Link>
    </header>
    </>
  )
}

export default Header