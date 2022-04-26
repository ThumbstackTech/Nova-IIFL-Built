export const validateMobile = (mobile: any) => {
  var pattern = /^[7-9][0-9]{9}$/;
  if (pattern.test(mobile)) {
    return true;
  }
  return false;
};

export const ValidateEmail = (email: any) => {
  var emailpattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailpattern.test(email)) {
    return true;
  }
  return false;
};
