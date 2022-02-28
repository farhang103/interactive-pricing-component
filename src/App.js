import "./App.css";
import Header from "./components/Header";
import SliderBar from "./components/SliderBar";

function App() {
  return (
    <div className="relative h-screen w-screen font-manrope">
      <Header />
      <div className="flex w-full justify-center">
        <div className="absolute top-[14.625rem] z-20 h-[29.9375rem] w-[20.4375rem] rounded-lg bg-neutral-priceComponentBackground">
          <div className="flex h-[4.6875rem] w-full items-center justify-center text-sm font-extrabold tracking-widest text-neutral-text">
            100K PAGEVIEWS
          </div>
          <SliderBar />
          <div className="flex h-16 items-center justify-center ">
            <p className="mr-2 text-[1.875rem] font-extrabold text-neutral-text_ctaBackground">
              $16.00
            </p>
            <p className="text-sm text-neutral-text">/ month</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
