
interface propsTypes {
  children: string | JSX.Element
};


export default function Button({ children }: propsTypes ): JSX.Element {
  return (
    <button className="px-8 py-2 flex justify-center items-center text-white bg-green-500 rounded-2xl hover:bg-green-700 hover:scale-105 transition-all"> { children }</button>
  );

}
