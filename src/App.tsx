import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import logo from "./logo.svg";
import electronicCard from "./electronicCard.jpg";
import "./App.css";
import "./Utils/Fonts/DTNASKH3.TTF";
import {
  FaPhone,
  FaWhatsapp,
  FaChrome,
  FaInstagram,
  FaLocationDot,
} from "react-icons/fa6";

function App() {
  // <img src={logo} className="App-logo" alt="logo" />

  const [contactText, setContactText] = useState<string>("");

  return (
    <div>
      <Routes>
          <Route
            path={"/"}
            element={
    <div className="App">
      <div
        className="header"
        onClick={() => {
          setContactText("");
        }}
      >
        <div className="banner">
          <div className="banner-right">
            <div className="banner-text">اصغر فرسایی</div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <div className="banner-center">
            <img src="./IKCo.png" alt="logo" className="banner-logo"></img>
            <h1>
              <span className="font-face-header1">ایسا</span>
              <span className="font-face-header5">کو </span>
              <span className="font-face-header3"> فر</span>
              <span className="font-face-header5">سا</span>
              <span className="font-face-header4">یی</span>
            </h1>
          </div>
          <div className="banner-left">
            <div className="banner-text">کد: 4102122</div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
        <div className="about">
          فروشگاه فرسایی با بیش از بیست سال سابقه (از سال 1381) در توزیع و فروش
          قطعات یدکی و آپشن های جانبی خودرو با نمایندگی رسمی شرکت هایی چون
          پلاتین ایران، سامفر، ویرا ولتاژ، و سمین خودرو پویا (SKP)، پس از چندین
          سال ارائه خدمات حضوری در بازار لوازم یدکی خودرو و اخذ عاملیت فروشگاهی
          مجاز ایساکو با کد 4102122، امکان خرید آنلاین لوازم یدکی خودرو را در
          راستاي چشم‌انداز دسترسی آسان و اطمینان از اصالت کالا با بهترین قیمت را
          برای کاربران خود فراهم ساخته است. همچنین شما میتوانید با همکاران ما در
          شبکه های اجتماعی در ارتباط باشید و از مشاوره های تخصصی آنها پیش از
          خرید استفاده کنید تا خرید مطمئن تر و رضایت بخش تری را تجربه نمایید.
        </div>

        <div className="logo-container">
          <img src="./Peugeot.png" alt="logo" className="logo" />
          <img src="./Renault.png" alt="logo" className="logo" />
          <img src="./IKCo.png" alt="logo" className="logo" />
        </div>
      </div>
      <div className="body">
        <div
          className="body-header"
          onClick={() => {
            setContactText("");
          }}
        >
          <div className="font-face-header4">قطعات اصلی، امنیت بیشتر</div>
          <div style={{ textAlign: "left" }} className="font-face-header4">
            فروشگاه مجاز ایساکو در خدمت شما
          </div>
        </div>

        <div
          className="category-container"
          onClick={() => {
            setContactText("");
          }}
        >
          <div className="engine card-container">
            <div className="img-card">
              <img src="/engine.png" />
            </div>
            <p>موتوری</p>
          </div>
          <div className="engine card-container">
            <div className="img-card">
              <img src="/electricCard.png" />
            </div>
            <p>برقی</p>
          </div>
          <div className="body-card card-container">
            <div className="img-body-card">
              <img src="/light.png" />
            </div>
            <p style={{ fontSize: "xx-large" }}>بدنه</p>
            <div className="img-body-card">
              <img src="/doors.png" />
            </div>
          </div>
          <div className="fs card-container">
            <div className="img-card">
              <img src="/fs.png" />
            </div>
            <p>جلوبندی</p>
          </div>
          <div className="tuning card-container">
            <div className="img-card">
              <img src="/tuning.png" />
            </div>
            <p>آپشن و تزئینات</p>
          </div>
        </div>

        <div className="contact-container">
          <div
            className="contact-text"
            style={{
              border: contactText === "" ? "" : "2px solid black",
              borderRadius: "7pt",
              height: contactText === "" ? "" : "70px",
              opacity: contactText === "" ? "0" : "1",
            }}
          >
            {contactText}
          </div>
          <div className="contact-list">
            <FaPhone
              onClick={() => {
                window.open("tel:+982133971622");
              }}
              onMouseEnter={() => {
                setContactText("021-33971622" + " , " + "021-33952557");
              }}
            />
            <FaWhatsapp
              onMouseEnter={() => {
                setContactText("989191242492+");
              }}
            />
            <FaChrome
              onClick={() => {
                window.open("http://www.isacofarsaei.ir");
              }}
              onMouseEnter={() => {
                setContactText("www.isacofarsaei.ir");
              }}
            />
            <FaInstagram
              onMouseEnter={() => {
                setContactText("isaco_farsari@");
              }}
            />
            <FaLocationDot
              onMouseEnter={() => {
                setContactText(
                  "تهران، خیابان امیرکبیر، نبش کوچه سراج الملک، پلاک 425"
                );
              }}
            />
          </div>
        </div>
      </div>
    </div>
              }
          >
        </Routes>
    </div>
  );
}

export default App;
