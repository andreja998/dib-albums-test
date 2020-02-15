import {
  Component,
  OnInit,
  ContentChild,
  TemplateRef,
  Input
} from "@angular/core";
import { CardItemDirective } from "src/app/directives/card-item.directive";
import { ListItemDirective } from "src/app/directives/list-item.directive";

@Component({
  selector: "app-card-list-view",
  templateUrl: "./card-list-view.component.html",
  styleUrls: ["./card-list-view.component.scss"]
})
export class CardListViewComponent implements OnInit {
  @Input() items: any[] = [];
  @Input() mode: "card" | "list" = "card";
  @Input() title = "";

  @ContentChild(CardItemDirective, { read: TemplateRef, static: false })
  cardItemTemplate;
  @ContentChild(ListItemDirective, { read: TemplateRef, static: true })
  listItemTemplate;

  constructor() {}

  ngOnInit() {}
}
