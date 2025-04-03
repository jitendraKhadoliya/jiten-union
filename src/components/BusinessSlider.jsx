import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import star from "../assets/star.svg";

const businessData = [
  {
    title: "FMCG Brand",
    location: "(New Delhi)",
    img: "https://s3-alpha-sig.figma.com/img/f143/e3cb/80270e51735b3ff4b3d5516d0dc6f7a4?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=scFaP~eo31aeAWHlUYYI8kRQGUOavMTBfSi~OEeODnc2ihFmdzXEO4495K22MB5~MvxulnzQavvOoc1nMAUoQOSTdwH2J~Cq5BmfAnteMcnnuVXd7ZeJBgc6O9F8Uh7AK6MFQBl9f2Rp~3CFsWTUJ4MqsIpoBaBmoh1mEpoAVCjOwRW2aJs5GdD2yT9zVDvg~0sfxYgvezGUli6e4drhSLmJ4-NvvoTrpt~8NrDvFGGIDQ7V9ODt9FjjRLTUyP444KVWF4vyjNhoSZ9gSJ4FdPhfAN5BEW2ix9txO-~9TWzKco8Pf~OJEq2u6FMI0orGI-1ExVMHWLvR8IZqo9RE-g__",
  },
  {
    title: "Social Venture",
    location: "(Accra)",
    img: "https://s3-alpha-sig.figma.com/img/aad5/e0d5/307e9571efeb2aab1a3886e3fd9a9734?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=p5gl9dB-3HdqqunepK-hsvM1vQ1UFLzuWuvlHg4BJ9QrrAiQpR9FMP7TbX6aTuzoBoE48BgzMZ8Krp~bCQPJmK4oJS1v8vHbnADjuXTgvX23zTZiQqf91uLyoknrj02DCsnsQL7UAYRCrvzWSL7DsIprqZEQBSkm40xkRquqlYtGD1mSC0FE6y7GIBN5TL98zcgOozdmqQ2h3G4lPM6dNfFdD2ahbknReQF5jLCMh5B8PGyoXeNu9q9F0dSyjDTi6Yt62nqFCEVsttiZcCsXrFWMHSkWpZiVpcZF~EqiKiTSKWcVFgOVzMoitpIBx3m2B~rWXNLM52arb-0xp4RMYA__",
  },
  {
    title: "Tech StartUp",
    location: "(Bay Area)",
    img: "https://s3-alpha-sig.figma.com/img/bde9/1426/ff275d746986f049fe7ed46619e421a6?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=s1mC2ceyGuhFpCGOm1rxUsRGeLZ2Z-vC6JwZO3sRDBzZQhaHCk1wVFUa9q5tNFOgW46ORBjZ0sefuhMAqs9lGObDwHa8eahl4TFtBs1odMj0-Ppo146OzVI5NYaspOdTAFGwvxlLsKy4-6jTVx3wAxt-L4rDXlSROaDP~vn2eIKwOszehDzkNltv-XW5UNopKIDIpoDTjq1aFCUEXS9duATqtYVn7GfBwtiQ1Q~6BRwDDoB1DjL-Sj3iBGnzAYw2jhUPOiPCZfsB1EzMZVePNY5Njgven3jmXBWtDb8f0N6kghwzznWJbxs3NF2W29GOz73v1yeEIWeg0Dp9vq8Cag__",
  },
  {
    title: "Green Venture",
    location: "Ghana",
    img: "https://s3-alpha-sig.figma.com/img/8f89/b263/85b2b54ec1ee182bb61635afec01c571?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=B9d0vu5YY6ixcsJnjFK-9MiyE-9oPwEPvczRFrVyoZJTeS~Guig8igcsXZBUDIAmjq2SrkFykZca0FXFcbNjruc8H3pgc9fyYM5Wefy7NzHdaQwHcKJnOMRN0ak5CNCZOwEsVXVg7xLTxZMSSHm9esUM75gHSTo9~E0OVoQJspBmdOlZ819c-X~vYZJKBGbcErbDgnPh-~DLFPn9AwyMt9n84pSYZUIfitZdOiV4fzv4IX5ZhmrYxm8l63SINYC543edt60wqbAxxbm9MPD6Hcj6JCykmB5a144osRRJxJZPWzjYla13gdrm-8wS9BTArY4glY-LFcMDiDWEvkrsvQ__",
  },
  {
    title: "Tech Startup",
    location: "Silicon Valley",
    img: "https://s3-alpha-sig.figma.com/img/4ef1/1487/dbf74494f737fda2c1853ad1ead0de3b?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=J332u1IpYDNWOVKrtBKlj0tlVYNYbNklFU3Yjm-3zBHPh6Rc-IX86heGghOIYKk4-tyKkR~zzR6NU3QbSfYm7wbPofAL62Ht2-5EFogIXDNr1UXHu7fZneUiXaNCdZv1etE4k-lJVxDFCn7CB1olS6i9mLLuYL9TMJrP1CIvvWq0FN6fLeEYL1ajwR2FW2UvgZ8xv13-K12j7kMPNy1VEu8kE6nR~piArksNcS6czr0sj9EJbDWkRUGwVLV--Dqp1Q-q1oNgeUjPNn25OLYqOMr3RJ2Shv5WvlmDgjI9x3-cUkfPLshUDftJ4OOLiLt6PzHvjkrFiqIssknEBeXfZw__",
  },
  {
    title: "Green Venture",
    location: "Bali",
    img: "https://s3-alpha-sig.figma.com/img/ddb5/7ed5/0430c7a578c3b0b976720b11105add90?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=nLuYbGcGm-dSdonR527W0UaqRLXVFPOPIQOljRdNjTg9394QNxUjF9a3YXq2h-giv-nO7g8T8xN-57kOSRcA58E-IJj1Hen8S32ouM-y1sKDeeBkKDF-hMI1RCG3s7AZ2anB1yeRkh0eH-ht93zUe8I4uBn870euWruiQDserteCM5oR6MB3BbUZfbrul9PKQpjHnRsJA51lfcQW~-s2L6UH529t~rP9GguzMkD9HX0deD~sKLfWy3VhR6Ms4kzt0cUES01VIkhOfqIigd-yXRx2nX5YXTqJo45~J8tKfFmV1QPGAcen8ykbEKS55ItI5i2jUzgzDdTdIw~SEdAO8A__",
  },
  {
    title: "Social Channel",
    location: "Global",
    img: "https://s3-alpha-sig.figma.com/img/bde9/1426/ff275d746986f049fe7ed46619e421a6?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=s1mC2ceyGuhFpCGOm1rxUsRGeLZ2Z-vC6JwZO3sRDBzZQhaHCk1wVFUa9q5tNFOgW46ORBjZ0sefuhMAqs9lGObDwHa8eahl4TFtBs1odMj0-Ppo146OzVI5NYaspOdTAFGwvxlLsKy4-6jTVx3wAxt-L4rDXlSROaDP~vn2eIKwOszehDzkNltv-XW5UNopKIDIpoDTjq1aFCUEXS9duATqtYVn7GfBwtiQ1Q~6BRwDDoB1DjL-Sj3iBGnzAYw2jhUPOiPCZfsB1EzMZVePNY5Njgven3jmXBWtDb8f0N6kghwzznWJbxs3NF2W29GOz73v1yeEIWeg0Dp9vq8Cag__",
  },
];

const BusinessSlider = ({ id }) => {
  return (
    <section id={id} className=" text-white py-16 px-6 lg:px-20">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-left">
            <span className=" text-black flex gap-2">
              {" "}
              Learn Business by <img src={star} alt="" srcset="" />
            </span>
            <span class="flex items-center">
              <span class="w-40 h-px bg-[#1C291A]"></span>
              <span className="text-[#FFA500] text-left">
                🔥 Building Businesses
              </span>
            </span>
          </h2>
          <p className="text-lg mt-2 max-w-2xl mx-auto">
            Build an e-commerce business in Dubai, launch a social venture in
            Ghana, and explore the ins and outs of 30+ industries in 7+
            countries.
          </p>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          navigation
          pagination={{ clickable: true }}
          className="py-4"
        >
          {businessData.map((item, index) => (
            <SwiperSlide key={index} className=" bg-[#1C291B] p-4 rounded-lg">
              <img
                src={item.img}
                alt={item.title}
                className="mx-auto mb-4 rounded-lg"
              />
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-white">{item.location}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BusinessSlider;
