import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ClientSideRowModelModule, ColDef, DateFilterModule, GridReadyEvent, IDateFilterParams, ModuleRegistry, NumberFilterModule, TextFilterModule, ValidationModule } from 'ag-grid-community';
import { themeBalham } from 'ag-grid-community';
import {
  ColumnMenuModule,
  ContextMenuModule,
  MultiFilterModule,
  SetFilterModule,
} from "ag-grid-enterprise";
import { environment } from '../../../../../environments/environment';
import { ActionButtonComponent } from '../../../components/edit-button-component/edit-button-component';
import { User } from '../../../shared/interfaces/user';
ModuleRegistry.registerModules([
  ClientSideRowModelModule,
  ColumnMenuModule,
  ContextMenuModule,
  MultiFilterModule,
  SetFilterModule,
  TextFilterModule,
  NumberFilterModule,
  DateFilterModule,
  ...(environment.production ? [] : [ValidationModule]),
]);
//import { IOlympicData } from "./interfaces";


@Component({
  selector: 'app-users-table',
  standalone: true,
  imports: [AgGridAngular],
  templateUrl: './users-table.html',
  styleUrl: './users-table.scss',
})
export class UsersTable {

  theme = themeBalham;
  rowData: User[] = [
    { id: 12, firstname: "Maria", lastname: "Lopez", tel: 64950000, email: 'maria@correo.es', active: false },
    { id: 13, firstname: "Julia", lastname: "León Martes", tel: 338501111, email: 'julia@correo.es', active: false },
    { id: 14, firstname: "Juan Alberto", lastname: "Blanco Ruiz", tel: 296002222, email: 'juanalberto@correo.es', active: false },
  ];



  // Column Definitions: Defines the columns to be displayed.
  colDefs: ColDef[] = [
    {
      field: "acciones", cellRenderer: ActionButtonComponent,
      cellRendererParams: {
        buttons: [
          {
            icon: "ph ph-pencil-simple",
            class: "btn-primary mt-1",
            onClick: (row: any) => this.editUser(row)
          },
          {
            icon: "ph ph-trash",
            class: "btn-danger mt-1",
            onClick: (row: any) => this.deleteUser(row)
          }
        ]
      },
      width: 150,
      minWidth: 150,     // evita que se haga más pequeño
      maxWidth: 150,
      autoHeight: true
    },
    { field: "firstname", headerName: 'Nombre', filter: "agSetColumnFilter", cellClass: "text-capitalize" },
    { field: "lastname", headerName: 'Apellidos', filter: "agSetColumnFilter" },
    { field: "tel", headerName: 'Teléfono', filter: "agSetColumnFilter" }

  ];

  defaultColDef: ColDef = {
    flex: 1,
    minWidth: 150,
    filter: "agTextColumnFilter",
    suppressHeaderMenuButton: true,
    suppressHeaderContextMenu: true,
  };

  gridOptions = {
  columnDefs: this.colDefs,
  rowData: this.rowData,
  rowClass: 'p-2',
};

  constructor(private http: HttpClient) { }

  onGridReady(params: GridReadyEvent<User>) {
    this.http
      .get<
        User[]
      >("https://www.ag-grid.com/example-assets/small-company-data.json")
      .subscribe((data) => {
        this.rowData = data;
      });
  }


  /**
   * edit user
   * @param user 
   */
  editUser(user: any) {
    console.log("EDIT:", user);
  }


  /**
   * delete user
   * @param user 
   */
  deleteUser(user: any) {
    console.log("DELETE:", user);
  }

  /**
   * view user details
   * @param user 
   */
  viewUser(user: any){
    console.log("EDIT:", user);
  }

}

const filterParams: IDateFilterParams = {
  comparator: (filterLocalDateAtMidnight: Date, cellValue: string) => {
    const dateAsString = cellValue;
    if (dateAsString == null) return -1;
    const dateParts = dateAsString.split("/");
    const cellDate = new Date(
      Number(dateParts[2]),
      Number(dateParts[1]) - 1,
      Number(dateParts[0]),
    );
    if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
      return 0;
    }
    if (cellDate < filterLocalDateAtMidnight) {
      return -1;
    }
    if (cellDate > filterLocalDateAtMidnight) {
      return 1;
    }
    return 0;
  }
}




