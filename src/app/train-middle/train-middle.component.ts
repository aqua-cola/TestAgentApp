import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-train-middle',
  templateUrl: './train-middle.component.html',
  styleUrls: ['./train-middle.component.scss']
})
export class TrainMiddleComponent implements OnInit {

  @Input() Km: number = 0
  @Input() Age: number = 0
  @Input() Weight: number = 0

  trainMiddle: any = ''
  enable: boolean = true

  toCalculateTrainMiddle() {
    this.enable = true
    if (this.Km === 0 || this.Km < 0) {
      this.trainMiddle = 'Введите корректное значение'
    }
    else if (this.Weight > 60) {
      this.enable = false
    }
    else if (this.Age < 8) {
      let pricePerKm = (this.Km * 2) * 0.7
      let pricePerWeight = this.Weight > 20 ? (this.Weight - 20) * 50 : 0
      let pricePerTikket = this.Weight > 20 ? pricePerKm + pricePerWeight : pricePerKm
      this.trainMiddle = pricePerTikket.toFixed() + " Р"
    } else {
      let pricePerKm = this.Km * 2
      let pricePerWeight = this.Weight > 20 ? (this.Weight - 20) * 50 : 0
      let pricePerTikket = this.Weight > 20 ? pricePerKm + pricePerWeight : pricePerKm
      this.trainMiddle = pricePerTikket.toFixed() + " Р"
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
