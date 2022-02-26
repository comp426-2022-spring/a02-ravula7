import { coinFlips } from "./coin.mjs";
import { countFlips } from "./coin.mjs";

import { createRequire } from "module";
const require = createRequire(import.meta.url);


let myNum = 0;
const args = require('minimist')(process.argv.slice(2));
myNum = args['number']

if(myNum == 0){
    myNum = 1;
}

const coinArr = coinFlips(myNum);
console.log(coinArr);

const howMany = countFlips(coinArr);
console.log(howMany);

