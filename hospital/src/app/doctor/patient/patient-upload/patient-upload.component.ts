import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {  FileUploader } from 'ng2-file-upload/ng2-file-upload';
const URL = 'http://localhost:8080/patient/upload';
// import { PatientAuthService } from '../../patient-auth.service';




@Component({
  selector: 'app-patient-upload',
  templateUrl: './patient-upload.component.html',
  styleUrls: ['./patient-upload.component.css']
})
export class PatientUploadComponent implements OnInit {

  constructor(private router: Router) { }
    public uploader:FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});

    ngOnInit() {


      this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false; };
      this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
        console.log("ImageUpload:uploaded:", item, status, response);
    };
  }

}
