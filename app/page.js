"use client"

import Image from "next/image";
import Card from "./card";


export default function Home() {
  const cards = [
    {
      'number': 1,
      'title': 'Education',
      'body': 'Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae.'
    },
    {
      'number': 2,
      'title': 'Self Care',
      'body': 'Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae.'
    },
    {
      'number': 3,
      'title': 'Outdoor',
      'body': 'Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae.'
    },
    {
      'number': 4,
      'title': 'Simulation',
      'body': 'Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae.'
    }
  ]


  return (
    <main className="">
      <section className=" flex flex-col-reverse lg:flex-row items-center justify-between gap-10 ">
        <div className=" lg:w-1/2">
          <h1 className=" lg:text-[#fff] text-4xl font-extrabold text-center lg:text-left lg:text-[46px] "> <span className="text-transparent  bg-clip-text bg-gradient-to-r from-left to-right ">Dive</span> Into The Depths <br /> Of <span className=" text-transparent bg-clip-text bg-gradient-to-r from-left to-right">Virtual Reality</span></h1>
          <p className=" hidden lg:block pt-[36px] pb-[66px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget. Lectus mauris eros in vitae .</p>
          <div className="flex justify-center lg:justify-start mt-10 lg:mt-0">
            <div className="flex flex-col justify-center">
              <button className=' uppercase py-4 px-9 rounded-full font-bold bg-gradient-to-r from-left to-right text-primary'>BUILD YOUR WORLD</button>
            </div>
            <Image src={'/arrow-small-right.svg'} height={48} width={100} alt="arrow" className="hidden lg:block" />
          </div>
        </div>
        <div >
          <div className=" relative rounded-bl-[240px] rounded-tr-[100px] rounded-tl-[100px] rounded-br-[100px] shadow-2xl shadow-black  h-[426px]  w-[450px] lg:w-[490px] overflow-hidden">
            <Image src={'/main-section.png'} alt="photo" fill blurDataURL={'/main-section.png'} sizes="100" />
          </div>
        </div>
      </section>
      <section className="py-[88px]">
        <div className=" flex justify-between  bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#3a3456f2] to-[#211E2E] rounded-full p-12 shadow-2xl shadow-black overflow-x-scroll w-[80vw] mx-auto snap-x snap-mandatory no-scrollbar ">
          <div className=" flex items-center gap-2 min-w-[140%] lg:min-w-0 snap-center justify-center">
            <Image src={'/location.svg'} height={65} width={65} alt="image" blurDataURL={'/location.svg'} />
            <div>
              <h1 className=" font-bold text-xl">Pay Us a Visit</h1>
              <p className=" text-xs">Union St, Seattle, WA 98101, United States</p>
            </div>
          </div>
          <div className=" hidden lg:block h-[120] w-0 border-[1px] border-white border-solid"></div>
          <div className=" flex items-center  gap-2 min-w-[140%] lg:min-w-0 snap-center justify-center">
            <Image src={'/phone.svg'} height={65} width={65} alt="image" blurDataURL={'/phone.svg'} />
            <div>
              <h1 className="  font-bold text-xl">Give Us a Call</h1>
              <p className=" text-xs">(110) 1111-1010</p>
            </div>
          </div>
          <div className=" hidden lg:block h-[120] w-0 border-[1px] border-white border-solid"></div>
          <div className=" flex items-center gap-2 min-w-[140%] lg:min-w-0 snap-center justify-center">
            <Image src={'/mail.svg'} height={65} width={65} alt="image" />
            <div>
              <h1 className=" font-bold text-xl">Send Us a Message</h1>
              <p className=" text-xs">Contact@HydraVTech.com</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className=" grid grid-cols-2 grid-rows-auto place-content-center">
          <div className=" text-4xl h-min col-span-2 lg:col-span-1 text-center lg:text-left lg:text-white">
            <h1 className=" text-5xl font-extrabold">INTRODUCTION</h1>
            <div className=" flex font-normal items-center gap-8 justify-center lg:justify-start">
              <p>TO HYDRA VR</p>
              <Image src={'/big-arrow-right.svg'} width={228} height={30} alt="arrow" blurDataURL={'/big-arrow-right.svg'} className=" hidden lg:block" />
            </div>
          </div>
          <div className=" hidden lg:block h-min">
            <p>Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.</p>
          </div>
          <div className=" col-span-2 py-9 lg:py-0 lg:col-span-1">
              <div className=" relative rounded-bl-[100px] rounded-tr-[100px] rounded-tl-[240px] rounded-br-[240px] shadow-2xl shadow-black h-0 pb-1/3 pt-2/3 lg:mr-6 m-10 overflow-hidden">
              <img src={'/section_2.png'} alt="photo" className=" absolute inset-0 w-full h-full object-cover"/>
            </div>
          </div>
          <div className=" flex flex-col justify-around col-span-2 lg:col-span-1 gap-9">
            <div className=" hidden lg:block text-4xl">
              <h1 className=" text-5xl font-extrabold py-2">ABOUT</h1>
              <p>HYDRA VR</p>
            </div>
            <p>Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus
              urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida
              dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in.
              Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdiet
              sed. Consequat semper viverra nam libero justo laoreet sit amet. Aliquam
              etiam erat velit scelerisque in dictum non consectetur a. Laoreet sit amet
              cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pha
              retra diam sit amet nisl suscipit adipiscing bibendum. Leo a diam sollicitudi
              n tempor.</p>
            <div className=" flex justify-center lg:block">
              <button className=' uppercase py-4 px-9 rounded-full font-bold bg-gradient-to-r from-left to-right text-primary'>LET’S GET IN TOUCH</button>
            </div>
          </div>
          <div className=" text-4xl h-min pt-12 text-center lg:text-left lg:text-white col-span-2 lg:col-span-1">
            <h1 className=" text-5xl font-extrabold">WHY BUILD</h1>
            <div className=" flex font-normal items-center gap-8 justify-center lg:justify-start">
              <p>WITH HYDRA?</p>
              <Image src={'/big-arrow-right.svg'} width={228} height={30} alt="arrow" className="hidden lg:block" />
            </div>
          </div>
          <div className="pt-12 h-min hidden lg:block">
            <p>Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.</p>
          </div>
        </div>
      </section>
      {/* <section className=" flex justify-between pt-20">
        {
          cards.map((item) => (
            <>
              <Card img={`/card-${item.number}.png`} title={item.title} body={item.body} button='Try it now' />
            </>
          ),)
        }
      </section> */}
      <section className="relative pt-[114px]">
        <div className=" relative rounded-[160px] w-full h-[303px] overflow-hidden">
          <Image src={'/bg-image.png'} alt="photo" fill blurDataURL={'/bg-image.png'} sizes="100" />
          <p className=" absolute text-4xl  text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-extralight"><span className=" font-extrabold">TECHNOLOGIES & HARDWARE</span><br />
            USED BY HYDRA VR.</p>
        </div>
        <button className=' absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 p-7 rounded-full bg-gradient-to-r from-left to-right border-primary border-8'><Image src={'/small-down.svg'} alt="photo" fill blurDataURL={'/bg-image.png'} sizes="100" /></button>
      </section>
      <section className=" flex justify-around w-full h-fit items-center my-16">
        <div className=" relative ">
          <Image src={'/partner-4.png'} width={174} height={174} onBlur={'/partner-4.png'} sizes="100" />
        </div>
        <div className=" relative ">
          <Image src={'/partner-3.png'} width={252} height={252} onBlur={'/partner-3.png'} sizes="100" />
        </div>
        <div className=" relative ">
          <Image src={'/partner-2.png'} width={263} height={263} onBlur={'/partner-2.png'} sizes="100" />
        </div>
        <div className=" relative ">
          <Image src={'/partner-1.png'} width={282} height={282} onBlur={'/partner-1.png'} sizes="100" />
        </div>
      </section>
      <section className=" flex justify-between w-full my-16 flex-col items-center lg:flex-row">
        <div className=" text-4x lg:w-1/2">
          <h1 className=" text-5xl font-extrabold">HOW WE BUILD</h1>
          <div className=" flex font-normal items-center gap-8  ">
            <p>WITH HYDRA VR?</p>
            <Image src={'/big-arrow-right.svg'} width={228} height={30} alt="arrow" blurDataURL={'/big-arrow-right.svg'} />
          </div>
        </div>
        <div className="lg:w-1/2">
          <p>Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.</p>
        </div>
      </section>
      {/* <section className="flex justify-between">
        <div className=" flex flex-col items-center">
          <Image src={'/01.svg'} width={198} height={198} />
          <div className=" flex items-center font-extrabold text-xl">
            <Image src={'/arrow-small-right.svg'} width={67} height={67} />
            <span className=" font-extrabold text=[24px]">3D Conception & Design</span>
          </div>
        </div>
        <div className=" flex flex-col items-center">
          <Image src={'/02.svg'} width={198} height={198} />
          <div className=" flex items-center font-extrabold text-xl">
            <Image src={'/arrow-small-right.svg'} width={67} height={67} />
            <span className=" font-extrabold text=[24px]">Interaction Design</span>
          </div>
        </div>
        <div className=" flex flex-col items-center">
          <Image src={'/03.svg'} width={198} height={198} />
          <div className=" flex items-center font-extrabold text-xl">
            <Image src={'/arrow-small-right.svg'} width={67} height={67} />
            <span className=" font-extrabold text=[24px]">VR World User Testing</span>
          </div>
        </div>
        <div className=" flex flex-col items-center">
          <Image src={'/04.svg'} width={198} height={198} />
          <div className=" flex items-center font-extrabold text-xl">
            <Image src={'/arrow-small-right.svg'} width={67} height={67} />
            <span className=" font-extrabold text=[24px]">Hydra VR Deploy</span>
          </div>
        </div>
      </section> */}
      <section className=" mt-[10vh] py-6 px-6 lg:px-[107px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#403A5F] to-[#211E2E] shadow-inner rounded-[40px] w-[90vw] mx-auto" id="contact">
        <div className=" flex flex-col items-center gap-8 text-4xl lg:p-16 text-center overflow-hidden">
          <span className=" font-extrabold ">JOIN HYDRA</span>
          <svg  className="" xmlns="http://www.w3.org/2000/svg" width="414" height="2" viewBox="0 0 414 2" fill="none">
            <path d="M0 1H414" stroke="url(#paint0_linear_13_46)" />
            <defs>
              <linearGradient id="paint0_linear_13_46" x1="414" y1="1.00238" x2="0" y2="1" gradientUnits="userSpaceOnUse">
                <stop stop-color="#343045" />
                <stop offset="0.348958" stop-color="#C0B7E8" />
                <stop offset="0.6875" stop-color="#8176AF" />
                <stop offset="1" stop-color="#343045" />
              </linearGradient>
            </defs>
          </svg>
          <span className=" pb-6 lg:pb-0">Let’s Build Your VR Experience</span>
        </div>
        <div className=" grid grid-cols-2 grid-rows-[4] gap-3 ">
          <input type="text" placeholder="First Name" className=" col-span-2 lg:col-span-1 bg-transparent outline-none py-7 px-10 rounded-[40px] border-2 border-white h-[72px]" />
          <input type="text" placeholder="Last Name" className=" col-span-2 lg:col-span-1 bg-transparent outline-none py-7 px-10 rounded-[40px] border-2 border-white h-[72px]" />
          <input type="email" placeholder="Email" className=" col-span-2 lg:col-span-1 bg-transparent outline-none py-7 px-10 rounded-[40px] border-2 border-white h-[72px]" />
          <input type="tel" placeholder="Phone Number" className=" col-span-2 lg:col-span-1 bg-transparent outline-none py-7 px-10 rounded-[40px] border-2 border-white h-[72px]" />
          <input type="text" placeholder="Subject" className=" col-span-2 bg-transparent outline-none py-7 px-10 rounded-[40px] border-2 border-white h-[72px]" />
          <textarea name="something" placeholder="Tell Us Something..." id="something" cols="30" rows="10" className=" col-span-2 bg-transparent outline-none py-7 px-10 rounded-[40px] border-2 border-white resize-none"></textarea>
        </div>
        <div className="flex flex-col justify-center items-center pt-6 lg:py-16">
          <button className=' uppercase py-4 px-9 rounded-full w-[214px] font-bold bg-gradient-to-r from-left to-right text-primary'>SEND TO HYDRA</button>
        </div>
      </section>
    </main>
  )
}
