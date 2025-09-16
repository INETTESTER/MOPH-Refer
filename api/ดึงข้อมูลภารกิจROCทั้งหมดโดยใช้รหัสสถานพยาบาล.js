import http from 'k6/http';
import { token } from './token.js';

export function ดึงข้อมูลภารกิจROCทั้งหมดโดยใช้รหัสสถานพยาบาล() {
    const url = 'https://loadtest-moph-refer.inet.co.th/backend/api/v2/portal/roc-mission/list-roc-mission-data';

    const payload = JSON.stringify({
        hcode: "99998",
        side: "out",
        emergency: [],
        status: "",
        text_search: "",
        page: 1,
        per_page: 10
    });

    const params = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
    };

    const res = http.post(url, payload, params);

    //console.log('Response body:', res.body);

    return res;
}
