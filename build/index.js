"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require('dotenv').config({ path: '../apiJimpNode/.env' });
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.listen(process.env.NODE_PORT, () => {
    console.log('Server running on port ' + process.env.NODE_PORT);
});
