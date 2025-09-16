import http from 'k6/http';
import { token } from './token.js';

export function ดึงข้อมูลสถานพยาบาลระหว่างทางที่ใกล้ที่สุด5อันดับแรก() {
    const url = 'https://loadtest-moph-refer.inet.co.th/backend/api/v1/portal/ambulance-track/hospital/list-on-way?mission_id=ROC999982025097&latitude=18.85263825509407&longitude=98.96846277860323';

    const params = {
        headers: {
            'Authorization': 'Bearer ' + token,
        },
    };

    const res = http.get(url, params);

    //console.log('Response Body:', res.body);

    return res;
}
