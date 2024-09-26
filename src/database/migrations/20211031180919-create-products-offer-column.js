// 'use strict';

// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     await queryInterface.addColumn('products', 'offer', {
//       type: Sequelize.BOOLEAN,
//       defaultValue: false,
//       allowNull: false,
//     });
//   },

//   down: async (queryInterface, Sequelize) => {
//     await queryInterface.removeColumn('products', 'offer');
//   },
// };

// yarn sequelize migration:create --name add-offer-column
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.addColumn("Products", "offer", {
			type: Sequelize.BOOLEAN,
			defaultValue: false,
			allowNull: false,
		});
	},

	async down(queryInterface) {
		await queryInterface.removeColumn("Products", "offer");
	},
};

// yarn sequelize db:migrate
