import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { finalize } from 'rxjs/operators';
import { DataService } from '../../services/data.service';
import { IProfile } from '../../interfaces/profile.interface';
import { IFormFields } from '../../interfaces/form-fields.interface';
import {IFormModal} from '../../interfaces/form-modal.interface';

@Component({
  selector: 'app-admin-about-me',
  templateUrl: './admin-about-me.component.html',
  styleUrls: ['./admin-about-me.component.css']
})
export class AdminAboutMeComponent implements OnInit {

  uploadPercent: Observable<number>;

  $profile: Observable<any>;
  profileCollectionRef = this.dataService.createCollection('profile');
  private itemId: string;

  formFields: Array<IFormFields> = [
    {
      label: 'First Name',
      formControlName: 'firstName',
      placeholder: 'First Name'
    },
    {
      label: 'Last Name',
      formControlName: 'lastName',
      placeholder: 'Last Name'
    },
    {
      label: 'Job Title',
      formControlName: 'jobTitle',
      placeholder: 'Job Title'
    },
    {
      label: 'Company Name',
      formControlName: 'company',
      placeholder: 'Company Name'
    },
    {
      label: 'Start Year',
      formControlName: 'startYear',
      placeholder: 'Start Year'
    },
    {
      label: 'About Me',
      formControlName: 'aboutMe',
      placeholder: 'About Me'
    }
  ];

  formModalContent: IFormModal = {
    title: 'Try editing your profile information',
    buttonText: 'Edit profile',
    isVisible: false,
    isEditing: false,
    formFields: this.formFields
  };

  constructor(
    private afStorage: AngularFireStorage,
    private dataService: DataService,
  ) { }

  ngOnInit() {
    this.$profile = this.dataService.getData(this.profileCollectionRef);
  }

  public uploadImage(event, id: string) {
    const file = event.target.files[0];
    const filePath = 'profile';
    const fileRef = this.afStorage.ref(filePath);
    const task = fileRef.put(file);

    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    task.snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().toPromise()
          .then( data => this.saveDownloadUrl(id, data, this.profileCollectionRef) )
          .catch( err => console.log('An error has occurred: ', err) );
      })
    ).subscribe();
  }

  public saveDownloadUrl(documentId: string, downloadUrl: string, profileColRef: AngularFirestoreCollection) {
    this.dataService.saveDownloadURL(documentId, downloadUrl, profileColRef);
  }

  public editProfile($event) {
    const { firstName, lastName, jobTitle, startYear, company, aboutMe } = $event;
    this.profileCollectionRef.doc(this.itemId).update({ firstName, lastName, jobTitle, startYear, company, aboutMe });
  }

  public editModal(profile: IProfile) {
    this.formModalContent.isEditing = true;
    this.formModalContent.isVisible = true;
    this.formModalContent.title = 'Try editing your profile';
    this.formModalContent.buttonText = 'Edit Profile';

    this.itemId = profile.id;
  }
}
