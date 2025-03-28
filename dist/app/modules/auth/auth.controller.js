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
exports.AuthController = void 0;
const catchAsync_1 = __importDefault(require("../utils/catchAsync"));
const sendRequest_1 = __importDefault(require("../utils/sendRequest"));
const http_status_1 = __importDefault(require("http-status"));
const auth_service_1 = require("./auth.service");
// ----------register---------------
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield auth_service_1.AuthService.register(req.body);
    (0, sendRequest_1.default)(res, {
        success: true,
        message: 'user is register sucessfully',
        statusCode: 201,
        data: result,
    });
});
// ---------------- login ------
const login = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield auth_service_1.AuthService.login(req.body);
    (0, sendRequest_1.default)(res, {
        success: true,
        message: 'login sucessfully',
        statusCode: http_status_1.default.OK,
        data: {
            token: result.token,
        },
    });
}));
exports.AuthController = {
    register, login
};
