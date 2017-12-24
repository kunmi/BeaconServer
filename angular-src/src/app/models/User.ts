
export interface User {

  _id?: Number;
  name : String;
  username: String;
  email: String;
  password?: String;
  activated?: Boolean;
  roles: {
    manage_users : false,
    manage_roles : false,
    manage_projects: false
  };
  isadmin: false;

}
