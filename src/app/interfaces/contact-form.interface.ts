export interface IContactForm {
  id?: string;
  name: string;
  email: string;
  message: string;
  contactNumber?: string;
  read: boolean;
  date: Date;
}
