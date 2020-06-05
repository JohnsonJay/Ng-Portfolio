import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {

  $projects: Observable<any[]>;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.$projects = this.dataService.createCollection('projects-list');
  }

}
