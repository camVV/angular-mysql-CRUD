"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class TareasController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query("SELECT * FROM tareas", function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const sql = "SELECT * FROM tareas WHERE id = '" + [id] + "'";
            yield database_1.default.query(sql, (err, result) => {
                if (!result[0]) {
                    return res.status(400).json({ error: 'no hay resultados para este id: ' + [id] });
                }
                else {
                    console.log(result);
                    return res.json(result);
                }
            });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO tareas set ?', [req.body], function (err, result) {
                if (err)
                    throw err;
                res.json({ Text: 'tarea creada' });
            });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query("DELETE FROM tareas WHERE id='" + req.params.id + "'", function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result + { text: 'eliminando tarea' });
            });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            yield database_1.default.query("UPDATE tareas set? WHERE id = ?", [req.body, id], (err, result) => {
                if (err)
                    throw err;
                res.json({ text: 'el juego con id: ' + [id] + " se actualizo correctamente" });
            });
        });
    }
}
const tareaController = new TareasController();
exports.default = tareaController;
