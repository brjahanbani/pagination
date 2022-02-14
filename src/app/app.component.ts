import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentPage: number = 0;
  setActiveClass(index: number) {
    return index == this.currentPage ? 'active' : '';
    // if (index == this.currentPage) {
    //   return 'active';
    // }
    // return '';
  }
  checkWindowIndex(index: number) {
    return Math.abs(this.currentPage - index) < 5;
  }
  changePage() {
    this.currentPage -= 1;
  }

  images = [
    {
      title: 'BMW X4 M40i 2022',
      url: 'https://www.ccarprice.com/products/BMW_X4_M40i_2022_1.jpg',
    },
    {
      title: 'Volvo XC60 B6 R-Design 2022',
      url: 'https://www.ccarprice.com/products/Volvo_XC60_B6_R-Design_2022.jpg',
    },
    {
      title: 'Jeep Wrangler Unlimited Sahara Altitude 2022',
      url: 'https://www.ccarprice.com/products/Jeep_Wrangler_Unlimited_Sahara_Altitude_2022.jpg',
    },
    {
      title: 'Mercedes AMG G63 4MATIC 2022',
      url: 'https://www.ccarprice.com/products/Mercedes_AMG_G63_2022.jpg',
    },
    {
      title: 'BMW X4 M40i 2022',
      url: 'https://www.ccarprice.com/products/BMW_X4_M40i_2022_1.jpg',
    },
    {
      title: 'Volvo XC60 B6 R-Design 2022',
      url: 'https://www.ccarprice.com/products/Volvo_XC60_B6_R-Design_2022.jpg',
    },
    {
      title: 'Jeep Wrangler Unlimited Sahara Altitude 2022',
      url: 'https://www.ccarprice.com/products/Jeep_Wrangler_Unlimited_Sahara_Altitude_2022.jpg',
    },
    {
      title: 'Mercedes AMG G63 4MATIC 2022',
      url: 'https://www.ccarprice.com/products/Mercedes_AMG_G63_2022.jpg',
    },
    {
      title: 'BMW X4 M40i 2022',
      url: 'https://www.ccarprice.com/products/BMW_X4_M40i_2022_1.jpg',
    },
    {
      title: 'Volvo XC60 B6 R-Design 2022',
      url: 'https://www.ccarprice.com/products/Volvo_XC60_B6_R-Design_2022.jpg',
    },
    {
      title: 'Jeep Wrangler Unlimited Sahara Altitude 2022',
      url: 'https://www.ccarprice.com/products/Jeep_Wrangler_Unlimited_Sahara_Altitude_2022.jpg',
    },
    {
      title: 'Mercedes AMG G63 4MATIC 2022',
      url: 'https://www.ccarprice.com/products/Mercedes_AMG_G63_2022.jpg',
    },
    {
      title: 'BMW X4 M40i 2022',
      url: 'https://www.ccarprice.com/products/BMW_X4_M40i_2022_1.jpg',
    },
    {
      title: 'Volvo XC60 B6 R-Design 2022',
      url: 'https://www.ccarprice.com/products/Volvo_XC60_B6_R-Design_2022.jpg',
    },
    {
      title: 'Jeep Wrangler Unlimited Sahara Altitude 2022',
      url: 'https://www.ccarprice.com/products/Jeep_Wrangler_Unlimited_Sahara_Altitude_2022.jpg',
    },
    {
      title: 'Mercedes AMG G63 4MATIC 2022',
      url: 'https://www.ccarprice.com/products/Mercedes_AMG_G63_2022.jpg',
    },
  ];

  isExist: boolean = false;
}
