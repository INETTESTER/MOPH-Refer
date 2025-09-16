//=============================== import API =================================
import { sleep } from 'k6';
import { error_check } from '../check/check.js';
import { scenario } from 'k6/execution';

import { อัปเดตรถฉุกเฉินกลับมาถึงสถานพยาบาลต้นทาง } from '../api/อัปเดตรถฉุกเฉินกลับมาถึงสถานพยาบาลต้นทาง.js';
import { ดึงรายการข้อมูลรถฉุกเฉิน } from '../api/ดึงรายการข้อมูลรถฉุกเฉิน.js';
import { ดึงรายการข้อมูลเจ้าหน้าที่ROC } from '../api/ดึงรายการข้อมูลเจ้าหน้าที่ROC.js';
import { ส่งข้อมูลภารกิจROC } from '../api/ส่งข้อมูลภารกิจROC.js';
import { ดึงข้อมูลจำนวนภารกิจROCในแต่ละสถานะ } from '../api/ดึงข้อมูลจำนวนภารกิจROCในแต่ละสถานะ.js';
import { ดึงข้อมูลภารกิจROCทั้งหมดโดยใช้รหัสสถานพยาบาล } from '../api/ดึงข้อมูลภารกิจROCทั้งหมดโดยใช้รหัสสถานพยาบาล.js';
import { ดึงข้อมูลภารกิจROCสำหรับสถานพยาบาลต้นทาง } from '../api/ดึงข้อมูลภารกิจROCสำหรับสถานพยาบาลต้นทาง.js';
import { อัปเดทสถานะภารกิจROC } from '../api/อัปเดทสถานะภารกิจROC.js';
import { ดึงข้อมูลเจ้าหน้าที่ROCสำหรับสร้างภารกิจ } from '../api/ดึงข้อมูลเจ้าหน้าที่ROCสำหรับสร้างภารกิจ.js';
import { ดึงข้อมูลรถฉุกเฉินทั้งหมดสำหรับสร้างภารกิจ } from '../api/ดึงข้อมูลรถฉุกเฉินทั้งหมดสำหรับสร้างภารกิจ.js';
import { ส่งข้อมูลประเมินผู้ป่วยฉุกเฉินก่อนส่งตัว } from '../api/ส่งข้อมูลประเมินผู้ป่วยฉุกเฉินก่อนส่งตัว.js';
import { ดึงข้อมูลการประเมินผู้ป่วยฉุกเฉินก่อนส่งตัว } from '../api/ดึงข้อมูลการประเมินผู้ป่วยฉุกเฉินก่อนส่งตัว.js';
import { ส่งข้อมูลประเมินผู้ป่วยฉุกเฉินระหว่างทาง } from '../api/ส่งข้อมูลประเมินผู้ป่วยฉุกเฉินระหว่างทาง.js';
import { ดึงข้อมูลการประเมินผู้ป่วยฉุกเฉินระหว่างส่งตัว } from '../api/ดึงข้อมูลการประเมินผู้ป่วยฉุกเฉินระหว่างส่งตัว.js';
import { ส่งข้อมูลประเมินผู้ป่วยฉุกเฉินหลังส่งตัว } from '../api/ส่งข้อมูลประเมินผู้ป่วยฉุกเฉินหลังส่งตัว.js';
import { ดึงข้อมูลการประเมินผู้ป่วยฉุกเฉินหลังส่งตัว } from '../api/ดึงข้อมูลการประเมินผู้ป่วยฉุกเฉินหลังส่งตัว.js';
import { ดึงรายการข้อมูลการแจ้งเตือนROC } from '../api/ดึงรายการข้อมูลการแจ้งเตือนROC.js';
import { อัปเดตข้อมูลการอ่านแจ้งเตือนROC } from '../api/อัปเดตข้อมูลการอ่านแจ้งเตือนROC.js';
import { ดึงจำนวนข้อความแจ้งเตือนภารกิจrocที่ยังไม่ได้อ่าน } from '../api/ดึงจำนวนข้อความแจ้งเตือนภารกิจrocที่ยังไม่ได้อ่าน.js';
import { ดึงข้อมูลผู้ป่วยตามเลขIDภารกิจROC } from '../api/ดึงข้อมูลผู้ป่วยตามเลขIDภารกิจROC.js';
import { ดึงข้อมูลสถานพยาบาลระหว่างทางที่ใกล้ที่สุด5อันดับแรก } from '../api/ดึงข้อมูลสถานพยาบาลระหว่างทางที่ใกล้ที่สุด5อันดับแรก.js';
import { ดึงข้อมูลการแวะพักฉุกเฉินสถานพยาบาลระหว่างทาง } from '../api/ดึงข้อมูลการแวะพักฉุกเฉินสถานพยาบาลระหว่างทาง.js';
import { ดึงระยะทางแบบการกระจัดจากตำแหน่งรถฉุกเฉินกับสถานพยาบาล } from '../api/ดึงระยะทางแบบการกระจัดจากตำแหน่งรถฉุกเฉินกับสถานพยาบาล.js';
import { ดึงข้อมูลรายการIDภารกิจROC } from '../api/ดึงข้อมูลรายการIDภารกิจROC.js';
import { ดึงข้อมูลภารกิจROC } from '../api/ดึงข้อมูลภารกิจROC.js';



