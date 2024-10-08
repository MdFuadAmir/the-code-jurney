

const Footer = () => {
    return (
        <div>
            <footer className="footer bg-base-200 text-base-content p-10">
  <aside>
        <h1 className="text-2xl font-bold">The Coding<span className="text-[#73b1a6]"> Journey</span></h1>
    <p className="font-semibold font-serif">
      Fuad It Ltd
      <br />
      Providing reliable tech since 2024
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
            
        </div>
    );
};

export default Footer;