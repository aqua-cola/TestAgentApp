import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-avia-middle',
  templateUrl: './avia-middle.component.html',
  styleUrls: ['./avia-middle.component.scss']
})
export class AviaMiddleComponent implements OnInit {

  @Input() Km: number = 0
  @Input() Age: number = 0
  @Input() Weight: number = 0

  aviaMiddle: any = ''
  enable: boolean = true

  toCalculateAviaMiddle() {
    this.enable = true
    if (this.Km === 0 || this.Km < 0) {
      this.aviaMiddle = 'Введите корректное значение'
    }
    else if (this.Weight > 50) {
      this.enable = false
    } else if (this.Age < 7) {
      let pricePerKm = (this.Km * 8) * 0.7
      let pricePerTikket = this.Weight > 20 ? pricePerKm + 5000 : pricePerKm
      this.aviaMiddle = pricePerTikket.toFixed() + " Р"
    } else {
      let pricePerKm = this.Km * 8
      let pricePerTikket = this.Weight > 20 ? pricePerKm + 5000 : pricePerKm
      this.aviaMiddle = pricePerTikket.toFixed() + " Р"
    }
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
