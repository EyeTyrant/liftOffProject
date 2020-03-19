import { Component, OnInit, ViewChild } from "@angular/core";
import { CollectorService } from "../collector.service";
import { DieCast } from "../collection";
import { MatTableDataSource, MatSort } from "@angular/material";

@Component({
  selector: "app-mat-display",
  templateUrl: "./mat-display.component.html",
  styleUrls: ["./mat-display.component.css"]
})
export class MatDisplayComponent implements OnInit {
  dataSource: MatTableDataSource<DieCast> = new MatTableDataSource<DieCast>();
  displayedColumns: string[] = [];

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  // collection: any[];
  constructor(private collectorService: CollectorService) {
    this.displayedColumns = ["id", "year", "name", "brand", "mfr", "delete"];
  }

  // ngOnInit() {
  //   this.collectorService
  //     .getAllFromServer()
  //     .subscribe((dieCast: DieCast[]) => (this.dataSource.data = dieCast));
  //   this.dataSource.sort = this.sort;
  // }
  ngOnInit() {
    this.collectorService.refrestOnSubmit.subscribe(() => {
      this.getCollection();
    });
    this.getCollection();
  }
  private getCollection() {
    this.collectorService
      .getAllFromServer()
      .subscribe((dieCast: DieCast[]) => (this.dataSource.data = dieCast));
    this.dataSource.sort = this.sort;
    // console.log(Response);
  }

  logData(row) {
    console.log(row);
  }
  public filter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  };

  onDelete(item: string): void {
    this.collectorService
      .deleteItem(item["id"])
      .subscribe(_response => this.ngOnInit()); //ngOnInit() reloads display component on delete in stead of entire page as with location.reload();.
  }
}

// export class MyDataSource extends DataSource<DieCast> {
//   constructor(private collectorService: CollectorService) {
//     super();
//   }
//   connect(): Observable<DieCast[]> {
//     return this.collectorService.getAllFromServer();
//   }
//   disconnect() {}

//   filter() {}
// }
