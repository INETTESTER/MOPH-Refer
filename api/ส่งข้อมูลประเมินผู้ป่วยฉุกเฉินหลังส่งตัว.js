import http from 'k6/http';
import { token } from './token.js';

export function ส่งข้อมูลประเมินผู้ป่วยฉุกเฉินหลังส่งตัว() {
    const url = 'https://loadtest-moph-refer.inet.co.th/backend/api/v2/portal/emergency-patient-form/er-refer-in';

    const payload = JSON.stringify({
        mission_id: "ROC999982025097", 
        assessor: "EP",
        arrive_date_time: "2025-09-15 12:30",
        esi: "1",
        is_initial_diagnosis: true,
        is_other_diagnosis: false,
        other_diagno_text: "",
        airway_care: "APP",
        airway_care_inappropriate_reason: "",
        breathing_support: "NR",
        breathing_support_inappropriate_reason: "",
        circulation: "APP",
        circulation_inappropriate_reason: "",
        spine_immobilization: "ND",
        spine_immobilization_inappropriate_reason: "",
        monitor: "APP",
        monitor_inappropriate_reason: "",
        transit_issue_management: "APP",
        transit_issue_management_inappropriate_reason: "",
        life_saving_procedure: {
            is_none: false,
            is_et_intubation: true,
            is_et_re_intubation: false,
            is_icd: false,
            is_significant_iv_fluid_resuscitation: false,
            is_central_line: false,
            is_cardioversion: false,
            is_external_pacing: false,
            is_cpr: false,
            is_other: true,
            other_text: "Emergency thoracotomy"
        },
        adverse_complication: {
            is_none: false,
            is_et_tube_dislodged: false,
            is_iv_line_dislodged: true,
            is_icd_line_dislodged: false,
            is_one_lung_intubation: false,
            is_icd_connection_incorrect: false,
            is_secretion_obstruction_of_et: false,
            is_other: false,
            other_text: ""
        },
        is_staff_ppe_standard: true,
        is_staff_ppe_improvement_required: false,
        staff_ppe_improvement_required_remark: "",
        transit_issue: "",
        assessment_recommendations: "",
        evaluator_special_title: "",
        evaluator_title_name: "mr",
        evaluator_first_name: "test",
        evaluator_last_name: "test",
        is_doctor: true,
        is_nurse: false,
        remark: "",
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
