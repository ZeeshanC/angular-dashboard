import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MonthFilterComponent } from '../month-filter/month-filter.component';
import { TopBoxesComponent } from '../top-boxes/top-boxes.component';
import { CircleChartComponent } from '../circle-chart/circle-chart.component';
import { BubbleChartComponent } from '../bubble-chart/bubble-chart.component';
import { BarChartComponent } from '../bar-chart/bar-chart.component';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MonthFilterComponent,
    TopBoxesComponent,
    CircleChartComponent,
    BubbleChartComponent,
    BarChartComponent
  ]
})
export class DashboardModule { }
