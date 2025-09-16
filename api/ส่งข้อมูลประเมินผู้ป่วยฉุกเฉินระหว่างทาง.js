import http from 'k6/http';
import { token } from './token.js';

export function ส่งข้อมูลประเมินผู้ป่วยฉุกเฉินระหว่างทาง() {
    const url = 'https://loadtest-moph-refer.inet.co.th/backend/api/v2/portal/emergency-patient-form/er-refer-out-ambulance';

    const payload = JSON.stringify({
        mission_id: "ROC999982025097",
        date_time_stamp: "2025-09-12 21:35",
        o2_sat: "94",
        respiratory_rate: "22",
        et_co2: "35",
        systolic_bp: "110",
        diastolic_bp: "70",
        heart_rate: "98",
        ekg_wave_form: "7",
        iv_rate: "80",
        inotropic: "5",
        bt: "37.5",
        conscious_e: "3",
        conscious_v: "4",
        conscious_m: "5",
        platform: ""
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
