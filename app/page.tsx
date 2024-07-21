import React from 'react';
import Image from 'next/image';
import Img1 from '@/public/main_1_1.png'
import Img2 from '@/public/main2_1.png'
import Img3 from '@/public/main2_2.jpg'
import Logo from '@/public/logo50.png'
const Page = () => {
  return (
    <div>
      <div className="flex flex-col bg-zinc-800 w-full pl-[130px] pr-[130px] pt-[100px] ">
        <div className='flex flex-col mb-[60px]' >
          <h2 className='text-[38px] font-weight: 600 text-white' >Trending Collection</h2>
          <h3 className='text-[22px] font-weight: 400 text-white'>Checkout our weekly updated trending collection.</h3>
        </div>
        <div className='flex gap-10 justify-center' >
          <div>
            <div>
              <Image src={Img1} alt="main img" width={395} height={445} />
              <h5 className='text-[22px] text-white'>DSGN Animals</h5>
              <div className='flex' >
                <Image src={Logo} alt="logocha" width={24} height={24} />
                <h6 className='text-white text-[16px]'>MrFox</h6>
              </div>
            </div>
          </div>
          <div>
            <div>
              <Image src={Img1} alt="main img" width={395} height={445} />
              <h5 className='text-[22px] text-white'>DSGN Animals</h5>
              <div className='flex' >
                <Image src={Logo} alt="logocha" width={24} height={24} />
                <h6 className='text-white text-[16px]'>MrFox</h6>
              </div>
            </div>
          </div>
          <div>
            <div>
              <Image src={Img1} alt="main img" width={395} height={445} />
              <h5 className='text-[22px] text-white'>DSGN Animals</h5>
              <div className='flex' >
                <Image src={Logo} alt="logocha" width={24} height={24} />
                <h6 className='text-white text-[16px]'>MrFox</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main>
        <div className="w-[100%] h-[1085px] px-[195px] py-[150px] bg-zinc-800 flex-col justify-start items-center gap-[60px] inline-flex">
          <div className="w-[1050px] justify-start items-end gap-[100px] inline-flex">
            <div className="w-[703px] flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="self-stretch justify-start items-start gap-2.5 inline-flex">
                <div className="grow shrink basis-0 text-white text-[38px] font-semibold font-['Work Sans'] capitalize leading-[45.60px]">Top creators</div>
              </div>
              <div className="self-stretch justify-start items-start gap-2.5 inline-flex">
                <div className="grow shrink basis-0 text-white text-[22px] font-normal font-['Work Sans'] capitalize leading-9">Checkout Top Rated Creators on the NFT Marketplace</div>
              </div>
            </div>
            <div className="w-[247px] px-[50px] rounded-[20px] border-2 border-purple-500 justify-center items-center gap-3 flex">
              <div className="w-5 h-5 relative" />
              <div className="text-center text-white text-base font-semibold font-['Work Sans'] leading-snug">View Rankings</div>
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-[30px] flex">
            <div className="w-[100%] justify-start items-start gap-[30px] inline-flex">
              <div className="grow shrink basis-0 p-5 bg-neutral-700 rounded-[20px] flex-col justify-start items-center gap-5 inline-flex">
                <div className="w-[30px] bg-zinc-800 rounded-[20px] justify-start items-start inline-flex">
                  <div className="text-center text-zinc-500 text-base font-normal font-['Space Mono'] leading-snug">1</div>
                </div>
                <div className="flex-col justify-start items-end flex">
                  <div className="w-[110px] justify-start items-start gap-2.5 inline-flex">
                    <div className="w-[120px] h-[120px] justify-center items-center flex">
                      <Image
                        className="w-[120px] h-[120px] rounded-[100px]"
                        src={Img2}
                        alt="Maindagi rasm"
                        width={120}
                        height={120}
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[58px] flex-col justify-center items-center gap-[5px] flex">
                  <div className="self-stretch text-center text-white text-[22px] font-semibold font-['Work Sans'] capitalize leading-[30.80px]">Keepitreal</div>
                  <div className="self-stretch justify-center items-start gap-2.5 inline-flex">
                    <div className="grow shrink basis-0 text-right text-zinc-500 text-base font-normal font-['Work Sans'] leading-snug">Total Sales:</div>
                    <div className="grow shrink basis-0 text-white text-base font-normal font-['Space Mono'] leading-snug">34.53 ETH</div>
                  </div>
                </div>
              </div>
              <div className="grow shrink basis-0 p-5 bg-neutral-700 rounded-[20px] flex-col justify-start items-center gap-5 inline-flex">
                <div className="w-[30px] bg-zinc-800 rounded-[20px] justify-start items-start gap-2.5 inline-flex">
                  <div className="text-center text-zinc-500 text-base font-normal font-['Space Mono'] leading-snug">2</div>
                </div>
                <div className="flex-col justify-start items-end flex">
                  <div className="w-[110px] justify-start items-start gap-2.5 inline-flex">
                    <div className="w-[120px] h-[120px] justify-center items-center flex">
                      <Image
                        className="w-[120px] h-[120px] rounded-[100px]"
                        src={Img2}
                        alt="Maindagi rasm"
                        width={120}
                        height={120}
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[58px] flex-col justify-center items-center gap-[5px] flex">
                  <div className="self-stretch text-center text-white text-[22px] font-semibold font-['Work Sans'] capitalize leading-[30.80px]">DigiLab</div>
                  <div className="self-stretch justify-center items-start gap-2.5 inline-flex">
                    <div className="grow shrink basis-0 text-right text-zinc-500 text-base font-normal font-['Work Sans'] leading-snug">Total Sales:</div>
                    <div className="grow shrink basis-0 text-white text-base font-normal font-['Space Mono'] leading-snug">34.53 ETH</div>
                  </div>
                </div>
              </div>
              <div className="grow shrink basis-0 p-5 bg-neutral-700 rounded-[20px] flex-col justify-start items-center gap-5 inline-flex">
                <div className="w-[30px] bg-zinc-800 rounded-[20px] justify-start items-start gap-2.5 inline-flex">
                  <div className="text-center text-zinc-500 text-base font-normal font-['Space Mono'] leading-snug">3</div>
                </div>
                <div className="flex-col justify-start items-end flex">
                  <div className="w-[110px] justify-start items-start gap-2.5 inline-flex">
                    <div className="w-[120px] h-[120px] justify-center items-center flex">
                      <Image
                        className="w-[120px] h-[120px] rounded-[100px]"
                        src={Img2}
                        alt="Maindagi rasm"
                        width={120}
                        height={120}
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[58px] flex-col justify-center items-center gap-[5px] flex">
                  <div className="self-stretch text-center text-white text-[22px] font-semibold font-['Work Sans'] capitalize leading-[30.80px]">GravityOne</div>
                  <div className="self-stretch justify-center items-start gap-2.5 inline-flex">
                    <div className="grow shrink basis-0 text-right text-zinc-500 text-base font-normal font-['Work Sans'] leading-snug">Total Sales:</div>
                    <div className="grow shrink basis-0 text-white text-base font-normal font-['Space Mono'] leading-snug">34.53 ETH</div>
                  </div>
                </div>
              </div>
              <div className="grow shrink basis-0 p-5 bg-neutral-700 rounded-[20px] flex-col justify-start items-center gap-5 inline-flex">
                <div className="w-[30px] bg-zinc-800 rounded-[20px] justify-start items-start gap-2.5 inline-flex">
                  <div className="text-center text-zinc-500 text-base font-normal font-['Space Mono'] leading-snug">4</div>
                </div>
                <div className="flex-col justify-start items-end flex">
                  <div className="w-[110px] justify-start items-start gap-2.5 inline-flex">
                    <div className="w-[120px] h-[120px] justify-center items-center flex">
                      <Image
                        className="w-[120px] h-[120px] rounded-[100px]"
                        src={Img2}
                        alt="Maindagi rasm"
                        width={120}
                        height={120}
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[58px] flex-col justify-center items-center gap-[5px] flex">
                  <div className="self-stretch text-center text-white text-[22px] font-semibold font-['Work Sans'] capitalize leading-[30.80px]">Juanie</div>
                  <div className="self-stretch justify-center items-start gap-2.5 inline-flex">
                    <div className="grow shrink basis-0 text-right text-zinc-500 text-base font-normal font-['Work Sans'] leading-snug">Total Sales:</div>
                    <div className="grow shrink basis-0 text-white text-base font-normal font-['Space Mono'] leading-snug">34.53 ETH</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[100%] justify-start items-start gap-[30px] inline-flex">
              <div className="grow shrink basis-0 p-5 bg-neutral-700 rounded-[20px] flex-col justify-start items-center gap-5 inline-flex">
                <div className="w-[30px] bg-zinc-800 rounded-[20px] justify-start items-start gap-2.5 inline-flex">
                  <div className="text-center text-zinc-500 text-base font-normal font-['Space Mono'] leading-snug">5</div>
                </div>
                <div className="flex-col justify-start items-end flex">
                  <div className="w-[110px] justify-start items-start gap-2.5 inline-flex">
                    <div className="w-[120px] h-[120px] justify-center items-center flex">
                      <Image
                        className="w-[120px] h-[120px] rounded-[100px]"
                        src={Img2}
                        alt="Maindagi rasm"
                        width={120}
                        height={120}
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[58px] flex-col justify-center items-center gap-[5px] flex">
                  <div className="self-stretch text-center text-white text-[22px] font-semibold font-['Work Sans'] capitalize leading-[30.80px]">BlueWhale</div>
                  <div className="self-stretch justify-center items-start gap-2.5 inline-flex">
                    <div className="grow shrink basis-0 text-right text-zinc-500 text-base font-normal font-['Work Sans'] leading-snug">Total Sales:</div>
                    <div className="grow shrink basis-0 text-white text-base font-normal font-['Space Mono'] leading-snug">34.53 ETH</div>
                  </div>
                </div>
              </div>
              <div className="grow shrink basis-0 p-5 bg-neutral-700 rounded-[20px] flex-col justify-start items-center gap-5 inline-flex">
                <div className="w-[30px] bg-zinc-800 rounded-[20px] justify-start items-start gap-2.5 inline-flex">
                  <div className="text-center text-zinc-500 text-base font-normal font-['Space Mono'] leading-snug">6</div>
                </div>
                <div className="flex-col justify-start items-end flex">
                  <div className="w-[110px] justify-start items-start gap-2.5 inline-flex">
                    <div className="w-[120px] h-[120px] justify-center items-center flex">
                      <Image
                        className="w-[120px] h-[120px] rounded-[100px]"
                        src={Img2}
                        alt="Maindagi rasm"
                        width={120}
                        height={120}
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[58px] flex-col justify-center items-center gap-[5px] flex">
                  <div className="self-stretch text-center text-white text-[22px] font-semibold font-['Work Sans'] capitalize leading-[30.80px]">mr fox</div>
                  <div className="self-stretch justify-center items-start gap-2.5 inline-flex">
                    <div className="grow shrink basis-0 text-right text-zinc-500 text-base font-normal font-['Work Sans'] leading-snug">Total Sales:</div>
                    <div className="grow shrink basis-0 text-white text-base font-normal font-['Space Mono'] leading-snug">34.53 ETH</div>
                  </div>
                </div>
              </div>
              <div className="grow shrink basis-0 p-5 bg-neutral-700 rounded-[20px] flex-col justify-start items-center gap-5 inline-flex">
                <div className="w-[30px] bg-zinc-800 rounded-[20px] justify-start items-start gap-2.5 inline-flex">
                  <div className="text-center text-zinc-500 text-base font-normal font-['Space Mono'] leading-snug">7</div>
                </div>
                <div className="flex-col justify-start items-end flex">
                  <div className="w-[110px] justify-start items-start gap-2.5 inline-flex">
                    <div className="w-[120px] h-[120px] justify-center items-center flex">
                      <Image
                        className="w-[120px] h-[120px] rounded-[100px]"
                        src={Img2}
                        alt="Maindagi rasm"
                        width={120}
                        height={120}
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[58px] flex-col justify-center items-center gap-[5px] flex">
                  <div className="self-stretch text-center text-white text-[22px] font-semibold font-['Work Sans'] capitalize leading-[30.80px]">Shroomie</div>
                  <div className="self-stretch justify-center items-start gap-2.5 inline-flex">
                    <div className="grow shrink basis-0 text-right text-zinc-500 text-base font-normal font-['Work Sans'] leading-snug">Total Sales:</div>
                    <div className="grow shrink basis-0 text-white text-base font-normal font-['Space Mono'] leading-snug">34.53 ETH</div>
                  </div>
                </div>
              </div>
              <div className="grow shrink basis-0 p-5 bg-neutral-700 rounded-[20px] flex-col justify-start items-center gap-5 inline-flex">
                <div className="w-[30px] bg-zinc-800 rounded-[20px] justify-start items-start gap-2.5 inline-flex">
                  <div className="text-center text-zinc-500 text-base font-normal font-['Space Mono'] leading-snug">8</div>
                </div>
                <div className="flex-col justify-start items-end flex">
                  <div className="w-[110px] justify-start items-start gap-2.5 inline-flex">
                    <div className="w-[120px] h-[120px] justify-center items-center flex">
                      <Image
                        className="w-[120px] h-[120px] rounded-[100px]"
                        src={Img2}
                        alt="Maindagi rasm"
                        width={120}
                        height={120}
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[58px] flex-col justify-center items-center gap-[5px] flex">
                  <div className="self-stretch text-center text-white text-[22px] font-semibold font-['Work Sans'] capitalize leading-[30.80px]">robotica</div>
                  <div className="self-stretch justify-center items-start gap-2.5 inline-flex">
                    <div className="grow shrink basis-0 text-right text-zinc-500 text-base font-normal font-['Work Sans'] leading-snug">Total Sales:</div>
                    <div className="grow shrink basis-0 text-white text-base font-normal font-['Space Mono'] leading-snug">34.53 ETH</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full justify-start items-start gap-[30px] inline-flex">
              <div className="grow shrink basis-0 p-5 bg-neutral-700 rounded-[20px] flex-col justify-start items-center gap-5 inline-flex">
                <div className="w-[30px] bg-zinc-800 rounded-[20px] justify-start items-start gap-2.5 inline-flex">
                  <div className="text-center text-zinc-500 text-base font-normal font-['Space Mono'] leading-snug">9</div>
                </div>
                <div className="flex-col justify-start items-end flex">
                  <div className="w-[110px] justify-start items-start gap-2.5 inline-flex">
                    <div className="w-[120px] h-[120px] justify-center items-center flex">
                      <Image
                        className="w-[120px] h-[120px] rounded-[100px]"
                        src={Img2}
                        alt="Maindagi rasm"
                        width={120}
                        height={120}
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[58px] flex-col justify-center items-center gap-[5px] flex">
                  <div className="self-stretch text-center text-white text-[22px] font-semibold font-['Work Sans'] capitalize leading-[30.80px]">RustyRobot</div>
                  <div className="self-stretch justify-center items-start gap-2.5 inline-flex">
                    <div className="grow shrink basis-0 text-right text-zinc-500 text-base font-normal font-['Work Sans'] leading-snug">Total Sales:</div>
                    <div className="grow shrink basis-0 text-white text-base font-normal font-['Space Mono'] leading-snug">34.53 ETH</div>
                  </div>
                </div>
              </div>
              <div className="grow shrink basis-0 p-5 bg-neutral-700 rounded-[20px] flex-col justify-start items-center gap-5 inline-flex">
                <div className="w-[30px] bg-zinc-800 rounded-[20px] justify-start items-start gap-2.5 inline-flex">
                  <div className="text-center text-zinc-500 text-base font-normal font-['Space Mono'] leading-snug">10</div>
                </div>
                <div className="flex-col justify-start items-end flex">
                  <div className="w-[110px] justify-start items-start gap-2.5 inline-flex">
                    <div className="w-[120px] h-[120px] justify-center items-center flex">
                      <Image
                        className="w-[120px] h-[120px] rounded-[100px]"
                        src={Img2}
                        alt="Maindagi rasm"
                        width={120}
                        height={120}
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[58px] flex-col justify-center items-center gap-[5px] flex">
                  <div className="self-stretch text-center text-white text-[22px] font-semibold font-['Work Sans'] capitalize leading-[30.80px]">animakid</div>
                  <div className="self-stretch justify-center items-start gap-2.5 inline-flex">
                    <div className="grow shrink basis-0 text-right text-zinc-500 text-base font-normal font-['Work Sans'] leading-snug">Total Sales:</div>
                    <div className="grow shrink basis-0 text-white text-base font-normal font-['Space Mono'] leading-snug">34.53 ETH</div>
                  </div>
                </div>
              </div>
              <div className="grow shrink basis-0 p-5 bg-neutral-700 rounded-[20px] flex-col justify-start items-center gap-5 inline-flex">
                <div className="w-[30px] bg-zinc-800 rounded-[20px] justify-start items-start gap-2.5 inline-flex">
                  <div className="text-center text-zinc-500 text-base font-normal font-['Space Mono'] leading-snug">11</div>
                </div>
                <div className="flex-col justify-start items-end flex">
                  <div className="w-[110px] justify-start items-start gap-2.5 inline-flex">
                    <div className="w-[120px] h-[120px] justify-center items-center flex">
                      <Image
                        className="w-[120px] h-[120px] rounded-[100px]"
                        src={Img2}
                        alt="Maindagi rasm"
                        width={120}
                        height={120}
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[58px] flex-col justify-center items-center gap-[5px] flex">
                  <div className="self-stretch text-center text-white text-[22px] font-semibold font-['Work Sans'] capitalize leading-[30.80px]">Dotgu</div>
                  <div className="self-stretch justify-center items-start gap-2.5 inline-flex">
                    <div className="grow shrink basis-0 text-right text-zinc-500 text-base font-normal font-['Work Sans'] leading-snug">Total Sales:</div>
                    <div className="grow shrink basis-0 text-white text-base font-normal font-['Space Mono'] leading-snug">34.53 ETH</div>
                  </div>
                </div>
              </div>
              <div className="grow shrink basis-0 p-5 bg-neutral-700 rounded-[20px] flex-col justify-start items-center gap-5 inline-flex">
                <div className="w-[30px] bg-zinc-800 rounded-[20px] justify-start items-start gap-2.5 inline-flex">
                  <div className="text-center text-zinc-500 text-base font-normal font-['Space Mono'] leading-snug">12</div>
                </div>
                <div className="flex-col justify-start items-end flex">
                  <div className="w-[110px] justify-start items-start gap-2.5 inline-flex">
                    <div className="w-[120px] h-[120px] justify-center items-center flex">
                      <Image
                        className="w-[120px] h-[120px] rounded-[100px]"
                        src={Img2}
                        alt="Maindagi rasm"
                        width={120}
                        height={120}
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[58px] flex-col justify-center items-center gap-[5px] flex">
                  <div className="self-stretch text-center text-white text-[22px] font-semibold font-['Work Sans'] capitalize leading-[30.80px]">Ghiblier</div>
                  <div className="self-stretch justify-center items-start gap-2.5 inline-flex">
                    <div className="grow shrink basis-0 text-right text-zinc-500 text-base font-normal font-['Work Sans'] leading-snug">Total Sales:</div>
                    <div className="grow shrink basis-0 text-white text-base font-normal font-['Space Mono'] leading-snug">34.53 ETH</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="w-[100%] h-[928px] px-[195px] py-20 bg-zinc-800 flex-col justify-start items-center gap-[60px] inline-flex">
    <div className="h-[46px] flex-col justify-start items-start gap-2.5 flex">
        <div className="self-stretch grow shrink basis-0  text-white text-[38px] font-semibold font-['Work Sans'] capitalize leading-[45.60px]">Browse Categories</div>
    </div>
    <div className="flex-col justify-start items-start gap-[30px] flex">
        <div className="self-stretch justify-start items-start gap-[30px] inline-flex">
            <div className="grow shrink basis-0 bg-neutral-700 rounded-[20px] flex-col justify-start items-center inline-flex">
                <div className="w-60 h-60 relative rounded-tl-[20px] rounded-tr-[20px]">
                <div className="w-[240px] h-[240px] justify-center items-center flex">
                      <Image
                        className="w-[240px] h-[240px]"
                        src={Img3}
                        alt="Maindagi rasm"
                        width={240}
                        height={240}
                      />
                    </div>
                    <div className="w-60 h-60 left-0 top-0 absolute bg-white/opacity-10 rounded-tl-[20px] rounded-tr-[20px] backdrop-blur-[15px] justify-center items-center gap-2.5 inline-flex">
                        <div className="w-[100px] h-[100px] relative" />
                    </div>
                </div>
                <div className="self-stretch h-[76px] px-[30px] pt-5 pb-[25px] flex-col justify-start items-start gap-[25px] flex">
                    <div className="self-stretch text-white text-[22px] font-semibold font-['Work Sans'] capitalize leading-[30.80px]">Art</div>
                </div>
            </div>
            <div className="grow shrink basis-0 bg-neutral-700 rounded-[20px] flex-col justify-start items-center inline-flex">
                <div className="w-60 h-60 relative rounded-tl-[20px] rounded-tr-[20px]">
                <div className="w-[240px] h-[240px] justify-center items-center flex rounded-tl-[20px] rounded-tr-[20px] ">
                      <Image
                        className="w-[240px] h-[240px]"
                        src={Img3}
                        alt="Maindagi rasm"
                        width={240}
                        height={240}
                        
                      />
                    </div>
                    <div className="w-60 h-60 left-0 top-0 absolute bg-white/opacity-10 rounded-tl-[20px] rounded-tr-[20px] backdrop-blur-[15px] justify-center items-center gap-2.5 inline-flex">
                        <div className="w-[100px] h-[100px] relative" />
                    </div>
                </div>
                <div className="self-stretch h-[76px] px-[30px] pt-5 pb-[25px] flex-col justify-start items-start gap-[25px] flex">
                    <div className="self-stretch text-white text-[22px] font-semibold font-['Work Sans'] capitalize leading-[30.80px]">Collectibles</div>
                </div>
            </div>
            <div className="grow shrink basis-0 bg-neutral-700 rounded-[20px] flex-col justify-start items-center inline-flex">
                <div className="w-60 h-60 relative rounded-tl-[20px] rounded-tr-[20px]">
                    <div className="w-60 h-60 left-0 top-0 absolute justify-center items-center inline-flex">
                    <Image
                        className="w-[240px] h-[240px]"
                        src={Img3}
                        alt="Maindagi rasm"
                        width={240}
                        height={240}
                        
                      />
                    </div>
                    <div className="w-60 h-60 left-0 top-0 absolute bg-white/opacity-10 rounded-tl-[20px] rounded-tr-[20px] backdrop-blur-[15px] justify-center items-center gap-2.5 inline-flex">
                        <div className="w-[100px] h-[100px] relative" />
                    </div>
                </div>
                <div className="self-stretch h-[76px] px-[30px] pt-5 pb-[25px] flex-col justify-start items-start gap-[25px] flex">
                    <div className="self-stretch text-white text-[22px] font-semibold font-['Work Sans'] capitalize leading-[30.80px]">Music</div>
                </div>
            </div>
            <div className="grow shrink basis-0 bg-neutral-700 rounded-[20px] flex-col justify-start items-center inline-flex">
                <div className="w-60 h-60 relative rounded-tl-[20px] rounded-tr-[20px]">
                <div className="w-60 h-60 left-0 top-0 absolute justify-center items-center inline-flex">
                    <Image
                        className="w-[240px] h-[240px]"
                        src={Img3}
                        alt="Maindagi rasm"
                        width={240}
                        height={240}
                        
                      />
                    </div>
                    <div className="w-60 h-60 left-0 top-0 absolute bg-white/opacity-10 rounded-tl-[20px] rounded-tr-[20px] backdrop-blur-[15px] justify-center items-center gap-2.5 inline-flex">
                        <div className="w-[100px] h-[100px] relative" />
                    </div>
                </div>
                <div className="self-stretch h-[76px] px-[30px] pt-5 pb-[25px] flex-col justify-start items-start gap-[25px] flex">
                    <div className="self-stretch text-white text-[22px] font-semibold font-['Work Sans'] capitalize leading-[30.80px]">Photography</div>
                </div>
            </div>
        </div>
        <div className="self-stretch justify-start items-start gap-[30px] inline-flex">
            <div className="grow shrink basis-0 bg-neutral-700 rounded-[20px] flex-col justify-start items-center inline-flex">
                <div className="w-60 h-60 relative rounded-tl-[20px] rounded-tr-[20px]">
                <div className="w-60 h-60 left-0 top-0 absolute justify-center items-center inline-flex">
                    <Image
                        className="w-[240px] h-[240px]"
                        src={Img3}
                        alt="Maindagi rasm"
                        width={240}
                        height={240}
                        
                      />
                    </div>
                    <div className="w-60 h-60 left-0 top-0 absolute bg-white/opacity-10 rounded-tl-[20px] rounded-tr-[20px] backdrop-blur-[15px] justify-center items-center gap-2.5 inline-flex">
                        <div className="w-[100px] h-[100px] relative" />
                    </div>
                </div>
                <div className="self-stretch h-[76px] px-[30px] pt-5 pb-[25px] flex-col justify-start items-start gap-[25px] flex">
                    <div className="self-stretch text-white text-[22px] font-semibold font-['Work Sans'] capitalize leading-[30.80px]">Video</div>
                </div>
            </div>
            <div className="grow shrink basis-0 bg-neutral-700 rounded-[20px] flex-col justify-start items-center inline-flex">
                <div className="w-60 h-60 relative rounded-tl-[20px] rounded-tr-[20px]">
                <div className="w-60 h-60 left-0 top-0 absolute justify-center items-center inline-flex">
                    <Image
                        className="w-[240px] h-[240px]"
                        src={Img3}
                        alt="Maindagi rasm"
                        width={240}
                        height={240}
                        
                      />
                    </div>
                    <div className="w-60 h-60 left-0 top-0 absolute bg-white/opacity-10 rounded-tl-[20px] rounded-tr-[20px] backdrop-blur-[15px] justify-center items-center gap-2.5 inline-flex">
                        <div className="w-[100px] h-[100px] relative" />
                    </div>
                </div>
                <div className="self-stretch h-[76px] px-[30px] pt-5 pb-[25px] flex-col justify-start items-start gap-[25px] flex">
                    <div className="self-stretch text-white text-[22px] font-semibold font-['Work Sans'] capitalize leading-[30.80px]">Utility</div>
                </div>
            </div>
            <div className="grow shrink basis-0 bg-neutral-700 rounded-[20px] flex-col justify-start items-center inline-flex">
                <div className="w-60 h-60 relative rounded-tl-[20px] rounded-tr-[20px]">
                <div className="w-60 h-60 left-0 top-0 absolute justify-center items-center inline-flex">
                    <Image
                        className="w-[240px] h-[240px]"
                        src={Img3}
                        alt="Maindagi rasm"
                        width={240}
                        height={240}
                        
                      />
                    </div>
                    <div className="w-60 h-60 left-0 top-0 absolute bg-white/opacity-10 rounded-tl-[20px] rounded-tr-[20px] backdrop-blur-[15px] justify-center items-center gap-2.5 inline-flex">
                        <div className="w-[100px] h-[100px] relative" />
                    </div>
                </div>
                <div className="self-stretch h-[76px] px-[30px] pt-5 pb-[25px] flex-col justify-start items-start gap-[25px] flex">
                    <div className="self-stretch text-white text-[22px] font-semibold font-['Work Sans'] capitalize leading-[30.80px]">Sport</div>
                </div>
            </div>
            <div className="grow shrink basis-0 bg-neutral-700 rounded-[20px] flex-col justify-start items-center inline-flex">
                <div className="w-60 h-60 relative rounded-tl-[20px] rounded-tr-[20px]">
                <div className="w-60 h-60 left-0 top-0 absolute justify-center items-center inline-flex">
                    <Image
                        className="w-[240px] h-[240px]"
                        src={Img3}
                        alt="Maindagi rasm"
                        width={240}
                        height={240}
                        
                      />
                    </div>
                    <div className="w-60 h-60 left-0 top-0 absolute bg-white/opacity-10 rounded-tl-[20px] rounded-tr-[20px] backdrop-blur-[15px] justify-center items-center gap-2.5 inline-flex">
                        <div className="w-[100px] h-[100px] relative" />
                    </div>
                </div>
                <div className="self-stretch h-[76px] px-[30px] pt-5 pb-[25px] flex-col justify-start items-start gap-[25px] flex">
                    <div className="self-stretch text-white text-[22px] font-semibold font-['Work Sans'] capitalize leading-[30.80px]">Virtual Worlds</div>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  );
}

export default Page;
