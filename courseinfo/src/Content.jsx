const ContentPart = ({ contentName, exercises }) => (
  <p>
    {contentName} {exercises}
  </p>
);

export const Content = ({ courseContent }) => {
  const renderContent = () => {
    return courseContent.map((course) => (
      <ContentPart contentName={course.name} exercises={course.exercises} />
    ));
  };
  return <div>{renderContent()}</div>;
};
