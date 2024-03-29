import useDocumentTitle from "../../utils/helper/useDocumentTitle";
import BannerComponent from "../../component/BannerComponent/BannerComponent";
import RechargeAndBill from "../../component/RechargeAndBills/RechargeAndBill";
import BookAndBuy from "../../component/BookAndBuy/BookAndBuy";
import Footer from "../../component/Footer/Footer";

export default function Home() {
  useDocumentTitle("Paytm Clone");


  return (
    <div className="main-container">

      <h6>No Wallet KYC Required 😊 to pay using UPI on Paytm. Learn more.</h6>
      <BannerComponent />
      <RechargeAndBill />
      <BookAndBuy />
      <Footer />
    </div>
  );
}
