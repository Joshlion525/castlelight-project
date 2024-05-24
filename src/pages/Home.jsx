import React, { useState } from "react";
import Nav from "../components/Nav";
import Three from "../assets/three11.svg";
import Logo from "../assets/CastleLogoWhite2.svg";
import ESPN from "../assets/ESPN_logos1.svg";
import logo from "../assets/Group9.svg";
import { useNavigate } from "react-router-dom";


const Home = () => {
	const [showModal, setShowModal] = useState(true);
	const [isChecked, setIsChecked] = useState(false);
	const navigate = useNavigate();


	const closeModal = () => {
		if (isChecked) {
			setShowModal(false);
		} else {
			alert("Please agree to our terms & conditions");
		}
	};
	return (
		<div>
			{showModal && (
				<div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 italic">
					<div className="bg-white w-[80%] p-3 max-h-[55%] overflow-auto ">
						<h1 className="text-xs leading-7 font-bold">
							Terms & Conditions | Privacy Policy
						</h1>
						<div className="border-t-2 border-b-2 my-3">
							<p className="text-xs leading-7 ">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Saepe eaque molestias
								architecto vitae aliquam illo? Aperiam
								laudantium reprehenderit odit eius culpa
								possimus! Qui ipsam ea dolore asperiores,
								dolorem consequatur amet! Lorem ipsum dolor sit
								amet consectetur adipisicing elit. Incidunt
								autem, Lorem ipsum dolor sit, amet consectetur
								adipisicing elit. Ratione repudiandae ab dolore
								ex, sunt dolorem corrupti molestias repellendus
								quaerat doloremque est dolores iste rerum labore
								et minus veritatis ad nostrum. Lorem ipsum dolor
								sit amet consectetur adipisicing elit. Quidem
								quisquam autem possimus repellat assumenda
								facilis et eum aut totam voluptatum facere
								veritatis atque laborum impedit illo, temporibus
								quibusdam enim nulla!
							</p>
							<div className="text-xs flex items-center gap-2 my-5">
								<input
									type="checkbox"
									id="agree"
									checked={isChecked}
									onChange={() => setIsChecked(!isChecked)}
								/>
								<label htmlFor="agree">
									I agree to all terms & conditions
								</label>
							</div>
						</div>
						<div className="flex justify-end">
							<button
								className="bg-[#5f5f5f] hover:bg-[#00833F] text-white py-1 px-4 rounded-md"
								onClick={closeModal}
							>
								Continue
							</button>
						</div>
					</div>
				</div>
			)}
			<Nav />
			<div>
				<div className="px-3 py-16">
					<h1 className="text-center uppercase text-2xl text-white leading-10 italic">
						Stand a chance to win an{" "}
						<span className="text-[#00833F] text-3xl">
							ESPN EXPERIENCE
						</span>{" "}
						WITH A LIVE BASKETBALL GAME IN NYC
					</h1>
				</div>
				<div className="flex justify-center pt-2 pb-8 px-3">
					<img src={Three} alt="" className="w-full" />
				</div>
				<div className="px-3">
					<span className="block w-full h-[1px] bg-white"></span>
				</div>
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
				<div className="px-3">
					<span className="block w-full h-[1px] bg-white"></span>
				</div>
				<div className="flex justify-center py-8">
					<button
						className="bg-[#00833F] text-white py-3 px-20 rounded-sm"
						onClick={() => navigate("/register")}
					>
						REGISTER
					</button>
				</div>
			</div>
			<div className="bg-[#012169] border-t-2">
				<div className="flex justify-center items-center gap-7 py-5">
					<div>
						<img src={Logo} alt="" />
					</div>
					<span className="block w-[1px] h-16 bg-white"></span>
					<div>
						<img src={ESPN} alt="" />
					</div>
				</div>
				<h1 className="text-center italic text-white text-lg">
					LITE SIDE OF THE COURT
				</h1>
				<div className="flex justify-between items-center text-white text-xs pt-16 pb-4 px-2">
					<div>
						<div className="flex items-center gap-2">
							<img src={logo} alt="" />
							<p>Drink Responsibly</p>
						</div>
					</div>
					<div>
						<p>Terms of Service | Privacy</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
