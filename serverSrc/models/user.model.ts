import { Schema, model, Document } from 'mongoose';
import { ClientError } from '../errors';
import { IUser, IUserModel } from '../interfaces';
import bcrypt from 'bcryptjs';

const UserSchema = new Schema<IUser, IUserModel>({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    // default: null,
  },
  role: {
    type: String,
    required: true,
    enum: ['member', 'guest'],
    default: 'guest',
  },
},
{
  timestamps: true, // will add: a createdAt and a updatedAt date value.
});

UserSchema.statics.isNameExists = function(name) {
  return new Promise((resolve, reject) => {
    UserModel.findOne({ name })
      .then((userFromDb) => {
        if (userFromDb) {
          resolve(userFromDb);
        }
        reject(new ClientError('No such user', 401));
      })
      .catch((err) => reject(err));
  });
};

UserSchema.statics.isNameUnique = function(name) {
  return new Promise((resolve, reject) => {
    UserModel.findOne({ name })
      .then((userFromDb) => {
        if (userFromDb) {
          reject(new ClientError('Name already exist', 401));
        }
        resolve(null);
      })
      .catch((err) => reject(err));
  });
};

UserSchema.statics.isPasswordMatched = function(candidatePassword, userFromDb) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(candidatePassword, userFromDb.password)
      .then((passwordMatched) => {
        if (passwordMatched) {
          resolve(userFromDb);
        } else {
          reject(new ClientError('Wrong password', 401));
        }
      })
      .catch((err) => reject(err));
  });
};

UserSchema.statics.createUser = function(user) {
  return this.isNameUnique(user.name)
    .then(() => bcrypt.hash(user.password, 10))
    .then((hash) => {
      user.password = hash;
      return this.create(user);
    });
};

UserSchema.statics.findUserByIdAndUpdateTimestamp = function(_id) {
  return new Promise((resolve, reject) => {
    if (!_id) {
      return reject(new ClientError('User not found', 401));
    }
    // empty update object, reason: update timestamp after using $set operator
    UserModel.findOneAndUpdate({ _id }, {$set: {}}, {
      upsert: false,
      useFindAndModify: false,
      new: true,
      rawResult: false,
    })
      .then((userFromDb) => {
        if (userFromDb) {
          return resolve(userFromDb);
        }
        return reject(new ClientError('User not found', 401));
      })
      .catch((err) => reject(err));
  });
};


export const UserModel = model<IUser, IUserModel>('users', UserSchema);
