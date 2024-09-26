// 'use strict';

// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     await queryInterface.addColumn('categories', 'path', {
//       type: Sequelize.STRING,
//     });
//   },

//   down: async (queryInterface, Sequelize) => {
//     await queryInterface.removeColumn('categories', 'path');
//   },
// };

// yarn sequelize migration:create --name add-path-column (Para criar)
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.addColumn("Categories", "path", {
			type: Sequelize.STRING,
		});
	},

	async down(queryInterface) {
		await queryInterface.dropTable("Categories", "path");
	},
};
// yarn sequelize db:migrate (Para mandar pro banco de dados)
