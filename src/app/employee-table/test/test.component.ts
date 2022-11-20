import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  productsArray: any = [];

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    fetch('./assets/Dummy_users.json')
      .then((res) => res.json())
      .then((jsonData) => {
        jsonData.forEach((products: any) => {
          if (products.id == id) {
            this.productsArray = products;
          }
        });
        console.log(this.productsArray);
      });
  }
}
