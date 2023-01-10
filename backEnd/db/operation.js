const sqlModel = require('../model/schema/schema');

// async function saveNewCompound(req,res){
//     try{
//         const responseOfSaveCompound = await compoundModel.create(req.body)
//         if(!responseOfSaveCompound){
//             return res.status(500).send("msg: Error in saving data")
//         }
        
//         return res.send(responseOfSaveCompound)
//     }catch(err){
//         console.log(err);
//         return res.send("msg: ERROR")
//     }
// }

// // module.exports = {getCompoundList, saveNewCompound, getCompoundDetails, updateCompound, deleteCompound}
// module.exports = {saveNewCompound}