import { Request, Response } from 'express';

import { Product } from '../../models/Product';

export async function listProducts(req: Request, res: Response) {

  try {
    const product = await Product.find();

    return res.send(product);

  } catch(err: any) {
    res.status(500).json({
      message: err.message,
      ok: false
    });
  }

}
