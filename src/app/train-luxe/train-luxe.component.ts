import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-train-luxe',
  templateUrl: './train-luxe.component.html',
  styleUrls: ['./train-luxe.component.scss']
})
export class TrainLuxeComponent implements OnInit {

  @Input() Km: number = 0
  @Input() Age: number = 0
  @Input() Weight: number = 0

  trainLuxe: any = ''
  enable: boolean = true

  toCalculateTrainLuxe() {
    this.enable = true
    if (this.Km === 0 || this.Km < 0) {
      this.trainLuxe = 'Введите корректное значение'
    }
    else if (this.Weight > 60) {
      this.enable = false
    }
    else if (this.Age < 16) {
      let pricePerTikket = (this.Km * 4) * 0.8
      this.trainLuxe = pricePerTikket.toFixed() + " Р"
    } else {
      let pricePerTikket = this.Km * 4
      this.trainLuxe = pricePerTikket.toFixed() + " Р"
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
