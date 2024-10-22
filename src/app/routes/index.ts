import { Router } from 'express';
// import { BookingRoutes } from '../modules/booking/booking.route';
// import { carCreateRoute } from '../modules/car/car_create_route';
import { userRoutes } from '../modules/userNew/userRoutes';
import { PostRoutes } from '../modules/post/post.route';
import { CommentRoutes } from '../modules/comment/comment.route';
import { FollowerRoutes } from '../modules/follower/follower.route';
import { PaymentRoute } from '../modules/payment/payment.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: userRoutes,
  },
  // {
  //   path: '/bookings',
  //   route: BookingRoutes,
  // },
  // {
  //   path: '/cars',
  //   route: carCreateRoute,
  // },
  {
    path: '/post',
    route: PostRoutes,
  },
  {
    path: '/comment',
    route: CommentRoutes,
  },
  {
    path: '/follower',
    route: FollowerRoutes,
  },
  {
    path: '/payment',
    route: PaymentRoute,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
