import service from "../services/championship.services.js";

export const getChampionship = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await service.getChampionship(id);

        result.torneo.forEach(torneo => {
            torneo.inicio = torneo.inicio.toLocaleDateString();
            torneo.fin = torneo.fin.toLocaleDateString();
        });

        if (result.error) {
            return res.status(result.code).json({ code: result.code, message: result.message, error: result.error });
        }

        res.status(200).json(result);

    } catch (error) {
        console.error('Error en el controlador getChampionship:', error);
        res.status(500).json({ code: 500, message: 'Ocurrio un error interno', error: error.message });
    };
};

//getChampionshipsDESC
export const getChampionshipsDESC = async (req, res) => {
    try {
        const result = await service.getChampionshipsDESC();

        if (result.error) {
            return res.status(result.code).json({ code: result.code, message: result.message, error: result.error });
        };

        result.torneo.forEach(torneo => {
            torneo.inicio = torneo.inicio.toLocaleDateString();
            torneo.fin = torneo.fin.toLocaleDateString();
        });

        res.status(200).json(result);
    } catch (error) {
        console.error('Error en el controlador getChampionshipsDESC:', error);
        res.status(500).json({ code: 500, message: 'Ocurrio un error interno', error: error.message });
    };
};

//getChampionshipsASC
export const getChampionshipsASC = async (req, res) => {
    try {
        const result = await service.getChampionshipsASC();

        if (result.error) {
            return res.status(result.code).json({ code: result.code, message: result.message, error: result.error });
        };

        result.torneo.forEach(torneo => {
            torneo.inicio = torneo.inicio.toLocaleDateString();
            torneo.fin = torneo.fin.toLocaleDateString();
        });

        res.status(200).json(result);

    } catch (error) {
        console.error('Error en el controlador getChampionshipsASC:', error);
        res.status(500).json({ code: 500, message: 'Ocurrio un error interno', error: error.message });
    };
};

//postChampionship
export const postChampionship = async (req, res) => {
    try {
        const { nombre, descripcion, inicio, fin } = req.body;

        if (!nombre || !inicio || !fin) {
            return res.status(400).json({
                code: 400,
                message: 'Falta de datos requeridos',
                error: true
            });
        };

        const result = await service.postChampionship(nombre, descripcion, inicio, fin);

        if (result.error) {
            return res.status(result.code).json({ code: result.code, message: result.message, error: result.error });
        };

        res.status(200).json(result);

    } catch (error) {
        res.status(500).json({ code: 500, message: 'Ocurrio un error interno', error: error.message });
    };
};

//putChampionship
export const putChampionship = async (req, res) => {
    try {
        const { nombre, descripcion, inicio, fin } = req.body;
        const { id } = req.params;

        const result = await service.putChampionship(id, nombre, descripcion, inicio, fin);

        if (result.error) {
            return res.status(result.code).json({ code: result.code, message: result.message, error: result.error });
        }

        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({ code: 500, message: 'Ocurrio un error interno', error: error.message });
    };
};

//deleteChampionship
export const deleteChampionship = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await service.deleteChampionship(id);

        if (result.error) {
            return res.status(result.code).json({ code: result.code, message: result.message, error: result.error });
        }

        res.status(200).json(result);

    } catch (error) {
        res.status(500).json({ code: 500, message: 'Ocurrio un error interno', error: error.message });
    };
};
