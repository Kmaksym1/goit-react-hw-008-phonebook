// import css from "./filter.module.css";
import { useState } from 'react';
import { filter } from 'reduxe/contacts/filterSlice';
import { useDispatch } from 'react-redux';
import { VStack, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';


const Filter = () => {
  const [query, setQuery] = useState('');

  const dispatch = useDispatch();

  const onChange = ({ target }) => {
    const query = target.value;
    setQuery(query);
    dispatch(filter(query));
  };

  return (
    <VStack mt={10}>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Input
          value={query}
          type="tel"
          placeholder="Find contacts by name"
          onChange={onChange}
          fontSize="xl"
        />
      </InputGroup>
    </VStack>
  );
};
export default Filter;
