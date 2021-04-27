export class UserModel {
  id: number;
  name: string;
  pass: string;
  email: string;
  type: string;

  constructor(id: number, name: string, pass: string, email: string, type: string) {
    this.id = id;
    this.name = name;
    this.pass = pass;
    this.email = email;
    this.type = type;
  }
}
