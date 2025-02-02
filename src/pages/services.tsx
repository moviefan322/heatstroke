export default function Services() {
  return (
    <>
      <div className="container">
        <h1>Services</h1>
        <h2>{`"If you can dream it, we can print it"`}</h2>
        <h4>
          We offer high-quality screen printing on just about anything—garments,
          totes, glass, patches, stickers, zines, and more. Whether you need
          custom apparel, bold designs on unique surfaces, or small-run prints
          for your projects, we’ve got you covered. No limits, just great
          prints.
        </h4>

        <div className="service">
          <h3>Service</h3>
          <div className="image" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum porro
            minima facilis. Repellat quasi sit, magni nihil qui aliquam
            blanditiis fugiat maiores id delectus, quia laudantium saepe
            inventore vel enim.
          </p>
          <div className="estimate">
            <h5>Base Price</h5>
            <p>XXX units for YYY</p>
          </div>
        </div>
      </div>

      {/*STYLESHEET*/}
      <style jsx>{`
        h4 {
          margin-top: 3rem;
          width: 90%;
        }
        h2 {
          text-align: center;
        }
        h3 {
          font-size: 2rem;
          margin-bottom: 3rem;
        }
        h5 {
          margin-top: 1rem;
          margin-bottom: 0.5rem;
          font-size: 1.5rem;
          text-decoration: underline;
        }
        .service {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 2rem;
          border-bottom: 1px gray dashed;
          padding-bottom: 2rem;
        }
        .image {
          background-image: url("https://picsum.photos/200");
          background-size: cover;
          background-position: center;
          height: 400px;
          width: 400px;
          margin: auto;
          margin-bottom: 2rem;
        }
        hr {
          margin-top: 2rem;
        }
        .estimate {
          align-self: center;
        }
      `}</style>
    </>
  );
}
