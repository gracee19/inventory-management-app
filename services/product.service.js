const { Product, Item } = require('../models/index');

exports.getProducts = async () => {
  try {
    const products = await Product.findAndCountAll({
      raw: true,
      include: [{ model: Item }],
    });
    return products;
  } catch (err) {
    // Log Errors
    throw Error(err);
  }
};

exports.getProductCount = async (id) => {
  try {
    const products = await Item.count({
      raw: true,
      where: {
        product_id: id,
      },
    });
    return products;
  } catch (err) {
    // Log Errors
    throw Error(err);
  }
};

exports.getProductById = async (id) => {
  try {
    const products = await Product.findByPk(id, {
      include: {
        model: Item,
      },
    });
    return products;
  } catch (err) {
    // Log Errors
    throw Error(err);
  }
};

exports.addProduct = async (body) => {
  try {
    const products = await Product.create(body);
    return products;
  } catch (err) {
    // Log Errors
    throw Error(err);
  }
};

exports.deleteProduct = async (param) => {
  try {
    const products = await Product.destroy({
      where: {
        id: param,
      },
    });
    return products;
  } catch (err) {
    // Log Errors
    throw Error(err);
  }
};

exports.updateProduct = async (param, data) => {
  try {
    const products = await Product.update(param, {
      where: {
        id: data,
      },
    });
    return products;
  } catch (err) {
    // Log Errors
    throw Error(err);
  }
};
