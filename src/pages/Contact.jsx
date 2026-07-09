import SectionTitle from "../common/SectionTitle";
import ContactCTA from "../components/ui/ContactCTA";

function Contact() {
  return (
    <section className="page-section">
      <div className="container">

        <SectionTitle
          title="Contact"
          description="Let's discuss your project, internship opportunity or collaboration."
        />

        <ContactCTA />

      </div>
    </section>
  );
}

export default Contact;