import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import Link from 'next/link';
import React from 'react';
import Button from '@mui/material/Button';
import Image from 'next/image';
import HeaderImg from '@/public/header_img1.png';

const Index = () => {
    const links = [
        { path: "/", title: "Marketplace" },
        { path: "/rankings", title: "Rankings" },
        { path: "/wallet", title: "Connect a wallet" },
    ];

    return (
        <div className="bg-zinc-800">
            <header className='flex justify-between p-7 text-center px-11 fixed w-full top-0 z-10 bg-zinc-800'>
                <div className='mt-3'>
                    <Image
                        src="/logo.png"
                        alt="My Image"
                        width={200}
                        height={100}
                    />
                </div>
                <div className='flex gap-4'>
                    {
                        links.map((item, index) => (
                            <Link href={item.path} key={index} className='text-[18px] text-white mt-3'>
                                {item.title}
                            </Link>
                        ))
                    }
                    <div>
                        <Button
                            variant="contained"
                            sx={{ backgroundColor: '#A259FF', borderRadius: '20px', height: '50px', width: '142px' }}
                            startIcon={<PermIdentityIcon />}
                        >
                            Sign Up
                        </Button>
                    </div>
                </div>
            </header>
            <div className='flex w-[80%] gap-8 justify-center ml-[130px] mr-[130px] mt-[200px]'>
                <div className="flex flex-col justify-center">
                    <h1 className="flex flex-col w-[610px] justify-center font-work-sans text-[67px] font-semibold leading-[110%] capitalize text-white">
                        Discover digital art & Collect NFTs
                    </h1>
                    <h3 className="flex w-[750px] justify-center font-work-sans text-[22px] font-semibold leading-[110%] capitalize mt-5 text-white">
                        NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.
                    </h3>
                    <Button
                        variant="contained"
                        sx={{ backgroundColor: '#A259FF', borderRadius: '20px', height: '50px', width: '182px', marginTop: '30px', marginBottom: '30px' }}
                        startIcon={<PermIdentityIcon />}
                    >
                        Get Started
                    </Button>
                    <div className='flex gap-4'>
                        <div>
                            <h3 className='w-[150px] h-[39px] text-[28px] font-bold text-white'>240k+ </h3>
                            <h4 className='w-[150px] h-[39px] text-[24px] text-white'>Total Sale</h4>
                        </div>
                        <div>
                            <h3 className='w-[150px] h-[39px] text-[28px] font-bold text-white'>100k+ </h3>
                            <h4 className='w-[150px] h-[38px] text-[24px] text-white'>Auctions</h4>
                        </div>
                        <div>
                            <h3 className='w-[150px] h-[39px] text-[28px] font-bold text-white'>240k+ </h3>
                            <h4 className='w-[150px] h-[38px] text-[24px] text-white'>Artists</h4>
                        </div>
                    </div>
                </div>
                <div className="w-[700px] h-[600px]">
                    <Image
                        src={HeaderImg}
                        alt="main img"
                        layout="responsive"
                        width={700}
                        height={600}
                    />
                </div>
            </div>
        </div>
    );
}

export default Index;
