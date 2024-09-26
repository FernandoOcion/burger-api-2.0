// 'use strict';

// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     await queryInterface.removeColumn('products', 'category');
//   },

//   down: async (queryInterface, Sequelize) => {
//     await queryInterface.createColumn('products', {
//       category: {
//         type: Sequelize.STRING,
//         allowNull: false,
//       },
//     });
//   },
// };

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface) {
		await queryInterface.removeColumn("Products", "category");
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.addColumn("Products", "category", {
			type: Sequelize.STRING,
			allowNull: true,
		});
	},
};
