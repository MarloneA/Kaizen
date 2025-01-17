// Layout
import * as Layout from "@/components/_ui/layout";
import Balancer from "react-wrap-balancer";
import Link from "next/link";

// Icons
import { Coins, ArrowRight } from "lucide-react";

type FeatureText = {
  icon: JSX.Element;
  title: string;
  description: string;
  href?: string;
  cta?: string;
};

const featureText: FeatureText[] = [
  {
    icon: <Coins className="h-6 w-6" />,
    title: "Comments and Feedback",
    href: "/",
    description:
      "comment directly on the web elements with a discrepancy to get live feedback on the app.",
    cta: "Learn More",
  },
  {
    icon: <Coins className="h-6 w-6" />,
    title: "Screenshots and Videos",
    href: "/",
    description:
      "Record and capture snippets of your app to provide more context to the underlying problem.",
    cta: "Learn More",
  },
  {
    icon: <Coins className="h-6 w-6" />,
    title: "Issue tracking",
    href: "/",
    description:
      "instantly generate tickets on popular project management software like github and attlassian.",
    cta: "Learn More",
  },
  {
    icon: <Coins className="h-6 w-6" />,
    title: "Custom workflows",
    href: "/",
    description:
      "Build custom workflows for different teams based on a teams unique working style and include integrations accross project mangement software.",
    cta: "Learn More",
  },
];

const singleFeatureText: FeatureText[] = [
  {
    icon: <Coins className="h-6 w-6" />,
    title: "Integrations",
    href: "/",
    description:
      "Link different apps that you use in your organization such as slack, github, bitbucket and get instant feedback.",
    cta: "Learn More",
  },
];

const Feature = () => {
  return (
    <Layout.Section>
      <Layout.Container className="not-prose">
        <div className="flex flex-col gap-6">
          <h3 className="text-4xl">
            <Balancer>Build your Saas</Balancer>
          </h3>
          <h4 className="text-2xl font-light opacity-70">
            <Balancer>What to expect when building with Saas Kit</Balancer>
          </h4>

          <div className="mt-6 grid gap-6 md:mt-12 md:grid-cols-2">
            {featureText.map(
              ({ icon, title, description, href, cta }, index) => (
                <Link
                  href={`${href}`}
                  className="flex flex-col justify-between gap-6 rounded-lg p-6 transition-all hover:-mt-2 hover:mb-2 bg-[#00000052]"
                  key={index}
                >
                  <div className="grid gap-4">
                    {icon}
                    <h4 className="text-primary text-xl">{title}</h4>
                    <p className="text-base opacity-75">{description}</p>
                  </div>
                  {cta && (
                    <div className="flex h-fit items-center text-sm font-semibold">
                      <p>{cta}</p> <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  )}
                </Link>
              )
            )}
          </div>
          <div>
            {singleFeatureText.map(
              ({ icon, title, description, href, cta }, index) => (
                <Link
                  href={`${href}`}
                  className="flex flex-col bg-muted/25 justify-between gap-6 rounded-lg p-6 transition-all hover:-mt-2 hover:mb-2"
                  key={index}
                >
                  <div className="grid gap-4">
                    {icon}
                    <h4 className="text-primary text-xl">{title}</h4>
                    <p className="text-base opacity-75">{description}</p>
                  </div>
                  {cta && (
                    <div className="flex h-fit items-center text-sm font-semibold">
                      <p>{cta}</p> <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  )}
                </Link>
              )
            )}
          </div>
        </div>
      </Layout.Container>
    </Layout.Section>
  );
};

export default Feature;
