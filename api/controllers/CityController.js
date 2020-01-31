/**
 * CityController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  postCity: async (req, res) => {
    const params = req.allParams();

    let promise = City.create({
      name: params.name,
      state: params.state,
    });

    promise
      .then(doc => {
        return res.json(doc);
      })
      .catch(res.serverError) ;
  },

  getCity: async (req, res) => {
    const id = req.param('id') ;

    const query = City.findOne({
      _id: id
    })
    const promise = query.exec();

    promise
      .then(doc => {
        return res.json(doc);
      })
      .catch(res.serverError) ;
  },

  getCitys: async (req, res) => {
    const params = req.allParams();

    let query = City.find(params)
    const promise = query.exec();

    promise
      .then(doc => {
        return res.json(doc);
      })
      .catch(res.serverError);
  },

  putCity: async (req, res) => {
    const params = req.allParams();

    let promise = City.findOneAndUpdate(
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

  deleteCity: async (req, res) => {
    const id = req.param('id');

    let promise = City.deleteOne({
      _id: id,
    }) ;

    promise
      .then(doc => {
        return res.ok();
      })
      .catch(res.serverError);
  },
} ;
