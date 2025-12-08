import { Component, effect, inject, signal } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { RequiredField } from '../../../components/required-field/required-field';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Role } from '../../../shared/interfaces/role';

@Component({
  selector: 'app-user-form',
  imports: [ReactiveFormsModule, RequiredField],
  templateUrl: './user-form.html',
  styleUrl: './user-form.scss',
})
export class UserForm {

  private formBuilder = inject(FormBuilder);
  activeModal = inject(NgbActiveModal);
  protected allAvailableRoles = signal<Role[]>([]);
  mode = signal<'create' | 'edit' | null>(null);
  id?: string;

  userForm = this.formBuilder.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    password: [null],
    firstname: ['', [Validators.required, Validators.minLength(2)]],
    lastname: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    dni: ['', Validators.required],
    roleId: this.formBuilder.control<number | null>(null, [Validators.required]),
    active: [false],
  });


  constructor() {

    effect(() => {
      // this.currentLanguage.set(this.activeLangSignal());
      //  this.currentUserRole = this.authStore.authData()!.role!.name;

      /*   (async () => {
          this.allAvailableRoles.set(this.authStore.roles());
        })(); */

      // set available roles by current user role
      //  this.userRolesService.getAvailableRoles();
      if (this.mode() === 'edit' && this.id) {
        //  this.loadUser(this.id);
      } else {
        this.initEmptyForm();
      }
    });

  }

  private initEmptyForm() {
    this.userForm.reset({
      firstname: '',
      lastname: '',
      email: '',
      dni: '',
      roleId: null
    });
  }

  protected onCancel(): void {
    this.userForm.reset();
    this.activeModal.dismiss();
  }

  async onSubmit(): Promise<void> {
    if (!this.userForm.valid) {
      this.userForm.markAllAsTouched();
      return;
    }

    if (!this.userForm.value) return;


    // TODO
  }

  /**
  * validate form field by field name
  * @param fieldName 
  * @returns 
  */
  isFieldInvalid(fieldName: string): boolean {
    const field = this.userForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  /**
   * get error message to show in the form
   * @param fieldName 
   * @returns 
   */
  getFieldError(fieldName: string): string {
    const field = this.userForm.get(fieldName);
    if (field?.errors) {
      if (field.errors['required']) return `communities.form.validation.${fieldName}Required`;
      if (field.errors['email']) return 'communities.form.validation.emailInvalid';
      if (field.errors['minlength']) return `communities.form.validation.${fieldName}MinLength`;
      if (field.errors['min']) return `communities.form.validation.${fieldName}Min`;
    }
    return '';
  }



}
