let cities = [
    {
        "name": "Buenos Aires",
        "continent": "America",
        "photo": "https://i.ibb.co/txzvqGy/buenos-aires.webp",
        "population": 3075646,
        "userId": "636d82c86529ebe93bbef921"
    },
    {
        "name": "Rome",
        "continent": "Europe",
        "photo": "https://i.ibb.co/RQNx6zf/rome.webp",
        "population": 2857321,
        "userId": "636d82c86529ebe93bbef922"
    },
    {
        "name": "New York",
        "continent": "America",
        "photo": "https://i.ibb.co/MpNxDVn/london.webp",
        "population": 19336776,
        "userId": "636d82c86529ebe93bbef91f"
    },
    {
        "name": "París",
        "continent": "Europe",
        "photo": "https://i.ibb.co/2Nc3NWJ/paris.webp",
        "population": 2243833,
        "userId": "636d82c86529ebe93bbef920"
    },
    {
        "name": "Rio De Janeiro",
        "continent": "America",
        "photo": "https://i.ibb.co/J5VVR07/rio-de-janeiro.webp",
        "population": 17366189,
        "userId": "636d82c86529ebe93bbef921"
    },
    {
        "name": "Dubai",
        "continent": "Asia",
        "photo": "https://i.ibb.co/M5yrQNr/dubai.webp",
        "population": 3331420,
        "userId": "636d82c86529ebe93bbef922"
    },
    {
        "name": "London",
        "continent": "Europe",
        "photo": "https://i.ibb.co/MpNxDVn/london.webp",
        "population": 9002488,
        "userId": "636d82c86529ebe93bbef91f"
    },
    {
        "name": "Barcelona",
        "continent": "Europe",
        "photo": "https://i.ibb.co/XJGYkzT/barcelona.webp",
        "population": 1636732,
        "userId": "636d82c86529ebe93bbef920"
    },
    {
        "name": "Pekín",
        "continent": "Asia",
        "photo": "https://i.ibb.co/34V0GV3/pekin.jpg",
        "population": 21893095,
        "userId": "636d82c86529ebe93bbef921"
    },
    {
        "name": "Cape Town",
        "continent": "Sudafrica",
        "photo": "https://i.ibb.co/TtWB4bH/cape-town.webp",
        "population": 7481156,
        "userId": "636d82c86529ebe93bbef922"
    },
    {
        "name": "Cartagena",
        "continent": "America",
        "photo": "https://i.ibb.co/K03pvjk/cartagena.webp",
        "population": 216365,
        "userId": "636d82c86529ebe93bbef91f"
    },
    {
        "name": "Sídney",
        "continent": "Australia",
        "photo": "https://i.ibb.co/tYyHMkD/sidney.webp",
        "population": 5361466,
        "userId": "636d82c86529ebe93bbef920"
    }
]

require('dotenv').config();
require('../database');
const City = require('../../models/City');

cities.forEach(elemento => {
    City.create({
        name: elemento.name,
        continent: elemento.continent,
        photo: elemento.photo,
        population: elemento.population,
        userId: elemento.userId
    })
})