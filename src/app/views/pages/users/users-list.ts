import { Component, inject } from '@angular/core';
import { UsersTable } from './users-table/users-table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserForm } from './user-form/user-form';

@Component({
  selector: 'app-users-list',
  imports: [UsersTable],
  templateUrl: './users-list.html',
  styleUrl: './users-list.scss',
})
export class UsersList {
  private modalService = inject(NgbModal);
  

  constructor() { }


  /**
   * create new user
   */
  protected async addUser() {
    console.log("new user will be created")
    this.openAddUserForm()
  }


  openAddUserForm() {
    const modalRef = this.modalService.open(UserForm, {
      size: 'lg',
      backdrop: 'static',
      keyboard: false,
      centered: true
    });

    modalRef.componentInstance.mode.set('create');

    // Reload data when modal closes
    /*  modalRef.closed.subscribe(() => {
       this.datatableElement.dtInstance.then((dtInstance: any) => {
         dtInstance.ajax.reload();
       });
     }); */
  }
}
