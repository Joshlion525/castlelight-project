import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Participate = () => {
	return (
		<div className="backGround font-Ciutadella flex flex-col justify-between min-h-screen">
			<div>
				<Nav />
				<div className="text-white italic text-center bg-[#012169] rounded-3xl shadow-2xl my-6 mx-3 py-20 px-2">
					<h1 className="text-2xl mb-10">HOW TO PARTICIPATE</h1>
					<p className="mb-10">
						a) Make a funny but creative 15-seconds video doing a
						Castle Lite Crown Cork toss, Castle Lite bottle should
						be in the video.        
					</p>
					<p className="mb-10">
						b) Upload the video on social media, tag @castleliteng
						and #CastleLiteEspnExperience #Litesideofthecourt{" "}
					</p>
					<p className="mb-10">
						c) Be present on the 8th of June at the designated venue
						(venue to be communicated via email) at 8am to
						participate in the games{" "}
					</p>
					<p className="mb-10">
						{" "}
						d) Participate in and Win all games at the stipulated
						time
					</p>
					<p className="mb-10">
						e) Celebrate your win with your friends and family on
						socials  
					</p>
					<p>
						{" "}
						N/B: MUST HAVE A VALID INTERNATIONAL PASSPORT AND USA
						VISA TO PARTICIPATE  
					</p>
				</div>
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
};

export default Participate;
