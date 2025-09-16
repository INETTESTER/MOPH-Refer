import http from 'k6/http';
import { token } from './token.js';

export function ดึงระยะทางแบบการกระจัดจากตำแหน่งรถฉุกเฉินกับสถานพยาบาล() {
    const url = 'https://loadtest-moph-refer.inet.co.th/backend/api/v1/portal/ambulance-track/distance?refer_id&mission_id=ROC999982025097&ambulance_lat=18.85263825509407&ambulance_long=98.96846277860323';

    const params = {
        headers: {
            'Authorization': 'Bearer ' + token,
        },
    };

    const res = http.get(url, params);

    //console.log('Response Body:', res.body);

    return res;
}
