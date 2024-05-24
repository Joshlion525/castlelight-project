import React from "react";
import Logo from "../assets/CastleLogoWhite1.svg";

const Nav = () => {
	return (
		<nav className="flex justify-center items-center py-4 px-3">
			<span className="block w-[25%] h-[1px] bg-white"></span>
			<div>
				<img src={Logo} alt="" className="w-full" />
			</div>
			<span className="block w-[25%] h-[1px] bg-white"></span>
		</nav>
	);
};

export default Nav;
