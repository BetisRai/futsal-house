
interface FutsalCardProps {
    futsal: FutsalCenterType,
}

export interface FutsalCenterType {
  name: string,
  short_description: string,
  fields_count: number,
  rating: number,
  reviews_count: number    
}

export default function FutsalCenterCard(props: FutsalCardProps): JSX.Element {
    const { futsal } = props;
    

  return (
      <div className="max-w-80 max-h-56 bg-white p-8 rounded-3xl shadow-2xl">
	<div className="">
	  <h3 className="text-xl font-semibold"> { futsal.name }</h3>
	  <p className="text-lg font-normal text-gray-400"> { futsal.short_description }</p>
	  <div className="flex items-center gap-1">
            <FieldSvg/>
	    <p className="text-green-500"> { futsal.fields_count } Fields </p>
          </div>
	  <div className="flex gap-1">
	  <StarSvg/>
	  <p className="text-gray-400">
          { futsal.rating } ({ futsal.reviews_count })
	  </p>
          </div>
        </div>
	<div className=""></div>
      </div>
  );

}


const FieldSvg = () => (
  <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="27" height="27" fill="white"/>
    <rect x="4.08569" y="4.08569" width="18.8286" height="18.8286" rx="4" stroke="#14D045" strokeWidth="2"/>
    <path d="M18.5319 13.7687C18.5319 16.5478 16.279 18.8006 13.5 18.8006C10.7209 18.8006 8.46808 16.5478 8.46808 13.7687C8.46808 10.9897 10.7209 8.73681 13.5 8.73681C16.279 8.73681 18.5319 10.9897 18.5319 13.7687Z" stroke="#14D045" strokeWidth="2"/>
    <line x1="3.85712" y1="13.6572" x2="23.1428" y2="13.6572" stroke="#14D045" strokeWidth="2"/>
  </svg>);

const StarSvg = () => (
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
	<path d="M23.25 8.325H14.6625L12 0L9.3375 8.325H0.75L7.6875 13.4625L5.0625 21.75L12 16.6125L18.9375 21.75L16.275 13.425L23.25 8.325Z" fill="#FFCE31"/>
	</svg>    
);
