import "colors";
import { Tareas } from "./models/tareas.js";
// import { mostrarMenu,pausa } from "./helpers/mensajes";
import {
	inquirerMenu,
	pausa,
	leerInput,
	listadoBorrarTarea,
	confirmar,
	mostrarListadoChecklist,
} from "./helpers/inquirer.js";
import { guardarDB, leerDB } from "./helpers/guardarArchivo.js";

const main = async () => {
	let opt = "";
	const tareas = new Tareas();

	const tareasDB = leerDB();

	// Establecer tareas
	if (tareasDB) {
		tareas.makeTaskFromArray(tareasDB);
	}

	do {
		opt = await inquirerMenu();

		switch (opt) {
			case "1":
				// TODO: Crear opcion
				const desc = await leerInput("Descripcion: ");

				tareas.crearTarea(desc);

				console.log(desc);
				break;

			case "2":
				tareas.listadoCompleto();
				break;

			case "3":
				// TODO:
				// console.log(tareas.listadoArr);
				tareas.listarTareasCompletadasPnedientes(true);
				break;

			case "4":
				// TODO:
				// console.log(tareas.listadoArr);
				tareas.listarTareasCompletadasPnedientes(false);
				break;

			case "5":
				// TODO:
				// console.log(tareas.listadoArr);
				const ids = await mostrarListadoChecklist(tareas.listadoArr);
				tareas.toggleCompletadas(ids);
				break;

			case "6":
				const id = await listadoBorrarTarea(tareas.listadoArr);
				const verificar = await confirmar("Estas seguro de borrar?");

				if (id !== 0)
					if (verificar) {
						tareas.borrarTarea(id);
						console.log("Tarea borrada correctamente.".green);
					}
				// console.log({ verificar });
				break;
		}

		guardarDB(tareas.listadoArr);

		await pausa();
	} while (opt !== "0");
};

main();
