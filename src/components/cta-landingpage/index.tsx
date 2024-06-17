import { Section, Container } from "@/components/_ui/layout";
import { ArrowRight } from "lucide-react";
import { Button } from "../_ui/button";
import { Badge } from "../_ui/badge";

import Link from "next/link";

const Hero = () => {
  return (
    <Section className="relative backdrop-blur-sm">
      <Container className="flex flex-col gap-8">
        <Badge className="not-prose w-fit" variant="outline">
          <Link className="group flex items-center gap-1" href="/#pricing">
            view docs
            <ArrowRight className="w-4 transition-all group-hover:-rotate-45" />
          </Link>
        </Badge>
        <h1 className="!mb-0">You deserve better feedback</h1>
        <h3 className="rounded-md border bg-muted/50 p-4 text-muted-foreground">
          Don't leave your product Quality to chance, try kaizen today and see
          how well it fits into your organizations workflow. Your entire
          organization can turn into bug reporters in a matter of minutes and
          you will be able to close your feedback loop in a matter of minutes
          not days
        </h3>

        <div className="flex gap-4">
          <Button>Get Started for free</Button>
          <Button variant="outline">Checkout the demo</Button>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
