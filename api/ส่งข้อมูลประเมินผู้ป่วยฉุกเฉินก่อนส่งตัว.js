import http from 'k6/http';
import { token } from './token.js';

export function ส่งข้อมูลประเมินผู้ป่วยฉุกเฉินก่อนส่งตัว() {
    const url = 'https://loadtest-moph-refer.inet.co.th/backend/api/v2/portal/emergency-patient-form/er-refer-out';

    const payload = JSON.stringify({
        refer_id: "99998-202506-1139",
        refer_date_time: "2025-06-29 20:10",
        hcode_origin: "99998",
        hcode_destination: "99999",
        doctor_transport_supervisor: "Doctor",
        member_transport_supervisor: "None",
        patient_profile_cid: "1111111111111",
        patient_profile_title_name: "นาย",
        patient_profile_first_name: "ธนพัฒน์",
        patient_profile_middle_name: "",
        patient_profile_last_name: "เลิศวิทยา",
        patient_profile_gender: "M",
        initial_diagnosis_free_text: "HT in the young",
        initial_diagnosis_icd10: "",
        fast_tract: "Trauma",
        emergency: "1",
        reson_refer: "รักษาต่อเนื่อง",
        medical_coverage_mainiscl: "SSS",
        mission_id: "ROC999982025094",
        estimate_date: "2025-09-15",
        estimate_time: "09:30",
        patinet_symptoms: "รายละเอียดเพิ่มเติม",
        is_spreading_respiratory_in_fections: true,
        risk_of_spreading_patient: {
            is_patient_hand_washed: true,
            is_patient_wearing_mask: true
        },
        risk_of_staff: {
            is_staff_wearing_gloves: true,
            is_staff_wearing_surgical_mask: true,
            is_staff_wearing_n95: false
        },
        is_inform_destination_area: true,
        er_out_a: {
            airway: "airway_device_required",
            airway_device_required: {
                device: "et_tube",
                et_tube_no: "7",
                et_tube_depth: "22",
                is_cxr_after_et_tube: true,
                is_et_tube_position_correct: true,
                other_text: ""
            }
        },
        er_out_b: {
            o2_sat_before_data: { o2_sat_before_value: "lt_95", o2_sat: "90" },
            rr_before_data: { rr_before_value: "gt_25", rr: "28" },
            o2_support_data: { is_allowed: "Y", allowed: "ventilator", is_monitor_o2_sat: "Y" },
            on_icd_check_data: { is_on_icd_check: "Y", icd: "cxr_after_icd", cxr_after_icd: "icd_position_correct" }
        },
        er_out_c: {
            sbp_before_data: { sbp_before_value: "lt_90", sbp: "85" },
            hr_before_data: {
                hr_before_value: "gt_100",
                hr: "120",
                pacing_data: {
                    pacing: "",
                    is_pacing_rate: false,
                    pacing_rate: "",
                    is_out_put: false,
                    out_put: "",
                    pacing_not_applied_reason_text: ""
                },
                heart_rhythm_type: "cardiac_arrhythmia",
                cardiac_arrhythmia_text: "Atrial fibrillation"
            },
            iv_line_data: { iv_line: "iv_fluid", iv_fluid_list: [{ iv_fluid_type: "Dextran", iv_fluid_total_rate: "80" }] },
            inotropic_data: { is_inotropic: true, inotropic_list: [{ type: "dopamine", concentration_dose: "200", concentration_volume: "50", rate: "5" }] },
            blood_component: "PRC (Packed Red Cell)",
            blood_component_number: "1",
            blood_component_unit: "Unit",
            monitor_bp_in_transit: "Y",
            is_monitor_bp_in_transit_recommend: true,
            monitor_ekg_in_transit: "Y",
            is_monitor_ekg_in_transit_recommend: true,
            foleys_catheter_data: { is_foleys_catheter: "Y", is_residual_urine: true, residual_urine: "50", is_urine_bag_marked_before_refer: true }
        },
        er_out_d: {
            gcs_e_value: "3",
            gcs_v_value: "2",
            gcs_m_value: "5",
            pupil: "normal_size",
            rt: "",
            lt: "",
            rt_reflex: "",
            lt_reflex: "",
            motor_tone: "abnormal"
        },
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
