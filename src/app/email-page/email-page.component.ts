import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AsyncPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ListEmailLogsComponent } from '../list-email-logs/list-email-logs.component';
import { ComponentService } from '../component.service';
@Component({
  selector: 'app-email-page',
  standalone: true,
  imports: [MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatSelectModule,
    CommonModule,
    FormsModule,
    MatSlideToggleModule,
    AsyncPipe,
    ListEmailLogsComponent
  ],
  templateUrl: './email-page.component.html',
  styleUrl: './email-page.component.css'
})
export class EmailPageComponent {
  to: string = 'ganesh@rhythmflows.com';
  from: string = 'service@rhythmflows.com';
  cc: string = 'ganes@rhythmflows.com';
  bcc: string = 'demo@rhythmflows.com';
  subject: string = 'Testing Subject';
  body: string = '';

  email: any;
  emailId: string | null = null;
  description: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque reprehenderit necessitatibus, vitae reiciendis nemo ab tempore debitis non asperiores, eum placeat dolorem possimus repellat, cupiditate quae neque magnam corrupti aliquid! Blanditiis delectus quo dignissimos beatae repellendus a possimus commodi error, fugit tempora eius nemo hic, aperiam labore nobis nisi ex ipsum recusandae omnis! Ab aliquam dolores nemo optio ad debitis ratione tempore eos illo atque, consequatur sunt fugit facilis voluptatem quam corporis vel inventore laboriosam repellat culpa amet animi. Amet, sed ex. Amet ipsum iure quasi quo repellendus consequatur officia ullam illum! Laboriosam, est quod. Fuga quis aliquid culpa expedita.';
  constructor(public route: ActivatedRoute,
    public emaillist: EmailPageComponent,
    public emailService: ComponentService 
  ){}
  ngOnInit(): void {
    this.email = this.emailService.getEmailData(); // Retrieve data from the service
    console.log('Email details:', this.email);
    }
  sendMessage() {

    this.to = "ganesh@gmail.com";
    // Implement your logic to send the email here
    console.log('Sending email:', { to: this.to, cc: this.cc, bcc: this.bcc, subject: this.subject, body: this.body });
  }
  
}
