<script setup>

// const purchasing = ref(false);
// const discount = ref('');
// const payment_status = ref('');
// const payment_amount = ref('');
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
          <div class="table-responsive">
            <table class="table table-striped table-hover align-middle text-center">
              <thead class="table-info">
                <tr>
                  <th>Medicine Name</th>
                  <th>Unit</th>
                  <th>Purchase Price</th>
                  <th>Purchase Qty</th>
                  <th>Total Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(cartItem, i) in purchaseCartData" :key="cartItem.id">
                  <td>{{ cartItem.name }} - <span class="text-info fw-bold text-hover-primary">{{ cartItem.power_name }}</span></td>
                  <td>{{ cartItem.unit_name }}</td>
                  <td>{{ cartItem.purchases_price }}</td>
                  <td>
                    <input type="number" v-model="cartItem.purchases_quantity" @input="validateCartQuantity(cartItem)">
                    <!-- <div v-if="cartItem.invalidCartQuantity" class="error-message">
                      Quantity must be greater than or equal to 0.
                    </div> -->
                  </td>
                  <td>{{ cartItem.purchases_price * cartItem.purchases_quantity }}</td>
                  <td>
                    <button @click="removeCartItem(cartItem.id)" class="btn btn-danger btn-sm">
                    <!--begin::Svg Icon | path: icons/duotone/General/Trash.svg-->
                    <span class="svg-icon svg-icon-3">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <rect x="0" y="0" width="24" height="24" />
                          <path d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z" fill="#000000" fill-rule="nonzero" />
                          <path d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z" fill="#000000" opacity="0.3" />
                        </g>
                      </svg>
                    </span>
                    <!--end::Svg Icon-->
                    </button>
                  </td>
                </tr>
              </tbody>
              <tfoot class="table-info">
                <tr>
                  <td colspan="3"></td>
                  <td>Sub Total: </td>
                  <td colspan="2">{{ purchaseSubTotal }}</td>
                </tr>
                <tr>
                  <td colspan="3"></td>
                  <td>Discount: </td>
                  <td colspan="2">
                    <input type="number" v-model="discount" placeholder="00">
                  </td>
                </tr>
                <tr>
                  <td colspan="3"></td>
                  <td>Grand Total: </td>
                  <td colspan="2">{{ updatedGrandTotal }}</td>
                </tr>
                <tr>
                  <td colspan="3"></td>
                  <td>Payment Status: </td>
                  <td colspan="2">
                    <select v-model="payment_status" style="width: 50%;" class="text-center" ref="payment_status">
                      <option value="">--Select One--</option>
                      <option value="Unpaid">Unpaid</option>
                      <option value="Partial Paid">Partial Paid</option>
                      <option value="Paid">Paid</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td colspan="3">{{ updatedPaymentAmount }}</td>
                  <td>Payment Amount: </td>
                  <td colspan="2">
                    <input type="number" v-model="payment_amount" ref="payment_amount" :readonly="isPaymentAmountReadOnly" placeholder="00">
                  </td>
                </tr>
                <tr>
                  <td colspan="4"></td>
                  <td colspan="2">
                    <TheButton :lodding="purchasing" @click="purchasingNow" v-if="updatedGrandTotal > 0" class="mt-3">Purchase</TheButton>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>