//============================================================================

export default function () {    //เรียกใช้ API ใน export default function
  //response = อัปเดตรถฉุกเฉินกลับมาถึงสถานพยาบาลต้นทาง() //1
  //response = ดึงรายการข้อมูลรถฉุกเฉิน() //2
  //response = ดึงรายการข้อมูลเจ้าหน้าที่ROC() //3
  //response = ส่งข้อมูลภารกิจROC() //4
  //response = ดึงข้อมูลจำนวนภารกิจROCในแต่ละสถานะ() //5
  //response = ดึงข้อมูลภารกิจROCทั้งหมดโดยใช้รหัสสถานพยาบาล() //6
  //response = ดึงข้อมูลภารกิจROCสำหรับสถานพยาบาลต้นทาง() //7
  //response = อัปเดทสถานะภารกิจROC() //8
  //response = ดึงข้อมูลเจ้าหน้าที่ROCสำหรับสร้างภารกิจ() //9
  //response = ดึงข้อมูลรถฉุกเฉินทั้งหมดสำหรับสร้างภารกิจ() //10
  //response = ส่งข้อมูลประเมินผู้ป่วยฉุกเฉินก่อนส่งตัว() //11
  //response = ดึงข้อมูลการประเมินผู้ป่วยฉุกเฉินก่อนส่งตัว() //12
  //response = ส่งข้อมูลประเมินผู้ป่วยฉุกเฉินระหว่างทาง() //13
  //response = ดึงข้อมูลการประเมินผู้ป่วยฉุกเฉินระหว่างส่งตัว() //14
  //response = ส่งข้อมูลประเมินผู้ป่วยฉุกเฉินหลังส่งตัว() //15
  //response = ดึงข้อมูลการประเมินผู้ป่วยฉุกเฉินหลังส่งตัว() //16
  //response = ดึงรายการข้อมูลการแจ้งเตือนROC() //17
  //response = อัปเดตข้อมูลการอ่านแจ้งเตือนROC() //18
  //response = ดึงจำนวนข้อความแจ้งเตือนภารกิจrocที่ยังไม่ได้อ่าน() //19
  //response = ดึงข้อมูลผู้ป่วยตามเลขIDภารกิจROC() //20
  //response = ดึงข้อมูลสถานพยาบาลระหว่างทางที่ใกล้ที่สุด5อันดับแรก() //21
  //response = ดึงข้อมูลการแวะพักฉุกเฉินสถานพยาบาลระหว่างทาง() //22
  //response = ดึงระยะทางแบบการกระจัดจากตำแหน่งรถฉุกเฉินกับสถานพยาบาล() //23
  //response = ดึงข้อมูลรายการIDภารกิจROC() //24
  //response = ดึงข้อมูลภารกิจROC() //25



  error_check(response);
  sleep(1)
}











































































const cid = __ENV.cid || "1";
const id = __ENV.id || "1";
const projectname = __ENV.projectname || "1";
const user = __ENV.user || "1";
const durationx = __ENV.durationx || "1";
let response;
const scenariox = __ENV.scenariox || "1";
let options;
const vusx = Math.ceil(user / durationx);
if (scenariox == 1) {
  options = {
    http: {
      timeout: '300s'
    },
    insecureSkipTLSVerify: true,
    discardResponseBodies: true,
    scenarios: {
      contacts: {
        executor: 'per-vu-iterations',
        vus: vusx,
        iterations: durationx,
        maxDuration: '10m',
        gracefulStop: '120s',
      },
    },
  };
}
else if (scenariox == 2) {
  options = {
    http: {
      timeout: '300s'
    },
    insecureSkipTLSVerify: true,
    vus: user,
    duration: durationx + 's',
    gracefulStop: '120s',
  };
}
else if (scenariox == 3) {
  options = {
    http: {
      timeout: '300s'
    },
    insecureSkipTLSVerify: true,
    scenarios: {
      example_scenario: {
        executor: 'constant-arrival-rate',
        // rate: user,
        // timeUnit: durationx+'s',
        rate: vusx,
        timeUnit: '1s',
        preAllocatedVUs: user,
        duration: durationx + 's', // ระบุระยะเวลาที่ต้องการให้ทดสอบ
        gracefulStop: '120s',
      },
    },
  };
}
else {
  options = {
    insecureSkipTLSVerify: true,
    discardResponseBodies: true,
    scenarios: {
      contacts: {
        executor: 'per-vu-iterations',
        vus: vusx,
        iterations: durationx,
        maxDuration: '10m',
      },
    },
  };
}
export { options };