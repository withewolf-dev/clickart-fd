import MoreHeader from "../more-header/moreHeader";
import "./header.css";
export interface IHeaderProps {}

function Header(props: IHeaderProps) {
  const category = [
    "category",
    "collection",
    "focus",
    "service point",
    "Assistant",
  ];
  return (
    <header className="d(flex) jc(sb) ai(c)">
      <div className="d(flex) ai(c)">
        <h3>clickart</h3>
        <ul className="d(flex)" style={{ listStyleType: "none" }}>
          {category.map((e, index) => (
            <li className="ml(2rem) cursor(pointer)" key={index}>
              {e}
            </li>
          ))}
        </ul>
      </div>
      <MoreHeader />
    </header>
  );
}

export default Header;
