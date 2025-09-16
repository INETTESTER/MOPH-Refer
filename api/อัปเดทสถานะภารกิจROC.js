import http from 'k6/http';
import { token } from './token.js';

export function อัปเดทสถานะภารกิจROC() {
    const missionId = 'e2ab8b22-2095-4c6c-930a-40eb1b34c66a'; // เปลี่ยนเป็น missionId ที่ต้องการ

    const url = `https://loadtest-moph-refer.inet.co.th/backend/api/v2/portal/roc-mission/update-status/${missionId}`;

    const payload = JSON.stringify({
        status: "delivery",
        platform: ""
    });

    const params = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
    };

    const res = http.put(url, payload, params);

    //console.log('Response body:', res.body);

    return res;
}
