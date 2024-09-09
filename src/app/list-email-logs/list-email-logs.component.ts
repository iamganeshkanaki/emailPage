import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { ComponentService } from '../component.service';
import { log } from 'console';
import { Location } from '@angular/common';
@Component({
  selector: 'app-list-email-logs',
  standalone: true,
  imports: [MatTableModule, MatCardModule],
  templateUrl: './list-email-logs.component.html',
  styleUrl: './list-email-logs.component.css'
})
export class ListEmailLogsComponent {
  
  constructor(public router: Router,public emailService: ComponentService,
    public location: Location
  ) { }
  email: any;
  emailList: any;
  ngOnInit(){
    this.emailList = this.emailService.getData();
    console.log('This is Email',this.emailList);
  }
  displayedColumns: string[] = ['action', 'id', 'from', 'to', 'subject', 'body', 'cc', 'bcc'];
  takeme(data:any){
    this.emailService.setEmailData(data);
    this.router.navigate(['/email-detail'])
  }

  back(): void {
    this.location.back();
  }

}
