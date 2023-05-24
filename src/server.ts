import mongoose from "mongoose";
import app from "./app";

const port:number = 5000;


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/mongoose');

//   listing app
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
  })
}










