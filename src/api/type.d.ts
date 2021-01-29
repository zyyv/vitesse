export interface obj {
  [key: string]: any
}

export interface Result<T = any> {
  msg: string;
  data?: T;
  status: number;
}

