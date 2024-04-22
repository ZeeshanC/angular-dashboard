import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { DashboardDataService } from '../dashboard-data.service';

@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [],
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.scss'
})
export class BarChartComponent implements OnInit, AfterViewInit, OnDestroy {
  barChart: Chart<'bar'> | null = null;

  constructor(private dashboardDataService: DashboardDataService) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.dashboardDataService.barChartData$.subscribe((data) => {
      if (this.barChart) {
        this.barChart.destroy();
      }
      this.createChart(data);
    });
  }

  createChart(data: any[]) {
    const canvas = document.getElementById('barChart') as HTMLCanvasElement;
    if (!canvas) return;

    canvas.width = 600;
    canvas.height = 600;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    Chart.register(...registerables);

    this.barChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Jan-Feb', 'Mar-Apr', 'May-Jun', 'Jul-Aug', 'Sep-Oct', 'Nov-Dec'],
        datasets: data,
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            title: {
              display: true,
              text: 'MRR ($)',
            },
          },
          y: {
            title: {
              display: true,
              text: 'Month',
            },
          },
        },
      },
    });
  }

  ngOnDestroy(): void {
    if (this.barChart) {
      this.barChart.destroy();
    }
  }
}
