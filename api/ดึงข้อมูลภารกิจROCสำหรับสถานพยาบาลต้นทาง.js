import http from 'k6/http';
import { token } from './token.js';

export function ดึงข้อมูลภารกิจROCสำหรับสถานพยาบาลต้นทาง() {
    const missionId = '28ad279b-a49a-4659-8478-f4aad0cc28dd'; // เปลี่ยนเป็น missionId ที่ต้องการ

    const url = `https://loadtest-moph-refer.inet.co.th/backend/api/v2/portal/roc-mission/roc-mission-out-data/${missionId}`;

    const params = {
        headers: {
            'Authorization': 'Bearer ' + token,
        },
    };

    const res = http.get(url, params);

    //console.log('Response body:', res.body);

    return res;
}
