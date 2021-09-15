/* const server = new Server({
  host: process.env.NODE_ENV !== 'production' ? 'localhost' : 'dicoding.com',
});
 */
/* const cpuInformation = process.memoryUsage();

console.log(cpuInformation);
 */

const initialMemoryUsage = process.memoryUsage().heapUsed;
const yourName = process.argv[2];
const environment = process.env.NODE_ENV;

for (let i = 0; i <= 10000; i++) {}

const currentMemoryUsage = process.memoryUsage().heapUsed;

console.log(`hai, ${yourName}`);
console.log(`Mode environment: ${environment}`);
console.log(
  `Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`
);

/*
 *WARNING TO RUN THIS PROGRAM USE COMMAND PROMPT PLEASE!!!
 *SET NODE_ENV=development && node ./process-object/index.js <your name>
 */
