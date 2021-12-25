import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-avia-luxe',
  templateUrl: './avia-luxe.component.html',
  styleUrls: ['./avia-luxe.component.scss']
})
export class AviaLuxeComponent implements OnInit {

  @Input() Km: number = 0
  @Input() Age: number = 0
  @Input() Weight: number = 0

  aviaLuxe: any = ''
  enable: boolean = true

  toCalculateAviaLuxe() {
    this.enable = true
    if (this.Km === 0 || this.Km < 0) {
      this.aviaLuxe = 'Введите корректное значение'
    }
    else if (this.Weight > 50) {
      this.enable = false
    } else if (this.Age < 16) {
      let pricePerTikket = (this.Km * 15) * 0.7
      this.aviaLuxe = pricePerTikket.toFixed() + " Р"
    } else {
      let pricePerTikket = this.Km * 15
      this.aviaLuxe = pricePerTikket.toFixed() + " Р"
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
