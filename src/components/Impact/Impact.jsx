import SectionContainer from "../globals/SectionContainer";
import {
  BodyLarge,
  BodyMedium,
  BodySmall,
  HeadingLarge,
  HeadingXLarge,
} from "../UI/Typography";

export default function Impact() {
  return (
    <SectionContainer className="w-screen flex flex-col items-center gap-2 text-center !mb-0">
      <div className="flex flex-col items-center gap-0.5">
        <BodySmall
          className={"uppercase text-primary-800 text-center tracking-widest"}
          weight="semibold"
        >
          &mdash; Our Impact
        </BodySmall>
        <HeadingXLarge className={"text-neutral-1100"} weight="medium">
          Our Impact
        </HeadingXLarge>
      </div>
      <BodyLarge className={"text-neutral-900"}>
        We strive to ensure that we use our abilities to create meaningful
        impacts
      </BodyLarge>

      <div className="w-screen py-8 bg-primary-100 mt-4">
        <div className="w-full md:w-3/5 grid grid-cols-2 md:grid-cols-4 gap-x-2 md:gap-x-6 gap-y-6 px-6 md:px-0 mx-auto">
          <div className="col-span-1 flex flex-col items-center gap-1">
            <HeadingLarge
              as="span"
              className={"text-primary-800"}
              weight="bold"
            >
              4.9/5
            </HeadingLarge>
            <BodyMedium className={"text-neutral-900"}>
              Google Ratings
            </BodyMedium>
          </div>

          <div className="col-span-1 flex flex-col items-center gap-1">
            <HeadingLarge
              as="span"
              className={"text-primary-800"}
              weight="bold"
            >
              30K+
            </HeadingLarge>
            <BodyMedium className={"text-neutral-900"}>
              Lives Insured
            </BodyMedium>
          </div>

          <div className="col-span-1 flex flex-col items-center gap-1">
            <HeadingLarge
              as="span"
              className={"text-primary-800"}
              weight="bold"
            >
              Rs. 1.5 Cr+
            </HeadingLarge>
            <BodyMedium className={"text-neutral-900"}>
              Claims Filed in FY26
            </BodyMedium>
          </div>

          <div className="col-span-1 flex flex-col items-center gap-1">
            <HeadingLarge
              as="span"
              className={"text-primary-800"}
              weight="bold"
            >
              IRDAI
            </HeadingLarge>
            <BodyMedium className={"text-neutral-900"}>
              License No. 756
            </BodyMedium>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
