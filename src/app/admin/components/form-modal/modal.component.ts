import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IFormModal } from '../../interfaces/form-modal.interface';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  formGroup: FormGroup;

  @Input() formModalInputs: IFormModal;

  @Output() close = new EventEmitter<void>();
  @Output() submit = new EventEmitter<any>();
  @Output() edit = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    const group = {};
    this.formModalInputs.formFields.forEach(field => {
      group[field.formControlName] = new FormControl('');
    });
    this.formGroup = new FormGroup(group);
  }

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    if (this.formModalInputs.isEditing) {
      this.edit.emit(this.formGroup.value);
      this.close.emit();
    } else {
      this.submit.emit(this.formGroup.value);
      this.close.emit();
    }
  }
}
