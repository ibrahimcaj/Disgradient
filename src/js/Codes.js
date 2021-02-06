import axios from 'axios';

var Codes = {
    fetch: (id = null) => {
        return new Promise((resolve, reject) => {
            axios.get('http://localhost:3030/codes').then((response) => {
                // ...

                resolve(response.data.codes);
            }).catch(reject);
        });
    },
    insert: (codes) => {
        return new Promise((resolve, reject) => {
            if (!codes) return reject(codes);

            axios.post('http://localhost:3030/codes', { codes: codes }).then((response) => {
                // ...

                resolve(response.data);
            }).catch(reject);
        });
    }
}
export default Codes;
