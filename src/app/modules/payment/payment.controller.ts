import { initiatePayment } from './payment.utils';

const initiatePaymentCon = async (req, res) => {
  console.log('Limon initiatePaymentCon is called');
  const transactionId = `TXN-${Date.now()}`;
  const paymentData = {
    transactionId,
    totalPrice: '12424',
    custormerName: 'Lion',
    customerEmail: 'accacac@gmail.com',
    customerPhone: '1222',
    customerAddress: 'gtgtgt47',
  };

  const paymentSession = await initiatePayment(paymentData);

  console.log(paymentSession);

  return paymentSession;
};

export const PaymentController = {
  initiatePaymentCon,
};
