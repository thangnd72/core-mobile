export const nameRegExp = /\S/;
export const nameLimitExp = /^.{2,50}$/;
export const firstNameExp =
  /^[a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]+$/;
export const phoneNumberExp = /^[0-9]{5,12}$/;
export const emailRegExp = /\S+@\S+\.\S+/;
export const passRegExp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const RouteName = {
  //TAB
  HOME: "HOME",
  SETTING: "SETTING",
  NOTIFICATION: "NOTIFICATION",
  CHAT: "CHAT",
  NEW: 'NEW',

  //auth
  SIGN_IN: "SIGN_IN",
  SIGN_UP: "SIGN_UP",
  SPLASH: "SPLASH"
};
