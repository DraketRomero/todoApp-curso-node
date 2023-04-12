import fs from "fs";

const arch = "./db/data.json";

export const guardarDB = (data) => {
	fs.writeFileSync(arch, JSON.stringify(data));
};

export const leerDB = () => {
	if (!fs.existsSync(arch)) return null;

	const info = fs.readFileSync(arch, { encoding: "utf-8" });
	const data = JSON.parse(info);

	console.log(data);

	return data;
	// console.log(fs.readFileSync(arch, { encoding: "utf-8" }));
};
