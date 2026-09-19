import LegalPage from "./LegalPage";
import { site } from "@/lib/site";

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="September 2026"
      intro={`This Privacy Policy explains how ${site.domain} ("we", "us") collects, uses, and protects the information you share with us when you request a quote, contact us, or otherwise use this website.`}
      sections={[
        {
          heading: "Information We Collect",
          body: [
            "When you request a quote or contact us, we collect information such as your name, phone number, email address, ZIP code, and details about your vehicle (year, make, model, condition, and title status).",
            "We may also collect standard technical information automatically, such as your browser type, device, and pages visited, to help us improve the site.",
          ],
        },
        {
          heading: "How We Use Your Information",
          body: [
            "We use the information you provide to prepare a cash offer, contact you about your vehicle, schedule pickup, and process payment. We do not sell your personal information to third parties.",
            "We may share your details with a local buying partner in your area solely for the purpose of completing your vehicle purchase and pickup.",
          ],
        },
        {
          heading: "Cookies",
          body: [
            "This site may use cookies or similar technologies to remember your preferences and understand how visitors use the site. You can disable cookies in your browser settings, though some features may not work as intended.",
          ],
        },
        {
          heading: "Data Security",
          body: [
            "We take reasonable steps to protect the information you share with us. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.",
          ],
        },
        {
          heading: "Your Choices",
          body: [
            "You may ask us to update or delete the personal information we hold about you at any time by contacting us through the Contact Us page.",
          ],
        },
        {
          heading: "Contact Us",
          body: [
            `If you have questions about this Privacy Policy, reach out through our Contact Us page or call ${site.phone}.`,
          ],
        },
      ]}
    />
  );
}
