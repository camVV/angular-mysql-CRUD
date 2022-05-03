"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
const keys_1 = __importDefault(require("./keys"));
const conexionDB = mysql_1.default.createPool(keys_1.default.database);
conexionDB.getConnection(function () {
    console.log('DB is conected por fin');
    // Connection is automatically released when query resolves
});
exports.default = conexionDB;
