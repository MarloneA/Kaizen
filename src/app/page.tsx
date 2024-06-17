import NavBar from "@/components/navbar";
import { Button } from "@/components/_ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/_ui/card";
import { pricingCards } from "@/constants/landing-page";
import clsx from "clsx";
import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { H1, H2, Small, P } from "@/components/_ui/typography";
import Feature from "@/components/features";
import Hero from "@/components/cta-landingpage";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";
import { Badge } from "@/components/_ui/badge";

export default async function Home() {
  const techStack = [
    {
      link: "https://react.dev",
      src: "/icons/react-icon.png",
      name: "Comments",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
          />
        </svg>
      ),
    },
    {
      link: "https://react.dev",
      src: "/icons/typescript-icon.png",
      name: "Screenshots",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
          />
        </svg>
      ),
    },
    {
      link: "https://prisma.io",
      src: "/icons/prisma-icon.png",
      name: "Issue Tracking",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z"
          />
        </svg>
      ),
    },
    {
      link: "https://nextjs.org",
      src: "/icons/next-js.svg",
      name: "Custom workflows",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"
          />
        </svg>
      ),
    },
    {
      link: "https://tailwindcss.com",
      src: "/icons/tailwind-icon.png",
      name: "Videos",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M12 18.75H4.5a2.25 2.25 0 0 1-2.25-2.25V9m12.841 9.091L16.5 19.5m-1.409-1.409c.407-.407.659-.97.659-1.591v-9a2.25 2.25 0 0 0-2.25-2.25h-9c-.621 0-1.184.252-1.591.659m12.182 12.182L2.909 5.909M1.5 4.5l1.409 1.409"
          />
        </svg>
      ),
    },
    {
      link: "https://tailwindcss.com",
      src: "/icons/stripe-icon.png",
      name: "Audit Log",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z"
          />
        </svg>
      ),
    },
  ];

  const colorVariants = {
    orange: "group-hover:bg-orange-500",
    green: "group-hover:bg-emerald-500",
    blue: "group-hover:bg-cyan-500",
    yellow: "group-hover:bg-yellow-500",
    indigo: "group-hover:bg-indigo-500",
    purple: "group-hover:bg-purple-500",
  };

  return (
    <main className="">
      <NavBar />
      <section>
        <div className="flex items-center justify-center flex-col mt-[80px] gap-8 ">
          <Badge className="not-prose w-fit" variant="outline">
            <Link
              className="group flex items-center gap-1"
              href="#"
              target="_blank"
            >
              check out the docs
              <ArrowRight className="w-4 transition-all group-hover:-rotate-45" />
            </Link>
          </Badge>
          <H1 className="text-center font-display inline-flex flex-col gap-1 bg-gradient-to-r from-20% bg-clip-text pb-1 text-4xl font-black leading-none text-transparent transition sm:text-5xl md:text-6xl lg:text-6xl xl:text-6xl dark:from-slate-300 dark:to-slate-200 from-black to-slate-600 from-black to-slate-600">
            <div className="hidden md:block">
              <span>QA Reporting tools</span>
              <div>
                <div>for software companies </div>
              </div>
              <div className="flex flex-col items-center justify-center overflow-hidden group">
                <div className="relative h-5 w-full">
                  <div className="absolute inset-x-0 top-0 h-[2px] w-3/4 bg-gradient-to-r from-transparent to-transparent blur-sm via-orange-500"></div>
                  <div className="absolute inset-x-1/4 top-0 h-px w-3/4 bg-gradient-to-r from-transparent to-transparent via-orange-500"></div>
                  <div className="absolute inset-x-1/4 top-0 h-[5px] w-2/4 bg-gradient-to-r from-transparent to-transparent blur-sm via-orange-400"></div>
                  <div className="absolute inset-x-1/4 top-0 h-px w-1/4 bg-gradient-to-r from-transparent to-transparent via-orange-400"></div>
                </div>
              </div>
            </div>
          </H1>
          <P>
            Kaizen makes it easier for teams to collect and resolve bugs easily
            with one tool.
            <br /> with features like custom workflows and instant bug reporting
          </P>
          <Link
            href="/dashboard"
            className="font-bold text-black p-4 rounded-md hover:text-black bg-orange-500"
          >
            Get Started For Free
          </Link>
          <div className="group flex w-full items-center justify-center">
            <div
              className={`absolute left-1/2 top-1/2 -z-10 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 opacity-10 blur-[100px] bg-red-500`}
            ></div>
            {techStack.map((stack, index) => {
              const { link, src, name, svg } = stack;
              return (
                <div
                  key={index}
                  className=" m-2 w-40 flex cursor-default flex-col items-center justify-center rounded-lg bg-slate-900/5 p-2 align-middle backdrop-blur transition hover:scale-[1.02] hover:bg-slate-900/10 sm:p-4 md:p-6 dark:bg-white/5 dark:hover:bg-white/10"
                >
                  <div>
                    <div>
                      <div className="flex justify-center m-1 ">{svg}</div>
                      <div className="text-muted-foreground mx-auto hidden justify-center truncate text-center text-xs font-medium opacity-50 sm:flex">
                        {name}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <Image
            src="/images/landing.png"
            width={1200}
            height={100}
            alt="Logo"
            className=" object-contain border-black border-4 m-10 rounded-lg"
          />
        </div>
      </section>
      <section
        id="about"
        className="flex justify-center items-center flex-col gap-4 mt-10"
      >
        <H2>Features</H2>
        <P>
          Add Kaizen to your app in just a few minutes and collect feedback with
          built in tools
          <br />
          if {" you're"} not ready to commit you can get started for free.
        </P>
      </section>
      <Feature />

      <section
        id="pricing"
        className="flex justify-center items-center flex-col gap-4 mt-10"
      >
        <H2>Choose your plan</H2>
        <P>
          Our straightforward pricing plans are tailored to meet your needs. If
          <br />
          {" you're"} not ready to commit you can get started for free.
        </P>
      </section>
      <div className="flex justify-center gap-4 flex-wrap mt-6">
        {pricingCards.map((card) => (
          <Card
            key={card.title}
            className={clsx(
              "w-[300px] flex flex-col justify-between bg-[#00000052]",
              {
                "border-2 border-primary": card.title === "Unlimited",
              }
            )}
          >
            <CardHeader>
              <CardTitle className="text-orange">{card.title}</CardTitle>
              <CardDescription>
                {pricingCards.find((c) => c.title === card.title)?.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <span className="text-4xl font-bold">{card.price}</span>
              <span className="text-muted-foreground">
                <span>per user/ month</span>
              </span>
            </CardContent>
            <CardFooter className="flex flex-col items-start gap-4">
              <div>
                {card.features.map((feature) => (
                  <div key={feature} className="flex gap-2">
                    <Check />
                    <p>{feature}</p>
                  </div>
                ))}
              </div>
              <Link
                href={`/dashbord?plan=${card.title}`}
                className="bg-black border-orange border-2 p-2 w-full text-white text-center font-bold rounded-md"
              >
                Get Started
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
      <section
        id="faq"
        className="flex justify-center items-center flex-col gap-4 mt-10"
      >
        <H2>Have any Questions?</H2>
        <P>
          Our straightforward pricing plans are tailored to meet your needs. If
          <br />
          {" you're"} not ready to commit you can get started for free.
        </P>
      </section>
      <FAQ />
      <Hero />
      <Footer />
    </main>
  );
}
