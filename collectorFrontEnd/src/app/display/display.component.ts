import { Component, OnInit } from "@angular/core";
import { CollectorService } from "../collector.service";
import { isNgTemplate, identifierModuleUrl } from "@angular/compiler";
import { DieCast } from "../collection";
import { getLocaleTimeFormat } from "@angular/common";
import { Subscriber } from "rxjs";

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
    console.log(Response);
  }

  onDelete(item: string): void {
    this.collectorService.deleteItem(item["id"]).subscribe();
    location.reload();
  }
}

// this.collectorService.getItem(id).subscribe();
