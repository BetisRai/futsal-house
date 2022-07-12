import Image from 'next/image';
import Button from '../Button';

export default function Navbar(): JSX.Element {

  return (
    <nav className="w-full flex justify-between items-center px-40 py-5">
      <div>
        <Image
          src="/images/logo.png"
          alt="Futsal House Logo"
          width="114px"
          height="44px"
          layout="intrinsic"
        />
      </div>
      <ul className="flex justify-between gap-8">
        <li className="px-4 text-lg font-medium text-white border-b-2 border-b-transparent hover:border-b-white hover:scale-105 transition-all">
          <a href="#"> Home </a>
        </li>
        <li className="px-4 text-lg font-medium text-white border-b-2 border-b-transparent hover:border-b-white hover:scale-105 transition-all">
          <a href="#"> Futsal </a>
        </li>
        <li className="px-4 text-lg font-medium text-white border-b-2 border-b-transparent hover:border-b-white hover:scale-105 transition-all">
          <a href="#"> About </a>
        </li>
        <li className="px-4 text-lg font-medium text-white border-b-2 border-b-transparent hover:border-b-white hover:scale-105 transition-all">
          <a href="#"> Contact </a>
        </li>
      </ul>

      <div className="flex gap-8">
	<Button> Login </Button>
	<Button> Register </Button>        
      </div>
    </nav>
  );
}
