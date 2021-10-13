import Image from "next/image";
import {
  SearchIcon,
  MenuIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { useSession, signIn, signOut } from "next-auth/client";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

const Header = () => {
  const [session] = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);

  return (
    <header>
      {/* Top Navbar */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        {/* left */}
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            onClick={() => router.push("/")}
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>

        {/* SearchIcon */}
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none border-2"
            type="text"
          />
          <SearchIcon className="h-12 p-4" />
        </div>

        {/* right */}
        <div className="items-center flex text-xs space-x-6 mx-6 text-white">
          <div onClick={!session ? signIn : signOut} className="link">
            <p className="hover:underline">
              {session ? `Hello, ${session.user.name}` : "Sign In"}
            </p>
            <p className="font-extrabold md:text-xs">Account & Lists</p>
          </div>

          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-xs">& Order</p>
          </div>

          <div
            onClick={() => router.push("/checkout")}
            className="relative link flex items-center"
          >
            <span className="absolute top-0 right-0 md:right-7 h-4 w-4 text-center rounded-full bg-yellow-500 text-white font-bold">
              {items.length}
            </span>

            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-extrabold md:text-sm mt-2">
              Cart
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Navbar */}
      <div className="flex items-center space-x-3 p-2 text-sm bg-amazon_blue-light text-white">
        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Product</p>
        <p className="link">Technology</p>
        <p className="link">Book</p>
        <p className="link hidden lg:inline-flex">Video</p>
        <p className="link hidden lg:inline-flex">Tablet</p>
        <p className="link hidden lg:inline-flex">Laptop</p>
        <p className="link hidden lg:inline-flex">Cook</p>
        <p className="link hidden lg:inline-flex">Clean Car</p>
      </div>
    </header>
  );
};

export default Header;
