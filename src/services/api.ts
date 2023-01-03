import axios from 'axios';
import routeDictionary from './routeDictionary';


export default{
    async getZipCode(zipCode: string){
        return await axios.get(`
                https://viacep.com.br/${routeDictionary.consultByZipCode}/${zipCode}/json
        `);
    },
};