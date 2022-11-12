import Image from 'next/image';
import { TbBrandGithub, TbBrandTwitter, TbMail } from 'react-icons/tb';
import Avatar from '../../public/avatar.webp';

export default function Home() {
  return (
    <div className='animate-fade_in_up text-center mt-10'>
      <Image
        src={Avatar}
        width={96}
        height={96}
        className='rounded-full mr-auto ml-auto'
        alt='idm1try'
        placeholder='blur'
      />
      <h1 className='text-3xl font-bold mt-5'>idm1try</h1>
      <p className='text-gray-500 mt-2'>Frontend Developer</p>
      <div className='mt-5 grid gap-3'>
        <a href='https://github.com/idm1try'>
          <button className='w-48 bg-gray-100 hover:bg-gray-200 active::bg-gray-300/70 placeholder:text-gray-500 dark:bg-gray-800 dark:active:bg-gray-800/50 dark:hover:bg-gray-800/70 transition-colors duration-500 py-2 px-4 rounded-lg'>
            <TbBrandGithub className='inline-block mb-1' /> Github
          </button>
        </a>
        <a href='https://twitter.com/idm1try'>
          <button className='w-48 bg-gray-100 hover:bg-gray-200 focus:bg-gray-300/70 placeholder:text-gray-500 dark:bg-gray-800 outline-none dark:focus:bg-gray-800/50 dark:hover:bg-gray-800/70 transition-colors duration-500 py-2 px-4 rounded-lg'>
            <TbBrandTwitter className='inline-block mb-1' /> Twitter
          </button>
        </a>
        <a href='mailto:admin@idm1try.ru'>
          <button className='w-48 bg-gray-100 hover:bg-gray-200 focus:bg-gray-300/70 placeholder:text-gray-500 dark:bg-gray-800 outline-none dark:focus:bg-gray-800/50 dark:hover:bg-gray-800/70 transition-colors duration-500 py-2 px-4 rounded-lg'>
            <TbMail className='inline-block mb-1' /> Mail
          </button>
        </a>
      </div>
    </div>
  );
}
