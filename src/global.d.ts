export { }


declare global {

  interface IProduct {
    _id?: string;
    name: string;
    desc: string;
    category: string;
    price: number;
    rating: number;
    image?: string;
  };

  interface RegisterFormProps {
    onClose: () => void;
    onSignup: (data: { name: string; email: string; password: string }) => void;
  };

  interface LoginFormProps {
    onClose: () => void;
    onLogin: (data: { email: string; password: string }) => void;
  }
  interface ProductFilterBarProps {
    search: string;
    setSearch: (val: string) => void;
    category: string;
    setCategory: (val: string) => void;
    sort: string;
    setSort: SetStateAction;
  }
}

