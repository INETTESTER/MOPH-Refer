import http from 'k6/http';
import { token } from './token.js';

export function ดึงข้อมูลเจ้าหน้าที่ROCสำหรับสร้างภารกิจ() {
    const url = 'https://loadtest-moph-refer.inet.co.th/backend/api/v2/portal/roc-mission/list-roc-staff?hcode=99998&mission_uid&text_search&provider_id&role&page&per_page';

    const params = {
        headers: {
            'Authorization': 'Bearer ' + token,
        },
    };

    const res = http.get(url, params);

    //console.log('Response body:', res.body);

    return res;
}
