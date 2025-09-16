import http from 'k6/http';
import { token } from './token.js';

export function อัปเดตรถฉุกเฉินกลับมาถึงสถานพยาบาลต้นทาง() {
    const url = 'https://loadtest-moph-refer.inet.co.th/backend/api/v2/portal/manage-ambulance/ambulance_arrive_origin_hospital';

    const payload = JSON.stringify({
        ambulance_uid: "cdfa9682-1991-4c30-93bb-1f2280504c34",
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
