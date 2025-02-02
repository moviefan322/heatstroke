export default function Quote() {
  return (
    <>
      <div className="container">
        <h1>Get A Quote</h1>
        <div className="form">
          <div className="form-section">
            <p>Name: </p>
            <input type="text" />
          </div>
          <div className="form-section">
            <p>Email: </p>
            <input type="text" />
          </div>
          <div className="form-section">
            <p>Phone: </p>
            <input type="text" />
          </div>
          <div className="description-section">
            <p>Description of order: </p>
            <textarea rows={5} />
          </div>
          <div className="submit-section">
            <button>Submit</button>
          </div>
        </div>
      </div>

      {/*STYLESHEET*/}
      <style jsx>{`
        .form {
          display: flex;
          flex-direction: column;
          border: 1px solid black;
          padding: 2rem;
          margin-top: 2rem;
          width: 90%;
          justify-content: center;
          align-items: flex-start;
        }
        .form-section {
          display: flex;
          flex-direction: row;
          width: 100%;
          margin-bottom: 1rem;
        }
        .form-section p {
          flex: 1;
        }
        .form-section input {
          flex: 3;
          border-radius: 0;
        }
        .description-section {
          display: flex;
          flex-direction: column;
          width: 100%;
        }
        .submit-section {
          display: flex;
          justify-content: center;
          width: 100%;
          padding-top: 2rem;
        }
        .submit-section button {
          border: 1px solid black;
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          color: white;
          background-color: black;
        }

        /* media query for desktop */
        @media (min-width: 1024px) {
          h1 {
            margin-top: 2rem;
          }
          .form {
            width: 60%;
            padding: 5rem;
          }
          .form-section {
            width: 80%;
            align-self: center;
          }
          .description-section {
            width: 80%;
            align-self: center;
          }
        }
      `}</style>
    </>
  );
}
