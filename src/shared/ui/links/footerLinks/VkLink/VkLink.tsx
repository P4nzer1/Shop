import React from 'react';
import { Link } from 'react-router-dom';

import style from './VkLink.module.scss'

const VkLink = () => {
  return (
    <div>
      <Link to={'https://vk.com/public215397085'} className={style.text}>Наш VK</Link>
    </div>
  );
};

export default VkLink;