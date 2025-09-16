import http from 'k6/http';
import { token } from './token.js';

export function ดึงข้อมูลรถฉุกเฉินทั้งหมดสำหรับสร้างภารกิจ() {
    const url = 'https://loadtest-moph-refer.inet.co.th/backend/api/v2/portal/roc-mission/list-roc-ambulance?hcode=99998&mission_uid=null&ambulance_uid=null&text_search=null&page=null&per_page=null';

    const params = {
        headers: {
            'Authorization': 'Bearer ' + token,
        },
    };

    const res = http.get(url, params);

    //console.log('Response body:', res.body);

    return res;
}
