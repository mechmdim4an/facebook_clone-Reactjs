import { Avatar } from '@material-ui/core';
import React from 'react';
import './SiderbarRow.css';

//instead of props destructuring the elements directly in parameter as src, icon and title

function SidebarRow({src, Icon, title}) {
  return (
    <div className='SidebarRow'>
    {src && <Avatar src={src}/>}
    {Icon && <Icon/>}
    <h4>{title}</h4>
    </div>
  );
}

export default SidebarRow;
