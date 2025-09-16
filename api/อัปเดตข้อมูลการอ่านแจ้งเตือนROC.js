import http from 'k6/http';
import { token } from './token.js';

export function อัปเดตข้อมูลการอ่านแจ้งเตือนROC() {
    const url = 'https://loadtest-moph-refer.inet.co.th/backend/api/v2/portal/roc-notify/read-roc-notify';

    const payload = JSON.stringify({
        roc_notify_uid: "9ab7a329-d3ff-4b72-9190-f58740fb4560",
    });

    const params = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+token,
        },
    };

    const res = http.put(url, payload, params);

    //console.log('Response body:', res.body);

    return res;
}
