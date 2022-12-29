const Home = () => (
  <div>
    <h1 className='mb-5 animate-in text-4xl font-bold'>idm1try</h1>
    <p
      className='mb-5 animate-in'
      style={{ '--index': 1 } as React.CSSProperties}
    >
      Hi! Here my links
    </p>
    <ul
      className='animated-list flex animate-in space-x-5'
      style={{ '--index': 2 } as React.CSSProperties}
    >
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
