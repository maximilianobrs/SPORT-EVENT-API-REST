import service from "../services/team.services.js";

//getTeam
export const getTeam = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await service.getTeam(id);

        if (result.error) {
            return res.status(result.code).json({ code: result.code, message: result.message, error: result.error });
        }

        res.status(200).json(result);

    } catch (error) {
        res.status(500).json({ code: 500, message: 'Ocurrio un error interno', error: error.message });
    };
};
//getTeamsDESC
export const getTeamsDESC = async (req, res) => {
    try {
        const result = await service.getTeamsDESC();

        if (result.error) {
            return res.status(result.code).json({ code: result.code, message: result.message, error: result.error });
        };

        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ code: 500, message: 'Ocurrio un error interno', error: error.message });
    };
};
//getTeamsASC
export const getTeamsASC = async (req, res) => {
    try {
        const result = await service.getTeamsASC();

        if (result.error) {
            return res.status(result.code).json({ code: result.code, message: result.message, error: result.error });
        };

        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ code: 500, message: 'Ocurrio un error interno', error: error.message });
    };
};
// Obtener equipos por campeonato
// export const getEquiposPorCampeonato = async (req, res) => {
//     const { idCampeonato } = req.params;
//     try {
//         if (!idCampeonato) {
//             return res.status(400).json({
//                 code: 400,
//                 message: 'Parámetro requerido no ingresado',
//                 error: true
//             });
//         }

//         const result = await obtenerEquiposPorCampeonato(idCampeonato);

//         if (result.error) {
//             return res.status(result.code).json({ code: result.code, message: result.message, error: result.error });
//         }

//         res.status(200).json(result);
//     } catch (error) {
//         res.status(500).json({ code: 500, message: 'Ocurrió un error interno', error: error.message });
//     }
// };

//postTeam
export const postTeam = async (req, res) => {
    try {
        const { nombre, idcampeonato, idemplazamiento } = req.body;

        if (!nombre || !idcampeonato || !idemplazamiento) {
            return res.status(400).json({
                code: 400,
                message: 'Falta de datos en la consulta',
                error: true
            });
        };

        const result = await service.postTeam(nombre, idcampeonato, idemplazamiento);

        if (result.error) {
            return res.status(result.code).json({ code: result.code, message: result.message, error: result.error });
        };

        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ code: 500, message: 'Ocurrio un error interno', error: error.message });
    };
};
//putTeam
export const putTeam = async (req, res) => {
    try {
        const { nombre } = req.body;
        const { id } = req.params;

        const result = await service.putTeam(id, nombre);

        if (result.error) {
            return res.status(result.code).json({ code: result.code, message: result.message, error: result.error });
        }

        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ code: 500, message: 'Ocurrio un error interno', error: error.message });
    };
};
//deleteTeam
export const deleteTeam = async (req, res) => {

    try {
        const { id } = req.params;

        const result = await service.deleteTeam(id);

        if (result.error) {
            return res.status(result.code).json({ code: result.code, message: result.message, error: result.error });
        }

        res.status(200).json(result);

    } catch (error) {
        res.status(500).json({ code: 500, message: 'Ocurrio un error interno', error: error.message });
    };
};