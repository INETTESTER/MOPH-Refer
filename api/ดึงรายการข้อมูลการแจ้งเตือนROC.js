import http from 'k6/http';
import { token } from './token.js';

export function ดึงรายการข้อมูลการแจ้งเตือนROC(hcode = "99999", page = "", per_page = "") {
    const url = `https://loadtest-moph-refer.inet.co.th/backend/api/v2/portal/roc-notify/portal-roc-notify?hcode=${hcode}&page=${page}&per_page=${per_page}`;

    const params = {
        headers: {
            'Authorization': 'Bearer ' + token,
        },
    };

    const res = http.get(url, params);
    //console.log('Response body:', res.body);
    return res;
}
