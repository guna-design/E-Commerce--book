import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
const Myfooter = () => {
  return (
    <Footer className="bg-red-300">
    <div className="w-full px-4 lg:px-24">
      <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4 ">
        <div>
          <Footer.Title className="text-black" title="Company" />
          <Footer.LinkGroup col>
            <Footer.Link className="hover:text-red-700" href="#">About</Footer.Link>
            <Footer.Link className="hover:text-red-700" href="#">Careers</Footer.Link>
            <Footer.Link className="hover:text-red-700" href="#">Brand Center</Footer.Link>
            <Footer.Link className="hover:text-red-700" href="#">Blog</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <div>
          <Footer.Title className="text-black" title="help center" />
          <Footer.LinkGroup col>
            <Footer.Link className="hover:text-red-700" href="#">Discord Server</Footer.Link>
            <Footer.Link className="hover:text-red-700" href="#">Twitter</Footer.Link>
            <Footer.Link className="hover:text-red-700" href="#">Facebook</Footer.Link>
            <Footer.Link className="hover:text-red-700" href="#">Contact Us</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <div>
          <Footer.Title className="text-black" title="legal" />
          <Footer.LinkGroup col>
            <Footer.Link className="hover:text-red-700" href="#">Privacy Policy</Footer.Link>
            <Footer.Link className="hover:text-red-700" href="#">Licensing</Footer.Link>
            <Footer.Link  className="hover:text-red-700"href="#">Terms &amp; Conditions</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <div>
          <Footer.Title className="text-black" title="download" />
          <Footer.LinkGroup col>
            <Footer.Link className="hover:text-red-700" href="#">iOS</Footer.Link>
            <Footer.Link className="hover:text-red-700" href="#">Android</Footer.Link>
            <Footer.Link className="hover:text-red-700" href="#">Windows</Footer.Link>
            <Footer.Link className="hover:text-red-700" href="#">MacOS</Footer.Link>
          </Footer.LinkGroup>
        </div>
      </div>
      <div className="w-full bg-gray-300 px-4 rounded-2xl py-6 sm:flex sm:items-center sm:justify-between">
        <Footer.Copyright href="#" by="Flowbite™" year={2022} />
        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
          <Footer.Icon className="hover:text-red-700" href="#" icon={BsFacebook} />
          <Footer.Icon className="hover:text-red-700" href="#" icon={BsInstagram} />
          <Footer.Icon className="hover:text-red-700" href="#" icon={BsTwitter} />
          <Footer.Icon className="hover:text-red-700"href="#" icon={BsGithub} />
          <Footer.Icon className="hover:text-red-700" href="#" icon={BsDribbble} />
        </div> 
      </div>
    </div>
  </Footer>
  )
}

export default Myfooter