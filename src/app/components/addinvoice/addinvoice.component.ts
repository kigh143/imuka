import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormArray, FormGroup } from '@angular/forms';
import {BizService} from "../../provider/biz.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addinvoice',
  templateUrl: './addinvoice.component.html',
  styleUrls: ['./addinvoice.component.scss']
})
export class AddinvoiceComponent implements OnInit {

    oneAtATime: boolean = true;
    invoiceForm: FormGroup;
    headElements = ['Id', 'Item', 'unit price', 'Unit', 'Price', 'Action'];
    business : any;
    message : string;
    receipient: string;
    expiry_date: string;
    allbusiness:any;

    constructor(private _fb: FormBuilder, public route: ActivatedRoute, public router : Router, public businessService: BizService) {this.createForm();}

    createForm(){
      this.invoiceForm = this._fb.group({
        itemRows: this._fb.array([])
      });
      this.invoiceForm.setControl('itemRows', this._fb.array([]));
    }

    get_itemRows(): FormArray {
      return this.invoiceForm.get('itemRows') as FormArray;
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
        this.getbusiness(params['id']);  
        });
        this.getbusinesses();
    }

    addNewRow() {
        const control = new FormGroup({
        'item':  new FormControl(null),
        'unit': new FormControl(null),
        'unitprice':new FormControl(null),
        'price': new FormControl(null)
        });
        (<FormArray>this.invoiceForm.get('itemRows')).push(control);
    }

    removeInputField(i : number) {
        const control = <FormArray>this.invoiceForm.controls.itemRows;
        control.removeAt(i);
    }

    getbusiness( id ){
      this.businessService.fetch_abusiness(id).subscribe( data => {
        this.business = data["business_info"];
      }, error =>{
        console.log(error);
      });
    }

    submit_invoice (){
      let items  = this.get_itemRows()["value"];
      let invoice_data = {
          invoice_item_list: JSON.stringify(items),
          prepared_by:this.business.business_id,
          receipient: this.receipient,
          message: this.message,
          amount: this.calculate_total(),
          expiry_date:this.expiry_date
      };

      this.businessService.add_invoice(invoice_data).subscribe( data =>{
        if(data.flag){
          this.router.navigate(["/einvoice",this.business.business_id]);
        }
      }, error => {
        console.log(error);
      });

    }

    calculate_total(){
      let items  = this.get_itemRows()["value"];
      // return items.reduce(( current, value ) => current += parseInt(value['price']));
      return 90;
    }
    getbusinesses(){
      this.businessService.getallbusinesses().subscribe( data => {
         this.allbusiness=data;
      });
    }

}





