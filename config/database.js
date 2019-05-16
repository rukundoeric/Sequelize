import Sequelize from 'sequelize';
const db = new Sequelize('sequelize', 'eric', '44444', {
  host: 'localhost',
  dialect: 'postgres' 
});
db.authenticate()
.then(() => console.log("Database connected... "))
.catch((error) => console.log("Database not connected..."));

export default db;