import { Component,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogInscription {
  firstnameInscription: string;
  lastnameInscription: string;
  emailInscription: string;
}

@Component({
  selector: 'app-dialog-inscription',
  templateUrl: './dialog-inscription.component.html',
  styleUrls: ['./dialog-inscription.component.css']
})
export class DialogInscriptionComponent{

  constructor(
    public dialogRef: MatDialogRef<DialogInscriptionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogInscription,) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
