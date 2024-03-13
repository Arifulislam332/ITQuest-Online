import { managments } from "../data/managments";

const Managments = () => {
  return (
    <div className="reusable__margin mt-1 bg-purple-50 p-3">
      <div className="flex items-center justify-center gap-10 py-5 bg-violet-300 drop-shadow-md">
        <h1 className="text-3xl font-semibold text-white">
          ওমেন কল সেন্টার এজেন্ট
        </h1>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {managments.map((member) => (
          <div
            key={member.id}
            className="flex flex-col text-center shadow-md w-full rounded-b-xl hover:ring-1 mt-1"
          >
            <div className="w-full h-10 bg-green-100">
              <p className="w-full text-center text-xs text-gray-400 py-2 px-2">
                {member.title}
              </p>
            </div>
            <div className="w-full h-40 overflow-hidden">
              <img
                src={member.image}
                alt="managments member"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-gray-500 bg-violet-200 text-xs py-2 rounded-b-xl">{member.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Managments;
