import { DataTypes } from 'sequelize';
import db from '../database/db.js';
import Equipo from './team.js';

const Emplazamiento = db.define('emplazamiento', {
    idemplazamiento: {
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
        modelName: 'emplazamiento',
    }
);

Emplazamiento.hasMany(Equipo,{
    foreignKey: 'idemplazamiento',
    sourceKey:'idemplazamiento'
});

Equipo.belongsTo(Emplazamiento,{
    foreignKey: 'idemplazamiento',
    targetKey: 'idemplazamiento'
});

export default Emplazamiento;