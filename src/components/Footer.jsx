import React from "react";
import logo from "../assets/Group9.svg";
import Logo from "../assets/CastleLogoWhite3.svg";
import ESPN from "../assets/ESPN_logos2.svg";

const Footer = () => {
	return (
		<div className="flex items-center justify-between px-3">
			<div className="flex items-center gap-2 text-white text-xs">
				<img src={logo} alt="" />
				<p>Drink Responsibly</p>
			</div>
			<div className="flex justify-center items-center gap-3 py-2">
				<div>
					<img src={Logo} alt="" />
				</div>
				<span className="block w-[1px] h-7 bg-white"></span>
				<div>
					<img src={ESPN} alt="" />
				</div>
			</div>
		</div>
	);
};

export default Footer;
