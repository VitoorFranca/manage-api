import { Request, Response } from 'express';

import { Order } from '../../models/Order';

export async function createOrder(req: Request, res: Response) {

  try {
    const { table, products } = req.body;
    const order = await Order.create({table, products});

    return res.status(201).json(order);

  } catch(err: any) {
    res.status(500).json({
      message: err.message,
      ok: false
    });
  }

}
