import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";

@Injectable()
export class DashboardService {
    private httpClient = inject(HttpClient);

    getReleaseDetails() {
        console.log('getReleaseDetails called');
        return [
            {
              name: 'John Brown',
              age: 32,
              address: 'New York No. 1 Lake Park',
            },
            {
              name: 'Jim Green',
              age: 42,
              address: 'London No. 1 Lake Park',
            },
            {
              name: 'Joe Black',
              age: 32,
              address: 'Sidney No. 1 Lake Park',
            },
          ];
    }
}