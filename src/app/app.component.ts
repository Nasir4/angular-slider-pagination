import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  currentPage = 0;
  images = [
    {
      title:'Beach House',
      url:'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
    },
    {
      title:'The Desert',
      url:'https://images.unsplash.com/photo-1526233185109-093c40faef34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=747&q=80'
    },
    {
      title:'The River',
      url:'https://images.unsplash.com/photo-1543858787-a632c7d4cf9f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
    },
    {
      title:'The Forest',
      url:'https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80'
    },
    {
      title:'The Snow',
      url:'https://images.unsplash.com/photo-1554417063-60e738613596?ixlib=rb-1.2.1&auto=format&fit=crop&w=740&q=80'
    },
    {
      title:'The Beauty',
      url:'https://images.unsplash.com/photo-1523264766116-1e09b3145b84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
    {
      title:'The Beauty With Lemons',
      url:'https://images.unsplash.com/photo-1506003094589-53954a26283f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
    {
      title:'The Photography',
      url:'https://images.unsplash.com/photo-1457986811718-8254e452e199?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
    {
      title:'The Photography Lipstick',
      url:'https://images.unsplash.com/photo-1498842812179-c81beecf902c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
    {
      title:'The Photography Banana',
      url:'https://images.unsplash.com/photo-1529245814698-dd66c442bfef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
    {
      title:'The Photography Banana',
      url:'https://images.unsplash.com/photo-1528825871115-3581a5387919?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
    {
      title:'The Hot Coffee',
      url:'https://images.unsplash.com/photo-1524424177250-5f178b523ebc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
    
  ]

   checkIndex(index){
    return Math.abs(this.currentPage - index) < 5;
    console.log(Math.abs(this.currentPage - index) < 5)
   }


}
