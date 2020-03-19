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
    this.collectorService.refrestOnSubmit.subscribe(() => {
      this.getCollection();
    });
    this.getCollection();
  }
  private getCollection() {
    this.collectorService
      .getAllFromServer()
      .subscribe((data: any[]) => (this.collection = data));
    // console.log(Response);
  }

  onDelete(item: string): void {
    this.collectorService
      .deleteItem(item["id"])
      .subscribe(_response => this.ngOnInit()); //ngOnInit() reloads display component on delete in stead of entire page as with location.reload();.
  }
}
