import { Component, OnInit, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {  FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { HttpClient } from '@angular/common/http';
const URL = 'http://localhost:8080/patient/upload';
// import { PatientAuthService } from '../../patient-auth.service';




@Component({
  selector: 'app-patient-upload',
  templateUrl: './patient-upload.component.html',
  styleUrls: ['./patient-upload.component.css']
})
export class PatientUploadComponent implements OnInit {
  private elem: ElementRef;
  constructor(private router: Router, private http: HttpClient) { }
    // public uploader:FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});
    selectedFile: File =null;
    ngOnInit() {
      // this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false; };
      // this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
      //   console.log("ImageUpload:uploaded:", item, status, response);
    // };
  }
 onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
  }
  upload(form: NgForm) {
      const fd = new FormData();
      fd.append('image', this.selectedFile, this.selectedFile.name);
      fd.append('summary', form.value.summary);
      console.log(this.selectedFile);
      this.http.post('http://localhost:8080/patient/upload', fd).subscribe(res => {
          console.log(res);
        })
  }

}
