import express from "express";

// import PointsController from "./controllers/PointsController";
// import ItemsController from "./controllers/ItemsController";

const routes = express.Router();

// TODO Users Controller
// TODO Users Validator
// TODO Tasks Controller
// TODO Tasks Validator

// const pointsController = new PointsController();
// const itemsController = new ItemsController();

// routes.get("/items", itemsController.index);

// routes.post(
// 	"/points",
// 	celebrate(
// 		{
// 			body: Joi.object().keys({
// 				name: Joi.string().required()
// 			})
// 		},
// 		{
// 			abortEarly: false
// 		}
// 	),
// 	pointsController.create
// );

export default routes;
