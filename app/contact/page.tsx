import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Joseph Cloud Labs | Cloud Consulting & Support",
  description: "Get in touch with JCL for expert cloud consulting, support, and business inquiries. Our team is ready to help you accelerate your cloud journey.",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Joseph Cloud Labs"
        description="Reach out for cloud consulting, support, or to discuss your next project. The JCL team is here to help you succeed in the cloud."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
