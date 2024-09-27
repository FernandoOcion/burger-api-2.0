import Sequelize from "sequelize";
import mongoose from "mongoose";

import Product from "../app/models/Product.mjs";
import User from "../app/models/User.mjs";
import Category from "../app/models/Category.mjs";

// import configDatabase from "../config/database.mjs";

const models = [User, Product, Category];

class Database {
	constructor() {
		this.init();
		this.mongo();
	}

	init() {
		this.connection = new Sequelize(
			"postgresql://postgres:daHzyvtqfLvuCrDZkJkWeTKXgukbNNkI@junction.proxy.rlwy.net:18982/railway",
		);
		models
			.map((model) => model.init(this.connection))
			.map(
				(model) => model.associate && model.associate(this.connection.models),
			);
	}

	mongo() {
		this.mongoConnection = mongoose.connect(
			"mongodb://mongo:atyFMaBovBjKBuIvUtYpNdcaVzPpSPNg@autorack.proxy.rlwy.net:33372",
		);
	}
}

export default new Database();
