import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  $profile: Observable<any>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.$profile = this.dataService.createCollection('profile');
  }

}
