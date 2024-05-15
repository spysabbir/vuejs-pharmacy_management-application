<template>
  <div class="sale-invoice" ref="invoiceRef">
    <h1 class="title">Sale Invoice</h1>
    <div class="details">
      <div class="detail">
        <span class="label">Invoice Number:</span>
        <span class="value">{{ saleInvoice.sales_invoice_no }}</span>
      </div>
      <div class="detail">
        <span class="label">Customer:</span>
        <span class="value">{{ saleInvoice.customer_name }}</span>
      </div>
      <div class="detail">
        <span class="label">Date:</span>
        <span class="value">{{ saleInvoice.created_at }}</span>
      </div>
    </div>
    <div class="items">
      <h2 class="subtitle">Items</h2>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in saleInvoice.salesDetails" :key="index">
            <td>{{ item.medicine_name }}</td>
            <td>{{ item.sales_quantity }}</td>
            <td>{{ item.sales_price }}</td>
            <td>{{ item.sales_quantity * item.sales_price }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="total">
      <p><span class="label">Sub Total:</span> {{ saleInvoice.sub_total }}</p>
      <p><span class="label">Discount:</span> {{ saleInvoice.discount }}</p>
      <p><span class="label">Grand Total:</span> {{ saleInvoice.grand_total }}</p>
      <p><span class="label">Payment Status:</span> {{ saleInvoice.payment_status }}</p>
      <p><span class="label">Payment Amount:</span> {{ saleInvoice.payment_amount }}</p>
    </div>
    <div class="actions">
      <button @click="printInvoice">Print</button>
      <button @click="downloadPDF">Download PDF</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { authStore } from '../../../store/store';
import showAlert from '../../../helpers/alert';
import html2pdf from 'html2pdf.js';

const $route = useRoute()

const saleInvoice = ref({})
const saleInvoiceId = ref($route.params.id)

onMounted(() => {
  authStore.fetchProtectedApi(`sale/${saleInvoiceId.value}`, {}, 'GET')
    .then(response => {
      saleInvoice.value = response.data
    })
    .catch(error => {
      showAlert('error', error.message || "Failed to fetch sale data");
    })
})

const printInvoice = () => {
  const invoiceElement = document.querySelector('.sale-invoice');
  const printWindow = window.open('', '_blank');
  printWindow.document.write('<html><head><title>Sale Invoice</title></head><body>');
  printWindow.document.write('<style>@media print{body{margin: 0;padding: 0;}.sale-invoice *{font-family: Arial, sans-serif;}.actions{display: none;}}</style>');
  printWindow.document.write(invoiceElement.innerHTML);
  printWindow.document.write('</body></html>');
  printWindow.document.close();
  printWindow.print();
}

const downloadPDF = () => {
  const invoiceElement = document.querySelector('.sale-invoice');
  html2pdf().from(invoiceElement).save('sale_invoice.pdf');
}
</script>

<style scoped>
.sale-invoice {
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
}

.detail {
  display: flex;
  margin-bottom: 5px;
}

.label {
  font-weight: bold;
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
  font-weight: bold;
}

.actions {
  margin-top: 20px;
  text-align: center;
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
</style>
