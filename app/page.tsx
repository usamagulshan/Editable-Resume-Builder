"use client";

import { useState } from "react";

export default function Home() {
  const [Resume, SetResume] = useState([
    {
      Name: "",
      email: "",
      Phone: "",
      Degree: "",
      University: "",
      y_graduation: "",
      job: "",
      company: "",
      worked: "",
      skills: "",
      photo: "",
    },
  ]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [degree, setDegree] = useState("");
  const [university, setUniversity] = useState("");
  const [y_graduation, setGraduation] = useState("");
  const [job, setJob] = useState("");
  const [company, setCompany] = useState("");
  const [worked, setWorked] = useState("");
  const [skills, setSkills] = useState("");
  const [photo, setPhoto] = useState("");

  function addItem() {
    SetResume([
      {
        Name: name,
        email: email,
        Phone: phone,
        Degree: degree,
        University: university,
        y_graduation: y_graduation,
        job: job,
        company: company,
        worked: worked,
        skills: skills,
        photo: photo,
      },
    ]);
    setName("");
    setEmail("");
    setPhone("");
    setDegree("");
    setUniversity("");
    setGraduation("");
    setJob("");
    setCompany("");
    setWorked("");
    setSkills("");
  }

  function editResume(name: any) {
    let obj: any = Resume.find((item) => item.Name === name);
    setName(obj.Name);
    setEmail(obj.email);
    setPhone(obj.Phone);
    setDegree(obj.Degree);
    setUniversity(obj.University);
    setGraduation(obj.y_graduation);
    setJob(obj.job);
    setCompany(obj.company);
    setWorked(obj.worked);
    setSkills(obj.skills);
  }

  return (
    <div>
      <div className="bg-slate-50 shadow-xl mt-4 w-[1000px] h-auto mx-auto border-2 border-solid rounded-md">
        <div className="mt-3">
          <h1 className="text-3xl font-serif text-blue-500 text-center font-semibold underline">
            Gulshan Resume Builder
          </h1>

          {/* Labels and Input */}
          <div className="ml-4 mr-4 font-serif mt-4">
            <label className="text-left text-lg">
              Name:
              <br />
              <input
                type="text"
                onChange={(event) => setName(event.target.value)}
                value={name}
                id="1"
                placeholder="Enter Your Name"
                required
                className="p-2 w-full rounded-md shadow-lg focus:outline-blue-500 text-base mt-2"
              />
            </label>
            <br />
            <br />

            <label className="text-left text-lg">
              Email:
              <br />
              <input
                type="email"
                placeholder="Enter Your Email"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
                required
                className="p-2 w-full rounded-md text-base shadow-lg focus:outline-blue-500 mt-2"
              />
            </label>
            <br />
            <br />

            <label className="text-left text-lg">
              Phone:
              <br />
              <input
                type="text"
                placeholder="Enter Your PhoneNo."
                onChange={(event) => setPhone(event.target.value)}
                value={phone}
                required
                className="p-2 w-full rounded-md shadow-lg focus:outline-blue-500 text-base mt-2"
              />
            </label>
            <br />
            <br />

            <label className="text-left text-lg">
              Degree:
              <br />
              <input
                type="text"
                placeholder="Enter Your Degree"
                onChange={(event) => setDegree(event.target.value)}
                value={degree}
                required
                className="p-2 w-full shadow-lg focus:outline-blue-500 rounded-md text-base mt-2"
              />
            </label>
            <br />
            <br />

            <label className="text-left text-lg">
              University:
              <br />
              <input
                type="text"
                placeholder="Enter Your University Data"
                onChange={(event) => setUniversity(event.target.value)}
                value={university}
                required
                className="p-2 w-full shadow-lg focus:outline-blue-500 rounded-md text-base mt-2"
              />
            </label>
            <br />
            <br />

            <label className="text-left text-lg">
              Year of Graduation:
              <br />
              <input
                type="text"
                placeholder="Enter Your Years of Graduation"
                onChange={(event) => setGraduation(event.target.value)}
                value={y_graduation}
                required
                className="p-2 w-full shadow-lg focus:outline-blue-500 rounded-md text-base mt-2"
              />
            </label>
            <br />
            <br />

            <label className="text-left text-lg">
              Job Title:
              <br />
              <input
                type="text"
                placeholder="Enter Your Job Data"
                onChange={(event) => setJob(event.target.value)}
                value={job}
                required
                className="p-2 w-full shadow-lg focus:outline-blue-500 rounded-md text-base mt-2"
              />
            </label>
            <br />
            <br />

            <label className="text-left text-lg">
              Company:
              <br />
              <input
                type="text"
                placeholder="Enter Your Company Name"
                onChange={(event) => setCompany(event.target.value)}
                value={company}
                required
                className="p-2 w-full shadow-lg focus:outline-blue-500 rounded-md text-base mt-2"
              />
            </label>
            <br />
            <br />

            <label className="text-left text-lg">
              Years Worked:
              <br />
              <input
                type="text"
                placeholder="How many Years Your Worked"
                onChange={(event) => setWorked(event.target.value)}
                value={worked}
                required
                className="p-2 w-full shadow-lg focus:outline-blue-500 rounded-md text-base mt-2"
              />
            </label>
            <br />
            <br />

            <label className="text-left text-lg">
              Skills:
              <br />
              <textarea
                rows={3}
                className="w-full rounded-md shadow-lg focus:outline-blue-500 p-2 text-base mt-2"
                placeholder="Please Tell us About Your Skills"
                onChange={(event) => setSkills(event.target.value)}
                value={skills}
              ></textarea>
            </label>
            <br />
            <br />

            <label className="text-left text-lg">
              Profile Picture:
              <br />
              <input
                type="file"
                className="p-2 text-base mt-2"
                onChange={(event) => setPhoto(event.target.value)}
              />
            </label>
            <br />
            <br />
          </div>
          <div className="text-center ml-4 font-serif mr-4">
            <button
              className="bg-blue-500 p-1 text-white px-2 text-lg w-full rounded-md mb-4 text-center"
              onClick={addItem}
            >
              Generate Resume
            </button>
          </div>
        </div>
      </div>

      <h1 className="text-3xl text-green-800 font-extrabold mt-8 text-center pt-8">
        Generated Resume
      </h1>

      <div className="bg-slate-50 shadow-xl w-[1000px] h-auto mx-auto border-2 border-solid rounded-md mt-[100px]">
        {Resume.map((item: any, i: number) => {
          return (
            <div key={i}>
              <div>Image</div>
              {/* Name Section */}
              <div>
                <div className="text-4xl font-serif font-bold m-4 text-center">
                  {item.Name}
                </div>
              </div>
              {/* Contact Section */}

              <div className="bg-slate-600 h-auto rounded-sm p-2 text-white m-4">
                <div className="bg-orange-600 rounded-sm text-2xl font-serif font-semibold px-1 mb-2">
                  Contact
                </div>
                <div className="text-lg pl-2">
                  <b className="text-orange-400">Email:</b> {item.email}
                </div>
                <div className="text-lg pl-2">
                  <b className="text-orange-400">PhoneNo:</b> {item.Phone}
                </div>
              </div>

              {/* Education Section: */}

              <div className="bg-slate-600 h-auto rounded-sm p-2 text-white m-4">
                <div className="bg-orange-600 rounded-sm text-2xl font-serif font-semibold px-1 mb-2">
                  Education
                </div>
                <div className="text-lg pl-2">
                  <b className="text-orange-400">Degree:</b> {item.Degree}
                </div>
                <div className="text-lg pl-2">
                  <b className="text-orange-400">University:</b>{" "}
                  {item.University}
                </div>
                <div className="text-lg pl-2">
                  <b className="text-orange-400">Graduation Year:</b>{" "}
                  {item.y_graduation}
                </div>
              </div>

              {/* Job Section  */}

              <div className="bg-slate-600 h-auto rounded-sm p-2 text-white m-4">
                <div className="bg-orange-600 rounded-sm text-2xl font-serif font-semibold px-1 mb-2">
                  Experience
                </div>
                <div className="text-lg pl-2">
                  <b className="text-orange-400">Job Details:</b> {item.job}
                </div>
                <div className="text-lg pl-2">
                  <b className="text-orange-400">Company Information:</b>{" "}
                  {item.company}
                </div>
                <div className="text-lg pl-2">
                  <b className="text-orange-400">
                    Years Worked / Still Working:
                  </b>{" "}
                  {item.worked}
                </div>
              </div>

              {/* Skills Section */}

              <div className="bg-slate-600 h-auto rounded-sm p-2 text-white m-4">
                <div className="bg-orange-600 rounded-sm text-2xl font-serif font-semibold px-1 mb-2">
                  Skills
                </div>
                <div className="text-lg pl-2">
                  <b className="text-orange-400">Skills:</b> {item.skills}
                </div>
              </div>

              <button
                onClick={() => editResume(item.Name)}
                className="bg-blue-600 text-sm p-2 m-4 rounded-md text-white font-bold ml-[85%]"
              >
                Edit Resume
              </button>
            </div>
          );
        })}
      </div>
      <br />
      <br />
    </div>
  );
}
