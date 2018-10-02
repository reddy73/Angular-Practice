import { Component, OnInit } from '@angular/core';
import { UploadFileService } from '../upload-file.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-upload-source-file',
  templateUrl: './upload-source-file.component.html',
  styleUrls: ['./upload-source-file.component.css']
})
export class UploadSourceFileComponent {
  fileNames: any[] = ["Sas", "CreditVidya", "Hunter", "Experian", "Finacle", "Ccin"];
  defaultValue = null;
  selected: String;
  selectedFiles: FileList;
  currentFileUpload: File;
  chosenFileName:String;
  
  
  constructor(private uploadService: UploadFileService) {
    this.chosenFileName=null;
   }
  selectFile(event) {
    this.selectedFiles = event.target.files;
    this.chosenFileName=this.selectedFiles.item(0).name;
    console.log(this.selectedFiles.item(0) );
  }
  upload() {

    console.log("Uploading the File");
    // this.currentFileUpload = this.selectedFiles.item(0);
    // this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
    //   if (event instanceof HttpResponse) {
    //     console.log('File is completely uploaded!');
    //   }
    // });
    // this.selectedFiles = undefined;
  }
  isSelected(event) {
    this.selected = event.target.value;
    alert(this.selected);
  }

}
