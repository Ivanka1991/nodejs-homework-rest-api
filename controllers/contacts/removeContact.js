const { NotFound } = require('http-errors')

const { Contact } = require('../../models')
const { sendSuccessRes } = require('../../helpers')

const removeContact = async (req, res) => {
  const { id } = req.params
  const result = await Contact.findByIdAndDelete(id)
  if (!result) {
    throw new NotFound(`Product with id=${id} not found`)
  }
  sendSuccessRes(res, { message: 'Success delete' })
}

module.exports = removeContact