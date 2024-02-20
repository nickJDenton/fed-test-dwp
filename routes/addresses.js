const express = require('express');
const router = express.Router();
const axios = require('axios');
const apiKey = 'Xi0Px2KXSPHlwu1AD6FLR8kWJMgAoQQu';

let listOfAddresses;


module.exports = router;

router.post("/addresses",(req,res)=>{
    const postcodeWithNoSpaces = req.body.postcode.replace(/ /g,'');
    if(postcodeWithNoSpaces == ""){
        res.redirect("/")//obviously need to add in proper validation!
    }
    const postcodeOutcode = postcodeWithNoSpaces.slice(0, -3);
    const postcodeIncode = postcodeWithNoSpaces.slice(-3);


        //used the https://api.os.uk/search/names endpoint, however, this doesn't return address data. I assume we should have used https://api.os.uk/search/places. Emailed the HR address, but didn't get a reply so went with the endpoint provided and have tried to show how it could work!
    async function find() {
        axios.get('https://api.os.uk/search/names/v1/find?query='+postcodeOutcode + '+' + postcodeIncode + '&key=' + apiKey)
        .then(function (response) {
          listOfAddresses = response.data;
          res.render('../views/addresses.njk',{
            listOfAddresses:listOfAddresses.results
        });
        });
    }
    find()

});  
