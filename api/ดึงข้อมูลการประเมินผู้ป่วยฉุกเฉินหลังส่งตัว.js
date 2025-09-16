import http from 'k6/http';
import { token } from './token.js';

export function ดึงข้อมูลการประเมินผู้ป่วยฉุกเฉินหลังส่งตัว(missionId = "ROC999982025091") {
    const url = `https://loadtest-moph-refer.inet.co.th/backend/api/v2/portal/emergency-patient-form/er-refer-in/${missionId}`;

    const params = {
        headers: {
            'Authorization': 'Bearer ' + token,
        },
    };

    const res = http.get(url, params);
    //console.log('Response body:', res.body);
    return res;
}
