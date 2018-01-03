
export interface User {

  _id?: Number;
  name : string;
  username: string;
  email: string;
  password?: string;
  activated?: boolean;
  roles: {
    manage_users : false,
    manage_roles : false,
    manage_projects: false
  };
  isadmin: false;
  token?:string;

}
