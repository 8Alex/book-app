import { FC } from 'react';
import './Button.scss';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ children, className, onClick }) => {
  return (
    <div>
      <button className={`button ${className}`} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
