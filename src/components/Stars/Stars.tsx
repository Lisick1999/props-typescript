import { Star } from '../Star';

interface IProps {
  count: number;
};

export const Stars = ({ count = 0 }: IProps) => {
  if (isNaN(count) || count < 1 || count > 5) {
    return null;
  };

  const arr = [];
  for (let i = 0; i < count; i++) {
    arr.push(i);
  };
  
  return (
    <ul className="card-body-stars u-clearfix">
      {arr.map((el: number) => <Star key={el}/>)}
    </ul>
  );
};
