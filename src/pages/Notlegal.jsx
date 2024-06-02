import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Notlegal = () => {
	return (
		<div className="backGround font-Ciutadella min-h-screen flex flex-col justify-between">
			<div>
				<Nav />
				<div className="mt-10">
					<h1 className="text-white italic text-4xl text-center px-6 leading-[70px]">
						YOU MUST BE OF LEGAL DRINKING AGE TO ENTER THIS
						EXPERIENCE...
					</h1>
				</div>
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
};

export default Notlegal;
