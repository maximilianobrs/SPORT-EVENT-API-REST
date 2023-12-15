import service from "../services/player.services.js";

//getPlayer
export const getPlayer = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await service.getPlayer(id);

        if (result.error) {
            return res.status(result.code).json({ code: result.code, message: result.message, error: result.error });
        }
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ code: 500, message: 'Ocurrio un error interno', error: error.message });
    };
}
//getPlayersDESC
export const getPlayersDESC = async (req, res) => {
    try {
        const result = await service.getPlayersDESC();

        if (result.error) {
            return res.status(result.code).json({ code: result.code, message: result.message, error: result.error });
        };

        res.status(200).json(result);

    } catch (error) {
        res.status(500).json({ code: 500, message: 'Ocurrio un error interno', error: error.message });
    };
}
//getPlayersASC
export const getPlayersASC = async (req, res) => {
    try {
        const result = await service.getPlayersASC();

        if (result.error) {
            return res.status(result.code).json({ code: result.code, message: result.message, error: result.error });
        };

        res.status(200).json(result);

    } catch (error) {
        res.status(500).json({ code: 500, message: 'Ocurrio un error interno', error: error.message });
    };
}
//postPlayer
export const postPlayer = async (req, res) => {
    try {
        const { nombre, apellido, DNI, nacionalidad, fechaNacimiento, camiseta, idequipo } = req.body;

        if (!nombre || !apellido || !DNI || !nacionalidad || !fechaNacimiento || !camiseta || !idequipo) {
            return res.status(400).json({
                code: 400,
                message: 'Falta de datos que son requeridos',
                error: true
            });
        };

        const result = await service.postPlayer(nombre, apellido, DNI, nacionalidad, fechaNacimiento, camiseta, idequipo);

        if (result.error) {
            return res.status(result.code).json({ code: result.code, message: result.message, error: result.error });
        };

        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ code: 500, message: 'Ocurrio un error interno', error: error.message });
    };
}
//putPlayer
export const putPlayer = async (req, res) => {
    try {
        const { nombre, apellido, DNI, nacionalidad, fechaNacimiento, camiseta, idequipo } = req.body;
        const { id } = req.params;

        const result = await service.putPlayer(id, nombre, apellido, DNI, nacionalidad, fechaNacimiento, camiseta, idequipo);

        if (result.error) {
            return res.status(result.code).json({ code: result.code, message: result.message, error: result.error });
        }

        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ code: 500, message: 'Ocurrio un error interno', error: error.message });
    };
}
//deletePlayer
export const deletePlayer = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await service.deletePlayer(id);

        if (result.error) {
            return res.status(result.code).json({ code: result.code, message: result.message, error: result.error });
        }

        res.status(200).json(result);

    } catch (error) {
        res.status(500).json({ code: 500, message: 'Ocurrio un error interno', error: error.message });
    };
}