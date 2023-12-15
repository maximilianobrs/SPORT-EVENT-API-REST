import { DataTypes } from 'sequelize';
import db from '../database/db.js';
import Equipo from './team.js';

const locacion = db.define('locacion', {
    idlocacion: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
},
    {
        timestamps: false,
        modelName: 'locacion',
    }
);

locacion.hasMany(Equipo,{
    foreignKey: 'idlocacion',
    sourceKey:'idlocacion'
});

Equipo.belongsTo(locacion,{
    foreignKey: 'idlocacion',
    targetKey: 'idlocacion'
});

export default Emplazamiento;