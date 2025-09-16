import http from 'k6/http';
import { token } from './token.js';

export function ดึงจำนวนข้อความแจ้งเตือนภารกิจrocที่ยังไม่ได้อ่าน() {
    const url = 'https://loadtest-moph-refer.inet.co.th/backend/api/v2/portal/roc-notify/count-unread?hcode=99999';

    const params = {
        headers: {
            'Authorization': 'Bearer ' + token,
        },
    };

    const res = http.get(url, params);

    //console.log('Response Body:', res.body);

    return res;
}
