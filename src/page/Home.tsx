import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/bundle";

function Home() {
  // const navigate = useNavigate();
  // const [token, setToken] = useState(true);
  // useEffect(() => {
  //   if (!token) {
  //     navigate("/login");
  //   }
  // });
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then(setData);
  }, []);
  console.log(data);
  // let {products} = data;
  return (
    <div className="w-full h-full flex flex-col">
      {/* <div className="w-full flex my-2">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide className="flex justify-center">
            <img src="https://placekitten.com/g/200/300" />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <img src="https://placekitten.com/408/287" />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <img src="https://placekitten.com/200/138" />
          </SwiperSlide>
        </Swiper>
      </div> */}
      <div className="w-full flex mb-2">
        <img src="https://placekitten.com/g/2000/600" alt="test"/>
      </div>
      <div className="w-full p-10">
        <div className="w-full flex justify-end">Product List</div>
      </div>
    </div>
  );
}

export default Home;
