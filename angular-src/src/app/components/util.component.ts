import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'yes-no-dialog',
  template: `
  
  <h1 mat-dialog-title>{{data.title}}</h1>
<div mat-dialog-content>
  <p>{{data.message}}</p>
<br/>
</div>
<div mat-dialog-actions>
  <button mat-button (click)="onNoClick()" cdkFocusInitial>{{data.no}}</button>
  <button mat-button (click)="onYesClick()"  >{{data.yes}}</button>
</div>
  `,
})
export class YesNoDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<YesNoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: YesNoDialogData) {


  }

  onYesClick(): void {
    this.dialogRef.close({agree : true});
  }

  onNoClick(): void {
    this.dialogRef.close({agree : false});
  }

}

export interface YesNoDialogData{
  data : any,
  message : string,
  title: string,
  yes: string,
  no: string
}
