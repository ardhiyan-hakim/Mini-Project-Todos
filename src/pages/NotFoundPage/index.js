import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import NotFoundImage from "../../assets/images/not-found.svg";

import "../../assets/styles/pages/NotFound.css"

function NotFoundPage() {
  return (
    <>
      <Header />
      <main>
        <div className="not-found">
          <img src={NotFoundImage} alt="not-found" />
          <h2>Oops... Seems like you got lost to nowhere about ~!</h2>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default NotFoundPage;
