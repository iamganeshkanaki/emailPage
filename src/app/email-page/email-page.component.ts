import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-email-page',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, CommonModule, FormsModule],
  templateUrl: './email-page.component.html',
  styleUrl: './email-page.component.css'
})
export class EmailPageComponent {
  to: string = '';
  cc: string = '';
  bcc: string = '';
  subject: string = '';
  body: string = '';
  sendMessage() {
    // Implement your logic to send the email here
    console.log('Sending email:', { to: this.to, cc: this.cc, bcc: this.bcc, subject: this.subject, body: this.body });
  }

}
