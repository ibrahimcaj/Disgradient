import axios from 'axios';

import Util from './Util';
import Code from './Code';

var codesArray = [];

var Codes = {
    fetch: (id = null) => {
        axios.get('http://localhost:3030/codes').then((response) => {
            // ...
            
            return response.data.codes;
        }).catch(console.error);
    },
    insert: () => {
        var codes = Util.prototype.getFolderColors();

        if (codes.length === 0) return;
        if (codes.join(', ') === codesArray.join(', ')) return;

        codesArray = codes;

        axios.post('http://localhost:3030/codes', { codes: codes }).then((response) => {
            // ...

            Code.prototype.updateCode(response.data.id);

            return response.data;
        }).catch(console.error);
    }
}
export default Codes;
