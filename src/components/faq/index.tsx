import * as Craft from "@/components/_ui/layout";

import { ArrowUpRight } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../_ui/accordion";

type FAQItem = {
  question: string;
  answer: string;
  link?: string;
};

const content: FAQItem[] = [
  {
    question: "Can Kaisen be used accross different teams?",
    answer: "Yes Kaisen supports multiple workflows accross different teams",
  },
  {
    question: "Can Kaisen be used as a monitoring tool?",
    answer: "No, right now Kaisen is only used for bug reporting.",
  },
  {
    question: "Do i need to install Kaisen in my computer?",
    answer:
      "Kaisen works with a browser extension and can only be used on the page permitted by the user.",
  },
  {
    question: "How many javasscript frameworks does kaisen support?",
    answer:
      "We are constantly releasing updates to the code please refer to the changelog to see if your framework of choice is supported.",
    link: "#",
  },
];

const FAQ = () => {
  return (
    <Craft.Section>
      <Craft.Container>
        <h3 className="!mt-0">Frequently Asked Questions</h3>
        <h4 className="text-muted-foreground">
          Can&apos;t find the answer you&apos;re looking for? Reach out to our
          customer support team.
        </h4>
        <div className="mt-4 md:mt-8 not-prose flex flex-col gap-4">
          {content.map((item, index) => (
            <Accordion key={index} type="single" collapsible>
              <AccordionItem
                value={item.question}
                className="hover:bg-muted/50 transition-all border px-4 bg-muted/20 rounded-md"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base md:w-3/4">
                  {item.answer}
                  {item.link && (
                    <a
                      href={item.link}
                      className="opacity-60 w-full mt-2 hover:opacity-100 transition-all flex items-center"
                    >
                      View Changelog <ArrowUpRight className="ml-1" size="16" />
                    </a>
                  )}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </Craft.Container>
    </Craft.Section>
  );
};

export default FAQ;
