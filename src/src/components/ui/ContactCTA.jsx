import SectionTitle from "../../common/SectionTitle";
import Button from "../../common/Button";

function ContactCTA() {
  return (
    <section className="contact-cta">
      <div className="container">

        <SectionTitle
          title="Let's Build Something Together"
          description="I'm currently looking for internship opportunities, freelance projects, and collaborations. If you have an idea or an opportunity, I'd love to hear from you."
        />

        <div className="contact-cta-actions">

          <Button to="/contact">
            Contact Me
          </Button>

          <Button
            to="/cv.pdf"
            variant="secondary"
          >
            Download CV
          </Button>

        </div>

      </div>
    </section>
  );
}

export default ContactCTA;