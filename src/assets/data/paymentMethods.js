import visaCard from "../images/payment_methods/Visa.png";
import masterCard from "../images/payment_methods/Mastercard.png";
import americanExpress from "../images/payment_methods/Amex.png";
import paypal from "../images/payment_methods/PayPal.png";
import shopPay from "../images/payment_methods/ShopPay.png";
import applePay from "../images/payment_methods/ApplePay.png";
import googlePay from "../images/payment_methods/GooglePay.png";

export const paymentMethods = [
  {
    id: 1,
    name: "Visa",
    url: "https://www.visa.com",
    icon: visaCard,
  },
  {
    id: 2,
    name: "MasterCard",
    url: "https://www.mastercard.com",
    icon: masterCard,
  },
  {
    id: 3,
    name: "American Express",
    url: "https://www.americanexpress.com",
    icon: americanExpress,
  },
  {
    id: 4,
    name: "PayPal",
    url: "https://www.paypal.com",
    icon: paypal,
  },
  {
    id: 5,
    name: "Shop Pay",
    url: "https://www.shopify.com/shop-pay",
    icon: shopPay,
  },
  {
    id: 6,
    name: "Apple Pay",
    url: "https://www.apple.com/apple-pay",
    icon: applePay,
  },
  {
    id: 7,
    name: "Google Pay",
    url: "https://www.pay.google.com",
    icon: googlePay,
  },
];
