/* eslint-disable jsx-a11y/anchor-is-valid */
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";

const Pagination = () => {
  return (
    <ul className="pagination no-border  flex w-fit rounded-md">
      <li className="grid place-items-center rounded-md w-20 ">
        <a href="#" className="flex items-center justify-center">
          <FiChevronsLeft />
        </a>
      </li>
      <li className="w-10 grid place-items-center rounded-md active">
        <a
          href="#"
          className="w-full p-[0.4rem] flex items-center justify-center"
        >
          1
        </a>
      </li>
      <li className="w-10 grid place-items-center rounded-md">
        <a
          href="#"
          className="w-full p-[0.4rem] flex items-center justify-center"
        >
          2
        </a>
      </li>
      <li className="w-10 grid place-items-center rounded-md">
        <a
          href="#"
          className="w-full p-[0.4rem] flex items-center justify-center"
        >
          3
        </a>
      </li>
      <li className="grid place-items-center rounded-md w-20">
        <a
          href="#"
          className="w-full p-[0.4rem] flex items-center justify-center"
        >
          <FiChevronsRight />
        </a>
      </li>
    </ul>
  );
};

export default Pagination;
