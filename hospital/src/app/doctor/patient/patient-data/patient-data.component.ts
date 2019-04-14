import { Component, OnInit } from '@angular/core';

import { PatientService } from '../../../services/patient.service';
import { PatientAuthService } from 'src/app/patient-auth.service';

@Component({
  selector: 'app-patient-data',
  templateUrl: './patient-data.component.html',
  styleUrls: ['./patient-data.component.css']
})
export class PatientDataComponent implements OnInit {

  patientData: any;
  constructor(private patientService: PatientService, private patientAuthService: PatientAuthService) { }

  ngOnInit() {
    if(this.patientAuthService.loggedIn){
      this.patientService.getData().subscribe((patientData: any)=>{
          this.patientData = patientData;
      });
    }
  }

}
