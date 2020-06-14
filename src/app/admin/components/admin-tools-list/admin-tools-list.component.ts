import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { IFormFields } from '../../interfaces/form-fields.interface';
import { IFormModal } from '../../interfaces/form-modal.interface';

@Component({
  selector: 'app-tools-page',
  templateUrl: './admin-tools-list.component.html',
  styleUrls: ['./admin-tools-list.component.css']
})
export class AdminToolsListComponent implements OnInit {

  toolsCollectionRef = this.dataService.createCollection('tools-list');
  $tools: Observable<any[]>;

  formFields: Array<IFormFields> = [
    {
      label: 'Tool Name',
      formControlName: 'toolName',
      placeholder: ''
    } ,
    {
      label: 'Tool Image URL',
      formControlName: 'toolImgUrl',
      placeholder: ''
    },
  ];

  formModalContent: IFormModal = {
    title: 'Try adding a new tool to this list',
    buttonText: 'Add a new tool',
    isVisible: false,
    isEditing: false,
    formFields: this.formFields
  };
  private itemId: string;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.$tools = this.dataService.getData(this.toolsCollectionRef);
  }

  public addTool($event) {
    const { toolName, toolImgUrl } = $event;
    this.toolsCollectionRef.add({ toolName, toolImgUrl });
  }

  public editTool($event) {
    const { toolName, toolImgUrl } = $event;
    this.toolsCollectionRef.doc(this.itemId).update({ toolName, toolImgUrl });
  }

  public removeTool(id: string) {
    this.toolsCollectionRef.doc(id).delete();
  }

  public resetModalContent() {
    this.formModalContent.isEditing = false;
    this.formModalContent.title = 'Try adding a new tool';
    this.formModalContent.buttonText = 'Add a new tool';
  }

  public editModal(skill: any) {
    this.formModalContent.isEditing = true;
    this.formModalContent.isVisible = true;
    this.formModalContent.title = 'Try editing this item';
    this.formModalContent.buttonText = 'Edit project';

    this.itemId = skill.id;
  }

  public showModal() {
    this.resetModalContent();
    this.formModalContent.isVisible = true;
  }

}
