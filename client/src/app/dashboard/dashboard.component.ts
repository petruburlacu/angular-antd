import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTableModule } from 'ng-zorro-antd/table';
import { DashboardService } from './data-access/dashboard.service';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, NzButtonModule, NzCardModule, NzTableModule],
  providers: [DashboardService],
  selector: 'app-dashboard',
  template: `
    <h2>Dashboard Component</h2>

    <nz-card nzTitle="Release UI changes" [nzExtra]="extraTemplate">
      <nz-table #dashboardTable nzSize="middle" [nzData]="dataSet">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let data of dashboardTable.data">
            <td>{{ data.name }}</td>
            <td>{{ data.age }}</td>
            <td>{{ data.address }}</td>
            <td>
              <a>Action 一 {{ data.name }}</a>
            </td>
          </tr>
        </tbody>
      </nz-table>
    </nz-card>
    <ng-template #extraTemplate>
      <button
        nz-button
        nzType="primary"
        nzSize="small"
        nzShape="round"
        (click)="onSync()"
      >
        Sync
      </button>
    </ng-template>
  `,
  styles: [],
})
export class DashboardComponent implements OnInit {
  private dashboardService: DashboardService = inject(DashboardService);
  dataSet: any[] = [];

  ngOnInit() {
    console.log('Dashboard component loaded');
    this.dataSet = [...this.getDataSet()];
  }

  getDataSet() {
    return this.dashboardService.getReleaseDetails();
  }

  onSync() {
    console.log('Dashboard button clicked');
    this.dataSet[0].name = 'Status changed';
  }
}
