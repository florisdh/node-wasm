/**
 * Import the wasm like any other module.
 */
import {calculate} from "../../assembly/build/main.wasm";

console.log('The magic number is: ', calculate(34, 82));
