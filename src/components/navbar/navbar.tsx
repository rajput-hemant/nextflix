import Link from "next/link";

interface NavbarProps {
  username: string;
}

const Navbar = ({ username }: NavbarProps) => {
  return (
    // container
    <div className="fixed top-0 w-full z-50 bg-gradient-to-b from-black to-transparent">
      {/* wrapper */}
      <div className="px-4 flex py-5 md:px-16 md:flex-row md:items-center">
        {/* logo link */}
        <Link href="/" className="flex font-medium items-center mb-4 md:mb-0">
          {/* logo wrapper */}
          <div className="text-red-700 w-32">Nextflix</div>
        </Link>
        {/* navitems */}
        <ul className="flex flex-row w-1/2 ml-6 md:ml-12">
          <li className="font-semibold cursor-pointer mr-3 md:mr-5">Home</li>
          <li className="cursor-pointer">My List</li>
        </ul>
        {/* nav container */}
        <nav className="flex items-start ml-auto">
          <div>
            {/* username button */}
            <button className="flex items-center overflow-hidden">
              {/* username */}
              <p>{username}</p>
              {/* expand more icon */}
            </button>
            {/* nav dropdown */}
            <div className="absolute ml-auto mt-2 p-2 bg-black rounded-md shadow-md shadow-gray-500">
              <div>
                {/* linkname */}
                <a
                  href="#"
                  className="block px-2 rounded cursor-pointer hover:underline"
                >
                  Sign out
                </a>
                {/* <div className="py-2" /> */}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
