import { Component, OnInit } from "@angular/core";
import { CollectorService } from "../collector.service";

@Component({
  selector: "app-display",
  templateUrl: "./display.component.html",
  styleUrls: ["./display.component.css"]
})
export class DisplayComponent implements OnInit {
  public collection = [];

  constructor(private collectorService: CollectorService) {}

  ngOnInit() {
    this.collectorService
      .getCollection()
      .subscribe((data: any[]) => (this.collection = data));
  }
}
