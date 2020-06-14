import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { IContactForm } from '../../../interfaces/contact-form.interface';

@Component({
  selector: 'app-admin-messages',
  templateUrl: './admin-messages.component.html',
  styleUrls: ['./admin-messages.component.css']
})
export class AdminMessagesComponent implements OnInit {

  messageList$: Observable<any>;
  messageListCollectionRef = this.dataService.createCollection('email-list');

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.messageList$ = this.dataService.getData(this.messageListCollectionRef);
  }

  public toggleRead(message: IContactForm) {
    this.messageListCollectionRef.doc(message.id).update({ read: !message.read });
  }

  public deleteMessage(message: IContactForm) {
    this.messageListCollectionRef.doc(message.id).delete();
  }

}
