import http from 'k6/http';
import { token } from './token.js';

export function ส่งข้อมูลภารกิจROC() {
    const url = 'https://loadtest-moph-refer.inet.co.th/backend/api/v2/portal/roc-mission/';

    const payload = JSON.stringify({
        refer_id: "99998-202508-1211",
        hcode_origin: "99998",
        hcode_destination: "99999",
        emergency: "5",
        start_date: "2025-09-15 09:30",
        ambulance_uid: "1806a9c6-bc3c-4799-b637-52f6f67c46d1",
        driver_staff_provider_id: "0C1004CE10084",
        leader_staff_provider_id: "0C11E5BCD8C9C",
        staff: [
            {
                provider_id: "0B16B3D4BF4B8"
            }
        ]
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
