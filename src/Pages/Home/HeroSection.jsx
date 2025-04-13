export default function HeroSection() {
  return (
    <section id="heroSection" className="hero-section" style={{
      width: "100%",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      paddingTop: "15rem",
      backgroundColor: "#f5fcff",
      textAlign: "center"
    }}>
      <div className="hero--section--content--box">
        <h1 className="hero--section--title" style={{
          fontSize: "3.5rem",
          fontWeight: 700,
          margin: 0,
          color: "#282938",
          lineHeight: "1.2",
          whiteSpace: "nowrap"
        }}>
          Hoang Vinh Nguyen
        </h1>
      </div>
    </section>
  );
}