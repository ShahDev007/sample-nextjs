// interface Params {
//   params: { name: string };
// }
const getPredictedAge = async (name: String) => {
  const res = await fetch(`https://api.agify.io/?name=${name}`);
  return res.json();
};
const getPredictedGender = async (name: String) => {
  const res = await fetch(`https://api.genderize.io/?name=${name}`);
  return res.json();
};
const getPredictedNation = async (name: String) => {
  const res = await fetch(`https://api.nationalize.io/?name=${name}`);
  return res.json();
};

export default async function Page({ params }: any) {
  const ageData = getPredictedAge(params.name);
  const genderData = getPredictedGender(params.name);
  const nationData = getPredictedNation(params.name);

  const [age, gender, nation] = await Promise.all([
    ageData,
    genderData,
    nationData,
  ]);
  {
    console.log(age);
  }
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3 p-4">
      <div className="p-8">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold"></div>
        Personal Info
        <div className="block mt-1 text-lg leading-tight font-medium text-black">
          Age:{age.age}
        </div>
        <div className="block mt-1 text-lg leading-tight font-medium text-black">
          Gender:{gender.gender}
        </div>
        <div className="block mt-1 text-lg leading-tight font-medium text-black">
          Nationality:{nation.country[0].country_id}
        </div>
      </div>
    </div>
  );
}
