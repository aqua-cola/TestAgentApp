import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-avia-econom',
  templateUrl: './avia-econom.component.html',
  styleUrls: ['./avia-econom.component.scss']
})
export class AviaEconomComponent implements OnInit {

  @Input() Km: number = 0
  @Input() Age: number = 0
  @Input() Weight: number = 0

  aviaEconom: any = ''
  enable: boolean = true

  toCalculateAviaEconom() {
    this.enable = true
    if (this.Km === 0 || this.Km < 0) {
      this.aviaEconom = 'Введите корректное значение'
    }
    else if (this.Weight > 20) {
      this.enable = false
    } else {
      let pricePerKm = this.Km * 4
      let pricePerTikket = this.Weight > 5 ? pricePerKm + 4000 : pricePerKm
      this.aviaEconom = pricePerTikket.toFixed() + " Р"
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
