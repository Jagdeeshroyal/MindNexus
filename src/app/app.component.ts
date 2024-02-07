import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  isDarkTheme: boolean = false;
  

  constructor(private themeService : ThemeService) {

  }
  ngOnInit(): void {

  }

  onThemeChange() {
   this.isDarkTheme = !this.isDarkTheme;
   
  }

}
