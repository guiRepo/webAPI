import sequelize from 'sequelize';
import db from '../config/database'

const user = db.define(
    "user",
    {
        id: { type: sequelize.INTEGER, primaryKey: true},
        username: {type: sequelize.STRING},
        password: {type: sequelize.STRING},
        token: {type: sequelize.STRING},
    },
    {
    freezeTableName: true,
    timestamps: false        
    }
)

export default user;