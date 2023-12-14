import { MailSenderService } from './../../services/mail-sender.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  formData = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  constructor( private mailService : MailSenderService, private _snackBar:MatSnackBar) { }

  ngOnInit(): void {
  }

  sendMail(mailOption) {
    if (mailOption.valid) {
      this.mailService.sendMail(mailOption.value).subscribe(
        (response) => {
          const isFrench = localStorage.getItem('langue') === 'fr';
          const successMessage = isFrench ? 'envoyé' : 'sent';
          const errorMessage = isFrench ? 'non envoyé' : 'not sent';
          const message = response.status === 200 ? successMessage : errorMessage;
          this.openSnackBar(message,'close');
        },
        (error) => {
          console.error('Error occurred:', error);
          if (error.error instanceof ErrorEvent) {
            // Client-side error
            console.error('An error occurred:', error.error.message);
          } else {
            // Server-side error
            console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
          }
          // Handle the error in your preferred way, such as displaying an error message to the user
        }
      );
    } else {
      console.log('Form is invalid. Please check the inputs.');
    }
  }
  
  openSnackBar(message: string, action) {
    this._snackBar.open(message, action, {
      duration: 2000, // Duration in milliseconds
    });
  

}


}