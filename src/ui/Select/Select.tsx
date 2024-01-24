import { FC } from 'react';
import './Select.scss';

interface SelectProps {
  options: [{ value: string; name: string }, { value: string; name: string }];
  defaultValue: string;
  value: string;
  onChange: (value: string) => void;
}

const Select: FC<SelectProps> = ({
  options,
  defaultValue,
  value,
  onChange,
}) => {
  return (
    <div className='sorting'>
      <select
        name='sorting'
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        <option disabled value=''>
          {defaultValue}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
