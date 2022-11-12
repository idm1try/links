import Image from 'next/image';
import { TbBrandGithub, TbBrandTwitter, TbMail } from 'react-icons/tb';
import Avatar from '../../public/avatar.webp';

export default function Home() {
  return (
    <div className='mt-10 animate-fade_in_up text-center'>
      <Image
        src={Avatar}
        width={96}
        height={96}
        className='mr-auto ml-auto rounded-full'
        alt='idm1try'
        placeholder='blur'
      />
      <h1 className='mt-5 text-3xl font-bold'>idm1try</h1>
      <p className='mt-2 text-gray-500'>Frontend Developer</p>
      <div className='mt-5 grid gap-3'>
        <a href='https://github.com/idm1try'>
          <button className='active::bg-gray-300/70 w-48 rounded-lg bg-gray-100 py-2 px-4 transition-colors duration-500 placeholder:text-gray-500 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-800/70 dark:active:bg-gray-800/50'>
            <TbBrandGithub className='mb-1 inline-block' /> Github
          </button>
        </a>
        <a href='https://twitter.com/idm1try'>
          <button className='w-48 rounded-lg bg-gray-100 py-2 px-4 outline-none transition-colors duration-500 placeholder:text-gray-500 hover:bg-gray-200 focus:bg-gray-300/70 dark:bg-gray-800 dark:hover:bg-gray-800/70 dark:focus:bg-gray-800/50'>
            <TbBrandTwitter className='mb-1 inline-block' /> Twitter
          </button>
        </a>
        <a href='mailto:admin@idm1try.ru'>
          <button className='w-48 rounded-lg bg-gray-100 py-2 px-4 outline-none transition-colors duration-500 placeholder:text-gray-500 hover:bg-gray-200 focus:bg-gray-300/70 dark:bg-gray-800 dark:hover:bg-gray-800/70 dark:focus:bg-gray-800/50'>
            <TbMail className='mb-1 inline-block' /> Mail
          </button>
        </a>
      </div>
    </div>
  );
}
