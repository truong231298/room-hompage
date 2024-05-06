import { useState } from "react"
import Narbar from "./components/Narbar"
import imgDark from "/images/image-about-dark.jpg"
import imgLight from "/images/image-about-light.jpg"
import Slider from "./components/Slider.json"
import iconArrow from "/images/icon-arrow.svg"
import iconleft from "/images/icon-angle-left.svg"
import iconright from "/images/icon-angle-right.svg"

export default function App() {
  const [num,setNum] = useState(1)

  const handleplus = () =>{
    if (num >= 3){
      setNum(3)
    }
    else{
      setNum(num + 1)
    }
    
  }
  const handleMinus = () =>{
    
    if (num <= 1){
      setNum(1)
    }
    else{
      setNum(num - 1)
    }
  }
  console.log(num)
  
  return (
    <main className="min-h-screen">
      <section className="flex flex-col">
        {/* part 1 */}
        <article className="flex sm:flex-row flex-col gap-4 sm:h-96">
          {/* Narbar */}
          <div className={`bg-desktop-img${num} bg-no-repeat bg-cover h-96 sm:h-full sm:w-2/3 w-full`}>
            <Narbar />
          </div>
          {/* 3 silde */}
          <div className="flex flex-col p-4 sm:w-1/3 w-full">
            <div className="flex flex-col gap-4 my-10 mx-4">
              <h1 className="text-xl font-semibold text-Black">{Slider[num-1].topic}</h1>
              <p className="text-gray-500">{Slider[num-1].content}</p>
              <span>
                <button>SHOP NOW</button>
                <img src={iconArrow} alt="" />
              </span>

            </div>
            {/* left and right */}
            <div className="absolute top-[58%] right-0 sm:right-[27%]">
              <button onClick={handleMinus}><img src={iconleft} alt="" className="py-2 px-4 bg-black hover:bg-gray-500" /></button>
              <button onClick={handleplus}><img src={iconright} alt="" className="py-2 px-4 bg-black hover:bg-gray-500" /></button>

            </div>
          </div>


        </article>
        {/* part 2 */}
        <article className="flex flex-col sm:flex-row gap-4">
          {/* div 1 */}
          <div className="sm:w-[30%] w-full">
            <img src={imgDark} alt="" className="w-full h-full"/>
          </div>
          {/* div 2 */}
          <div className="sm:w-[40%] p-4">
            <h1 className="font-semibold text-xl text-Black mb-4">About our furniture</h1>
            <p className="text-gray-500">Our multifunctional collection blends design and function to suit your individual taste.
              Make each room unique, or pick a cohesive theme that best express your interests and what
              inspires you. Find the furniture pieces you need, from traditional to contemporary styles
              or anything in between. Product specialists are available to help you create your dream space.
            </p>
          </div>
          {/* div 3 */}
          <div className="sm:w-[30%] w-full">
            <img src={imgLight} alt="" className="w-full h-full"/>
          </div>
        </article>
      </section>
    </main>
  )
}