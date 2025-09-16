import http from 'k6/http';
import { token } from './token.js';

export function ดึงข้อมูลผู้ป่วยตามเลขIDภารกิจROC() {
    const url = 'https://loadtest-moph-refer.inet.co.th/backend/api/v1/portal/ambulance-track/patient-data?mission_id=ROC999982025097';

    const params = {
        headers: {
            'Authorization': 'Bearer ' + token,
        },
    };

    const res = http.get(url, params);

    //console.log('Response Body:', res.body);

    return res;
}
