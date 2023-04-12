import { Tarea } from "./tarea.js";
import "colors";

export class Tareas {
	_listado = {};

	get listadoArr() {
		const listado = [];
		Object.keys(this._listado).forEach((key) =>
			listado.push(this._listado[key])
		);

		return listado;
	}

	constructor() {
		this._listado = {};
	}

	borrarTarea(id = "") {
		if (this._listado[id]) {
			delete this._listado[id];
		}
	}

	makeTaskFromArray(tareas = []) {
		tareas.forEach((tarea) => {
			this._listado[tarea.id] = tarea;
		});
	}

	crearTarea(desc = "") {
		const tarea = new Tarea(desc);

		this._listado[tarea.id] = tarea;
	}

	listadoCompleto() {
		console.log();
		this.listadoArr.forEach((task, idx) => {
			const ts = `${idx + 1}`.green;
			const { desc, completadoEn } = task;

			const edo = completadoEn ? "Completada".green : "Pendiente".red;

			console.log(`${ts} ${desc} :: ${edo}`);
		});
	}

	listarTareasCompletadasPnedientes(completadas = true) {
		console.log();
		let ctr = 0;
		this.listadoArr.forEach((task) => {
			const { desc, completadoEn } = task;
			const edo = completadoEn ? "Completada".green : "Pendiente".red;

			if (completadas) {
				if (completadoEn) {
					ctr++;
					console.log(`${`${ctr}.- `.green} ${desc} :: ${completadoEn.green}`);
				}
			} else {
				if (!completadoEn) {
					ctr++;
					console.log(`${`${ctr}.- `.green} ${desc} :: ${edo}`);
				}
			}
		});
	}

	toggleCompletadas(ids = []) {
		ids.forEach((id) => {
			const tsk = this._listado[id];
			if (!tsk.completadoEn) {
				tsk.completadoEn = new Date().toISOString();
			}
		});

		this.listadoArr.forEach((tsk) => {
			if (!ids.includes(tsk.id)) {
				this._listado[tsk.id].completadoEn = null;
			}
		});
	}
}
