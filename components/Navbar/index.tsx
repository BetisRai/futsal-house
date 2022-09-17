import Link from "next/link";
import Image from "next/image";
import Button from "../Button";
import LinkItem from "./LinkItem";

import { useUser } from "@auth0/nextjs-auth0";

interface NavbarProps {
    path: string
}

export default function Navbar(props: NavbarProps): JSX.Element {
  const { user, error, isLoading } = useUser();

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
        <LinkItem path={props.path} href="/"> Home </LinkItem>
        <LinkItem path={props.path} href="/futsal"> Futsal </LinkItem>                
        <LinkItem path={props.path} href="/about"> About </LinkItem>
        <LinkItem path={props.path} href="/contact"> Contact </LinkItem>                
      </ul>

      <div className="flex gap-8">
        {isLoading && <div> Loading... </div>}
        {error && <div> {error.message} </div>}
        <Button>
          <>
            {user && <p> {user.name}</p>}
            {!user && <Link href={"/api/auth/login"}> Login </Link>}
          </>
        </Button>
        <Button>
          <Link href={"/api/auth/logout"}> Logout </Link>
        </Button>
      </div>
    </nav>
  );
}
