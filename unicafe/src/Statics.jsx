const Statistic = ({ field, value }) => {
  return (
    <tr>
      <td>{field}</td>
      <td>{value}</td>
    </tr>
  );
};

export const Statics = ({ fields }) => {
  let totalCount = 0;
  let totalPoints = 0;
  let positive = 0;

  const calculatePercentage = (reference, absolute) =>
    (reference / absolute) * 100;

  const calculateStatics = () => {
    let calculateScore = 0;

    return fields.forEach((field) => {
      if (field.name === "good") {
        positive = field.value;
      }
      totalCount = totalCount + field.value;
      calculateScore = field.score * field.value;
      totalPoints = totalPoints + calculateScore;
    });
  };

  const renderValues = () => {
    let calculateScore = 0;

    return fields.map((field, index) => {
      if (field.name === "good") {
        positive = field.value;
      }
      totalCount = totalCount + field.value;
      calculateScore = field.score * field.value;
      totalPoints = totalPoints + calculateScore;

      return <Statistic key={index} field={field.name} value={field.value} />;
    });
  };

  const renderFields = () => {
    return (
      <>
        {renderValues()}
        <Statistic field="All" value={totalCount} />
        <Statistic field="Average" value={totalPoints / fields.length} />
        <Statistic
          field="Positive"
          value={`${calculatePercentage(positive, totalCount)}%`}
        />
      </>
    );
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: 20,
        width: "100%",
      }}
    >
      {calculateStatics()}
      {totalCount > 0 ? (
        <>
          <table>
            <thead>
              <th colspan="2" scope="colgroup">
                Statistics
              </th>
            </thead>
            <tbody>{renderFields()}</tbody>
          </table>
        </>
      ) : (
        <h3>We're waiting for your feedback</h3>
      )}
    </div>
  );
};
