import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import type { ICellRendererAngularComp } from 'ag-grid-angular';
import type { ICellRendererParams } from 'ag-grid-community';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<button (click)="editUser(userId())">
        <i class="ph ph-pencil-simple"></i>
    </button>`,
})
export class CustomButtonComponent implements ICellRendererAngularComp {
  data: any;
  userId = signal<number>(0);
  agInit(params: ICellRendererParams): void {
    this.data = params.data;
    this.refresh(params);
  }
  refresh(params: ICellRendererParams) {
    this.userId.set(params.data?.id ?? '');
    return true;
  }
  editUser(id: number) {
    console.log('editing user: ' + id);
  }
}

