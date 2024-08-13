"use client";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from '@mui/icons-material/Search';
import { lazy, useState, useRef } from "react";
const Aside = lazy(() => import('../../components/Aside'));

const Chats: React.FC = () => {
  const [isAsideOpen, setAsideOpen] = useState(true);

  function openAside() {
    setAsideOpen(true)
  }
  function closeAside (){
    setAsideOpen(false)
  }

  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    userHandle: '',
    password: '',
    confirmPassword: '',
  });

  const validateForm = () => {
    if (formRef.current) {
      const formData = new FormData(formRef.current);
      const newErrors: any = {};

      if (!formData.get('firstName')) {
        newErrors.firstName = 'First Name is required';
      }
      if (!formData.get('lastName')) {
        newErrors.lastName = 'Last Name is required';
      }
      if (!formData.get('email')) {
        newErrors.email = 'Email is required';
      }
      if (!formData.get('country')) {
        newErrors.country = 'Country is required';
      }

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    }
    return false;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      if (formRef.current) {
        const formData = new FormData(formRef.current);
        const formValues = Object.fromEntries(formData.entries());
        console.log('Form Values:', formValues);
      }
    }
  };

  const handleReset = () => {
    if (formRef.current) {
      formRef.current.reset()
      setErrors({
        firstName: '',
        lastName: '',
        email: '',
        country: '',
        userHandle: '',
        password: '',
        confirmPassword: '',
      });
    }
  };

  return (
    <>
      {isAsideOpen && (
        < Aside onClose={closeAside} />
      )}
      <main className={`flex min-h-screen flex-col items-start flex-1 text-white ${
          isAsideOpen && "opacity-60 bg-white/60 lg:opacity-100 lg:bg-transparent ease-in-out lg:ml-[257px] transition-[margin]"
        }`}>
        <div className="flex flex-col w-full">
          <div className={`flex flex-row px-8 py-6 ${isAsideOpen ? "items-end" : "justify-between"}`}>
            {isAsideOpen == false && (
              <button
                onClick={openAside}
                className="p-1 size-12 hover:bg-[#bab8b825] hover:rounded-full"
              >
                <MenuIcon className="text-white size-7 w-[37px]" />
              </button>
            )}
            <div className="flex flex-row gap-3">
              <label
                htmlFor="reset"
                className="cursor-pointer bg-[#b8b8b8] font-semibold text-sm text-[#232225] w-[200px] h-[48px] rounded-3xl flex items-center justify-center hover:bg-[#cdcccc]"
              >
                RESET CHANGES
              </label>
              <input
                id="reset"
                accept="video/*"
                className="hidden"
                type="button"
                onClick={handleReset}
              />
              <label
                htmlFor="submit"
                className="cursor-pointer bg-[#1DBBA5] font-semibold text-sm text-[#232225] w-[200px] h-[48px] rounded-3xl flex items-center justify-center hover:bg-[#33aa9a]"
              >
                SAVE CHANGES
              </label>
              <input
                id="submit"
                className="hidden"
                type="button"
                onClick={handleSubmit}
              />
            </div>
          </div>
          <div className="flex flex-col w-full p-8">
            <form id="formPersonalInfo" ref={formRef} className="w-full max-w-[700px] space-y-6">
              <div className="flex flex-col space-y-2">
                <div className="h-[58px]">
                  <input
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    className="w-full h-[42px] p-3 bg-[#3f3e40] hover:bg-[#454446] focus:bg-[#6f6d70] border border-gray-700 focus:outline-none after:required:border-red-500"
                  />
                  {errors.firstName && <p className="text-red-700 text-xs px-4 pt-1">{errors.firstName}</p>}
                </div>
                <div className="h-[58px]">
                  <input
                    required
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className="w-full h-[42px] p-3 bg-[#3f3e40] hover:bg-[#454446] focus:bg-[#6f6d70] border border-gray-700 focus:outline-none"
                  />
                  {errors.lastName && <p className="text-red-700 text-xs px-4 pt-1">{errors.lastName}</p>}
                </div>

                <div className="h-[58px]">
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full h-[42px] p-3 bg-[#3f3e40] hover:bg-[#454446] focus:bg-[#6f6d70] border border-gray-700 focus:outline-none"
                  />
                  {errors.email && <p className="text-red-700 text-xs px-4 pt-1">{errors.email}</p>}
                </div>

                <div className="h-[58px]">
                  <select
                    required
                    name="country"
                    className="peer w-full h-[47px] p-3 bg-[#3f3e40] hover:bg-[#454446] focus:bg-[#6f6d70] border border-gray-700 focus:outline-none"
                  >
                    <option value="">Country</option>
                    <option value="">Select your country</option>
                    <option value="ARG">Argentina</option>
                    <option value="AUS">Australia</option>
                    <option value="BRA">Brazil</option>
                    <option value="CAN">Canada</option>
                    <option value="CHL">Chile</option>
                    <option value="CHN">China</option>
                    <option value="COL">Colombia</option>
                    <option value="EGY">Egypt</option>
                    <option value="FRA">France</option>
                    <option value="DEU">Germany</option>
                    <option value="GBR">United Kingdom</option>
                    <option value="IND">India</option>
                    <option value="IDN">Indonesia</option>
                    <option value="IRN">Iran</option>
                    <option value="ITA">Italy</option>
                    <option value="JPN">Japan</option>
                    <option value="MYS">Malaysia</option>
                    <option value="MEX">Mexico</option>
                    <option value="NLD">Netherlands</option>
                    <option value="NGA">Nigeria</option>
                    <option value="PAK">Pakistan</option>
                    <option value="PHL">Philippines</option>
                    <option value="POL">Poland</option>
                    <option value="RUS">Russia</option>
                    <option value="SAU">Saudi Arabia</option>
                    <option value="ZAF">South Africa</option>
                    <option value="KOR">South Korea</option>
                    <option value="ESP">Spain</option>
                    <option value="SWE">Sweden</option>
                    <option value="CHE">Switzerland</option>
                    <option value="THA">Thailand</option>
                    <option value="TUR">Turkey</option>
                    <option value="UKR">Ukraine</option>
                    <option value="ARE">United Arab Emirates</option>
                    <option value="USA">United States</option>
                    <option value="VNM">Vietnam</option>
                  </select>
                  {errors.country && <p className="text-red-700 text-xs px-4 pt-1">{errors.country}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium">
                  What is your main activity? Or activities
                  <div className="flex flex-col flex-wrap mt-6 gap-4">
                    {['Video', 'Design', 'Development', 'Sports', 'Medical', 'Inspections'].map((activity) => (
                      <label key={activity} className="flex items-center">
                        <input
                          type="checkbox"
                          name="activity"
                          className="size-4 accent-blue-500 border-gray-700 hover:ring-8 hover:ring-[#80808069] rounded focus:ring-8 focus:ring-[#3b83f659] m-2 "
                        />
                        <span className="ml-2 text-base">{activity}</span>
                      </label>
                    ))}
                  </div>
                  <input
                    type="text"
                    name="other"
                    placeholder="Other"
                    className="w-full h-[42px] p-3 my-5 bg-transparent border rounded-sm border-zinc-600 hover:border-zinc-500 focus:border-[#1DBBA5] outline-none"
                  />

                </label>
              </div>

              <div className="space-y-2 mt-8">
                <div className="h-[58px]">
                  <input
                    type="text"
                    name="userName"
                    placeholder="User handle"
                    className="w-full h-[42px] p-3 bg-[#3f3e40] hover:bg-[#454446] focus:bg-[#6f6d70] border border-gray-700 focus:outline-none"
                  />
                </div>
                <div className="h-[58px]">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="w-full h-[42px] p-3 bg-[#3f3e40] hover:bg-[#454446] focus:bg-[#6f6d70] border border-gray-700 focus:outline-none"
                  />
                </div>
                <div className="h-[58px]">
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm password"
                    className="w-full h-[42px] p-3 bg-[#3f3e40] hover:bg-[#454446] focus:bg-[#6f6d70] border border-gray-700 focus:outline-none"
                  />
                </div>
              </div>
              <p className="mt-4 text-xs text-white text-center">
                To delete your Paccto account and remove your data permanently from all Paccto app and services, please <a href="#" className="underline">click here</a>.
              </p>
            </form>
          </div>
        </div>
      </main>
    </>
  )
}

export default Chats;