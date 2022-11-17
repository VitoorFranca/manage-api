import { Request, Response } from 'express';

import { Product } from '../../models/Product';

export async function listProductsByCategoryId(req: Request, res: Response) {

  try {
    const { categoryId } = req.params;
    const product = await Product.find().where('category').equals(categoryId);

    return res.json(product);

  } catch(err: any) {
    res.status(500).json({
      message: err.message,
      ok: false
    });
  }

}
