import React from 'react';

import { UserDropdownContainer, UserDropdownLink } from './user-dropdown.styles';

const UserDropdown = () => {

    return (
        <UserDropdownContainer>
            <UserDropdownLink to='/auth'>
                Account
            </UserDropdownLink>
            <UserDropdownLink to='/auth'>
                Sign Out
            </UserDropdownLink>
        </UserDropdownContainer>
    )
};

export default UserDropdown;