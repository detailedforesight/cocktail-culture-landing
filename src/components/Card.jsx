import "../blog.css";
import { blog } from "./componentData/data";
import {
  AiOutlineTags,
  AiOutlineClockCircle,
  AiOutlineComment,
  AiOutlineShareAlt,
} from "react-icons/ai";
import Blog1 from "../assets/blog1.jpg";
import Blog2 from "../assets/blog2.png";
import Blog3 from "../assets/blog3.jpg";
const blognum = [Blog1, Blog2, Blog3];
const Card = () => {
  return (
    <>
      <section className="blog">
        <h2
          className="text-red-800 text-center text-semibold
        
        "
        >
          Новости индустрии
        </h2>
        <div className=" grid grid-rows-none md:grid-cols-3 gap-2 md:gap-4 max-w-[1240px] mx-auto py-10 px-4 text-center">
          {blog.map((item) => (
            <div className="box boxItems" key={item.id}>
              <div className="img">
                <img src={blognum[item.cover]} alt="" />
              </div>
              <div className="details">
                <div className="tag">
                  <AiOutlineTags className="icon" />
                  <a href="/">#{item.category}</a>
                </div>

                <h3>{item.title}</h3>

                <p>{item.desc.slice(0, 180)}...</p>
                <div className="date">
                  <AiOutlineClockCircle className="icon" />{" "}
                  <label htmlFor="">{item.date}</label>
                  <AiOutlineComment className="icon" />{" "}
                  <label htmlFor="">22</label>
                  <AiOutlineShareAlt className="icon" />{" "}
                  <label htmlFor="">Поделиться</label>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Card;
