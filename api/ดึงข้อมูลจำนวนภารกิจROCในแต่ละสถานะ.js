import http from 'k6/http';
import { token } from './token.js';

export function ดึงข้อมูลจำนวนภารกิจROCในแต่ละสถานะ() {
    const url = 'https://loadtest-moph-refer.inet.co.th/backend/api/v2/portal/roc-mission/roc-mission-count-status';

    const payload = JSON.stringify({
        hcode: "99998",
        side: "out",
        emergency: [],
        text_search: ""
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
