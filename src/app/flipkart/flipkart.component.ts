import { Component } from '@angular/core';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent {
  productname:string="";
  productprice:string="";
  productrating:number=0;
  productdeliverydate:number=0;
  productfreedelivery:boolean=true;

  products:any=[];

  addTocart(){
    let product={
      name:this.productname,
      price:this.productprice,
      rating:this.productrating,
      date:this.productdeliverydate,
      freedelivery:this.productfreedelivery
    }
    this.products.push(product);
  }
  
   del(i:number){
    this.products.splice(i,1);
   }
}
