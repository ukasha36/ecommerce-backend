import bcrypt from 'bcrypt'

 
const createHash = async (plainText) => {
 const hash = await bcrypt.hashSync(plainText , 10);
 return hash 
}

export {
    createHash
}