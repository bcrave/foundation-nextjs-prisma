import { generateKeyPair } from "jose";

export const { privateKey, publicKey } = await generateKeyPair("PS256");

console.log(privateKey);
console.log(publicKey);
