async function isRegisteredEmail(userModel, email) {
  const email = await userModel.findOne({
    attributes: ['email'],
    where: { email: email }
  });
  if (email) {
    return true;
  }
  return false;
}

module.exports = isRegisteredEmail;