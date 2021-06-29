import { Component,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogContact {
  lastnameContact: string;
  emailContact: string;
  phoneContact: string;
  textContact: string;
}

@Component({
  selector: 'app-dialog-contact',
  templateUrl: './dialog-contact.component.html',
  styleUrls: ['./dialog-contact.component.css']
})
export class DialogContactComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogContactComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogContact,) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
