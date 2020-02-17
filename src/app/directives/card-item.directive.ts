import { Directive, TemplateRef } from "@angular/core";

@Directive({
  selector: "[appCardItem]"
})
export class CardItemDirective {
  constructor(public tpl: TemplateRef<any>) {}
}
