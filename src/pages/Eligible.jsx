import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Eligible = () => {
	const navigate = useNavigate();
	const [selected, setSelected] = useState("");

	const handleButtonClick = (choice) => {
		setSelected(choice);
		if (choice === "yes") {
			navigate("/home");
		} else {
			navigate("/notlegal");
		}
	};

	return (
		<div className="flex flex-col justify-between min-h-screen">
			<div>
				<Nav />
				<div className="mt-20">
					<h1 className="text-white italic text-4xl text-center px-6">
						SLIDE IF YOU’RE 18 YEARS OR OVER
					</h1>
				</div>
				<div className="flex items-center justify-center gap-10 text-white mt-10 px-10">
					<button
						type="button"
						className={`py-4 w-full rounded-lg ${
							selected === "yes" ? "bg-[#00833F]" : "bg-gray-500"
						} hover:bg-[#00692E]`}
						onClick={() => handleButtonClick("yes")}
					>
						Yes
					</button>
					<button
						type="button"
						className={`py-4 w-full rounded-lg ${
							selected === "no" ? "bg-[#00833F]" : "bg-gray-500"
						} hover:bg-[#00692E]`}
						onClick={() => handleButtonClick("no")}
					>
						No
					</button>
				</div>
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
};

export default Eligible;
