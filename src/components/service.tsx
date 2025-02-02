import Link from "next/link";

interface ServiceProps {
  title: string;
  description: string;
  imageUrl?: string;
  basePrice: string;
}

export default function Service({
  title,
  description,
  imageUrl = "https://picsum.photos/200",
  basePrice,
}: ServiceProps) {
  return (
    <>
      <div className="service">
        <h3 className="title">{title}</h3>
        <div
          className="image"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <p>{description}</p>
        <div className="estimate">
          <h5 className="base-price">Base Price</h5>
          <p>{basePrice}</p>
        </div>
        <Link href="/quote">
          <p className="quote">Get Quote</p>
        </Link>
      </div>

      {/*STYLESHEET*/}
      <style jsx>{`
        .title {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          border: 1px dashed black;
          width: 70%;
          text-align: center;
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
          background-size: cover;
          background-position: center;
          height: 400px;
          width: 400px;
          margin: auto;
          margin-bottom: 2rem;
        }
        .estimate {
          align-self: center;
          text-align: center;
        }
        .base-price {
          margin-top: 1rem;
          margin-bottom: 0.5rem;
          font-size: 1.5rem;
          text-decoration: underline;
        }
        .quote {
          margin-top: 1rem;
          font-size: 1.25rem;
          text-decoration: underline;
          cursor: pointer;
          color: blue;
        }
        /* media query for desktop */
        @media (min-width: 1024px) {
          div {
          }
        }
      `}</style>
    </>
  );
}
