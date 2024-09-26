// 'use strict';

// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     await queryInterface.createTable('products', {
//       id: {
//         type: Sequelize.INTEGER,
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true,
//       },
//       name: {
//         type: Sequelize.STRING,
//         allowNull: false,
//       },
//       price: {
//         type: Sequelize.INTEGER,
//         allowNull: false,
//       },
//       category: {
//         type: Sequelize.STRING,
//         allowNull: false,
//       },
//       path: {
//         type: Sequelize.STRING,
//         allowNull: false,
//       },
//       created_at: {
//         type: Sequelize.DATE,
//         allowNull: false,
//       },
//       updated_at: {
//         type: Sequelize.DATE,
//         allowNull: false,
//       },
//     });
//   },

//   down: async (queryInterface) => {
//     await queryInterface.dropTable('products');
//   },
// };

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Products", {
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
			},
			name: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			price: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			category: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			path: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			createdAt: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			updatedAt: {
				type: Sequelize.DATE,
				allowNull: false,
			},
		});
	},

	async down(queryInterface) {
		await queryInterface.dropTable("Products");
	},
};

// yarn sequelize db:migrate
// yarn sequelize-cli db:migrate

// yarn sequelize migration:create --name create-products-table
