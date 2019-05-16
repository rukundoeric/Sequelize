import Sequelize from 'sequelize';
import  db from '../config/database';
 
const User = db.define('users',{
    name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    }
});
User.sync({ alter: true });
export default User;