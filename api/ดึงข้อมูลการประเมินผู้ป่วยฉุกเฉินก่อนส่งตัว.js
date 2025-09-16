import http from 'k6/http';
import { token } from './token.js';

export function ดึงข้อมูลการประเมินผู้ป่วยฉุกเฉินก่อนส่งตัว() {
    const referId = 'ROC999982025095'; // เปลี่ยนเป็น referId ที่ต้องการ

    const url = `https://loadtest-moph-refer.inet.co.th/backend/api/v2/portal/emergency-patient-form/${referId}`;

    const params = {
        headers: {
            'Authorization': 'Bearer ' + token,
        },
    };

    const res = http.get(url, params);

    //console.log('Response body:', res.body);

    return res;
}
