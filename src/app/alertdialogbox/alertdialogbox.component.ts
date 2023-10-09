import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alertdialogbox',
  templateUrl: './alertdialogbox.component.html',
  styleUrls: ['./alertdialogbox.component.css']
})
export class AlertdialogboxComponent {

  constructor(public dialogueRef: MatDialogRef<AlertdialogboxComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { message: string }, private router: Router
  ) { }

  closeClick(): void {
    this.dialogueRef.close();
  }

}
