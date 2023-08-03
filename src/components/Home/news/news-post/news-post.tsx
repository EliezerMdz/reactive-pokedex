import React from "react";

interface Props {
  title: string;
  description: string;
}

const NewsPost: React.FC<Props> = ({ title, description }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default NewsPost;
