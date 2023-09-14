
import { Hero, SpecialOffer, SuperQuality, Subscribe, Footer, CustomerReviews, Services } from "./sections"

const App = () => (
  <main className="relative">
    {/* /<Nav /> */}
    <section className="xl:padding-1 wide:padding-r padding-b"></section>
    <Hero />
    <section className="padding">
      <PopularProducts />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding px-10 py-10">
      <Services />
    </section>
    <section className="padding">
      <SpecialOffer />
    </section>
    <section className="padding bg_pale-blue">
      <CustomerReviews />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    <section className="padding bg-black padding-x padding-t pb-8">
      <Footer />
    </section>

  </main>
)

export default App