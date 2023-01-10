const compoundModel = require('../../../model/schema/schema')
const paginations  = require('../../utility/utility')
    
async function getCompoundList(req,res){
    try{

        const limitRecords = req.query.limit ? +req.query.limit : 8;
        const offsetRecords = req.query.skip ? +req.query.skip * limitRecords: 0;

        const responseOfGetCompoundList = await compoundModel.findAndCountAll({ offset: offsetRecords, limit: limitRecords });
        if(!responseOfGetCompoundList){
            res.status(400).send({err: err, message: "Compounds list cannot be fetched. Pls try again!!!"})
        }
        
        res.status(200).send({
            status:"success",
            data:responseOfGetCompoundList
        });        
    }catch(err){
        console.log(err);
        res.status(500).send({err: err, message: `Error in fetcing compound list`});
    }
}

async function saveNewCompound(req,res){
    try{ 
        const responseOfSaveCompound = await compoundModel.create(req.body)
        if(!responseOfSaveCompound){
            return res.status(500).send({err: err, message: "Compounds cannot be saved. Pls try again!!!"})
        }

        res.status(200).send({
            status:"success",
            data:responseOfSaveCompound
        });
    }catch(err){
        console.log(err);
        res.status(500).send({err: err,message: `Error saving compound`});
    }
}

async function getCompoundDetails(req,res){
    try{
        const compoundId = req.query.id;
        const responseOfgetCompoundDetails = await compoundModel.findByPk(compoundId);
        if(!responseOfgetCompoundDetails){
            return res.status(400).send({err: err, message: "Compound with ${compoundId} does not exists"})
        }
        
        res.status(200).send({
            status:"success",
            data:responseOfgetCompoundDetails
        });
    }catch(err){
        console.log(err);
        res.status(500).send({err: err,message: ` Error in fetching details of compound with id: ${id}`});
    }
}

async function updateCompound(req,res){
    try{
        const compoundId = req.query.id;
        const responseOfgetCompoundDetails = await compoundModel.findByPk(compoundId);
        if(!responseOfgetCompoundDetails){
            return res.status(400).send({err: err, message: `Compound with ${compoundId} does not exists`})
        }
        const responseOfupdateCompound = await compoundModel.update(req.body, {where: { id: compoundId }})
        if(responseOfupdateCompound == 0){
            return res.status(400).send("msg: Error in updating data")
        }
        
        // return res.send(`msg: Successfully updated the compund with id : ${compoundId}`)
        res.status(200).send({
            status:"success"
        });
    }catch(err){
        console.log(err);
        res.status(500).send({err: err,message: `Error in updating compound with id: ${id}`});
    }
}

async function deleteCompound(req,res){
    try{
        const compoundId = req.query.id;
        const responseOfdeleteCompound = await compoundModel.destroy({where: { id: compoundId }})
        if(responseOfdeleteCompound == 0){
            return res.send( {err: err, message: `Compound with ${compoundId} does not exists`})
        }
        
        // return res.send(`msg: Successfully deleted the compund with id : ${compoundId}`)
        res.status(200).send({
            status:"success"
        });
    }catch(err){
        console.log(err);
        res.status(500).send({err: err,message: `Error in deleting compound with id: ${id}`});
    }
}

module.exports = {getCompoundList, saveNewCompound, getCompoundDetails, updateCompound, deleteCompound}