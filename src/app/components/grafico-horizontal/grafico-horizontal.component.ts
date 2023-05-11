import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { Colors } from 'chart.js';
import { CountryServices } from '../../services/movies.service';

@Component({
  selector: 'app-grafico-horizontal',
  templateUrl: './grafico-horizontal.component.html',
  styleUrls: ['./grafico-horizontal.component.css'],
})
export class GraficoHorizontalComponent implements OnInit {
  public chart: any;

  public data: any;

  constructor(private movieService : CountryServices){
  }

  ngOnInit(): void {
    this.createChart();
  }

  async createChart() {

    const countryData = await this.movieService.getCountries();

    console.log(countryData)

    const movieData = countryData;

    const labels = movieData.map((country: any) => country.name);
    const population = movieData.map((country: any) => country.population);

    this.chart = new Chart('CountryChart', {
      type: 'bar', //this denotes tha type of chart

      data: {
        // values on X-Axis
        labels: labels,
        datasets: [
          {
            label: 'Population',
            data: population,
            backgroundColor: '#F59296',
            borderColor: '#F59296',
          }
        ],
      },
      options: {
        aspectRatio: 2.5,
      }
    });

    //Chart.defaults.backgroundColor = '#33312E';
    //Chart.defaults.color = '#FFEDC8';

   //Chart.register(Colors);

  }
}

// otras estructuras de datos: 
/* 
{
      data: [{x: '2016-12-25', y: 20}, {x: '2016-12-26', y: 10}]
}

const datasets: ChartData <'bar', {key: string, value: number} []> = {
  datasets: [{
    data: [{key: 'Sales', value: 20}, {key: 'Revenue', value: 10}],
    parsing: {
      xAxisKey: 'key',
      yAxisKey: 'value'
    }
  }],
};


*/