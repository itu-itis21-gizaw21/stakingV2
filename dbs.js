const mongoose = require('mongoose');
const validator = require('validator');
const dotenv = require('dotenv');
const express = require('express');
dotenv.config();

const app = express();

const Schema = mongoose.Schema;
const ChainInfoSchema = new Schema({
    chain_id: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
    },
    rpc_url: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
    },
    chain_info: {
        type: Object,
        required: true,
    },
    }
);

ChainInfoSchema.statics.createChainInfo = function (data, callback) {
    const ChainInfo = this;

    if (!data.chain_id || typeof data.chain_id != 'string' || data.chain_id.trim().length < 1)
        throw new Error('bad_request');

    if (!data.rpc_url || typeof data.rpc_url != 'string' || data.rpc_url.trim().length < 1)
        throw new Error('bad_request2');

    if (!data.chain_info){
       /*  console.log("data.chain_infox", typeof data.chain_info);
        console.log("data.chain_info", data.chain_info); */
        throw new Error('bad_request3');
    }

    const newChainInfo = new ChainInfo({
        chain_id: data.chain_id,
        rpc_url: data.rpc_url,
        chain_info: data.chain_info,
    });

    newMember.save((err, member) => {
        if (err) {
            console.log("createChainInfo error", err.message);
            return callback('internal_error');
        }
        return callback(null, member);
    });
};


ChainInfoSchema.statics.getAllData = function (callback) {
    const ChainInfo = this;

    ChainInfo.find({}, (err, chainInfo) => {
        if (err) {
            console.log("getAllData error", err.message);
            return callback('internal_error');
        }
        return C;
    });

}

const ChainInfox = mongoose.model('ChainInfo', ChainInfoSchema);

/**
 * 
throw new MongooseError('Model.find() no longer accepts a callback');
MongooseError: Model.find() no longer accepts a callback
 */

const fetch = require('node-fetch');
let chain_data = "";

async function getChainRegistry() {
      
    const response = await fetch('https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/cosmos/cosmoshub.json');
    const data = await response.json();
    return data;
}

async function fetchData() {
    chain_data = await getChainRegistry();
    try {
        const chainInfo = await ChainInfox.createChainInfo({
            chain_id: "cosmoshub-4",
            rpc_url: "https://rpc.cosmos.network",
            chain_info: chain_data,
        });
/*         console.log("x",chainInfo);
 */    } catch (error) {
        console.log(error.message);
    }
}
/* fetchData();
 */
// get all data

ChainInfox.getAllData((err, chainInfo) => {
    if (err) {
        console.log(err);
    }
    console.log(chainInfo.length);
});


const PORT = process.env.PORT || 5000;

  
mongoose
    .connect(process.env.MONGO_URL, {})
    .then(() => {
        app.listen(PORT, () => console.log(`Serverx running on port: ${PORT}`));
    })
    .catch((error) => console.log(error.message)
);