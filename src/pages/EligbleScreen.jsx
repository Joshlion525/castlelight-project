import React from "react";
import Nav from "../components/Nav";
import logo from "../assets/Group9.svg";
import Logo from "../assets/CastleLogoWhite3.svg";
import ESPN from "../assets/ESPN_logos2.svg";


const Eligble = () => {

	return (
		<div className="backGround min-h-screen font-Ciutadella flex flex-col justify-between">
			<div>
				<Nav />
				<div className="text-white text-center px-16 itali mt-10 ">
					<h1 className="text-3xl mb-3">
						Thank you for signing up for the Castle Lite ESPN
						Experience!
					</h1>
					<p className="text-lg">
						{" "}
						You will receive an email notification shortly, be sure
						to keep an eye on your inbox for important updates about
						the competition.
					</p>
				</div>
			</div>
			<div>
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
			</div>
		</div>
	);
};

export default Eligble;
