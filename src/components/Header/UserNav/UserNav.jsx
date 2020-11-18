import Search from './Search/Search';
import CityToggle from './CityToggle/CityToggle';
import LoginButton from './LoginButton/LoginButton';

function UserNav(props){
 
  return (
    <>
      <CityToggle/>
      <Search/>
      <LoginButton/>
    </>
  )
};

export default UserNav;