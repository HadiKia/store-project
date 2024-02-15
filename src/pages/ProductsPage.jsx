import topSection from "../assets/top-section.png";
import brands from "../assets/brands.png";

function ProductsPage() {
  return (
    <div>
      <div className="grid place-items-center">
        <img src={topSection} alt="section" className="w-full" />
        <img
          src={brands}
          alt="brands"
          className="relative -top-3 md:-top-5 lg:-top-7 xl:-top-12 scale-90 xl:scale-[0.8] rounded-lg"
        />
      </div>
    </div>
  )
}

export default ProductsPage