import { servicesOffered } from "@/data/servicesOffered";
import Service from "@/components/service";

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

        {servicesOffered.map((service, index) => (
          <Service key={index} {...service} />
        ))}
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
      `}</style>
    </>
  );
}
