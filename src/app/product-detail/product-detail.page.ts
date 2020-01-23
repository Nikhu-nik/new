import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { RestService } from '../rest.service';
import { AddtoCart } from '../Models/classModels';
import { AlertController, ModalController,ToastController } from '@ionic/angular';
import {OrderNowPage} from '../order-now/order-now.page';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {
  id: number;
  arr:any;
  userid:any;
  errmsg:any;
  name;
  price;
  discount;
  desc;
  image;
  productid:any;
  Quantity:any;
  total;
  count:any;
  public data: AddtoCart = new AddtoCart();
  public modifyFormGroup: FormGroup;

  constructor(public toastCtrl: ToastController,private route: ActivatedRoute,private fb: FormBuilder, public rest: RestService, private modalCtrl: ModalController,
    private alertCtrl: AlertController, private myRoute: Router) {
    this.route.params.subscribe(params => this.doSearch(params));
    this.modifyFormGroup = this.fb.group({
   name:this.rest.getProductName(),
   total:[''],
   price:this.rest.getProductPrice(),
   quantity:['', Validators.required],
productId:this.rest.getProductId(),
   userId:this.rest.getId(),
   image:this.rest.getImage()
   
    });
  
  }


  async presentModal() {
    const modal = await this.modalCtrl.create({
      component:OrderNowPage
    });
    return await modal.present();
  }


  ngOnInit() {
    this.Quantity=0;
    this.total=0;
    this.getProducts();
    this.getcartdetails();
  }

  doSearch(param) {
    this.id = param.id;
    // console.log(this.id);
  }

  plus(){
    this.Quantity++;
    this.total=this.Quantity*this.price;
    console.log(this.Quantity);
  }

  async minus(){
    this.Quantity--;
    this.total=this.Quantity*this.price;
    if(this.Quantity<0){
    let toast = await this.toastCtrl.create({
        message: 'Please select minimum quantity',
        duration: 3000,
        position: 'bottom'
      });
    toast.present();
      this.Quantity=0;
      this.total=0;
    }
  }


cart(){
  Object.assign(this.data, this.modifyFormGroup.value);
    console.log(this.data);
if(this.total>1){
    if (this.modifyFormGroup.valid) {
      this.rest.addtocart(this.data).subscribe((result) => {
        if (result == undefined) {
          console.log(result);
        }
        else {
          alert('success');
          this.getcartdetails();
         // this.rest.cartDetails();
        }
      }, (err) => {
        console.log(err);
      });
    }
  }
  else{
    alert('Empty Value');
  }
}

order(){
 
  Object.assign(this.data, this.modifyFormGroup.value);
  console.log(this.data);
  if(this.total>1){
  if (this.modifyFormGroup.valid) {
    this.rest.order(this.data).subscribe((result) => {
      if (result == undefined) {
        console.log(result);
      }
      else {
        alert('success');
        this.getcartdetails();
       // this.rest.cartDetails();
      }
    }, (err) => {

      console.log(err);

    });
  }
}
else{
  alert('Empty Value');

}
}

getcartdetails(){

  Object.assign(this.data, this.modifyFormGroup.value);
  // console.log(this.data);


    this.rest.cartDetails().subscribe((result) => {
      if (result == undefined) {
        console.log(result);
      }
      else {
      //  console.log("success");
        this.arr = Object.entries(result).map(([type, value]) => ({ type, value }));
        this.userid = this.arr[0].value;
        console.log(this.userid);
        this.count=this.arr[0].value;

       
      }
    }, (err) => {

      console.log(err);

    });
  
}
  getProducts(){
    this.rest.getProduct(this.id).subscribe((result) => {

      if (result === undefined) {
        console.log(result);
        this.errmsg = true;
      }
      else {

        this.arr = Object.entries(result).map(([type, value]) => ({ type, value }));
        this.userid = this.arr[0].value;
        this.name=this.userid.name;
        this.price=this.userid.price;
        this.discount=this.userid.discount;
        this.desc=this.userid.desc;
        this.image=this.userid.image;
      
        this.rest.sendProductId(this.userid.id); 
        this.rest.sendImage(this.userid.image);
              
        this.rest.sendProductId(this.userid.id); 
              
        this.rest.sendProductName(this.userid.name); 
              
        this.rest.sendProductPrice(this.userid.price); 

       

      }

    }, (err) => {
    
      console.log(err);

    });
  }
}