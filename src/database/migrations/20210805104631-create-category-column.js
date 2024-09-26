// 'use strict';

// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     await queryInterface.addColumn('products', 'category_id', {
//       type: Sequelize.INTEGER,
//       references: { model: 'categories', key: 'id' },
//       onUpdate: 'CASCADE',
//       onDelete: 'SET NULL',
//       allowNull: true,
//     });
//   },

//   down: async (queryInterface, Sequelize) => {
//     await queryInterface.removeColumn('products', 'category_id');
//   },
// };

"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.addColumn("Products", "category_id", {
			type: Sequelize.INTEGER,
			references: {
				model: "Categories",
				key: "id",
			},
			onUpdate: "CASCADE",
			onDelete: "SET NULL",
			allowNull: true,
		});
	},

	async down(queryInterface) {
		await queryInterface.removeColumn("Products", "category_id");
	},
};
