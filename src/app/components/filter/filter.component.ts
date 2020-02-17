import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.scss"]
})
export class FilterComponent implements OnInit {
  searchText = "";
  @Output() textChange = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  textChanged() {
    console.log(this.searchText);
    this.textChange.emit(this.searchText);
  }
}
