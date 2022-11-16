import { v4 as uuidV4 } from "uuid";

class User {
  name: string;
  admin?: boolean;
  email: string;
  created_at: Date;
  updated_at: Date;
  id?: string;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
      this.admin = false;
    }
  }
}

export { User };
