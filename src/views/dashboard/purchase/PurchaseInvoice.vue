<template>
  <TheBreadcrumb title="Purchase Invoice"></TheBreadcrumb>

  <div class="purchase-invoice" ref="invoiceRef">
    <div class="actions">
      <button @click="printInvoice">Print</button>
      <button @click="downloadPDF">Download PDF</button>
    </div>
    <h1 class="title">Purchase Invoice</h1>
    <div class="details">
      <div class="detail">
        <span><strong>Invoice Number: </strong>{{ purchaseInvoice.purchases_invoice_no }}</span>
        <span><strong>Supplier: </strong>{{ purchaseInvoice.supplier_name }}</span>
        <span><strong>Date: </strong>{{ purchaseInvoice.created_at }}</span>
      </div>
      <div class="detail">
        <span><strong>Invoice Number: </strong>{{ purchaseInvoice.purchases_invoice_no }}</span>
        <span><strong>Supplier: </strong>{{ purchaseInvoice.supplier_name }}</span>
        <span><strong>Date: </strong>{{ purchaseInvoice.created_at }}</span>
      </div>
    </div>
    <div class="items">
      <h2 class="subtitle">Medicine Items</h2>
      <table>
        <thead>
          <tr>
            <th>Medicine Details</th>
            <th>Unit</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in purchaseInvoice.purchasesDetails" :key="index">
            <td>{{ item.medicine_name }} - {{ item.power_name }}</td>
            <td>{{ item.unit_name }}</td>
            <td>{{ item.purchases_quantity }}</td>
            <td>{{ item.purchases_price }}</td>
            <td>{{ item.purchases_quantity * item.purchases_price }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="total">
      <p><span class="label">Sub Total:</span> {{ purchaseInvoice.sub_total }}</p>
      <p><span class="label">Discount:</span> {{ purchaseInvoice.discount }}</p>
      <p><span class="label">Grand Total:</span> {{ purchaseInvoice.grand_total }}</p>
      <p><span class="label">Payment Status:</span> {{ purchaseInvoice.payment_status }}</p>
      <p><span class="label">Payment Amount:</span> {{ purchaseInvoice.payment_amount }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { authStore } from '../../../store/store';
import showAlert from '../../../helpers/alert';
import html2pdf from 'html2pdf.js';

import TheBreadcrumb from '../../../components/TheBreadcrumb.vue';

const $route = useRoute()

const purchaseInvoice = ref({})
const purchaseInvoiceId = ref($route.params.id)

onMounted(() => {
  authStore.fetchProtectedApi(`purchase/${purchaseInvoiceId.value}`, {}, 'GET')
    .then(response => {
      purchaseInvoice.value = response.data
    })
    .catch(error => {
      showAlert('error', error.message || "Failed to fetch purchase data");
    })
})

const printInvoice = () => {
  const invoiceElement = document.querySelector('.purchase-invoice');
  const printWindow = window.open('', '_blank');
  printWindow.document.write('<html><head><title>Purchase Invoice</title></head><body>');
  printWindow.document.write('<style>@media print{body{margin: 0;padding: 0;}.actions{display: none;}.purchase-invoice{width: 80%;margin: 0 auto;padding: 25px;border: 1px solid #ddd;border-radius: 8px;box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);}.title{text-align: center; margin-bottom: 20px;}.details{margin-bottom: 20px;display: flex;justify-content: space-between;}.detail{display: flex;flex-direction: column;margin-bottom: 5px;}.items {margin-bottom: 20px;}.subtitle {font-size: 1.2em;margin-bottom: 10px;}table {width: 100%;border-collapse: collapse;}th, td {border: 1px solid #ddd;padding: 8px;text-align: left;}th {background-color: #f2f2f2;}.total {float: right;font-weight: bold;}}</style>');
  printWindow.document.write(invoiceElement.innerHTML);
  printWindow.document.write('</body></html>');
  printWindow.document.close();
  printWindow.print();
}

const downloadPDF = () => {
  const invoiceElement = document.querySelector('.purchase-invoice');
  html2pdf().from(invoiceElement).save('purchase_invoice.pdf');
}
</script>

<style scoped>
.purchase-invoice {
  width: 80%;
  margin: 0 auto;
  padding: 25px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.title {
  text-align: center;
  margin-bottom: 20px;
}

.details {
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
}

.detail {
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
}

.items {
  margin-bottom: 20px;
}

.subtitle {
  font-size: 1.2em;
  margin-bottom: 10px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}

.total {
  float: right;
  font-weight: bold;
}

.actions {
  margin-bottom: 20px;
  text-align: right;
}

button {
  padding: 10px 20px;
  margin: 0 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}

tbody tr:hover {
  background-color: #f2f2f2;
}

.button-click-animation {
  animation: buttonClickAnimation 0.3s ease;
}

@keyframes buttonClickAnimation {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
