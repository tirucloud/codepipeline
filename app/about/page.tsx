import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Joseph Cloud Labs | Cloud Consulting & SaaS Solutions",
  description: "Learn more about JCL, our mission, and how we empower businesses with expert cloud consulting, automation, and global support.",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Joseph Cloud Labs"
        description="Discover our story and how JCL can help organizations succeed in the cloud with innovative solutions and expert guidance."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
