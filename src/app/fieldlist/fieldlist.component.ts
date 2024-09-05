// field-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { RegisterService } from '../services/register.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  providers: [RegisterService],  // Add RegisterService to component's providers array
  selector: 'app-field-list',
  templateUrl: 'fieldlist.component.html',
  imports:[CommonModule,RouterModule]
})
export class FieldListComponent implements OnInit {
  data: any[] = [];

  constructor(private fieldListService: RegisterService, private router: Router) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.fieldListService.getList().subscribe(
      (response: any) => {
        this.data = response.fields;
        console.log('Data loaded:', this.data);
      },
      error => {
        console.error('Error loading data:', error);
      }
    );
  }

  onActionClick(id: number) {
    this.router.navigate(['/update', id]);
  }
}
