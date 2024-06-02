import React, { useState } from "react";
import Nav from "../components/Nav";
import { useNavigate } from "react-router-dom";

const RegisterFormScreen = () => {
	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		firstname: "",
		surname: "",
		dob: "",
		email: "",
		gender: "",
		phonenumber: "",
		passport: "",
	});

	const handleChange = (event) => {
		const { id, value } = event.target;
		setFormData((prevData) => ({
			...prevData,
			[id]: value,
		}));
	};

	const handleRadioChange = (value) => {
		setFormData((prevData) => ({
			...prevData,
			passport: value,
		}));
	};

	const submitData = (event) => {
		event.preventDefault();
		const dobDate = new Date(formData.dob);
		const age = new Date().getFullYear() - dobDate.getFullYear();
		const monthDifference = new Date().getMonth() - dobDate.getMonth();

		if (
			monthDifference < 0 ||
			(monthDifference === 0 && new Date().getDate() < dobDate.getDate())
		) {
		}

		if (age < 18) {
			alert("You must be at least 18 years old.");
			return;
		}
		if (formData.passport === "yes") {
			navigate("/eligible");
		}
		if (formData.passport === "no") {
			navigate("/noteligible");
		}

		console.log("Form Data Submitted:", formData);

		setFormData({
			firstname: "",
			surname: "",
			dob: "",
			email: "",
			gender: "",
			phonenumber: "",
			passport: "",
		});
	};

	return (
		<div className=" min-h-screen font-Ciutadella">
			<div className="px-3 pb-10">
				<form action="" onSubmit={submitData}>
					<div className="flex flex-col gap-2 mb-5">
						<label htmlFor="firstname" className="text-white">
							First name
						</label>
						<input
							type="text"
							className="border border-none outline-none px-2 h-12 rounded-lg bg-[#b3b5b6] text-white "
							id="firstname"
							value={formData.firstname}
							onChange={handleChange}
							required
						/>
					</div>
					<div className="flex flex-col gap-2 mb-5">
						<label htmlFor="surname" className="text-white">
							Surname
						</label>
						<input
							type="text"
							className="border border-none outline-none px-2 h-12 rounded-lg bg-[#b3b5b6] text-white "
							id="surname"
							value={formData.surname}
							onChange={handleChange}
							required
						/>
					</div>
					<div className="flex flex-col gap-2 mb-5">
						<label htmlFor="dob" className="text-white">
							Date of birth
						</label>
						<input
							type="date"
							className="border border-none outline-none px-2 h-12 rounded-lg bg-[#b3b5b6] text-white "
							id="dob"
							max="2024-12-31"
							value={formData.dob}
							onChange={handleChange}
							required
						/>
					</div>
					<div className="flex flex-col gap-2 mb-5">
						<label htmlFor="email" className="text-white">
							Email Address
						</label>
						<input
							type="email"
							className="border border-none outline-none px-2 h-12 rounded-lg bg-[#b3b5b6] text-white "
							id="email"
							value={formData.email}
							onChange={handleChange}
							required
						/>
					</div>
					<div className="flex flex-col gap-2 mb-5">
						<label htmlFor="gender" className="text-white">
							Gender
						</label>
						<select
							name=""
							id="gender"
							className="border border-none outline-none px-2 h-12 rounded-lg bg-[#b3b5b6] text-white"
							value={formData.gender}
							onChange={handleChange}
							required
						>
							<option value="male">Male</option>
							<option value="female">Female</option>
						</select>
					</div>
					<div className="flex flex-col gap-2 mb-5">
						<label htmlFor="phonenumber" className="text-white">
							Phone Number
						</label>
						<input
							type="text"
							className="border border-none outline-none px-2 h-12 rounded-lg bg-[#b3b5b6] text-white "
							id="phonenumber"
							value={formData.phonenumber}
							onChange={handleChange}
							required
						/>
					</div>
					<div className="flex flex-col gap-2 mb-5">
						<label htmlFor="passport" className="text-white">
							Valid International Passport & USA Visa?
						</label>
						<div className="flex items-center justify-center gap-10 text-white">
							<button
								type="button"
								className={`py-4 w-full rounded-lg ${
									formData.passport === "yes"
										? "bg-[#00833F]"
										: "bg-gray-500"
								} hover:bg-[#00833F]`}
								onClick={() => handleRadioChange("yes")}
							>
								Yes
							</button>
							<button
								type="button"
								className={`py-4 w-full rounded-lg ${
									formData.passport === "no"
										? "bg-[#00833F]"
										: "bg-gray-500"
								} hover:bg-[#00833F]`}
								onClick={() => handleRadioChange("no")}
							>
								No
							</button>
						</div>
					</div>
					<div className="flex justify-center mt-10">
						<button
							type="submit"
							className="bg-[#00833F] text-white w-full py-4 px-20 rounded-lg"
						>
							CREATE
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default RegisterFormScreen;
