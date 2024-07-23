import axios from "axios";
import { useEffect, useState } from "react";

function Form() {


    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [notFiled, setNotFiled] = useState(false);
    const [submissionSuccess, setSubmissionSuccess] = useState(false);
    const [ErrorSendingEmail, setErrorSendingEmail] = useState(false);

    const [responseMessage, setResponseMessage] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Function to call API
        const fetchData = async () => {
          try {
            await fetch('https://ess-initial.onrender.com/api/wakeUp');
          } catch (error) {
            console.error('(WakeUp failed):', error);
          }
        };
    
        fetchData();

      }, []);

    const handleSendData = async (e) => {

        if (name === "" || email === "" || phone === "" || description === "")
        {
            setNotFiled(true);
            return
        }
        setLoading(true);

      const data = {
        name: name,
        email: email,
        phone: phone,
        description: description,
      };
  
      try {
        // const response = await axios.post('http://localhost:8080/api/ess', data);
        const response = await axios.post('https://ess-initial.onrender.com/api/ess', data);
        setResponseMessage(response.data);
        setSubmissionSuccess(true);
        console.log(responseMessage)
      } catch (error) {
        console.error('Error occurred:', error);
        setSubmissionSuccess(true);
        setErrorSendingEmail(true);
      }
      finally {
            setLoading(false);
        }
    };
  


    return(
        <>
            <section className="bg-white w-[80vw] mx-auto px-[0.4rem]">
                <h1 className="text-[9vw] font-bold text-[#474A8C] mt-[1.7rem]">Let us solve your challenges</h1>
                
                <p className="text-[4.4vw] mt-[0.8rem] mb-[1.2rem]">Please fill out the form below and we’ll get back to you in <span className="text-[#474A8C] font-bold">1-2 Business Days</span></p>

                <form onSubmit={(e)=>e.preventDefault()}>
                    <label className="font-bold text-[5vw]">Full Name</label>
                    <br />
                    <input  onChange={(e)=>setName(e.target.value)}  type="text" placeholder="Joe Smith" className="border-black border-[1px] w-[75vw] h-[12vw] pl-[0.5rem] mt-[0.4rem] mb-[0.6rem]"></input>
                    <br />

                    <div className="h-[1.5rem]" />
                
                    <label className="font-bold text-[5vw]">Email</label>
                    <br />
                    <input  onChange={(e)=>setEmail(e.target.value)}  type="email" placeholder="example@gmail.com" className="border-black border-[1px] w-[75vw] h-[12vw] pl-[0.5rem] mt-[0.4rem] mb-[0.6rem]"></input>
                    <br />
                    
                    <label className="font-bold text-[5vw]">Phone</label>
                    <br />
                    <input  onChange={(e)=>setPhone(e.target.value)}  type="tel" placeholder="(xxx) xxx - xxxx" className="border-black border-[1px] w-[75vw] h-[12vw] pl-[0.5rem] mt-[0.4rem] mb-[0.6rem]"></input>
                    <br />

                    <div className="h-[1.5rem]" />
                    
                    <label className="font-bold text-[6.5vw]">I need help with ...</label>
                    <br />
                    <textarea  onChange={(e)=>setDescription(e.target.value)}  placeholder="I was looking to get a website for my company. I would be needing a checkout system ..." className="border-black border-[1px] w-[75vw] h-[9rem] pl-[0.5rem] pt-[0.5rem] mt-[0.7rem]"></textarea>

                    <br />
                    {loading&&<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><circle cx="18" cy="12" r="0" fill="#0d0d0d"><animate attributeName="r" begin=".67" calcMode="spline" dur="1.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"/></circle><circle cx="12" cy="12" r="0" fill="#0d0d0d"><animate attributeName="r" begin=".33" calcMode="spline" dur="1.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"/></circle><circle cx="6" cy="12" r="0" fill="#0d0d0d"><animate attributeName="r" begin="0" calcMode="spline" dur="1.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"/></circle></svg>}
                    <input onClick={handleSendData} type="submit" disabled={loading} style={{opacity: loading?0.2:1}}  value="Submit" className="font-Hind font-semibold text-[7.5vw] tablet:text-[1.4rem] desktop:text-[2.2rem] text-[#FFFFFF] bg-[#474A8C] phone:px-[26vw] tablet:px-[2.2rem] laptop:px-[3.6rem] desktop:px-[3.6rem] pt-[0.6rem] tablet:pt-[0.3rem] pb-[0.1rem] block mx-auto mt-[3.2rem] tablet:mt-[1.8rem] laptop:mt-[1.8rem] phone:rounded-[0.9rem] tablet:rounded-[2rem] laptop:rounded-[1.2rem] desktop:rounded-[1.6rem] mt-[1.7rem]"></input>
                </form>

                <div className="h-[4rem]" />

                {submissionSuccess &&
                    <div className='w-full p-10 flex justify-center items-center flex-col pt-10 pb-20'>
                            
                            {ErrorSendingEmail?<h1 className=' tracking-wider  text-center text-2xl  md:text-3xl text-[#080808]'><span className='text-red-400'>Error occurred!</span><br/>Sorry, you can still contact us directly on:  <br/><span onClick={()=> {
                                window.location.href = `mailto:${"splitsphereofficial@gmail.com"}?subject=${encodeURIComponent("")}`;
                            }} className='text-sm text-blue-600 hover:cursor-pointer underline'>splitsphereofficial@gmail.com</span></h1>:
                            <h1 className='tracking-wider  text-center text-2xl  md:text-3xl text-[#080808]'><span className='text-blue-300'>Thank you!</span><br/>We have received your form, we will reach out to you soon!</h1>}
                    </div>
                }

            </section>
        </>
    )

}

export default Form;