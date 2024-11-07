// others
import { en } from "../../language";
import { Pointer } from "../../components";
import { useHomeState } from "../../hooks";

function Home() {
  // hoooks initialization
  const { user, delay, position, setPosition, handleLogout } = useHomeState();
  return (
    <div
      // onPointerMove={({ clientX, clientY }) =>
      //   setPosition({ x: clientX, y: clientY })
      // }
      className="flex-column d-flex align-items-center justify-content-center home-main"
    >
      <h1 className="title-lable">{en.welocme_to_the_application}</h1>
      <h2 className="name-lable">{user?.name}!</h2>

      <button onClick={() => handleLogout()} className="btn mt-4 logout-btn">
        {!delay ? (
          en.press_me_to_logout
        ) : (
          <span className="spinner-border text-light" role="status" />
        )}
      </button>

      {/* <Pointer position={position} /> */}
    </div>
  );
}

export default Home;
