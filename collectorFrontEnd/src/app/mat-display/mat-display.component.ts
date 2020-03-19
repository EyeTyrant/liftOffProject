import { Component, OnInit } from "@angular/core";
import { CollectorService } from "../collector.service";
import { DieCast } from "../collection";
import { MatTableDataSource } from "@angular/material";
import { MaterialModule } from "../material/material.module";
import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { Observable } from "rxjs";

@Component({
  selector: "app-mat-display",
  templateUrl: "./mat-display.component.html",
  styleUrls: ["./mat-display.component.css"]
})
export class MatDisplayComponent implements OnInit {
  dataSource: MatTableDataSource<DieCast> = new MatTableDataSource<DieCast>();
  displayedColumns: string[] = [];
  collection: any[];
  constructor(private collectorService: CollectorService) {
    this.displayedColumns = ["id", "year", "name", "brand", "mfr"];
  }

  ngOnInit() {
    this.collectorService
      .getAllFromServer()
      .subscribe((dieCast: DieCast[]) => (this.dataSource.data = dieCast));
  }
  logData(row) {
    console.log(row);
  }
}

export class MyDataSource extends DataSource<DieCast> {
  constructor(private collectorService: CollectorService) {
    super();
  }
  connect(): Observable<DieCast[]> {
    return this.collectorService.getAllFromServer();
  }
  disconnect() {}

  filter() {}
}
