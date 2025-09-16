import http from 'k6/http';
import { token } from './token.js';

export function ดึงข้อมูลการประเมินผู้ป่วยฉุกเฉินระหว่างส่งตัว() {
    const missionId = 'ROC999982025097';
    const referOutDateTime = encodeURIComponent('2025-09-12 21:34');

    const url = `https://loadtest-moph-refer.inet.co.th/backend/api/v2/portal/emergency-patient-form/list-ambulance?mission_id=${missionId}&refer_out_date_time=${referOutDateTime}`;

    const params = {
        headers: {
            'Authorization': 'Bearer ' + token,
        },
    };

    const res = http.get(url, params);

    //console.log('Response body:', res.body);

    return res;
}
