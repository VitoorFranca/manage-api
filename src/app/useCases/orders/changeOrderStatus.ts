import { Request, Response } from 'express';

import { Order } from '../../models/Order';

export async function changeOrderStatus(req: Request, res: Response) {

  try {
    const { status } = req.body;
    const { orderId } = req.params;

    if(!['WAITING', 'IN_PRODUCTION', 'DONE'].includes(status)){
      res.status(400).json({
        error: 'Status should be one of these \'WAITING\', \'IN_PRODUCTION\', \'DONE\''
      });
    }

    await Order.findByIdAndUpdate(orderId, { status });

    return res.sendStatus(204);

  } catch(err: any) {
    res.status(500).json({
      message: err.message,
      ok: false
    });
  }

}
