const mongoose = require('mongoose')

const connectToDb = async ()=>{
  mongoose.connect(process.env.MONGO_URL)
  .then((conn) =>{
    console.log(`connected to db: ${conn.connection.host}`);
  })
  .catch((err)=>{
    console.log(err.message);
    process.exit(1)
  })
    // try {
    //     await mongoose.connect("mongodb+srv://abhi05:abhi7505@cluster0.hohduyy.mongodb.net/ ")
    //     console.log("DB connected");  
    //     app.on("error",(err)=>{
    //       console.log('Error: ', err);
    //       throw err;
    //     })
      
    // } catch (error) {
    //   console.error("Error: ", error)
    //   throw error     
    // }
    // app.listen(port, () => {
    //   console.log(`Example app listening on port ${port}`)
    // })
  }

  module.exports  = connectToDb