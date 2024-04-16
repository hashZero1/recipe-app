import {Cloudinary} from "@cloudinary/url-gen";
import {AdvancedImage , placeholder, responsive} from '@cloudinary/react';
import {fill} from "@cloudinary/url-gen/actions/resize";

const FooterComponent = () => {
  const cld = new Cloudinary({cloud: {cloudName: 'db4mlhacn'}});
     // Instantiate a CloudinaryImage object for the image with the public ID, 'docs/models'.
     const myImage = cld.image('p76amr7g04b8ocwdgaqo'); 

     // Resize to 250 x 250 pixels using the 'fill' crop mode.
     myImage.resize(fill().width(500));

     
  return (
    <footer className=" mt-20 bg-black ">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
        <a href="/" className="flex items-center mb-4 sm:mb-0 cursor-pointer w-[7em] h-[35px] lg:w-[8em] lg:h-[42px]">
              <AdvancedImage className="w-full h-full" cldImg={myImage} plugins={[responsive(), placeholder()]}></AdvancedImage>
            </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                Licensing
              </a>
            </li>
            <li>
              <a href="mailto:animesh8492@gmail.com" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a href="#" className="hover:underline">
            DailyFoods™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default FooterComponent;
