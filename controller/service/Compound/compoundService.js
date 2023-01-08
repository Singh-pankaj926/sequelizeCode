const compoundModel = require('../../../model/schema/schema')
    
async function getCompoundList(req,res){
    try{
        const responseOfGetCompoundList = await compoundModel.findAll();
        if(!responseOfGetCompoundList){
            res.status(400).send("msg: Compounds list cannot be fetched. Pls try again!!!")
        }
        
        res.send(responseOfGetCompoundList);        
    }catch(err){
        console.log(err);
        res.status(500).send(`message: Error in fetching list of compound`);
    }
}

async function saveNewCompound(req,res){
    try{ 
        const responseOfSaveCompound = await compoundModel.create(req.body)
        if(!responseOfSaveCompound){
            return res.status(500).send("msg: Compound cannot be saved. Pls try again!!!")
        }

        return res.send(responseOfSaveCompound)
    }catch(err){
        console.log(err);
        res.status(500).send(`message: Error saving compound`);
    }
}

async function getCompoundDetails(req,res){
    try{
        const compoundId = req.query.id;
        const responseOfgetCompoundDetails = await compoundModel.findByPk(compoundId);
        if(!responseOfgetCompoundDetails){
            return res.status(400).send(`msg: Compound with ${compoundId} does not exists`)
        }
        
        return res.send(responseOfgetCompoundDetails)
    }catch(err){
        console.log(err);
        res.status(500).send(`message: Error in fetching details of compound with id: ${id}`);
    }
}

async function updateCompound(req,res){
    try{
        const compoundId = req.query.id;
        const responseOfgetCompoundDetails = await compoundModel.findByPk(compoundId);
        if(!responseOfgetCompoundDetails){
            return res.status(400).send(`msg: Compound with ${compoundId} does not exists`)
        }
        const responseOfupdateCompound = await compoundModel.update(req.body, {where: { id: compoundId }})
        if(responseOfupdateCompound == 0){
            return res.status(400).send("msg: Error in updating data")
        }
        
        return res.send(`msg: Successfully updated the compund with id : ${compoundId}`)
    }catch(err){
        console.log(err);
        res.status(500).send(`message: Error in updating compound with id: ${id}`);
    }
}

async function deleteCompound(req,res){
    try{
        const compoundId = req.query.id;
        const responseOfdeleteCompound = await compoundModel.destroy({where: { id: compoundId }})
        if(responseOfdeleteCompound == 0){
            return res.send(`msg: Compound with ${compoundId} does not exists`)
        }
        
        return res.send(`msg: Successfully deleted the compund with id : ${compoundId}`)
    }catch(err){
        console.log(err);
        res.status(500).send(`message: Error in deleting compound with id: ${id}`);
    }
}

module.exports = {getCompoundList, saveNewCompound, getCompoundDetails, updateCompound, deleteCompound}