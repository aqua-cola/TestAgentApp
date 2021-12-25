import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-train-econom',
  templateUrl: './train-econom.component.html',
  styleUrls: ['./train-econom.component.scss']
})
export class TrainEconomComponent implements OnInit {

  @Input() Km: number = 0
  @Input() Age: number = 0
  @Input() Weight: number = 0

  trainEconom: any = ''
  enable: boolean = true

  toCalculateTrainEconom() {
    this.enable = true
    if (this.Km === 0 || this.Km < 0) {
      this.trainEconom = 'Введите корректное значение'
    }
    else if (this.Weight > 50) {
      this.enable = false
    }
    else if (this.Age < 5) {
      let pricePerKm = (this.Km * 0.5) * 0.5
      let pricePerWeight = this.Weight > 15 ? (this.Weight - 15) * 50 : 0
      let pricePerTikket = this.Weight > 15 ? pricePerKm + pricePerWeight : pricePerKm
      this.trainEconom = pricePerTikket.toFixed() + " Р"
    } else {
      let pricePerKm = this.Km * 0.5
      let pricePerWeight = this.Weight > 15 ? (this.Weight - 15) * 50 : 0
      let pricePerTikket = this.Weight > 15 ? pricePerKm + pricePerWeight : pricePerKm
      this.trainEconom = pricePerTikket.toFixed() + " Р"
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
