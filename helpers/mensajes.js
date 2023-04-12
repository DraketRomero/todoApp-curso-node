import "colors";
import rd from "readline";

export const mostrarMenu = () => {
	return new Promise<string>((resolve) => {
		console.clear();
		console.log("===========================".green);
		console.log("== Seleccione una opcion ==".green);
		console.log("===========================".green);

		console.log(`== ${"1.".red} Crear tarea.                ==`);
		console.log(`== ${"2.".red} Listar tareas.              ==`);
		console.log(`== ${"3.".red} Listar tareas completadas.  ==`);
		console.log(`== ${"4.".red} Listar tareas pendientes.   ==`);
		console.log(`== ${"5.".red} Completar tareas(s).        ==`);
		console.log(`== ${"6.".red} Borrar tarea.               ==`);
		console.log(`== ${"0.".red} Salir                       ==\n `);

		const readline = rd.createInterface({
			input: process.stdin,
			output: process.stdout,
		});

		readline.question("Selecciona una opcion: ", (opt) => {
			readline.close();

			resolve(opt);
		});
	});
};

export const pausa = () => {
	return new Promise((resolve) => {
		const readline = rd.createInterface({
			input: process.stdin,
			output: process.stdout,
		});

		readline.question(`\nPresione ${"ENTER".random} para continuar\n`, (opt) => {
			readline.close();
			resolve(opt);
		});
	});
};

// export { mostrarMenu, pausa };
