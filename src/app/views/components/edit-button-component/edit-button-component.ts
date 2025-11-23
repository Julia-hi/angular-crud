import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import type { ICellRendererAngularComp } from 'ag-grid-angular';
import type { ICellRendererParams } from 'ag-grid-community';
import { ActionButton } from '../../shared/interfaces/actionbutton';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports:[CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  /* template: `<button (click)="editUser(userId())" class="border-0 bg-white">
        <i class="ph ph-pencil-simple"></i>
    </button>`, */
  template: `<div class ="my-1">@for (btn of buttons; track $index) {
      <button
        class="btn btn-sm me-1"
        [ngClass]="btn.class"
        (click)="btn.onClick(rowData)"
      >
        @if (btn.icon) {
          <i [class]="btn.icon"></i>
        }
        {{ btn.label }}
      </button>
    }</div>`
})


export class ActionButtonComponent implements ICellRendererAngularComp {
  buttons: ActionButton[] = [];
  rowData: any;

  agInit(params: any): void {
    this.rowData = params.data;
    this.buttons = params.buttons;   // <- универсальная конфигурация кнопок
  }

  refresh(): boolean {
    return false;
  }
}

