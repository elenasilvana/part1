export const IconButton = ({ icon, alt, setUpdate, currentValue, color }) => {
  const handleClick = () => {
    setUpdate(currentValue + 1);
  };

  return (
    <button
      onClick={handleClick}
      style={{
        borderRadius: 40,
        border: "none",
        cursor: "pointer",
        background: `${color}`,
      }}
    >
      <img style={{ width: 130 }} src={icon} alt={alt} />
    </button>
  );
};
