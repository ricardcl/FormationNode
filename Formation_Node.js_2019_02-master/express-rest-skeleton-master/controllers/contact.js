const Contact = require('../models/contact');

/**
 * @param req {import('express').Request}
 * @param res {import('express').Response}
 * @param next {import('express').NextFunction}
 */
exports.list = async (req, res, next) => {
  try {
    const contacts = await Contact.find();
    // const contacts = await Contact.find({prenom: /^B/}); : pour avoir tous les contacts dans le prenom commence par b
    // const contacts = await Contact.find({prenom: /^B/}, 'prenom"); : pour avoir tous les contacts dans le prenom commence par b et on ne renvoie que le prenom
    // const contacts = await Contact.find({prenom: /^B/}).limit(2) : on fait de la pagination , cad on affiche que les deux premiers contacts

    res.json(contacts);
  }
  catch (err) {
    next(err);
  }
};

/**
 * @param req {import('express').Request}
 * @param res {import('express').Response}
 * @param next {import('express').NextFunction}
 */
exports.show = async (req, res, next) => {
  try {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
      req.notFoundReason = `Contact ${req.params.id} not found`;
      return next();
    }

    res.json(contact);
  }
  catch (err) {
    next(err);
  }
};

/**
 * @param req {import('express').Request}
 * @param res {import('express').Response}
 * @param next {import('express').NextFunction}
 */
exports.add = async (req, res, next) => {
  try {
    const contact = await Contact.create(req.body);
    res.statusCode = 201;
    res.json(contact);
  }
  catch (err) {
    next(err);
  }
};

/**
 * @param req {import('express').Request}
 * @param res {import('express').Response}
 * @param next {import('express').NextFunction}
 */
exports.delete = async (req, res, next) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);

    if (!contact) {
      req.notFoundReason = `Contact ${req.params.id} not found`;
      return next();
    }

    res.json(contact);
  }
  catch (err) {
    next(err);
  }
};

/**
 * @param req {import('express').Request}
 * @param res {import('express').Response}
 * @param next {import('express').NextFunction}
 */
exports.update = async (req, res, next) => {
  try {
    const contact = await Contact.findByIdAndUpdate(req.params.id, req.body);

    if (!contact) {
      req.notFoundReason = `Contact ${req.params.id} not found`;
      return next();
    }

    res.json(contact);
  }
  catch (err) {
    next(err);
  }
};
