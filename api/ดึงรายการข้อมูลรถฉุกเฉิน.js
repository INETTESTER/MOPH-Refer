import http from 'k6/http';
import { token } from './token.js';

export function ดึงรายการข้อมูลรถฉุกเฉิน() {
    const url = 'https://loadtest-moph-refer.inet.co.th/backend/api/v2/portal/manage-ambulance/list-ambulance-data?hcode=99998&ambulance_type=&ambulance_status=&status=&text_search=&page=&per_page=';

    const params = {
        headers: {
            'Authorization': 'Bearer ' + token,
        },
    };

    const res = http.get(url, params);

    //console.log('Response body:', res.body);

    return res;
}
