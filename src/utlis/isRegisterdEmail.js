async function isRegisteredEmail(userModel, email) {
  const finded_email = await userModel.findOne({
    attributes: ['email'],
    where: { email: email }
  });
  if (finded_email) {
    return true;
  }
  return false;
}

module.exports = isRegisteredEmail;