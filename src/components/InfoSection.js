import React from 'react'
import { useSelector } from 'react-redux';

const InfoSection = () => {

  const user = useSelector(state => state.users.user);

  const convertToPhoneNumber = (phoneNumberString) => {
    const cleaned = ("" + phoneNumberString).replace(/\D/g, "");
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return null;
  };

  return (
    <div className="infoSection flex flex-col p-5 w-1/2">
          <div className="infoSection__top shadow-lg w-full h-1/2 rounded-lg">
            <h1 className="font-teko text-2xl text-center mt-2.5 text-black underline">CONTACT INFO</h1>
            <div className="infoInner">
              <div className="infoInner__left">
                <div className="w-full font-teko text-center text-lg bg-secondary flex justify-center items-center underline">STREET ADDRESS</div>
                <div className="innerValue w-full font-teko text-center flex justify-start mx-2 items-center overflow-scroll no-underline ">
                  {user.location.street.number} {user.location.street.name}
                </div>
                <div className="w-full font-teko text-center text-lg bg-secondary flex justify-center items-center underline">CITY</div>
                <div className="innerValue w-full font-teko text-center flex justify-start mx-2 items-center overflow-scroll no-underline ">
                  {user.location.city}
                </div>
                <div className="w-full font-teko text-center text-lg bg-secondary flex justify-center items-center underline">STATE</div>
                <div className="innerValue w-full font-teko text-center flex justify-start mx-2 items-center overflow-scroll no-underline ">
                  {user.location.state}
                </div>
                <div className="w-full font-teko text-center text-lg bg-secondary flex justify-center items-center underline">COUNTRY</div>
                <div className="innerValue w-full font-teko text-center flex justify-start mx-2 items-center overflow-scroll no-underline ">
                  {user.location.country}
                </div>
              </div>
              <div className="infoInner__right">
                <div className="w-full font-teko text-center text-lg bg-secondary flex justify-center items-center underline">POSTAL CODE</div>
                <div className="innerValue w-full font-teko text-center flex justify-start mx-2 items-center overflow-scroll no-underline ">
                  {user.location.postcode}
                </div>
                <div className="w-full font-teko text-center text-lg bg-secondary flex justify-center items-center underline">EMAIL</div>
                <div className="innerValue w-full font-teko text-center flex justify-start mx-2 items-center overflow-scroll no-underline ">
                  {user.email}
                </div>
                <div className="w-full font-teko text-center text-lg bg-secondary flex justify-center items-center underline">CELL PHONE</div>
                <div className="innerValue w-full font-teko text-center flex justify-start mx-2 items-center overflow-scroll no-underline ">
                  {convertToPhoneNumber(user.cell)}
                </div>
                <div className="w-full font-teko text-center text-lg bg-secondary flex justify-center items-center underline">HOME PHONE</div>
                <div className="innerValue w-full font-teko text-center flex justify-start mx-2 items-center overflow-scroll no-underline ">
                  {convertToPhoneNumber(user.phone)}
                </div>
              </div>
            </div>
          </div>
          <div className="infoSection__bottom shadow-lg w-full h-1/2 rounded-lg">
            <h1 className="font-teko text-2xl text-center mt-2.5 text-black underline">EMPLOYMENT INFO</h1>
            <div className="infoInner">
              <div className="infoInner__left">
                <div className="w-full font-teko text-center text-lg bg-secondary flex justify-center items-center underline">JOB TITLE</div>
                <div className="innerValue w-full font-teko text-center flex justify-start mx-2 items-center overflow-scroll no-underline ">
                  SOFTWARE ENGINEER
                </div>
                <div className="w-full font-teko text-center text-lg bg-secondary flex justify-center items-center underline">UUID</div>
                <div className="innerValue w-full font-teko text-center flex justify-start mx-2 items-center overflow-scroll no-underline ">
                  {user.login.uuid}
                </div>
                <div className="w-full font-teko text-center text-lg bg-secondary flex justify-center items-center underline">USERNAME</div>
                <div className="innerValue w-full font-teko text-center flex justify-start mx-2 items-center overflow-scroll no-underline ">
                  {user.login.username}
                </div>
                <div className="w-full font-teko text-center text-lg bg-secondary flex justify-center items-center underline">PASSWORD</div>
                <div className="innerValue w-full font-teko text-center flex justify-start mx-2 items-center overflow-scroll no-underline ">
                  {user.login.password}
                </div>
              </div>
              <div className="infoInner__right">
                <div className="w-full font-teko text-center text-lg bg-secondary flex justify-center items-center underline">DATE OF BIRTH</div>
                <div className="innerValue w-full font-teko text-center flex justify-start mx-2 items-center overflow-scroll no-underline ">
                  {new Date(user.dob.date).toLocaleDateString("en-us", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
                <div className="w-full font-teko text-center text-lg bg-secondary flex justify-center items-center underline">AGE</div>
                <div className="innerValue w-full font-teko text-center flex justify-start mx-2 items-center overflow-scroll no-underline ">
                  {user.dob.age} Years Old
                </div>
                <div className="w-full font-teko text-center text-lg bg-secondary flex justify-center items-center underline">GENDER</div>
                <div className="innerValue w-full font-teko text-center flex justify-start mx-2 items-center overflow-scroll no-underline ">
                  {user.gender.toUpperCase()}
                </div>
                <div className="w-full font-teko text-center text-lg bg-secondary flex justify-center items-center underline">HIRE DATE</div>
                <div className="innerValue w-full font-teko text-center flex justify-start mx-2 items-center overflow-scroll no-underline ">
                  {new Date(user.registered.date).toLocaleDateString("en-us", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default InfoSection