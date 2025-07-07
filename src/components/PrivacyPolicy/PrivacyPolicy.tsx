import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface SentenceProps {
  children: React.ReactNode;
  weight?: number;
  color?: string;
}

const Sentence = ({
  children,
  weight = 400,
  color = "#292C2E",
}: SentenceProps) => (
  <>
    <div
      className={cn("font-inter text-base leading-[150%]")}
      style={{ color: color, fontWeight: weight }}
    >
      {children}
    </div>
    <br />
  </>
);

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto max-w-[1250px] pt-35 pb-10 max-xl:px-6 sm:pb-20 md:pt-45">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <h2 className="font-montserrat text-center text-2xl leading-[120%] font-semibold tracking-[-1%] text-[#1A1C1E]">
            Layervibe Terms of Use
          </h2>
          <p className="font-inter text-center text-base leading-[150%] font-normal text-[#292C2E]">
            Last Revised on Jun 29, 2025
          </p>
        </div>

        <div className="mx-auto flex max-w-[700px] flex-col">
          <Sentence>
            Welcome to the Terms of Service (these “Terms”) for the website,
            www.layervibe.io (the “Website”). (“Company”, “we” or “us”). The
            Website, Playground and Flux, and any content, tools, features and
            functionality offered on or through our Website, Layervibe are
            collectively referred in these Terms as the “Services”.
          </Sentence>

          <Sentence>
            These Terms govern your access to and use of the Services and may
            apply even if you have an agreement with us for other services we
            may provide. Please read these Terms carefully, as they include
            important information about your legal rights. By accessing and/or
            using the Services, you are agreeing to these Terms. If you do not
            understand or agree to these Terms, please do not use the Services.
          </Sentence>

          <Sentence>
            For purposes of these Terms, “you” and “your” means you as the user
            of the Services. If you use the Services on behalf of a company or
            other entity then “you” includes you and that entity, and you
            represent and warrant that (a) you are an authorized representative
            of the entity with the authority to bind the entity to these Terms,
            and (b) you agree to these Terms on the entity’s behalf.
          </Sentence>

          <Sentence weight={500} color="#131416">
            SECTION 7 CONTAINS AN ARBITRATION CLAUSE AND CLASS ACTION WAIVER. BY
            AGREEING TO THESE TERMS, YOU AGREE (A) TO RESOLVE ALL DISPUTES (WITH
            LIMITED EXCEPTION) RELATED TO THE COMPANY’S SERVICES AND/OR PRODUCTS
            THROUGH BINDING INDIVIDUAL ARBITRATION, WHICH MEANS THAT YOU WAIVE
            ANY RIGHT TO HAVE THOSE DISPUTES DECIDED BY A JUDGE OR JURY, AND (B)
            TO WAIVE YOUR RIGHT TO PARTICIPATE IN CLASS ACTIONS, CLASS
            ARBITRATIONS, OR REPRESENTATIVE ACTIONS, AS SET FORTH BELOW. YOU
            HAVE THE RIGHT TO OPT-OUT OF THE ARBITRATION CLAUSE AND THE CLASS
            ACTION WAIVER AS EXPLAINED IN SECTION 7.
          </Sentence>

          <Sentence>
            How to Contact Us. You may contact us regarding the Services or
            these Terms at our email{" "}
            <Link
              href={"mailto:legal@layervibe.io"}
              target="_blank"
              className="cursor-pointer hover:underline hover:opacity-90"
            >
              legal@layervibe.io
            </Link>
          </Sentence>

          <Sentence weight={600} color="#131416">
            1. The services
          </Sentence>

          <Sentence>Input and Output.</Sentence>

          <Sentence>
            As a part of the Services, you can submit text and image prompts and
            other prompts or input into or for the Services, including in
            connection with fine-tuning applicable Flux AI model(s) (“Input”),
            and the Services will use artificial intelligence tools and
            functionalities to generate new content based on your Input
            (“Output”). We claim no ownership rights in and to the Outputs, and
            you may use the Output for your own personal or commercial purposes,
            subject to any restrictions set forth herein. For the avoidance of
            doubt, Outputs do not include any components of the Flux AI
            model(s), such as its weights or parameters, fine-tuned weights from
            Inputs or any other portions of the Services. You agree that we may
            remove, prevent access to, or disable any Output or your access to
            all or part of the Services, at any time for any or no reason,
            including if we determine in our sole discretion that such Output
            infringes another party’s intellectual property rights or violates
            any applicable law or is Objectionable (as defined herein).
          </Sentence>

          <Sentence>
            You may not direct the Services to generate any Output in violation
            of any applicable intellectual property right, contractual
            restriction or other law. You are solely responsible for the Outputs
            you generate and their subsequent uses in accordance with these
            Terms. You may not use Output to train, distill or fine tune any
            other AI models that compete with the Flux AI model(s). You
            acknowledge that due to the nature of generative artificial
            intelligence tools, other users of the Services may create and use
            their own Output that is similar or the same as your Output, such as
            because the same or similar Input was provided, and you agree that
            such other users can use their own individually created Output as
            permitted by these Terms.
          </Sentence>

          <Sentence>
            By submitting any Input through the Services, you represent that you
            have obtained all rights, licenses, consents, permissions, power
            and/or authority necessary to submit and use (and allow us to use)
            such Input in connection with the Services. You represent and
            warrant that your submission of an Input in connection with your use
            of the Services, including to generate Output, will not breach any
            law or any third party’s rights, terms and conditions associated
            with such Input.
          </Sentence>

          <Sentence>
            You grant us a nonexclusive, royalty-free, transferable,
            sub-licensable, worldwide, perpetual and irrevocable license to
            access, use, host, cache, store, reproduce, transmit, display,
            publish, distribute, and modify any Input and Output to provide,
            develop, train and improve our technologies, products and services,
            including the Services, and to otherwise permit access to or
            disclose your Input or Output to third parties as needed to
            accomplish the foregoing or as necessary to comply with our legal
            obligations.
          </Sentence>

          <Sentence>
            Eligibility. You must be 13 years of age or older to use the
            Services. By using the Services, you represent and warrant that you
            meet these requirements.
          </Sentence>

          <Sentence weight={600} color="#131416">
            1. 2. Our Privacy Policy and Intellectual Property Policy
          </Sentence>

          <Sentence>
            Privacy Policy. Our Privacy Policy describes how we handle the
            information you provide to us when you use the Services. For an
            explanation of our privacy practices, please visit our Privacy
            Policy located at{" "}
            <Link
              target="_blank"
              className="cursor-pointer hover:underline hover:opacity-90"
              href={"https://bfl.ai/legal/privacy-policy"}
            >
              https://bfl.ai/legal/privacy-policy
            </Link>
            .
          </Sentence>

          <Sentence>
            Intellectual Property Policy. Our Intellectual Property Policy,
            located at{" "}
            <Link
              target="_blank"
              className="cursor-pointer hover:underline hover:opacity-90"
              href={"https://bfl.ai/legal/intellectual-property-policy/"}
            >
              https://bfl.ai/legal/intellectual-property-policy/
            </Link>
            , which we may revise from time to time, is incorporated by
            reference into these Terms and describes how we handle claims of
            intellectual property infringement with respect to the Services.
          </Sentence>

          <Sentence>
            Usage Policy. Our Usage Policy, located at{" "}
            <Link
              target="_blank"
              className="cursor-pointer hover:underline hover:opacity-90"
              href={"https://bfl.ai/legal/usage-policy"}
            >
              https://bfl.ai/legal/usage-policy
            </Link>
            , which we may revise from time to time, is incorporated by
            reference into these Terms and further describes your permitted uses
            of the Services.
          </Sentence>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
