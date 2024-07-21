import React from 'react';
import Img from '@/public/main4.png';
import Photo from '@/public/photo.png';
import Img2 from '@/public/Mainimg.png';
import Image from 'next/image';

const nftData = [
    { title: "Distant Galaxy", author: "MoonDancer", price: "1.63 ETH", highestBid: "0.33 wETH", image: Img },
    { title: "Distant Galaxy", author: "MoonDancer", price: "1.63 ETH", highestBid: "0.33 wETH", image: Img },
    { title: "Distant Galaxy", author: "MoonDancer", price: "1.63 ETH", highestBid: "0.33 wETH", image: Img }
];

const stepsData = [
    { title: "Setup Your Wallet", description: "Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.", image: Img2 },
    { title: "Create Collection", description: "Upload your work and setup your collection. Add a description, social links and floor price.", image: Img2 },
    { title: "Start Earning", description: "Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.", image: Img2 }
];

const Index = () => {
    return (
        <div>
            <div className="bg-zinc-800 pl-[130px]  pr-[130px] pt-20">
                <div className="flex justify-between">
                    <div className='pl-7' >
                        <h2 className="text-white text-[36px] ">Discover More NFTs</h2>
                        <h3 className="text-white">Explore new trending NFTs</h3>
                    </div>
                    <div className="flex justify-center pt-2 rounded-[10px] text-center text-white text-base w-[120px] h-[40px] border-2 border-white font-semibold font-['Work Sans'] leading-snug">
                        See All
                    </div>
                </div>

                {nftData.map((nft, index) => (
                    <div key={index} className="w-[400px] h-[500px] px-[30px] pt-5 pb-[25px] flex-col justify-start items-start gap-[25px] inline-flex">
                        <div className="w-[380px] h-[296px] justify-center items-center flex">
                            <Image className="w-[390px] h-[296px] rounded-[5px]" src={nft.image} alt={`Main img ${index + 1}`} />
                        </div>
                        <div className="self-stretch h-[60px] flex-col justify-start items-start gap-[5px] flex">
                            <div className="self-stretch text-white text-[22px] font-semibold font-['Work Sans'] capitalize leading-[30.80px]">
                                {nft.title}
                            </div>
                            <div className="self-stretch justify-start items-start gap-3 inline-flex">
                                <div className="justify-start items-start gap-2.5 flex">
                                    <div className="w-6 h-6 justify-center items-center flex">
                                        <Image className="w-6 h-6 rounded-[120px]" src={nft.image} alt="Main img" />
                                    </div>
                                </div>
                                <div className="grow shrink basis-0 text-white text-base font-normal font-['Space Mono'] leading-snug">
                                    {nft.author}
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch justify-start items-start inline-flex">
                            <div className="grow shrink basis-0 pr-[21px] flex-col justify-start items-start gap-2 inline-flex">
                                <div className="self-stretch text-zinc-500 text-xs font-normal font-['Space Mono'] leading-[13.20px]">
                                    Price
                                </div>
                                <div className="self-stretch text-white text-base font-normal font-['Space Mono'] leading-snug">
                                    {nft.price}
                                </div>
                            </div>
                            <div className="grow shrink basis-0 flex-col justify-center items-end gap-2 inline-flex">
                                <div className="self-stretch text-right text-zinc-500 text-xs font-normal font-['Space Mono'] leading-[13.20px]">
                                    Highest Bid
                                </div>
                                <div className="self-stretch text-right text-white text-base font-normal font-['Space Mono'] leading-snug">
                                    {nft.highestBid}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="w-[100%] h-[738px] px-[195px] py-20 bg-zinc-800 flex-col justify-start items-center gap-12 inline-flex">
                <div className="flex-col justify-start items-start gap-2.5 flex">
                    <div className="w-[1050px] text-white text-[38px] font-semibold font-['Work Sans'] capitalize leading-[45.60px]">
                        How it works
                    </div>
                    <div className="w-[1050px] text-white text-[22px] font-normal font-['Work Sans'] capitalize leading-9">
                        Find out how to get started
                    </div>
                </div>
                <div className="justify-start items-start gap-[30px] inline-flex">
                    {stepsData.map((step, index) => (
                        <div key={index} className="w-[330px] px-[30px] pt-2.5 pb-[30px] bg-neutral-700 rounded-[20px] flex-col justify-start items-center gap-5 inline-flex">
                            <div className="w-[250px] h-[250px] relative">
                                <Image className="w-[250px] h-[250px] rounded-[5px]" src={step.image} alt={step.title} />
                            </div>
                            <div className="self-stretch h-[129px] flex-col justify-start items-center gap-2.5 flex">
                                <div className="self-stretch text-center text-white text-[22px] font-semibold font-['Work Sans'] capitalize leading-[30.80px]">
                                    {step.title}
                                </div>
                                <div className="self-stretch text-center text-white text-base font-normal font-['Work Sans'] leading-snug">
                                    {step.description}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-[100%] h-[430px] p-[60px] bg-zinc-800 justify-center items-center gap-20 inline-flex">
            <Image className="w-[250px] h-[250px] rounded-[5px]" src={Photo} alt='Main img' />
                <div className="w-[425px] flex-col justify-start items-start gap-10 inline-flex">
                    <div className="self-stretch h-[172px] flex-col justify-start items-start gap-2.5 flex">
                        <div className="self-stretch text-white text-[38px] font-semibold font-['Work Sans'] capitalize leading-[45.60px]">Join our weekly digest</div>
                        <div className="self-stretch text-white text-[22px] font-normal font-['Work Sans'] capitalize leading-9">Get exclusive promotions & updates straight to your inbox.</div>
                    </div>
                    <div className="self-stretch h-[60px] pl-5 py-4 bg-white rounded-[20px] justify-start items-center gap-3 inline-flex">
                        <div className="grow shrink basis-0 text-zinc-800 text-base font-normal font-['Work Sans'] leading-snug">Enter your email here</div>
                        <div className="w-[211px] px-[50px] bg-purple-500 rounded-[20px] justify-end items-center gap-3 flex">
                            <div className="w-[20px] h-[60px] relative" />
                            <div className="text-center text-white text-base font-semibold font-['Work Sans'] leading-snug">Subscribe</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;
