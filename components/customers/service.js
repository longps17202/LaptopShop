const customerModel = require('./model');

exports.login = async (username) => {
    const customer = await customerModel.findOne({ username: username }, 'id username password');
    return customer;
}

exports.register = async (username, password, name, email, phone, address, image) => {
    const customer = new customerModel({ username, password, name, email, phone, address, image });
    return await customer.save();
}

exports.getAllCustomer = async () => {
    return await customerModel.find({});
}

exports.delete = async (id) => {
    await customerModel.findByIdAndDelete(id);
}
exports.update = async (id, customer) => {
    await customerModel.findByIdAndUpdate(id, customer);
}
exports.getCustomerById = async (id) => {
    const customer = await customerModel.findById(id);
    return customer;
};

exports.getById = async (id) => {
    const user = await customerModel.findById(id);
    return user;
}

exports.getAll = async () => {
    const users = customerModel.find().sort({ username: 1});
    return users;
}

