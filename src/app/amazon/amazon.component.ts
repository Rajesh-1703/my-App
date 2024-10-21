import { Component } from '@angular/core';

@Component({
  selector: 'app-amazon',
  templateUrl: './amazon.component.html',
  styleUrls: ['./amazon.component.css']
})
export class AmazonComponent {
  category:string="";
  items:number=0;
  name:string='';
  // pCategory:string='';
  price:number=0;
  rating:number=0;
  freedelivery:boolean=true;

  products = [
    { name: 'mobile', category: 'gadgets', price: 10000, rating: 5,freedelivery:true},
    { name: 'laptop', category: 'gadgets', price: 50000, rating: 4.5,freedelivery:false},
    { name: 'tv', category: 'gadgets', price: 70000, rating: 4,freedelivery:true},
    { name: 'shirt', category: 'fashion', price: 3000, rating: 3,freedelivery:false},
    { name: 'pant', category: 'fashion', price: 4000, rating: 5,freedelivery:true},
    { name: 'saree', category: 'fashion', price: 5000, rating: 4,freedelivery:true },
    { name: 'flipflop', category: 'footware', price: 1000, rating: 3.5,freedelivery:false },
    { name: 'shoes', category: 'footware', price: 3000, rating: 4.2,freedelivery:false },
    { name: 'belt', category: 'accessories', price: 600, rating: 2.5,freedelivery:true },
    { name: 'specs', category: 'accessories', price: 999, rating: 3.8,freedelivery:false},
    { name: 'watch', category: 'accessories', price: 4000, rating: 5,freedelivery:true},
]
search(){
  
  this.products=this.products.filter((product)=>product.category.includes(this.category));
}
freeDV(){
  this.products=this.products.filter((product)=>product.freedelivery==true);
}
priceLH(){
  this.products.sort((a,b)=>(a.price-b.price));
}
priceHL(){
  this.products.sort((a,b)=>(b.price-a.price));
}
ratingLH(){
  this.products.sort((a,b)=>a.rating-b.rating);
}
ratingHL(){
  this.products.sort((a,b)=>b.rating-a.rating);
}

discount(){
  this.products=this.products.map((product)=>{
    product.price=(product.price)/2;
    return product;
  })
}
DLcharges(){
  this.products=this.products.map((product)=>{
    product.price=product.price+50;
    return product;
  })
}
total(){
  var total=this.products.reduce((sum,product)=>sum+product.price,0);
  alert("total cart value: " +total);
}
cartItems(){
 this.items=this.products.length;
 }
 delete(i:number){
  this.products.splice(i,1);
 }
 addCart(){
let product={
  name:this.name,
  category:this.category,
  price:this.price,
  rating:this.rating,
  freedelivery:this.freedelivery
 
}
this.products.push(product);

 }

}
