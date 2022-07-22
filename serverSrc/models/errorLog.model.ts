import { Schema, model, Document } from 'mongoose';
import { ClientError } from '../errors';
import { IErrorLog, IErrorLogModel } from '../interfaces';
import bcrypt from 'bcryptjs';

const ErrorLogSchema = new Schema<IErrorLog, IErrorLogModel>({
  message: {
    type: String,
    required: true,
    default: 'Unknown Error',
  },
  owner: {
    type: String,
    required: true,
    // default: null,
  },
},
{
  timestamps: true,
});

ErrorLogSchema.statics.createErrorLog = function(error: IErrorLog) {
  return this.create(error);
};

export const ErrorLogModel = model<IErrorLog, IErrorLogModel>('errorLogs', ErrorLogSchema);
