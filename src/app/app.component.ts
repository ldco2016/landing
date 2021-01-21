import { Component, OnInit } from '@angular/core';
import { NewsApiService } from './news-api/news-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private newsApiService: NewsApiService) {}

  ngOnInit(): void {
    this.newsApiService.getArticles().subscribe(response => console.log(response)
    );
  }
}
