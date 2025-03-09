export default () => {
  const stats = [
    {
      data: "50K+",
      title: "Successful Matches",
    },
    {
      data: "100K+",
      title: "Active Profiles",
    },
    {
      data: "30+",
      title: "Countries Served",
    },
    {
      data: "5M+",
      title: "Happy Users",
    },
  ];

  return (
    <section className="py-24 mt-10">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 gap-x-12 items-start justify-between lg:flex md:px-8">
        <div className="sm:hidden lg:block lg:max-w-xl">
          <img
            src="https://images.pexels.com/photos/30367537/pexels-photo-30367537/free-photo-of-romantic-couple-sitting-on-staircase-in-nagpur.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="rounded-lg"
            alt="Matrimonial success"
          />
        </div>
        <div className="mt-6 gap-12 sm:mt-0 md:flex lg:block">
          <div className="max-w-2xl">
            <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Connecting Hearts Globally, One Match at a Time
            </h3>
            <p className="mt-3 max-w-xl">
              We take pride in helping individuals find their lifelong partners through personalized matchmaking services, ensuring happy and successful relationships.
            </p>
          </div>
          <div className="flex-none mt-6 md:mt-0 lg:mt-6">
            <ul className="inline-grid gap-y-8 gap-x-14 grid-cols-2">
              {stats.map((item, idx) => (
                <li key={idx}>
                  <h4 className="text-4xl text-[#66451c] font-semibold">
                    {item.data}
                  </h4>
                  <p className="mt-3 font-medium">{item.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
