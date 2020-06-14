import { IFormFields } from './form-fields.interface';

export interface IFormModal {
  title: string;
  buttonText: string;
  isVisible: boolean;
  isEditing: boolean;
  formFields: Array<IFormFields>;
}
