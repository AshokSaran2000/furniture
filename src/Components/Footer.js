import "./FooterStyles.css"


const Footer = () => {
  return (
    <div className="footer">
        <div className="top">
        <div>
            <h1>Furniture</h1>
            <p>Choose your favourite design</p>
        </div>
        <div>
            <a href="/">
                <i className="fa-brands fa-facebook-square"></i>
            </a>
            <a href="/">
                <i className="fa-brands fa-instagram-square"></i>
            </a>
            <a href="/">
                <i className="fa-brands fa-behance-square"></i>
            </a>
            <a href="/">
                <i className="fa-brands fa-twitter-square"></i>
            </a>
        
       
        <div className="copyright text-center">
            &copy; Copyright <strong><span>Furniture</span></strong>. All Rights Reserved
        </div>
        <div className="credite text-center">
            Designed By <a href="/">Ashok M</a>
        </div>
        </div>
        </div> 
            
    </div>
  )
}

export default Footer
