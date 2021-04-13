export const Total = ({ courseContent }) => {
  const getTotal = (courseContent) => {
    let totalSum = 0;
    courseContent.forEach((part) => (totalSum += part.exercises));
    return totalSum;
  };

  return <p>Number of exercises {getTotal(courseContent)}</p>;
};
