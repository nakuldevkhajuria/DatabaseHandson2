const mongoClient = require("../database/connection")

const studentEnrollment = async (req,res)=>{
    const studentData = req.body; 

    try {
        const result = await mongoClient.insertInDb(studentData);
        console.log("The result of database operation => ", result)
        return res.status(200).send(result)
    } catch (error) {
        console.log("Something went wrong while performing db operation")
        return res.status(500).send({message:`internal error ${error}`})
    }
  

}

const studentFind = async(req,res) =>{
const queryParam = req.query;

try {
    const result = await mongoClient.findInDb(queryParam);
    console.log("the result of database operation =>",result)
    return res.status(200).send(result)
} catch (error) {
    console.log('Something went wrong while performing ')
}
}

const studentUpdate = async (req,res)=>{
    const studentData = req.body; 
const filter = mongoClient.updateInDb.filter;
const value = { $set: mongoClient.updateInDb.value}

    try {
        const result = await mongoClient.updateInDb(filter,value);
        console.log("The result of database operation => ", result)
        return res.status(200).send(result)
    } catch (error) {
        console.log("Something went wrong while performing db operation")
        return res.status(500).send({message:`internal error ${error}`})
    }
  

}
const studentDelete = async (req,res)=>{
    const studentData = req.query; 

    try {
        const result = await mongoClient.deleteInDb(studentData);
        console.log("The result of database operation => ", result)
        return res.status(200).send(result)
    } catch (error) {
        console.log("Something went wrong while performing db operation")
        return res.status(500).send({message:`internal error ${error}`})
    }
  

}


module.exports = {
    studentEnrollment,studentFind,studentUpdate,studentDelete
}

