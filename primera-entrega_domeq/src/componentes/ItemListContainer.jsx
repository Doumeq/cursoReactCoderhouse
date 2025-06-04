function Lista(props) {
  return (
    <section style={{
      margin: '2rem 1rem',
      padding: '1rem',
      border: '1px solid #ccc',
      borderRadius: '4px'
    }}>
      <h2>{props.mensaje}</h2>
    </section>
  );
}

export default Lista;
