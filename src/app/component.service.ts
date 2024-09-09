import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComponentService {
  data = [
    {
      "id": 1,
      "from": "abc@company.com",
      "to": "client1@example.com",
      "subject": "Monthly Sales Report",
      "body": "Dear Client 1,\n\nPlease find attached the monthly sales report for your review.\n\nBest regards,\nABC Company",
      "cc": "manager@company.com",
      "bcc": null
    },
    {
      "id": 2,
      "from": "abc@company.com",
      "to": "client2@example.com",
      "subject": "Annual Performance Review",
      "body": "Dear Client 2,\n\nWe are pleased to share with you the annual performance review report. Please review the attached document.\n\nSincerely,\nABC Company",
      "cc": null,
      "bcc": "admin@company.com"
    },
    {
      "id": 3,
      "from": "abc@company.com",
      "to": "client3@example.com",
      "subject": "Project Update",
      "body": "Hello Client 3,\n\nHere is the latest update on the project. Please find the details in the attached report.\n\nBest,\nABC Company",
      "cc": null,
      "bcc": null
    },
    {
      "id": 4,
      "from": "abc@company.com",
      "to": "client4@example.com",
      "subject": "Quarterly Financial Report",
      "body": "Hi Client 4,\n\nAttached is the quarterly financial report for your reference.\n\nThanks,\nABC Company",
      "cc": "finance@company.com",
      "bcc": null
    }
  ];
  constructor() { }

  private emailData: any;

  setEmailData(data: any) {
    this.emailData = data;
  }

  getEmailData() {
    console.log('Nothing',this.emailData);
    return this.emailData;
  }

  getData() {
    console.log("get Data called");
    return this.data
  }
}
