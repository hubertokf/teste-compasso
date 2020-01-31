/**
 * Client.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
const mongoose = require('mongoose');
const { Schema } = mongoose;

module.exports = {
  //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
  //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
  //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
  schema: {
    fullName: {
      type: 'string',
      required: true,
    },
    gender: {
      type: 'string',
    },
    birthDate: {
      type: 'date',
    },
    age: {
      type: 'number',
    },

  //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
  //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
  //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝

  //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
  //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

    city: {
      type: Schema.Types.ObjectId,
      ref: 'city'
    },
  },

  constructSchema(schemaDefinedAbove, sails) {
    const newSchema = new sails.mongoose.Schema(schemaDefinedAbove, {
      collection: 'client',
      timestamps: true,
      autoIndex: false,
    });

    newSchema.set('toJSON', {
      virtuals: true,
    });

    const autoPopulateCity = function(next) {
      this.populate('city');
      next();
    };

    newSchema.pre('find', autoPopulateCity);
    newSchema.pre('findOne', autoPopulateCity);

    return newSchema;
  },
};
