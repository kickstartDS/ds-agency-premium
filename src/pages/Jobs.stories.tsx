import { Header } from "../components/header/HeaderComponent";
import { headerProps } from "../components/header/Header.stories";
import { Footer } from "../components/footer/FooterComponent";
import { footerProps } from "../components/footer/Footer.stories";
import { Section } from "../components/section/SectionComponent";
import { ImageText } from "../components/image-text/ImageTextComponent";
import { Hero } from "../components/hero/HeroComponent";
import { Stats } from "../components/stats/StatsComponent";
import { Testimonials } from "../components/testimonials/TestimonialsComponent";
import { TeaserCard } from "../components/teaser-card/TeaserCardComponent";
import { Faq } from "../components/faq/FaqComponent";
import { Contact } from "../components/contact/ContactComponent";

const Page = () => (
  <>
    <Header {...headerProps} />

    <Section width="full" spaceAfter="none" spaceBefore="none">
      <Hero
        image={{
          srcMobile:
            "img/colleagues-work-office-using-computers-looking-aside.png",
        }}
        textPosition="offset"
      />
    </Section>
    <Section
      headline={{
        text: "Job Opportunities at Systemics",
        sub: "Explore our current job openings",
      }}
    >
      <ImageText
        text={`Join our team to build innovative software solutions. We are looking for passionate individuals to help us shape the future of technology.
Explore our current job openings and find the perfect fit for your skills and career goals.
Whether you are a seasoned professional or just starting your career, we have opportunities for you to grow and thrive in a dynamic work environment.
At Systemics, we value creativity, collaboration, and a commitment to excellence. Be part of a team that is dedicated to making a difference in the tech industry.`}
        image={{
          src: "img/people-brainstorming-work-meeting.png",
          alt: "Software Engineer",
        }}
        layout={"beside-right"}
      />
    </Section>
    <Section>
      <Testimonials
        layout="slider"
        quoteSigns="normal"
        testimonial={[
          {
            image: {
              alt: "Alt Text Customer 1",
              src: "img/people/author-emily.png",
            },
            name: "Emily Johnson",
            quote:
              "Working with Systemics technology has been a game-changer for our brand. Their design system expertise brought harmony to our user experiences, making our digital platforms not just functional, but truly captivating.",
            title: "Chief Marketing Officer at TechFusion Enterprises",
          },
          {
            image: {
              alt: "Alt Text Customer 2",
              src: "img/people/author-john.png",
            },
            name: "John Smith",
            quote:
              "Systemics's design system transformed our development process. The consistency it introduced across our platforms not only saved us time but also boosted our brand's credibility. It's a partnership that continues to pay dividends.",
            title: "Director of Digital Strategy at EcoTech Solutions",
          },
          {
            image: {
              alt: "Alt Text Customer 3",
              src: "img/people/author-alex.png",
            },
            name: "Alex Chen",
            quote:
              "As a startup, we needed to hit the ground running. Systemics's approach streamlined our dev and design process, allowing us to scale faster and focus on what truly matters - building a product that stands out in the market.",
            title: "CEO of LaunchPad Innovations",
          },
        ]}
      />
    </Section>
    <Section width="wide">
      <Stats
        stat={[
          {
            title: "Offices Worldwide",
            number: "5",
          },
          {
            title: "Employees in our Team",
            number: "150+",
          },
          {
            title: "Years in Business",
            number: "10+",
          },
          {
            title: "Projects Completed",
            number: "500+",
          },
        ]}
      />
    </Section>
    <Section
      headline={{ text: "Current Job Openings" }}
      content={{
        mode: "list",
      }}
    >
      <TeaserCard
        layout="row"
        headline="Software Engineer"
        text="Join our team as a Software Engineer and help us build innovative solutions."
        url={"#"}
        button={{
          label: "See opening",
        }}
      />
      <TeaserCard
        layout="row"
        headline="Product Manager"
        text="We are looking for a Product Manager to drive our product strategy."
        url={"#"}
        button={{
          label: "See opening",
        }}
      />
      <TeaserCard
        layout="row"
        headline="UX Designer"
        text="Apply now for the UX Designer position and shape user experiences."
        url={"#"}
        button={{
          label: "See opening",
        }}
      />
      <TeaserCard
        layout="row"
        headline="Software Engineer"
        text="Join our team as a Software Engineer and help us build innovative solutions."
        url={"#"}
        button={{
          label: "See opening",
        }}
      />
      <TeaserCard
        layout="row"
        headline="Product Manager"
        text="We are looking for a Product Manager to drive our product strategy."
        url={"#"}
        button={{
          label: "See opening",
        }}
      />
    </Section>
    <Section headline={{ text: "Frequently Asked Questions" }}>
      <Faq
        questions={[
          {
            question: "What is the application process?",
            answer:
              "To apply, please submit your resume and cover letter through our careers page. Our team will review your application and contact you if you are selected for an interview.",
          },
          {
            question: "What benefits do you offer?",
            answer:
              "We offer a comprehensive benefits package including health insurance, retirement plans, and professional development opportunities.",
          },
          {
            question: "How can I prepare for the interview?",
            answer:
              "Research our company, understand our products, and be ready to discuss your relevant experience and how it aligns with the role you are applying for.",
          },
          {
            question: "What is the company culture like?",
            answer:
              "Our company culture is collaborative, innovative, and focused on continuous improvement. We value diversity and inclusion and strive to create a supportive work environment.",
          },
          {
            question: "Are there opportunities for career growth?",
            answer:
              "Yes, we encourage career growth and provide various opportunities for professional development, including training programs, mentorship, and internal promotions.",
          },
        ]}
      />
    </Section>
    <Section headline={{ text: "Get in Touch" }}>
      <Contact
        image={{
          alt: "Picture of Isabella Doe",
          aspectRatio: "wide",
          fullWidth: true,
          src: "img/people/contact-jim.png",
        }}
        links={[
          {
            ariaLabel: "Link to Isabella Doe's social media profile",
            icon: "email",
            label: "jim.johnsson@mail.com",
            newTab: false,
            url: "mailto:mail@example.com",
          },
          {
            ariaLabel: "Link to Isabella Doe's social media profile",
            icon: "facebook",
            label: "@jim_johnsson",
            newTab: false,
            url: "#",
          },
        ]}
        copy="For any inquiries about job openings or the application process, feel free to reach out to our Head of Recruitment, Jim Johnsson."
        subtitle="Head of Recruitment"
        title="Jim Johnsson"
      />
    </Section>
    <Footer {...footerProps} />
  </>
);

export default {
  title: "Page Archetypes/Jobs",
  render: Page,
  parameters: {
    layout: "fullscreen",
  },
};

export const Jobs = {};
