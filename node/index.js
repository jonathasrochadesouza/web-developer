const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (request, response) => { // init request (route home)
    // retun response.send('Olha nós aí'); // get request home
    return response.json({ 
        // Colocar aqui o Json daquela página com cep, nome...
        id:1, 
        nome:'Irineu'
    }); 
});

app.get('/user', (request, response) => { // route user
    // retun response.send('Olha nós aí'); // get request home
    console.log(request.query);
    return response.json({ // Colocar aqui o Json daquela página 
        id:1, 
        nome:'Irineu'
    }); 
});

app.get('/address', (request, response) => { // route address
    // retun response.send('Olha nós aí'); // get request home
    console.log(request.query);
    return response.json({ // Colocar aqui o Json daquela página 
        id:1, 
        nome:'Irineu'
    }); 
});

app.listen(3333); // localhost:3333 - port 3333