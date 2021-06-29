import { Component,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


export interface DialogIdentifier {
  emailIdentifier: string;
  passwordIdentifier: string;
}

@Component({
  selector: 'app-dialog-identifier',
  templateUrl: './dialog-identifier.component.html',
  styleUrls: ['./dialog-identifier.component.css']
})
export class DialogIdentifierComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogIdentifierComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogIdentifier) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
