import { magic } from "@/lib/magic-client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
	const [showDropdown, setShowDropdown] = useState(false);
	const [username, setUsername] = useState("");

	useEffect(() => {
		try {
			(async () => {
				if (magic) {
					const { email } = await magic.user.getMetadata();
					if (email) setUsername(email);
				}
			})();
		} catch (error) {
			console.log("Something went wrong!", error);
		}
	}, []);

	const logoutHandler = async () => {
		if (magic) {
			try {
				await magic.user.logout();
				console.log(await magic.user.isLoggedIn());
			} catch (error) {
				console.log("Error loggin out!", error);
			}
		}
	};

	return (
		// container
		<div className="fixed top-0 w-full z-50 bg-gradient-to-b from-black to-transparent">
			{/* wrapper */}
			<div className="px-4 flex py-5 md:px-16 md:flex-row md:items-center">
				{/* logo link */}
				<Link href="/" className="flex font-medium items-center mb-4 md:mb-0">
					{/* logo wrapper */}
					<div className="text-red-700 w-32">
						<Image
							src="/images/netflix.svg"
							width={128}
							height={32}
							alt="Netflix Logo"
						/>
					</div>
				</Link>
				{/* navitems */}
				<ul className="flex flex-row w-1/2 ml-6 md:ml-12">
					<li className="font-semibold cursor-pointer mr-3 md:mr-5">
						<Link href="/">Home</Link>
					</li>
					<li className="cursor-pointer">
						<Link href="browse/my-list">My List</Link>
					</li>
				</ul>
				{/* nav container */}
				<nav className="flex items-start ml-auto">
					<div>
						{/* username button */}
						<button
							onClick={() => setShowDropdown(!showDropdown)}
							className="flex items-center overflow-hidden"
						>
							{/* username */}
							<p>{username}</p>
							{/* expand more icon */}
							<Image
								src={"/images/expand_more.svg"}
								alt="Expand dropdown"
								width={24}
								height={24}
							/>
						</button>
						{/* nav dropdown */}
						{showDropdown && (
							<div className="absolute ml-auto mt-2 p-2 bg-black rounded-md shadow-md shadow-gray-500">
								<div>
									{/* linkname */}
									<Link
										href="/login"
										onClick={logoutHandler}
										className="block px-2 rounded cursor-pointer hover:underline"
									>
										Sign out
									</Link>
									{/* <div className="py-2" /> */}
								</div>
							</div>
						)}
					</div>
				</nav>
			</div>
		</div>
	);
};

export default Navbar;
