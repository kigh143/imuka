import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addinvoice',
  templateUrl: './addinvoice.component.html',
  styleUrls: ['./addinvoice.component.scss']
})
export class AddinvoiceComponent implements OnInit {

  oneAtATime: boolean = true;
  invoiceForm: FormGroup;
  headElements = ['Id', 'Item', 'unit price', 'Unit', 'Price', 'Action'];
  months=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  constructor(
    private _fb: FormBuilder
  ) {
    this.createForm();
    
    
  }

  createForm(){
    this.invoiceForm = this._fb.group({
      itemRows: this._fb.array([])
    });
    this.invoiceForm.setControl('itemRows', this._fb.array([]));
   
  }

  get itemRows(): FormArray {
    return this.invoiceForm.get('itemRows') as FormArray;
  }

 

 ngOnInit() {
    // this.invoiceForm = this._fb.group({
    //   itemRows: this._fb.array([this.initItemRows()]) // here
    // });
 }
  //initItemRows() {
    // return this._fb.group({
        // list all your form controls here, which belongs to your form array
        // itemname: ['']
    // // });
// }
addNewRow() {
  // control refers to your formarray
  // const control = <FormArray>this.invoiceForm.controls['itemRows'];
  // add new formgroup
  // // control.push(this.initItemRows());
  const control = new FormGroup({
    'item':  new FormControl(null),
    'unit': new FormControl(null),
    'unitprice':new FormControl(null),
    'price': new FormControl(null)
   
});
  (<FormArray>this.invoiceForm.get('itemRows')).push(control);
}
removeInputField(i : number) : void
{
   const control = <FormArray>this.invoiceForm.controls.itemRows;
   control.removeAt(i);
}
// deleteRow(index: number) {
  // control refers to your formarray
  // const control = <FormArray>this.invoiceForm.controls['itemRows'];
  // remove the chosen row
  // control.removeAt(index);
// }
}


