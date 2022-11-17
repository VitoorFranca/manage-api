import { model, Schema } from 'mongoose';

const oderSchema = new Schema({
  table: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['WAITING', 'IN_PRODUCTION', 'DONE'],
    required: true,
    default: 'WAITING',
  },

  products: {
    required: true,
    type: [{
      product: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Product'
      },
      quantity: {
        type: Number,
        default: 1
      }
    }]
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

export const Order = model('Order', oderSchema);
