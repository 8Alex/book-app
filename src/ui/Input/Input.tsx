import { FC } from 'react';
import './Input.scss';

interface InputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const Input: FC<InputProps> = ({
  type,
  placeholder,
  value,
  onChange,
  className,
}) => {
  return (
    <div>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`input ${className}`}
      />
    </div>
  );
};

export default Input;
