import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-download-response',
  templateUrl: './download-response.component.html',
  styleUrls: ['./download-response.component.css']
})
export class DownloadResponseComponent implements OnInit {

  fileNames: String[] = ["Hunter Request File", "Experian Request File", "Digibank Pre-Approval File"];

  defaultBatchValue=null;
  batches:String[]=["Batch123","Batch345","Batch567"];
  defaultValue = null;
  selected: String;
  constructor() { }

  ngOnInit() {
  }

  isSelected(event) {
    this.selected = event.target.value;
    alert(this.selected);
  }

}
