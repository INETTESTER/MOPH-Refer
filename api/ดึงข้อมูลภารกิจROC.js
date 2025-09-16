import http from 'k6/http';
import { token } from './token.js';

export function ดึงข้อมูลภารกิจROC() {
    const url = 'https://loadtest-moph-refer.inet.co.th/backend/api/v1/refer-app/roc-mission/mission-data/984122cb-937c-44e1-881a-3bceaa956b45?side=null';

    const params = {
        headers: {
            'Authorization': 'Bearer ' + token,
        },
    };

    const res = http.get(url, params);

    //console.log('Response Body:', res.body);

    return res;
}
