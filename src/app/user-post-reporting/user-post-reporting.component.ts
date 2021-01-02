import { Component, OnInit } from '@angular/core';
import{ReportingService} from './reporting.service';
import{Reporting} from './reporting';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-user-post-reporting',
  templateUrl: './user-post-reporting.component.html',
  styleUrls: ['./user-post-reporting.component.css']
})
export class UserPostReportingComponent implements OnInit {

  constructor(private ReportingService : ReportingService) { }

  Reportings : Reporting[];
 
  displayedColumns: string[] = ['Post','Comments','User','Date','Like','DisLike'];
  

  ngOnInit(): void {
    this.getReporting();
  }

  getReporting(): void {
    
    this.ReportingService.getReportings()
    .subscribe(Reportings => this.Reportings = Reportings);
   
  }
  
 
}
