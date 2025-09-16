import http from 'k6/http';
import { token } from './token.js';

export function ดึงรายการข้อมูลเจ้าหน้าที่ROC() {
    const url = 'https://loadtest-moph-refer.inet.co.th/backend/api/v2/portal/roc-staff/list-roc-staff?hcode=99998&position=&role=&text_search=&page=&per_page=';

    const params = {
        headers: {
            'Authorization': 'Bearer ' + token,
        },
    };

    const res = http.get(url, params);

    //console.log('Response body:', res.body);

    return res;
}
