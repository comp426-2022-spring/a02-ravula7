import { flipACoin } from "./modules/coin.mjs";

import { createRequire } from "module";
const require = createRequire(import.meta.url);

let call = null;
const args = require('minimist')(process.argv.slice(2));
call = args['call']

if(call == null || (call != 'heads' && call != 'tails')){
    let error = "Error: no input.";
    let usage = "Usage: node guess-flip --call=[heads|tails]";
    console.log((error + '\n' + usage));
}

else{
    console.log(flipACoin(call));
}


