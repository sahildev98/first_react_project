import Header from './header';
export default function Navbar(){
    return <>
    <Header/>
    <nav className="nav">
          <ul>
            <li><a href='Projects.html'>Projects</a></li>
            <li><a href='about.html'>About</a></li>
            <li><a href='Projects.html'>Contact</a></li>
          </ul>
        </nav>
        </>
    
}