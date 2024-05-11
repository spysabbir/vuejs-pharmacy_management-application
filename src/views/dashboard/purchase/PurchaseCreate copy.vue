<script setup>


// const isPaymentAmountReadOnly = ref(true);


// const updatedGrandTotal = computed(() => purchaseSubTotal.value - discount.value);

// const updatedPaymentAmount = computed(() => {
//   if (payment_status.value == 'Paid') {
//     payment_amount.value = updatedGrandTotal.value;
//   } else if (payment_status.value == 'Unpaid') {
//     payment_amount.value = 0;
//   } else if (payment_status.value == 'Partial Paid') {
//     payment_amount.value = updatedGrandTotal.value / 2;
//   } else {
//     payment_amount.value = '';
//   }
// });




// watch(discount, (newDiscount, oldDiscount) => {
//   if (newDiscount < 0) {
//     showErrorMessage('Please discount amount do not entry less than 1!');
//     discount.value = 0;
//   }
//   if (newDiscount >= purchaseSubTotal.value) {
//     showErrorMessage('Please discount amount do not entry less than sub total!');
//     discount.value = oldDiscount;
//   }
// });

// watch(payment_status, (newPaymentStatus) => {
//   if (newPaymentStatus == 'Partial Paid') {
//     isPaymentAmountReadOnly.value = false;
//   } else {
//     isPaymentAmountReadOnly.value = true;
//   }
// });

// watch(payment_amount, (newPaymentAmount, oldPaymentAmount) => {
//   if (payment_status.value === 'Partial Paid' && (newPaymentAmount < 0 || newPaymentAmount >= updatedGrandTotal.value)) {
//     showErrorMessage("Payment amount do not entry less than 1 or grand total qty!");
//     payment_amount.value = oldPaymentAmount;
//   }
// });

// const addToCartQty = (purchases_quantity) => {
//   if (purchases_quantity < 1) {
//     showErrorMessage('Please purchases quantity do not entry less than 1!');
//     purchases_quantity = '';
//   }
// };


// const validateCartQuantity = (cartItem) => {
//   discount.value = '';
//   payment_amount.value = '';
//   if (cartItem.purchases_quantity < 1) {
//     cartItem.purchases_quantity = '';
//     cartItem.invalidCartQuantity = true;
//     showErrorMessage('Quantity must be greater than or equal to 1.');
//   } else {
//     cartItem.invalidCartQuantity = false;
//   }
// };

// const purchasingNow = () => {
//   const purchaseData = {
//     supplier_id: selectedSupplierId.value,
//     sub_total: purchaseSubTotal.value,
//     discount: discount.value,
//     grand_total: updatedGrandTotal.value,
//     payment_status: payment_status.value,
//     payment_amount: payment_amount.value,
//     purchaseCartData: purchaseCartData.value,
//   }

//   if (!payment_status.value) {
//     showErrorMessage("Payment status can not be empty!");
//     return;
//   }
//   if (payment_status.value !== 'Unpaid' && !payment_amount.value) {
//     showErrorMessage("Payment amount do not entry less than 1 or grand total qty!");
//     payment_amount.value = '';
//     return;
//   }

//   purchasing.value = true,
//     privateService.purchasingNowStore(purchaseData)
//       .then((res) => {
//         showSuccessMessage(res);
//         removeAllCartItem();
//         $router.push('list')
//       }).catch(err => {
//         showErrorMessage(err)
//       }).finally(() => {
//         purchasing.value = false;
//       });
// };

</script>

<template>
  <TheBreadcrumb title="Purchase Create"></TheBreadcrumb>

  <div class="card mb-5 mb-xxl-8">
    <div class="card-header">
      <div class="d-flex justify-content-between align-items-baseline mb-4 mb-md-3">
        <h6 class="card-title mb-0">Purchase Create</h6>
      </div>
    </div>
    <div class="card-body pt-9 pb-0">
        <div class="row">
          <div class="col-lg-12 col-md-12">
            <div class="table-responsive" v-if="selectedMedicineDetails">
              <table class="table align-middle text-center">
                <thead class="table-success">
                  <tr>
                    <th>Medicine Name</th>
                    <th>Type</th>
                    <th>Unit</th>
                    <th>Rack</th>
                    <th>Purchase Price</th>
                    <th>Purchase Qty</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{{ selectedMedicineDetails.name }} - <span class="text-info fw-bold text-hover-primary">{{ selectedMedicineDetails.power_name }}</span></td>
                    <td>{{ selectedMedicineDetails.type_name }}</td>
                    <td>{{ selectedMedicineDetails.unit_name }}</td>
                    <td>{{ selectedMedicineDetails.rack_name }}</td>
                    <td>{{ selectedMedicineDetails.purchases_price }}</td>
                    <td><input type="number" v-model="purchases_quantity" @input="addToCartQty(purchases_quantity)" ref="purchases_quantity"></td>
                    <td>
                      <TheButton @click="addToCart(selectedMedicineDetails)" class="btn-sm">
                        <!--begin::Svg Icon | path: icons/duotone/Communication/Add-user.svg-->
                        <span class="svg-icon svg-icon-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                            <path d="M18,8 L16,8 C15.4477153,8 15,7.55228475 15,7 C15,6.44771525 15.4477153,6 16,6 L18,6 L18,4 C18,3.44771525 18.4477153,3 19,3 C19.5522847,3 20,3.44771525 20,4 L20,6 L22,6 C22.5522847,6 23,6.44771525 23,7 C23,7.55228475 22.5522847,8 22,8 L20,8 L20,10 C20,10.5522847 19.5522847,11 19,11 C18.4477153,11 18,10.5522847 18,10 L18,8 Z M9,11 C6.790861,11 5,9.209139 5,7 C5,4.790861 6.790861,3 9,3 C11.209139,3 13,4.790861 13,7 C13,9.209139 11.209139,11 9,11 Z" fill="#000000" fill-rule="nonzero" opacity="0.3" />
                            <path d="M0.00065168429,20.1992055 C0.388258525,15.4265159 4.26191235,13 8.98334134,13 C13.7712164,13 17.7048837,15.2931929 17.9979143,20.2 C18.0095879,20.3954741 17.9979143,21 17.2466999,21 C13.541124,21 8.03472472,21 0.727502227,21 C0.476712155,21 -0.0204617505,20.45918 0.00065168429,20.1992055 Z" fill="#000000" fill-rule="nonzero" />
                          </svg>
                        </span>
                        <!--end::Svg Icon-->
                      </TheButton>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div v-else class="text-center text-danger p-2">
                No medicine selected
            </div>
          </div>
        </div>
    </div>
    <div class="card-footer">
      <div class="text-center text-danger" v-if="Object.keys(purchaseCartData).length < 1">Purchase Cart Data is Empty</div>
      <div class="row" v-else>
        <div class="col-12 col-xl-12">
         
        </div>
      </div>
    </div>
  </div>
</template>