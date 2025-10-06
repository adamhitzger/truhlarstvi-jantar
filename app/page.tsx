import Header from "@/components/header";
import Services from "@/components/services";
import About from "@/components/about";
import { sanityFetch } from "@/sanity/lib/live";
import { HOME_QUERY, SERVICES } from "@/sanity/lib/queries";
import ServiceCarousel from "@/components/servicesCarousel";
import CompanyInfo from "@/components/companyInfo";
import Employees from "@/components/employees";

export default async function Home() {
  const {data: homePage} = await sanityFetch({query: HOME_QUERY})
  const {data: services} = await sanityFetch({query: SERVICES});
  return (
    <>
      <Header images={homePage.header}/>
      <Services services={services}/>
      <About about={homePage.about}/>
      <Employees workers={homePage.workers}/>
      <ServiceCarousel services={services}/>
      <CompanyInfo/>
    </>
  );
}
