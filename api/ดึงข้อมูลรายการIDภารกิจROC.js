import http from 'k6/http';
import { token } from './token.js';

export function ดึงข้อมูลรายการIDภารกิจROC() {
    const url = 'https://loadtest-moph-refer.inet.co.th/backend/api/v1/refer-app/roc-mission/list-mission-id?hcode=99998&status=&side=&text_search=&page=&per_page=';

    const params = {
        headers: {
            'Authorization': 'Bearer ' + token,
        },
    };

    const res = http.get(url, params);

    //console.log('Response Body:', res.body);

    return res;
}
