
function Form() {

function Submit(e) {
    e.preventDefault();
const formelement = document.querySelector("form")
const formData = new FormData(formelement);

fetch (
    "https://script.google.com/macros/s/AKfycbzcJs5HJrV0cplAitWefLlkEVC7cvuDruWWq0gzEdRFp_YPN-MdmKOarpsG6mJzYxTwtg/exec",
    {
        method : "POST",
        body  : formData
    }
)
.then((response) => {
  console.log("this is data", response)
})
.catch((error) => {
    console.log(error)
})

}

  return (
    <>
    <form onSubmit={(e) => Submit(e)}>
    <div>
    <label className='text-gray-700'>FULL NAME</label>
    <input type="text" name='Name' placeholder='Your full name' 
    className='border border-gray-400 w-full h-10 rounded-md pl-5 mt-3 outline-teal-500'/>
    </div>

    <div className='mt-5'>
    <label className='text-gray-700'>PHONE NUMBER</label>
    <input type="number" name='Phone' placeholder='Enter phone number' 
    className='border border-gray-400 w-full h-10 rounded-md pl-5 mt-3 outline-teal-500'/>
    </div>
     
    <div className='mt-5'>
    <label className='text-gray-700'>EMAIL</label>
    <input type="email" name='Email' placeholder='Your email address' 
    className='border border-gray-400 w-full h-10 rounded-md pl-5 mt-3 outline-teal-500'/>
   </div>

   <div className='mt-5'>
    <label className='text-gray-700'>MESSAGE</label>
    <input type="text" name='Message' rows={6} placeholder='Write...' 
    className='border border-gray-400 w-full h-10 rounded-md pl-5 mt-3 outline-teal-500'/>
   </div>
   
   <button type='submit' className='bg-teal-600 text-white font-semibold px-3 py-2 
    rounded-md mt-5'>Submit</button>
    </form>

    </>
  );
}

export default Form;