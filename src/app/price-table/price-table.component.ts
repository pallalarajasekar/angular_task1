import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-price-table',
  templateUrl: './price-table.component.html',
  styleUrls: ['./price-table.component.css']
})
export class PriceTableComponent implements OnInit {
  @Input('price_plan') price_plan = '';
  @Input('amount') amount = '';
  @Input('plan') plan = '';
  @Input('font-style') font_style = '';
  @Input('text_style') text_style = '';
  @Input('font_highlight') font_highlight = '';
  constructor() { } 

  ngOnInit(): void {
  }

}
