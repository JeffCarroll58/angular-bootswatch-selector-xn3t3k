import { Component, VERSION, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {

  name = 'Angular';
  theme = 'default'
  
    constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit() {
    // alert('i ngOnInit!');
    this.theme = this.loadTheme(this.theme);
    this.changeTheme(this.theme);

  }


  loadTheme(themeDefault: string){
    return localStorage.getItem("theme") || themeDefault;
  }




  
  changeTheme(theme: string) {
    console.log("~ changeTheme ~");
    console.log(theme);
    theme = theme.toLowerCase();
    let themeUrl = '';
    if (theme === 'bootstrap') {

      themeUrl = 'https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css';

    } else {

      themeUrl = 'https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/' + theme + '/bootstrap.min.css';

    }
    this.changeCSS('css1', themeUrl);
    localStorage.setItem("theme", theme);

  }

  changeCSS(id:string, url:string) {

    let stylesheet = document.getElementById(id);
    stylesheet.setAttribute('href', url);

  }

  
}
;