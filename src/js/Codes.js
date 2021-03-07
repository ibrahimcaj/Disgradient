import axios from 'axios';

import Util from './Util';
import Code from './Code';
import Colors from './Colors';
import Points from './Points';

var codesArray = [];

var Codes = {
    fetch: (id = null) => {
        axios.get('https://144.172.75.30:8000/codes').then((response) => {
            // ...
            
            return response.data.codes;
        }).catch(console.error);
    },
    insert: () => {
        var codes = Util.prototype.getFolderColors(),
            colors = Colors.prototype.getColors(true),
            points = Points.prototype.getPoints();

        if (codes.length === 0) return;
        if (codes.join(', ') === codesArray.join(', ')) return;

        codesArray = codes;

        axios.post('https://144.172.75.30:8000/codes', { codes: codes, colors: colors, points: points }).then((response) => {
            // ...

            Code.prototype.updateCode(response.data.id);

            return response.data;
        }).catch(console.error);
    }
}
export default Codes;
