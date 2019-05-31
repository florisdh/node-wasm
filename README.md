# node-wasm
A working example for the new `--experimental-wasm-modules` feature in node.js `v12.3.1`.

## Features
- Assemblyscript project for building `.wasm` file
- Node project using `--experimental-wasm-modules`
- Usage example

## Usage
### Prerequisite
Install node.js `v12.3.1` on your machine from [here](https://nodejs.org/dist/v12.3.1).

### Setup
```
git clone https://github.com/florisdh/node-wasm.git
cd node-wasm
```

### Build WebAssembly
Build the assemblyscript project to create the .wasm file.
```
cd assembly
npm i
npm run build
```
### Run Node Application
The node app has a simple usage example, which uses the wasm file generated by the previous step.
```
cd ../node
npm i
npm start
```

## About
Technologies like WebAssembly are changing the way our applications are built. More and more developers are now offloading heavy tasks to WebAssembly to improve overal performance. I made this project to provide a simple example on how you can already speed up your node application with this experimental feature.

### Notes
- Your script which is importing the WebAssembly file must end with `.mjs`.
- Not all WebAssembly features are implemented yet, so you might have to do some workarounds for more complex projects.

### TODO
- Add some benchmarks
- Link to docs in readme
