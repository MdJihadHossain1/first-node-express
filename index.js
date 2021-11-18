const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello, Wow, Excited I am learning node server');
});

const users = [
    { id: 0, name: 'Abdullah', email: 'abdullah@gmail.com', phone: 013030303030 },
    { id: 1, name: 'Abdur-Rahman', email: 'AbdurRahman@gmail.com', phone: 013030303030 },
    { id: 2, name: 'Abdur-Rohim', email: 'AbdurRohim@gmail.com', phone: 013030303030 },
    { id: 3, name: 'Abdul-Malik', email: 'AbdulMalik@gmail.com', phone: 013030303030 },
    { id: 4, name: 'Abdul-Kuddus', email: 'AbdulKuddus@gmail.com', phone: 013030303030 },
    { id: 5, name: 'Abdus-Salam', email: 'AbdusSalam@gmail.com', phone: 013030303030 },
    { id: 6, name: 'Abdul-Gaffar', email: 'AbdulGaffar@gmail.com', phone: 013030303030 }
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users);
    }
});

app.post('/users', (req, res) =>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log("hiting the post", req.body);
    res.json(newUser);
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})

app.listen(port, () => {
    console.log('listening to port', port);
});
