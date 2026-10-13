import {
  BodyMedium,
  BodySmall,
  HeadingSmall,
} from "@/components/UI/Typography";
import CustomLink from "@/components/globals/CustomLink";
import {
  complianceNote,
  footerBrand,
  footerNav,
} from "@/components/Footer/footer.config";
import SectionContainer from "@/components/globals/SectionContainer";
import FooterAbout from "./FooterBottom";
import { useSubscribeDesktopLayout } from "@/hooks/useSubscribeDesktopLayout";

const ContactUs = ({ className }) => {
  return (
    <div className={` ${className} `}>
      <HeadingSmall weight="bold" className="text-neutral-1100 mb-3">
        Contact Us
      </HeadingSmall>
      <div>
        <BodySmall className="text-neutral-1100">
          Prost Technologies Private Limited
        </BodySmall>
        <BodySmall className="text-neutral-1100">
          CIN- U74999KA2019PTC128430
        </BodySmall>
        <BodySmall className="text-neutral-1100">
          Address - 1st Floor, Gopala Krishna
          <br /> Complex, Residency Road,
          <br /> Bengaluru, Karnataka, India -
          <br /> 560025
        </BodySmall>
        <div className="mt-3">
          <span className="flex gap-1">
            <BodySmall weight="medium" className="text-neutral-1100">
              Phone -
            </BodySmall>
            <BodySmall className="text-neutral-1100">+91 6364334343</BodySmall>
          </span>
          <span className="flex gap-1">
            <BodySmall weight="medium" className="text-neutral-1100">
              Mail -
            </BodySmall>
            <BodySmall className="text-neutral-1100">
              support@oneassure.in
            </BodySmall>
          </span>
        </div>
      </div>
    </div>
  );
};

const FooterTopSection = ({ utm }) => {
  const insuranceGroup = footerNav.find((group) => group.title === "Insurance");
  const companyGroup = footerNav.find((group) => group.title === "Company");
  const policyGroup = footerNav.find((group) => group.title === "Policy");
  const isDesktop = useSubscribeDesktopLayout();

  return (
    <SectionContainer className="!px-0 !mb-6 md:!mb-10">
      <div className="w-full flex flex-col items-center md:items-stretch md:flex-row md:justify-between gap-16 md:gap-32 px-6 md:px-0">
        <div className="w-min flex flex-col gap-2 items-center md:items-start text-center md:text-left">
          <div className="flex flex-col gap-2 md:gap-0 items-center md:items-start">
            <span className="w-48">
              <img src={footerBrand.logo} alt="" className="w-full" />
            </span>
            <BodyMedium className={"text-neutral-900"}>
              {footerBrand.description}
            </BodyMedium>
          </div>

          <div className="flex gap-4 h-16 mt-4">
            {footerBrand.badges.map((badge) => (
              <img
                key={badge.alt}
                src={badge.src}
                alt={badge.alt}
                className="h-full w-auto"
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 justify-between md:py-4">
          <FooterAbout />

          <div className="flex items-center flex-wrap text-nowrap justify-center gap-4">
            {policyGroup.links.map((link) => (
              <CustomLink key={link.label} href={link.href} utm={utm}>
                <BodySmall
                  as="p"
                  weight="regular"
                  className="text-neutral-1100 underline hover:text-primary-800"
                >
                  {link.label}
                </BodySmall>
              </CustomLink>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-10 md:grid grid-cols-2 md:gap-8">
          {footerBrand.social.map((item) => (
            <CustomLink key={item.name} href={item.href} utm={utm}>
              <img
                src={item.icon}
                alt={item.name}
                className="cursor-pointer w-8 md:w-16"
              />
            </CustomLink>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default FooterTopSection;

/*
<div className="flex flex-col gap-6 md:flex-row md:gap-24">
  <div className="w-full flex justify-between md:gap-20">
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <div className="w-[141.19px] h-8 relative">
          <img
            src={footerBrand.logo}
            alt="OneAssure"
            className="absolute inset-0 h-full w-full object-contain"
          />
        </div>
        <BodySmall className="text-neutral-1100">
          {footerBrand.description}
        </BodySmall>
      </div>
      <div className="flex items-center gap-5">
        {footerBrand.badges.map((badge) => (
          <img
            key={badge.alt}
            src={badge.src}
            alt={badge.alt}
            width={badge.width}
            height={badge.height}
            className="object-contain"
          />
        ))}
      </div>
      <div className="flex items-center gap-4">
        {footerBrand.social.map((item) => (
          <CustomLink key={item.name} href={item.href} utm={utm}>
            <img
              src={item.icon}
              alt={item.name}
              width={24}
              height={24}
              className="cursor-pointer"
            />
          </CustomLink>
        ))}
      </div>
    </div>

    <BodySmall
      className="text-neutral-1100  text-center"
      weight="regular"
    >
      {complianceNote}
    </BodySmall>

    <ContactUs className="hidden md:block" />
  </div>
</div>
*/

/*
{policyGroup.links.map((link) => (
  <CustomLink key={link.label} href={link.href} utm={utm}>
    <BodySmall
      as="p"
      weight="regular"
      className="text-neutral-1100  "
    >
      {link.label}
    </BodySmall>
  </CustomLink>
))}
*/
