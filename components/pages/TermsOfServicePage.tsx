import LegalPage from "./LegalPage";
import { site } from "@/lib/site";

export default function TermsOfServicePage() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="September 2026"
      intro={`These Terms of Service govern your use of ${site.domain} and any quote, purchase, or pickup arrangement made through this site. By using this site, you agree to these terms.`}
      sections={[
        {
          heading: "Quotes and Offers",
          body: [
            "Cash offers provided over the phone or through our quote form are estimates based on the information you provide. Final offers are confirmed once the vehicle's condition is verified at pickup.",
            "We reserve the right to adjust an offer if the vehicle's condition materially differs from what was described.",
          ],
        },
        {
          heading: "Vehicle Ownership",
          body: [
            "By requesting a sale, you confirm that you are the legal owner of the vehicle, or are authorized to sell it on the owner's behalf, and that the vehicle is free of any undisclosed liens.",
          ],
        },
        {
          heading: "Pickup and Payment",
          body: [
            "Towing and pickup are provided free of charge as part of an accepted offer. Payment is issued at the time of pickup once the vehicle and paperwork are confirmed.",
          ],
        },
        {
          heading: "Limitation of Liability",
          body: [
            `${site.domain} and its affiliated buying partners are not liable for indirect or incidental damages arising from the use of this site or the vehicle sale process, to the fullest extent permitted by law.`,
          ],
        },
        {
          heading: "Changes to These Terms",
          body: [
            "We may update these Terms of Service from time to time. Continued use of the site after changes are posted constitutes acceptance of the updated terms.",
          ],
        },
        {
          heading: "Contact Us",
          body: [
            `Questions about these terms can be sent through our Contact Us page or by calling ${site.phone}.`,
          ],
        },
      ]}
    />
  );
}
