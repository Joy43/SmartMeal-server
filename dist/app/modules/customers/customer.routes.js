"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerRouter = void 0;
const express_1 = require("express");
const customer_controller_1 = require("./customer.controller");
const router = (0, express_1.Router)();
//  custormar routes
router.get('/', customer_controller_1.customersController.getAll);
exports.customerRouter = router;
