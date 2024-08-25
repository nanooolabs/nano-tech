import { HeroVariant03 } from "@/components/blocks/hero";
import ArchiveVariant01 from "@/components/blocks/archive/ArchiveVariant01";

const TemplateArchiveVariant01 = ({ heroData, bodyData }) => {
  return (
    <>
      <HeroVariant03 data={heroData} />
      <ArchiveVariant01 data={bodyData} />
    </>
  );
};

export default TemplateArchiveVariant01;
