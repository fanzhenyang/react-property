import { Link, useLocation } from 'react-router-dom';
const NotFound = () => {
  const location = useLocation()
  console.log('%c 🥞 location: ', 'font-size:20px;background-color: #ED9EC7;color:#fff;', location);
  return <div>
    <Link to="/">返回首页</Link>
  </div>
}
export default NotFound