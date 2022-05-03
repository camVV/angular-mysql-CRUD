"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const tareasRoutes_1 = __importDefault(require("./routes/tareasRoutes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use((0, morgan_1.default)('dev')); //puedo ver petisiones al server get post etc
        this.app.use((0, cors_1.default)()); //angular pide datos al server 
        this.app.use(express_1.default.json()); //gracias a esto mi server entiende json
        this.app.use(express_1.default.urlencoded({ extended: false })); //mandar form html
    }
    routes() {
        this.app.use(indexRoutes_1.default);
        this.app.use('/api/tareas', tareasRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('puerto 3000 funcionando o :', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
