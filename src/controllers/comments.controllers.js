import { getConnection } from "../database/database";

const getComments = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT nombre, empresa, correo,telefono,categoria,mensaje FROM comments")
        res.json(result)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const addComment = async (req, res) => {
    try {
        const { nombre, empresa, correo,telefono,categoria,mensaje } = req.body;

        if (nombre === undefined || empresa === undefined || correo === undefined || telefono === undefined || categoria === undefined || mensaje === undefined) {
            res.status(400).json({ message: "Bad Request. Por favor llene todos los datos." });
        }
        const fecha_creacion = new Date().toISOString().slice(0, 10)
        const user = { nombre, empresa, correo,telefono,categoria,mensaje, fecha_creacion }
        const connection = await getConnection();
        await connection.query("INSERT INTO comments SET ?", user)
        res.json({message: "Post Exitoso"})
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};


export const methods = {
    getComments,
    addComment
}