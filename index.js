import mongoose from "mongoose";
import * as model from './src/models/users.js';

CRUD();

async function CRUD() {
    try {
        /* --------------------------------------- */
        /*     conexión hacia la vase de datos     */
        /* --------------------------------------- */
        /*const URL = 'mongodb://localhost:27017/ecommerce';*/

        const URL = 'mongodb+srv://TomasPayer:Piscu332@cluster0.mrepfmv.mongodb.net/?retryWrites=true&w=majority';

        let rta = await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log('Base de datos conectada');

        /* --------------------------------------- */
        /*                CREATE                   */
        /* --------------------------------------- */

        console.log('Create');
        const usuario = {
            nombre: 'Tomas', 
            apellido: 'Payer', 
            dni: '34743720',
        };
        const usuarioSaveModel = new model.usuarios(usuario);
        let usuarioSave = await usuarioSaveModel.save();
        console.log(usuarioSave);


        console.log('Create 4 users');
        await new model.usuarios({ nombre: 'Lucas', apellido: 'Blanco', dni: '30355874'}).save();
        await new model.usuarios({ nombre: 'María', apellido: 'García', dni: '29575148' }).save();
        await new model.usuarios({ nombre: 'Tomas', apellido: 'Sierra', dni: '38654790' }).save();
        await new model.usuarios({ nombre: 'Carlos', apellido: 'Fernández', dni: '26935670' }).save();

        
      
        
        // /* --------------------------------------- */
        // /*                UPDATE                   */
        // /* --------------------------------------- */

        // // console.log('UPDATE');

        // let usuarioUpdate = await model.usuarios.updateOne(
        //     {nombre: 'Juan'},
        //     {$set: { password: 654321 } }
        // );
        // console.log(usuarioUpdate);


        // /* --------------------------------------- */
        // /*                  READ                   */
        // /* --------------------------------------- */
        
        // console.log('Read');
        // let usuarios = await model.usuarios.find({apellido:'Payer'});
        // console.log(usuarios);


        // /* --------------------------------------- */
        // /*                DELETE                   */
        // /* --------------------------------------- */

        // console.log('DELETE');

        // let usuarioDelete = await model.usuarios.deleteOne(
        //     {nombre: 'Juan'}
        // );
        // console.log(usuarioDelete);

        // console.log('READ PROJECTION + FILTER');
        // console.log(await model.usuarios.find(
        //     {apellido: 'Gonzales'},
        //     {nombre:1, apellido:1, email:1, _id:0}
        // ));
        // console.log(await model.usuarios.find(
        //     {apellido: 'Agustin'},
        //     {nombre:1, apellido:1, email:1, _id:0}
        // ));

        // console.log('READ PROJECTION + SORT');
        // console.log(
        //     await model.usuarios.find(
        //     {},
        //     {nombre:1, _id:0}
        // ).sort({nombre: -1})
        // );

        // console.log('READ PROJECTION + SORT');
        // console.log(await model.usuarios.find(
        //     {},
        //     {nombre:1, _id:0}
        // ).sort({nombre: -1}));

        // console.log('READ PROJECTION + SORT + SKIP');
        // console.log(await model.usuarios.find(
        //     {},
        //     {nombre:1, _id:0}
        // ).sort({nombre: -1}).skip(5));

        // console.log('READ PROJECTION + SORT + SKIP + LIMIT');
        // console.log(await model.usuarios.find(
        //     {},
        //     {nombre:1, _id:0}
        // ).sort({nombre: -1}).skip(1).limit(2));




    } catch (error) {
        console.log(`Error en el CRUD: ${error}`);
    }
}