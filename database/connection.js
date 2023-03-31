const {MongoClient} = require("mongodb");

// const url = "mongodb://localhost:27107"//this will work with node lower than version 14
const url = "mongodb://127.0.0.1:27017"
const client = new MongoClient(url);//
//data is in json format

const insertInDb = async (data) =>{
  try {
    await client.connect();//
    const database = client.db("student");//student is the database
    const collection = database.collection("information");//specifying the collection
 
  const dbResponse = await collection.insertOne(data)//we are inserting the dat a which is coming from data
    await client.close();//closing the connection to datanase

    return dbResponse;
  } 
  catch (error) {
    console.log(error.message);
    
    
  }
   
    }
    const findInDb = async (query)=>{
     try {
      await client.connect();//

      const database = client.db("student");//student is the database
      const collection = database.collection("information");//specifying the collection
     
      const dbResponse = await collection.find(query).toArray();  //we are inserting the dat a which is coming from data
      await client.close();//closing the connection to datanase
  
      return dbResponse;
     } 
     catch (error) {
      console.log(error.message)
     }
    }

    const updateInDb = async (filter, value)=>{
try {
  await client.connect();
  const database = client.db("student");
  const collection = database.collection("information");
 
  const dbResponse = await collection.updateOne(filteredCondition,value);//updateMany(filter,value)
  await client.close();
  return dbResponse;
} 
catch (error) {
  console.log(error.message)
}
    }

    const deleteInDb =async(condition)=>{
try {
  await client.connect();
const database = client.db("student");
const collection = database.db("information");
const dbResponse = await collection.deleteOne(condition);
await client.close();
return dbResponse;
} 
catch (error) {
  console.log(error.message)
}
    }
    // const deleteInDb = async (filter) =>{

    // }

    module.exports = {
        insertInDb,findInDb,updateInDb,deleteInDb
    }