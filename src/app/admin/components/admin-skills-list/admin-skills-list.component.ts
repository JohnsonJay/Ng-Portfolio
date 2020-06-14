import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';
import { IFormFields } from '../../interfaces/form-fields.interface';
import { IFormModal } from '../../interfaces/form-modal.interface';

@Component({
  selector: 'app-skills-page',
  templateUrl: './admin-skills-list.component.html',
  styleUrls: ['./admin-skills-list.component.css']
})
export class AdminSkillsListComponent implements OnInit {

  skillsCollectionRef = this.dataService.createCollection('skills-list');
  $skills: Observable<any[]>;

  formFields: Array<IFormFields> = [
    {
      label: 'Skill Name',
      formControlName: 'skillName',
      placeholder: ''
    } ,
    {
      label: 'Skill Level',
      formControlName: 'skillLevel',
      placeholder: ''
    },
    {
      label: 'Skill Image URL',
      formControlName: 'skillImgUrl',
      placeholder: ''
    }
  ];

  formModalContent: IFormModal = {
    title: 'Try adding a new skill to this list',
    buttonText: 'Add a new skill',
    isVisible: false,
    isEditing: false,
    formFields: this.formFields
  };

  private itemId: string;

  constructor(
    private dataService: DataService,
  ) { }

  ngOnInit() {
    this.$skills = this.dataService.getData(this.skillsCollectionRef);
  }

  public addSkill($event) {
    const { skillName, skillLevel, skillImgUrl } = $event;
    this.skillsCollectionRef.add({ skillName, skillLevel, skillImgUrl });
  }
  public editSkill($event) {
    const { skillName, skillLevel, skillImgUrl } = $event;
    this.skillsCollectionRef.doc(this.itemId).update({ skillName, skillLevel, skillImgUrl });
  }

  public removeSkill(id: string) {
    this.skillsCollectionRef.doc(id).delete();
  }

  public resetModalContent() {
    this.formModalContent.isEditing = false;
    this.formModalContent.title = 'Try adding a new item';
    this.formModalContent.buttonText = 'Add a new skill';
  }

  public showModal() {
    this.resetModalContent();
    this.formModalContent.isVisible = true;
  }

  public editModal(skill: any) {
    this.formModalContent.isEditing = true;
    this.formModalContent.isVisible = true;
    this.formModalContent.title = 'Try editing this item';
    this.formModalContent.buttonText = 'Edit project';

    this.itemId = skill.id;
  }

}
