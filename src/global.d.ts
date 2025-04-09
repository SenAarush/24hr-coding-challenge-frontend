export { }


declare global {
    
    interface IProduct {
        name: string;
        description: string;
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
    
}

