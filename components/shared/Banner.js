export default function Banner(props) {
  return (
    <section className=" w-full">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl text-white font-extrabold sm:text-5xl">
            <strong className="font-extrabold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent sm:block">
              {props.title}
            </strong>
          </h1>

          <p className="text-white mt-4 sm:text-xl sm:leading-relaxed grp">
            {props.description}
          </p>

          {props.isButtonEnable && (
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded bg-[#395cf3] px-12 py-3 text-sm font-medium text-white shadow hover:bg-[#395cf3]/70 focus:outline-none focus:ring active:bg-[#395cf3] sm:w-auto"
                href="/get-started"
              >
                Get Started
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
