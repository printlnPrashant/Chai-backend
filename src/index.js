import dotenv from 'dotenv';
dotenv.config({path: './.env'})
import connectDB from "./db/index.js";


connectDB()


















// ( async() => {

// try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//     app.on("error", (error) =>{
//         console.log("error", error);
//         throw error;
//     })

// app.listen(process.env.PORT, () => {
//     console.log(`App is listing on the ${process.env.PORT}`);
// })
// }catch (error) {
//     console.log("error", error);
//     throw error
// }
// }) ()



