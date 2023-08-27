import { DataTypes } from 'sequelize';
import db from '../database/db.js';
import Jugador from './player.js';

const Equipo = db.define('equipo', {
    idequipo: {
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
        modelName: 'equipo',
    }
);

Equipo.hasMany(Jugador,{
    foreignKey: 'idequipo',
    sourceKey:'idequipo'
});

Jugador.belongsTo(Equipo,{
    foreignKey: 'idequipo',
    targetKey: 'idequipo'
});

export default Equipo;