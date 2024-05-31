const express = require('express');
const axios = require('axios');
const { v4: uuidv4 } = require('uuid');
const moment = require('moment');
const _ = require('lodash');

async function runApp() {
    const chalk = await import('chalk');

    const app = express();
    const port = 3000;

    let users = [];

    app.get('/register', async (req, res) => {
        try {
            const response = await axios.get('https://randomuser.me/api/');
            const user = response.data.results[0];

            const newUser = {
                id: uuidv4(),
                Nombre: user.name.first,
                Apellido: user.name.last,
                Sexo: user.gender,
                horaRegistro: moment().format('YYYY-MM-DD, hh:mm:ss a')
            };

            users.push(newUser);

            res.json(newUser);
        } catch (error) {
            res.status(500).send('Error al registrar el usuario');
        }
    });

    app.get('/users', (req, res) => {
        const groupedUsers = _.groupBy(users, 'sexo');

        console.log(chalk.default.blue.bgWhite.bold('Usuarios Registrados:'), groupedUsers);
        console.log(groupedUsers);

        res.json(groupedUsers);
    });

    app.listen(port, () => {
        console.log(`Servidor corriendo en puerto ${port}`);
    });
}

runApp();
