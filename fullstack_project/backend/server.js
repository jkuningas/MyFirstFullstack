const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors()); 
app.use(express.json())

const PORT = 5000;

const CITIES = [
  {
    id: 1,
    city: "Oslo",
    country: "Norway"
  },
  {
    id: 2,
    city: "Paris",
    country: "France"
  },
  {
    id: 3,
    city: "Pretoria",
    country: "South Africa"
  }
]

/*
app.use((req, res, next) => {
  console.log("Time: ", Date.now());
  res.header("Access-Control-Allow-Origin", "*");
  next();
})
*/

app.get('/', (req, res) => {
  res.send('👋 Backend 👋');
});

app.get('/api/', (req, res) => {
  res.send('👋 Hello Backend API!!! 👋');
});

app.get('/api/cities', (req, res) => {
  res.json(CITIES);
});

app.get('/api/cities/:id', (req, res) => {
  const id = parseInt(req.params.id);
  console.log(id);

  const city = CITIES.find(item => item.id === id);

  if(!city) {
    res.status(404).send('🏙 City not found');
  } else {
    res.send(city);
  }
}); 

app.post("/api/cities",(req, res) => { 
    console.log("BODY :", req.body); 
    const city = {  
        id: CITIES.length + 1,
        city: req.body.city, 
        country: req.body.country
    } 
    CITIES.push(city); 
    res.send(city);
});

app.listen(PORT, () => {
  console.log(`BACKEND SERVER RUNNING on PORT ${PORT}`);
});