
const mongoose = require('mongoose');

const uri = 'mongodb+srv://samuel:ChB4t2o8U4EjvgJY@notesapp.g2qgarw.mongodb.net/notesapp?retryWrites=true&w=majority';
mongoose.connect(uri).then(db => console.log('db is conected')).catch(err => console.log(err));


module.exports = mongoose;


//quinonezcesar
//vrZtCSbhMbTGV6gH
