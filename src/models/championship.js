import { DataTypes } from 'sequelize';
import db from "../database/db.js";
import Equipo from './team.js';

const Torneo = db.define('torneo', {
    idcampeonato: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    descripcion: {
        type: DataTypes.STRING(45),
    },
    inicio: {
        type: DataTypes.DATE,
    },
    fin: {
        type: DataTypes.DATE,
    },
    estado: {
        type: DataTypes.ENUM('ACTIVO', 'CERRADO'),
        defaultValue: 'ACTIVO',
    },
},
    {
        timestamps: false,
        modelName: 'torneo',
    }
    
);

Torneo.hasMany(Equipo,{
    foreignKey: 'idcampeonato',
    sourceKey:'idcampeonato'
});

Equipo.belongsTo(Torneo,{
    foreignKey: 'idcampeonato',
    targetKey: 'idcampeonato'
});

export default Campeonato;