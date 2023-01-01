const Home = () => (
  <div>
    <h1 className='mb-5 text-4xl font-bold'>idm1try</h1>
    <p className='mb-5'>Hi! Here my links</p>
    <ul className='animated-list flex space-x-5'>
      <li className='transition-all duration-300'>
        <a className='underlined' href='https://github.com/idm1try'>
          GitHub
        </a>
      </li>
      <li className='transition-all duration-300'>
        <a className='underlined' href='https://twitter.com/idm1try'>
          Twitter
        </a>
      </li>
      <li className='transition-all duration-300'>
        <a className='underlined' href='mailto:me@idm1try.ru'>
          Mail
        </a>
      </li>
    </ul>
  </div>
)

export default Home
