import { FC } from 'react';
import Input from '../../ui/Input/Input';
import Select from '../../ui/Select/Select';

interface BookFilterProps {
  filter: {
    sort: string;
    query: string;
  };
  setFilter: React.Dispatch<
    React.SetStateAction<{ sort: string; query: string }>
  >;
}

const BookFilter: FC<BookFilterProps> = ({ filter, setFilter }) => {
  const sortBooks = (sort: string) => {
    setFilter({ ...filter, sort: sort });
  };

  const searchBooks = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter({ ...filter, query: e.target.value });
  };

  return (
    <div>
      <Input
        type='text'
        placeholder='Search  by title'
        value={filter.query}
        onChange={searchBooks}
      />
      <Select
        options={[
          { value: 'title', name: 'By title' },
          { value: 'authors', name: 'By author' },
        ]}
        defaultValue={'Sorting by'}
        value={filter.sort}
        onChange={sortBooks}
      />
    </div>
  );
};

export default BookFilter;
