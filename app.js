//Imports
import express from 'express';
import mongoose from 'mongoose';
import { studentRouter } from './routes/studentRouter.js';

require('dotenv').config()(
  //Conexão com o Banco
  async () => {
    try {
      await mongoose.connect(
        `mongodb+srv://${process.env.USERDB}:${process.env.PWDDB}@cluster0.514id.mongodb.net/grades?retryWrites=true&w=majority`,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        }
      );
    } catch (err) {
      console.log('Erro ao conectar ao Mongo DB');
    }
  }
)();

//Inicialização dda API
const app = express();

app.use(express.json());
app.use(studentRouter);

app.listen(process.env.PORT, () => console.log('API iniciada'));
