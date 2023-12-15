import service from "../services/location.services.js";

//getLocation
export const getLocation = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await service.getLocation(id);

        if (result.error) {
            return res.status(result.code).json({ code: result.code, message: result.message, error: result.error });
        }
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ code: 500, message: 'Ocurrio un error interno', error: error.message });
    };
};
//getLocationsDESC
export const getLocationsDESC = async (req, res) => {
    try {
        const result = await service.service.getLocationsDESC();

        if (result.error) {
            return res.status(result.code).json({ code: result.code, message: result.message, error: result.error });
        };

        result.locaion.forEach(locaion => {
            locaion.inicio = locaion.inicio.toLocaleDateString();
            locaion.fin = locaion.fin.toLocaleDateString();
        });

        res.status(200).json(result);

    } catch (error) {
        res.status(500).json({ code: 500, message: 'Ocurrio un error interno', error: error.message });
    };
};
//getLocationsASC
export const getLocationsASC = async (req, res) => {
    try {
        const result = await service.getLocationsASC();

        if (result.error) {
            return res.status(result.code).json({ code: result.code, message: result.message, error: result.error });
        };

        result.torneo.forEach(torneo => {
            torneo.inicio = torneo.inicio.toLocaleDateString();
            torneo.fin = torneo.fin.toLocaleDateString();
        });

        res.status(200).json(result);

    } catch (error) {
        res.status(500).json({ code: 500, message: 'Ocurrio un error interno', error: error.message });
    };
};
//postLocation
export const postLocation = async (req, res) => {
    try {
        const { nombre } = req.body;

        if (!nombre) {
            return res.status(400).json({
                code: 400,
                message: 'Falta de datos en la consulta',
                error: true
            });
        };

        const result = await service.postLocation(nombre);

        if (result.error) {
            return res.status(result.code).json({ code: result.code, message: result.message, error: result.error });
        };

        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ code: 500, message: 'Ocurrio un error interno', error: error.message });
    };
};
//putLocation
export const putLocation = async (req, res) => {
    try {
        const { nombre } = req.body;
        const { id } = req.params;

        const result = await service.putLocation(id, nombre);

        if (result.error) {
            return res.status(result.code).json({ code: result.code, message: result.message, error: result.error });
        }

        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({ code: 500, message: 'Ocurrio un error interno', error: error.message });
    };
};
//deleteLocation
export const deleteLocation = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await service.deleteLocation(id);

        if (result.error) {
            return res.status(result.code).json({ code: result.code, message: result.message, error: result.error });
        }

        res.status(200).json(result);

    } catch (error) {
        res.status(500).json({ code: 500, message: 'Ocurrio un error interno', error: error.message });
    };
};