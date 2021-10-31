const stripe = require("stripe")("sk_test_51J0kMzKIrXdj2Bmpqo4SHZctqA1JpxekYT3JzHWatM9Zn2i9CxLDiUyQAohtkWHnzniATE3cBjmmfGAhamnLcT1Y00s0EqPNM2");
const { v4: uuidv4 } = require('uuid');
const intiative = require('../models/intiative.model');
const event = require('../models/event.model');
const assSec = require('../models/assSec.model');

const checkout = async (req,res)=>{    

  let error;
  let status;

  try {

    const  event = req.body.event;
    const token = req.body.token;

    const vol = await stripe.vol.create({
      email: token.email,
      source: token.id
    });

    const idempotency_key = uuidv4();
    const charge = await stripe.charges.create(
      {
        amount: event.price * 100,
        currency: "usd",
        vol: vol.id,
        receipt_email: token.email,
        description: `Donation the ${event.titel}`,
        shipping: {
          name: token.card.name,
          address: {
            line1: token.card.address_line1,
            line2: token.card.address_line2,
            city: token.card.address_city,
            country: token.card.address_country,
            postal_code: token.card.address_zip
          }
        }
      },
      {
        idempotency_key
      }
    );
    console.log("Charge:", { charge });
    status = "success";



    let intiativeDetails = { charge };
    let intiativeAddress = intiativeDetails.charge.source.address_line1
    let price = (intiativeDetails.charge.amount/100);
    let idevent = event._id;
    let idassSec = event.id_assSec;

    // ------------change event status to Donation ---------------------

    let Donation = await event.findByIdAndUpdate(idevent,{Donation: true});


    // ---------------------- add new intiative ---------------------------------

          const newintiative = new intiative({
                
                idevent: idevent,
                intiativeAddress: intiativeAddress,
                price: price,
             
        });

          const saveintiative = await newintiative.save(); 


    // ---------------------- add amount to the AssSec ---------------------------------


    
        let assSec = await assSec.findById(idassSec);

        let newTotalGain = assSec.totalGain + price;


        let updateTotalGain= await assSec.findByIdAndUpdate(idassSec,{totalGain: newTotalGain});


  } catch (error) {
    console.error("Error:", error);
    status = "failure";
  }

  res.json({ error, status });


}

module.exports={
    checkout
}