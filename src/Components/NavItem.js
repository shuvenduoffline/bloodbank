import React from 'react';

const NavItem = ({name, path, onClickMenu}) => {
    return (
        <div style={{
            cursor: 'pointer',
            color: 'white',
            fontWeight: 'bolder'
        }}
        onClick={() => onClickMenu(path)}
        >
            {name}
        </div>
    );
}

export default NavItem;
