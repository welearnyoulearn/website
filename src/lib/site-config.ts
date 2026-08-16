export const siteConfig = {
  name: "WeLearnYouLearn",
  shortName: "WLYL",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://about.welearnyoulearn.com",
  description:
    "One platform for school admins, teachers, students and parents. Built for CBSE and State Board schools across India.",
  keywords: [
    "school management software",
    "school management system India",
    "CBSE school software",
    "school ERP",
    "fee management software for schools",
    "expense management software for schools",
    "syllabus tracking software",
    "school attendance system",
    "school portal software",
  ],
};

export type SiteConfig = typeof siteConfig;
