import Button2 from "./Button2";

function BlogHeader() {
  return (
    <>
      {/* Hero section with background image, heading, subheading and button  */}
      <div
        className="relative overflow-hidden bg-cover bg-no-repeat"
        style={{
          backgroundPosition: "top",
          backgroundSize: "cover",
          backgroundImage:
            "url('https://i.ytimg.com/vi/kzs4uz5Cli4/maxresdefault.jpg')",
          height: "450px",
        }}
      >
        <div
          className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
        >
          <div className="flex h-full items-center justify-center">
            <div className="px-6 text-center text-white md:px-12">
              <h1 className="mb-6 text-5xl font-bold  ">
                <span className="capitalize text-transparent bg-clip-text bg-gradient-to-r to-sky-50 from-amber-200">
                  welcome
                </span>{" "}
                to{" "}
                <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-csBrown-100">
                  Our Blog
                </span>
              </h1>
              <h3 className="mb-8 text-lg md:text-xl font-normal w-4/5 mx-auto">
                Stay updated with the newest design and development stories,
                case studies, and insights shared by Apostle Gideon Odoma
              </h3>
              <Button2 text="Get Started" downArrow />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogHeader;
