import React from "react";
import Nav from "../components/Nav";

const RegisterFormScreen = () => {
	return (
		<div className="backGround min-h-screen font-Ciutadella">
			<Nav />
			<div className="px-3 pb-10">
				<form action="">
					<div className="flex flex-col gap-2 mb-5">
						<label htmlFor="firstname" className="text-white">
							First name
						</label>
						<input
							type="text"
							className="border border-none outline-none px-2 h-12 rounded-lg bg-[#b3b5b6] text-white "
							id="firstname"
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
						/>
					</div>
					<div className="flex flex-col gap-2 mb-5">
						<label htmlFor="email" className="text-white">
							Email Address
						</label>
						<input
							type="mail"
							className="border border-none outline-none px-2 h-12 rounded-lg bg-[#b3b5b6] text-white "
							id="email"
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
						>
							<option value="male">Male</option>
							<option value="female">Female</option>
						</select>
					</div>
					<div className="flex flex-col gap-2 mb-5">
						<label htmlFor="phonenumber" className="text-white">
							Email Address
						</label>
						<input
							type="number"
							className="border border-none outline-none px-2 h-12 rounded-lg bg-[#b3b5b6] text-white "
							id="phonenumber"
						/>
					</div>
					<div className="flex flex-col gap-2 mb-5">
						<label htmlFor="email" className="text-white">
							Valid International Passport & USA Visa?
						</label>
						<input
							type="mail"
							className="border border-none outline-none px-2 h-12 rounded-lg bg-[#b3b5b6] text-white "
							id="email"
						/>
					</div>
					<div className="flex justify-center mt-10">
						<button
							type="submit"
							className="bg-[#00833F] text-white w-full py-3 px-20 rounded-sm"
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
