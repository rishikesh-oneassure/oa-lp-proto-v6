import SectionContainer from "@/components/globals/SectionContainer";
import { BodyMedium, BodySmall } from "@/components/UI/Typography";
import { complianceNote } from "@/components/Footer/footer.config";

const FooterAbout = () => {
  return (
    <SectionContainer className="!px-6 md:px-0!  !mb-0">
      <BodyMedium className="text-neutral-1100  text-center" weight="regular">
        {complianceNote}
      </BodyMedium>
    </SectionContainer>
  );
};

export default FooterAbout;
