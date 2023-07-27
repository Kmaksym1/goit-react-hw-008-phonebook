import { Button, Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
// import { logOut } from 'reduxe/auth/auth-operation';

import { selectUserName } from 'reduxe/auth/auth-selectors';
import { Wrapper } from './UserMenu.styled';

export const UserMenu = () => {
  // const dispatch = useDispatch();
  const name = useSelector(selectUserName);
  return (
    <Wrapper>
      <Text>Welcome, {name}!</Text>
      <Button type="button" >
      {/* onClick={() => dispatch(logOut())} */}
        Logout
      </Button>
    </Wrapper>
  );
};