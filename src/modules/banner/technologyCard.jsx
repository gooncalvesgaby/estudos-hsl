import React from 'react';
import {Card, Image} from './styledBanner';

const TechnologyCard = ({ src, alt }) => {
  return (
    <Card>
      <Image src={src} alt={alt} />
    </Card>
  );
};

export default TechnologyCard;