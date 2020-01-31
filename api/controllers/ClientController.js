/**
 * ClientController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  postClient: async (req, res) => {
    const params = req.allParams();

    let promise = Client.create({
      fullName: params.fullName,
      gender: params.gender,
      birthDate: params.birthDate,
      age: params.age,
      city: params.city,
    });

    promise
      .then(doc => {
        return res.json(doc);
      })
      .catch(res.serverError) ;
  },

  getClient: async (req, res) => {
    const id = req.param('id') ;

    const query = Client.findOne({
      _id: id
    })
    const promise = query.exec();

    promise
      .then(doc => {
        return res.json(doc);
      })
      .catch(res.serverError) ;
  },

  getClients: async (req, res) => {
    const params = req.allParams();

    let query = Client.find(params)
    const promise = query.exec();

    promise
      .then(doc => {
        return res.json(doc);
      })
      .catch(res.serverError);
  },

  putClient: async (req, res) => {
    const params = req.allParams();

    let promise = Client.findOneAndUpdate(
      {
      _id: params.id,
    },
      {
      $set: params,
    },
      {
      new: true,
    }
    )

    promise
      .then(doc => {
        return res.json(doc);
      })
      .catch(res.serverError);
  },

  deleteClient: async (req, res) => {
    const id = req.param('id');

    let promise = Client.deleteOne({
      _id: id,
    }) ;

    promise
      .then(doc => {
        return res.ok();
      })
      .catch(res.serverError);
  },
} ;
