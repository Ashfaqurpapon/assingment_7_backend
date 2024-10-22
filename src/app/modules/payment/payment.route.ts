import express from 'express';
import { PaymentController } from './payment.controller';
import { USER_ROLE } from '../userNew/user.constant';
import auth from '../../middlewares/auth';

const router = express.Router();
router.post(
  '/make-payment',
  //   auth(USER_ROLE.user),
  PaymentController.initiatePaymentCon,
);

export const PaymentRoute = router;
