import { Component, Input } from '@angular/core';

@Component({
  selector: 'content',
  template: `
  <div class="container pt-3">

  
    <div style="text-align:center">
      <h1>Theme</h1>
      <p class="lead">Title</p>
    </div>

    <div class="d-flex d-flex justify-content-center">
      <button type="button" class="btn btn-sm btn-primary">Primary</button>
      <button type="button" class="btn btn-sm btn-secondary">Secondary</button>
      <button type="button" class="btn btn-sm btn-success">Success</button>
      <button type="button" class="btn btn-sm btn-danger">Danger</button>
      <button type="button" class="btn btn-sm btn-warning">Warning</button>
      <button type="button" class="btn btn-sm btn-info">Info</button>
      <!--
      <button type="button" class="btn btn-sm btn-light">Light</button>
      <button type="button" class="btn btn-sm btn-dark">Dark</button>
      <button type="button" class="btn btn-sm btn-link">Link</button>
      -->
    </div>
  </div>
  `
})
export class ContentComponent  {
}
