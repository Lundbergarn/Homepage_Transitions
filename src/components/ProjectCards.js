import React from 'react';

const ProjectCards = (props) => {

  const { href, img, alt, text, styles} = props;
  
  return (
    <div className={styles.project_items}>
      <a href={href}>
        <img src={img} alt={alt} />
      </a>
      <p className={styles.project_info}>{text}</p>
    </div>
  );
}

export default ProjectCards;