import { Request, Response } from 'express';

import { Category } from '../../models/Category';

export async function listCategories(req: Request, res: Response) {
  try {
    const categories = await Category.find();

    return res.json(categories);

  }  catch(err: any) {
    res.status(500).json({
      message: err.message,
      ok: false
    });
  }
}
