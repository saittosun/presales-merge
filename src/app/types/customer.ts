export class Customer {
  id: string | number;
  customername: string;
  projectname: string;
  status: string;
  date: string;
  firstname: string;
  lastname: string;
  email: string;
  phonenumber: number;
  vat: number;
  address: Address;
}

export interface Address {
  addressline1: string;
  addressline2?: string;
  city: string;
  country: string;
  state: string;
  zip: number;
}
