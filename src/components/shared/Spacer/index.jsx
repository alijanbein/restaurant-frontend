const Spacer = ({ color = '#ccc', thickness = '1px', margin = '16px 0', width = '100%' }) => {
    return (
      <hr
        style={{
          border: 'none',
          backgroundColor: color,
          height: thickness,
          margin,
          width,
        }}
      />
    );
  };
  
  export default Spacer;