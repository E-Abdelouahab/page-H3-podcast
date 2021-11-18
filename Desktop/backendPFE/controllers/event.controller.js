const event = require('../models/event.model');

// -------------get Event by category -----------

const geteventByCategory = async(req,res) => {

    try {

        const category = req.params.category;
   
        const event = await event.find({ category: category });

        if (!event) {

            return res.json({
                error : "You have no event yet "
            }) 
                
        }

        res.send(event);
        
    } catch (err) {
        res.json(err)
        
    }

    

}
module.exports= { geteventByCategory };