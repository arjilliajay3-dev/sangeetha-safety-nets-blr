import { notFound } from "next/navigation";
import ServiceLocationPage, {
  generateMetadata as generateServiceLocationMetadata,
  generateStaticParams as generateServiceLocationStaticParams,
} from "@/app/services/[service]/[area]/page";
import { servicesData } from "@/utils/servicesData";
import { areasData } from "@/utils/areasData";

interface PageProps {
  params: Promise<{ area: string; service: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { area, service } = await params;
  const meta = await generateServiceLocationMetadata({ params: Promise.resolve({ service, area }) });
  return {
    ...meta,
    alternates: {
      canonical: `https://sangeethasafetynets.in/areas/${area}/${service}`,
    },
    openGraph: {
      ...meta.openGraph,
      url: `https://sangeethasafetynets.in/areas/${area}/${service}`,
    },
  };
}

export async function generateStaticParams() {
  const paramsList = await generateServiceLocationStaticParams();
  return paramsList.map((p) => ({
    area: p.area,
    service: p.service,
  }));
}

export default async function AreaServicePage({ params }: PageProps) {
  const { area, service } = await params;
  return <ServiceLocationPage params={Promise.resolve({ service, area })} />;
}
