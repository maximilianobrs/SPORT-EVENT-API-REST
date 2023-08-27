import { DataTypes } from 'sequelize';
import db from '../database/db.js';

const Jugador = db.define('jugador', {
    idjugador: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    apellido: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    DNI: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },
    nacionalidad: {
        type: DataTypes.STRING(45),
    },
    fechaNacimiento: {
        type: DataTypes.STRING(45),
    },
    camiseta: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
},
    {
        timestamps: false,
        modelName: 'jugadore',
    }
);


export default Jugador;