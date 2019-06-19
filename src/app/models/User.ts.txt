export interface User {
  firstName: string;
  lastName: string;
  age?: number;
  address?: {
    street?: string;
    city?: string;
    province?: string;
  };
  image?: string;
  isActive?: boolean;
  balance?: number;
  registered?: any;
}
