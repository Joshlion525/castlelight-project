import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";


const Eligble = () => {

	return (
		<div className="backGround min-h-screen font-Ciutadella flex flex-col justify-between">
			<div>
				<Nav />
				<div className="text-white text-center px-10 itali mt-10 ">
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
				<Footer />
			</div>
		</div>
	);
};

export default Eligble;
