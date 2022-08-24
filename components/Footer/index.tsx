
export default function Footer() : JSX.Element {
    return (
      <div className="bg-[#20C980] w-full px-10 py-20">
	<div className="flex flex-wrap justify-between">
	  <div>
	  <h4 className="text-white font-semibold text-lg flex-1"> About </h4>
	  <ul>
	    <li className="text-white"> Story </li>
	    <li className="text-white"> Contact Us </li>            
          </ul>            
          </div>

	  <div>
	    <h4 className="text-white font-semibold text-lg flex-1"> Futsal Centres </h4>
	    <ul>
	      <li className="text-white"> Recreation Centres </li>
            </ul>            
          </div>

          
          <div>
	    <h4 className="text-white font-semibold text-lg flex-1"> Support </h4>
	    <ul>
	      <li className="text-white"> Contact Us </li>
	      <li className="text-white"> Messenger </li>
	      <li className="text-white"> FAQs </li>
            </ul>            
          </div>

	  <div>
	    <p className="text-white"> Futsal House, online Booking, Matching, Competing site for Futsal Players and Centres. </p>
          </div>
        </div>

	<div className="mt-20 ">
	  <hr />
	  <p className="text-center text-xs mt-2 text-white font-light"> Copyright &copy; Charicha All Rights Reserved</p>
        </div>
      </div>
    );
}
