import Footer from "../Footer"
import CardDeal from "./about-components/AbtHeader"
// import ClientList from "./about-components/ClientList"
import QualityFeatures from "./about-components/OurTrust"
import ServiceList from "./about-components/serviceList"
export default function About() {
  return (
    <div>
      <CardDeal />
      <QualityFeatures />
      <ServiceList />
      {/* <ClientList /> */}
      <Footer />
    </div>
  )
}
